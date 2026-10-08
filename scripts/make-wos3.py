#!/usr/bin/env python3
"""Workflow OS UI v2 crops (round 5, 08.10.2026).

Source: full-page captures of the redesign/ui-v2 demo build (vite preview, seeded fictional company
Northstar Professional Services), 1440 px viewport at deviceScaleFactor 2 and 390 px at 3.
Each crop is one story-telling region, cut on panel boundaries (no clipped words), saved as webp
at 1x and 2x of its natural CSS width (mobile: 2x and 3x). Also prints a 24 px LQIP per crop.
usage: make-wos3.py <capture dir>
"""
import base64, io, json, sys
from PIL import Image

SRC = sys.argv[1]
OUT = 'public/proof/wos3/'
# name: (capture, dpr, (x0, y0, x1, y1) in css px)
CROPS = {
    'landscape': ('1440_.png', 2, (270, 462, 1133, 912)),
    'score': ('1440_opportunities_client-onboarding.png', 2, (668, 204, 1400, 532)),
    'route': ('1440_designs_client-onboarding.png', 2, (740, 338, 1400, 672)),
    'discovery': ('1440_discovery.png', 2, (666, 662, 1402, 962)),
    'plan': ('1440_implementation_client-onboarding.png', 2, (270, 380, 1110, 690)),
    'impact': ('1440_impact_client-onboarding.png', 2, (270, 318, 1004, 528)),
    'm-landscape': ('390_.png', 3, (8, 660, 382, 1296)),
    'm-land2': ('390_.png', 3, (8, 728, 382, 985)),
    'm-score': ('390_opportunities_client-onboarding.png', 3, (8, 498, 382, 746)),
    'm-route': ('390_designs_client-onboarding.png', 3, (8, 522, 382, 832)),
    'm-discovery': ('390_discovery.png', 3, (8, 780, 382, 1062)),
    'm-plan': ('390_implementation_client-onboarding.png', 3, (8, 996, 382, 1452)),
    'm-impact': ('390_impact_client-onboarding.png', 3, (8, 494, 382, 772)),
}
meta = {}
for name, (f, dpr, (x0, y0, x1, y1)) in CROPS.items():
    im = Image.open(f'{SRC}/{f}').convert('RGB')
    c = im.crop((x0 * dpr, y0 * dpr, x1 * dpr, y1 * dpr))
    w, h = x1 - x0, y1 - y0
    mults = (2, 3) if dpr == 3 else (1, 2)
    files = []
    for m in mults:
        W = w * m
        r = c if c.width == W else c.resize((W, round(h * m)), Image.LANCZOS)
        p = f'{OUT}{name}-{W}.webp'
        r.save(p, 'WEBP', quality=84, method=6)
        files.append(W)
    q = c.resize((24, max(1, round(24 * h / w))), Image.LANCZOS)
    b = io.BytesIO(); q.save(b, 'WEBP', quality=40)
    meta[name] = {'w': w, 'h': h, 'ws': files, 'lqip': 'data:image/webp;base64,' + base64.b64encode(b.getvalue()).decode()}
print(json.dumps(meta, indent=1))
