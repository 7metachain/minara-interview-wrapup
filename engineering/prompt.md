You are Claude Code. Build a production-ready personal showcase website for a DevRel / Technical Operations candidate targeting Minara.

Goal:
- Create a clean, fast, responsive website that packages 3 deliverables:
  (1) Resume (editable, export PDF link)
  (2) Two demos with case-study style project pages
  (3) OpenClaw automation modules for Minara (structured list)

Tech stack requirements:
- Next.js (App Router) + TypeScript + TailwindCSS
- Use a component system (shadcn/ui preferred) for consistent UI
- Content should be data-driven: use /data/*.json (or MDX) so the resume/projects/modules can be updated without touching layout code.
- No backend required. Static site export friendly. SEO-ready.
- Add a language toggle (ZH/EN) for key UI labels. Content can default to Chinese first; keep an easy path to add English later.

Pages & routes:
1) "/" Home
   - Hero: name "Jiajia Chen" + title "AI 技术运营 / DevRel | 技术布道 · 社区生态 · AI 工作流"
   - Primary CTAs: "JD Fit", "Projects", "Resume PDF"
   - 3 highlight cards: Resume, Demo 1, Demo 2
   - A JD-fit snapshot section: 4 JD pillars -> evidence links
   - A short OpenClaw section with link to /automation
   - Footer with contact + GitHub

2) "/jd-fit"
   - Show the JD 4 pillars:
     A 技术布道与内容影响力
     B 开发者社区运营与生态建设
     C 厂商合作与技术落地
     D 反馈闭环与产品共创
   - For each pillar, display:
     - JD bullet points (text)
     - Evidence chips that link to: resume anchors, project pages, automation modules
     - Suggested KPIs (TTFV, deploy rate, SLA, retention, etc.)
   - Use a readable layout: tabs or accordion.

3) "/resume"
   - Render resume from data/resume.json (or MDX)
   - Provide "导出 PDF/打印" button linking to /public/resume.pdf
   - Layout similar to modern resume: left column for profile/skills/languages/education, right column for experience timeline and community.
   - Add a collapsible section "针对 Minara 的简历增强建议" with placeholder notes.

4) "/projects"
   - Two project cards:
     (a) Minara API Developer Cookbook
         GitHub: https://github.com/7metachain/minara-api-cookbook
         One-liner: “让开发者 5 分钟跑通 Minara API 的可运行菜谱 + Web Playground”
     (b) Card-to-Autopilot PoC
         GitHub: https://github.com/7metachain/minara-moonpay-demo
         One-liner: “用可运行 PoC 证明合作伙伴流量能转化为 Minara 执行用户（有漏斗、有KPI、有失败兜底）”
   - Each card shows: problem -> solution -> KPIs -> links

5) Project detail pages:
   - "/projects/minara-api-cookbook"
     Use case-study sections:
       Problem / Solution / What’s inside / KPI Design / GTM Use / Screenshots placeholder / Repo & Quickstart
     Include the following points:
       - 5 core endpoints (AI chat, trading signals, text-to-swap, prediction market analysis, etc.)
       - Two auth methods: API key and x402 micropayment
       - Interactive Web Playground + copy code snippets
       - KPI: TTFV < 5 min
       - Positioning: candidate official dev onboarding path

   - "/projects/card-to-autopilot"
     Sections:
       Goal / Full activation flow / KPI funnel (4 KPIs) / Failure paths (KYC fail, payment fail) / Why PoC matters / Repo & Run
     Mention:
       - Flow: Card buy USDC (mock) -> low-risk AI plan -> confirm -> execute first trade -> Telegram notify (mock)
       - Built with sandbox mock; no real money or real API required
       - Dashboard toggle success/failure
       - KPI funnel: deposit conversion, time to first execution, execution completion, notification delivery

6) "/automation"
   - Title: "OpenClaw × Minara：运营自动化模块库"
   - Explain OpenClaw briefly (core/runtime/memory/sandbox/gateway/skills)
   - Then present a structured module list grouped by the JD 4 pillars.
   - Each module card includes: Name, Trigger, Input, Output, Tools used (gateway/browser/sandbox/memory), KPI, Priority (MVP/Next/Later)
   - Include a “2-week MVP starter pack” section recommending 4 modules:
        Multi-Channel Inbox Triage
        FAQ Auto-Responder (Notion/Docs RAG)
        Content Radar (trend & docs update monitor)
        Growth KPI Reporter (weekly)

Data files to create:
- /data/site.ts (site metadata, nav)
- /data/resume.json (profile, skills, experience, education, community)
- /data/projects.json (two projects with all text above)
- /data/jd.json (jd pillars and bullets)
- /data/automationModules.json (modules grouped by pillar)
Use stable IDs so /jd-fit can link to anchors in resume/projects/modules.

UX/UI requirements:
- Responsive, readable typography, clean spacing
- Sticky top nav
- Use cards, badges, and section headings consistently
- Provide “Back to projects” links on project pages
- Add subtle animations (optional) but keep it professional
- Add SEO meta tags and OpenGraph

Constraints:
- No server-side secrets, no API keys.
- Keep content in Chinese by default; UI labels support zh/en toggle.
- Provide placeholder slots for images (use /public/images/*) without requiring them to exist.

Deliverables:
- A working Next.js project with all pages above implemented
- Data-driven content rendering
- Minimal instructions in README: how to run locally and how to deploy to Vercel