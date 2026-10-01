// POST /api/contact — website contact form → email to the owner via Resend.
// Secrets (Cloudflare Pages): RESEND_API_KEY, LEAD_TO, LEAD_FROM, LEAD_TEST_TOKEN.

const TOPICS = {
  product: 'Build a technology product',
  automation: 'Automate business processes',
  ai: 'Explore an AI initiative',
  'workflow-os': 'See AI Workflow OS',
  rd: 'Discuss an R&D project',
  commercialize: 'Commercialize technology',
  partnership: 'Explore a partnership',
  'public-sector': 'Discuss a public-sector project',
  other: 'Other'
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Bots: honeypot filled or form sent faster than a person can type.
  if (str(body.website, 200) || Number(body.elapsed || 0) < 2500) return json({ ok: true });

  const lead = {
    name: str(body.name, 120),
    organization: str(body.organization, 160),
    email: str(body.email, 200),
    topic: TOPICS[body.topic] || 'Other',
    message: str(body.message, 4000),
    page: str(body.page, 300)
  };
  if (lead.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || lead.message.length < 2) {
    return json({ ok: false, error: 'Name, email and message are required.' }, 422);
  }

  const isTest = env.LEAD_TEST_TOKEN && request.headers.get('x-lead-test') === env.LEAD_TEST_TOKEN;
  const rows = [
    ['Topic', lead.topic],
    ['Name', lead.name],
    ['Organization', lead.organization || '—'],
    ['Email', lead.email],
    ['Message', lead.message],
    ['Page', lead.page || '—'],
    ['Country', request.headers.get('cf-ipcountry') || '—'],
    ['Received', new Date().toISOString()]
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + '\n\nReply to this email to answer directly.';
  const html =
    '<h2 style="font-family:Arial,sans-serif">innovaconsult.ca — new conversation</h2><table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">' +
    rows.map(([k, v]) => `<tr><td style="padding:4px 14px 4px 0;color:#666;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join('') +
    '</table>';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.LEAD_FROM || 'INNOVA website <leads@innovaconsult.ca>',
      to: (env.LEAD_TO || 'ctmakc@gmail.com').split(',').map((s) => s.trim()).filter(Boolean),
      reply_to: lead.email,
      subject: `${isTest ? '[TEST lead-delivery] ' : ''}[innovaconsult.ca] ${lead.topic} — ${lead.name}${lead.organization ? ', ' + lead.organization : ''}`,
      text,
      html
    })
  });
  if (!res.ok) {
    console.log('resend failed', res.status, (await res.text().catch(() => '')).slice(0, 300));
    return json({ ok: false, error: 'Delivery failed.' }, 502);
  }
  return json({ ok: true });
}

export const onRequest = () => json({ ok: false, error: 'Method not allowed.' }, 405);
