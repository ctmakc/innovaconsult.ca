# Разбор PRD innovaconsult.ca — 01.10.2026

## Проверенные факты
- Домен innovaconsult.ca зарегистрирован 01.10.2026 14:40 UTC (Namecheap, NS registrar-servers), A-записей нет. Хостинга, почты и формы нет.
- Репо ctmakc/innovaconsult.ca: Astro 4 + Tailwind, 1 страница (налоговый лендинг «International Expertise. Canadian Compliance.»), последний коммит 24.08.
- Канадская корпорация INNOVA CONSULT LTD. (CBCA 1522612-1) зарегистрирована 25.07.2023, статус Active, отчётность сдана (15–17.09.2026). Торгует как FastCoffee (кофейные автоматы).
- Сотрудников на T4 ноль. IRAP 01.10: ITA дадут только после второго сотрудника на зарплате.
- AI Workflow OS: кода нет.
- AICRMIUS: ~25k LOC, HITL propose→approve→apply→undo, реальные прогоны агентов; :3000 сейчас не поднят.
- Кандидаты в проекты с маркером INNOVA CONSULT: FoundWall (bundle com.innovaconsult.foundwall, Google Play open testing, TestFlight approved), BABA & KOKUM app (com.innovaconsult.babakokum), OpenField/CAAIN ACT (AgriTech, PAF собран), INNOVA Defence Bridge (dual-use, GrantOps), finmozg (AI-финотдел, 173 теста), UAFest (live, число продуктов не посчитано).
- Цвета PRD совпадают с брендкитом группы `/data/projects/innova-brandkit` (петроль #061A1D, тил #008490 → #3CB4B4, октагон).

## Риски
1. «14+ лет» при корпорации 2023 года. Формулировка: «founder-led; the founding team brings 14+ years…», «part of the INNOVA group (since 2012)».
2. «Our team» при нуле сотрудников: писать founder + сеть инженеров и партнёров.
3. Workflow OS из DoD №9 «can be demonstrated» — нужен кликабельный прототип к 07.10, иначе статус «In development» и раздел слабеет.
4. Контрастные обороты в тексте PRD («is not buying AI tools», «outcomes, not feature lists», «not created yesterday», «does not separate…») — переписать утвердительно.
5. Форма без бэкенда = потерянные заявки (lexroota 28.09). Нужны функция + почта на домене.

## Решения агента
- MVP-навигация: Work · Workflow OS · Partnerships · About · Contact. Capabilities / AI Transformation / Software / R&D — секции главной с якорями + одна страница /capabilities.
- Секторов 4–5 с доказательствами и статусами вместо 8.
- Innovation Engine — SVG + CSS/малый JS, без Three.js.
- Хостинг: Vercel или Cloudflare Pages + функция формы → почта + TG-карточка.
