export type ProjectCategory =
  | "Agentic AI and research"
  | "Products and developer tools"
  | "Mobile vision and learning";

export type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  proof: string;
  stack: string[];
  href: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "center" | "top";
  presentation?: "browser" | "mobile" | "audit" | "concept";
  visual?:
    | "judge"
    | "research"
    | "flashcard"
    | "compatibility"
    | "loan"
    | "hifz"
    | "signal"
    | "creative";
  liveHref?: string;
  liveLabel?: string;
  linkLabel?: string;
  category: ProjectCategory;
};

export const featuredProjects: Project[] = [
  {
    number: "01",
    title: "EstateAgent AI",
    eyebrow: "Multi agent intelligence · HackIllinois 2026",
    description:
      "A hyperlocal real estate intelligence system. It streams live research and runs thousands of pricing simulations at the edge.",
    proof: "5K simulations in under 12 seconds",
    stack: ["FastAPI", "Cloudflare", "Modal", "LLMs"],
    href: "https://github.com/zubair480/EstateAgent-AI",
    image: "/projects/estateagent-ai.webp",
    imageAlt: "EstateAgent AI investment analysis dashboard",
    presentation: "browser",
    liveHref: "https://zubairzafar480--estateagent-ai-web.modal.run/",
    liveLabel: "Live demo",
    category: "Agentic AI and research",
  },
  {
    number: "02",
    title: "Electric Lens",
    eyebrow: "On device AI · Qualcomm × Meta Hackathon",
    description:
      "An offline camera guided safety assistant for electricians. It verifies lockout and tagout steps then produces an evidence backed permit.",
    proof: "Private zero internet inference on device",
    stack: ["Kotlin", "ExecuTorch", "CameraX", "QNN"],
    href: "https://github.com/zubair480/Electric-lens",
    image: "/projects/electric-lens.webp",
    imageAlt: "Electric Lens on-device safety assistant session",
    imagePosition: "top",
    presentation: "mobile",
    category: "Mobile vision and learning",
  },
  {
    number: "03",
    title: "AgenticAudit",
    eyebrow: "Backend contributor · Web Data UNLOCKED",
    description:
      "A proactive compliance agent that scans the web and collects screenshot evidence. It flags risks across GDPR and SOC 2 plus HIPAA and PCI.",
    proof: "Async evidence pipeline from scrape to alert",
    stack: ["FastAPI", "Bright Data", "RAG", "Pydantic"],
    href: "https://github.com/zubair480/AgenticAudit",
    presentation: "audit",
    category: "Agentic AI and research",
  },
  {
    number: "04",
    title: "JudgeAgent",
    eyebrow: "Contributor · Agent as Judge",
    description:
      "A verification layer for AI handoffs. It derives a rubric from the goal then checks the evidence and returns a traceable verdict.",
    proof: "MCP server with a workbench and consensus mode",
    stack: ["Python", "MCP", "W&B Weave", "Next.js"],
    href: "https://github.com/productlayers/judgeagent",
    presentation: "concept",
    visual: "judge",
    category: "Agentic AI and research",
  },
  {
    number: "05",
    title: "Thread",
    eyebrow: "Research memory · Context over Amnesia",
    description:
      "An offline first research companion. It turns a paper into a structured summary with a methodology graph and grounded conversation.",
    proof: "PDF to knowledge workflow with local models",
    stack: ["FastAPI", "Ollama", "React", "Mermaid"],
    href: "https://github.com/zubair480/Research-Graph",
    presentation: "concept",
    visual: "research",
    category: "Agentic AI and research",
  },
  {
    number: "06",
    title: "FlashCard",
    eyebrow: "Generative experience · RunPod Flash Hack Day",
    description:
      "A QR powered networking experience. It turns a LinkedIn profile into a personalized trading card and lead signal.",
    proof: "GPU generation with a live scan dashboard",
    stack: ["FastAPI", "RunPod", "Bright Data", "Flux"],
    href: "https://github.com/zubair480/FlashCard",
    presentation: "concept",
    visual: "flashcard",
    category: "Products and developer tools",
  },
];

export const moreProjects: Project[] = [
  {
    number: "07",
    title: "Clip Police",
    eyebrow: "Second place · Auth0 × Stripe Hackathon",
    description:
      "An AI powered multi agent platform that finds unauthorized reposts of creator videos across the web and assembles a real time circulation report.",
    proof: "2nd place at Okta's San Francisco headquarters",
    stack: ["Multi agent", "Auth0", "Stripe", "Content detection"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7488853520134107136/",
    image: "/projects/clip-police.webp",
    imageAlt: "Clip Police team at the Auth0 and Stripe hackathon",
    imagePosition: "center",
    linkLabel: "Project post",
    category: "Agentic AI and research",
  },
  {
    number: "08",
    title: "ROOT",
    eyebrow: "Second place · CrewAI Hackathon",
    description:
      "A coordinated onboarding system that reads a Zendesk request then provisions the software, hardware and access a new employee needs.",
    proof: "14 agents turn a week of provisioning into minutes",
    stack: ["CrewAI", "Zendesk", "Multi agent", "Full stack"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7487710934313013248/",
    image: "/projects/root.webp",
    imageAlt: "ROOT team at the CrewAI hackathon",
    linkLabel: "Project post",
    category: "Agentic AI and research",
  },
  {
    number: "09",
    title: "AI GTM Agent",
    eyebrow: "Customer validation · AWS Builder Loft",
    description:
      "An autonomous feedback loop that listens across social channels, verifies reported product issues, fixes authorized problems and responds with evidence.",
    proof: "A judge volunteered to become the first customer",
    stack: ["Multi agent", "Nimble", "Kylon", "Social listening"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7484411388363288576/",
    image: "/projects/ai-gtm-agent.webp",
    imageAlt: "AI GTM Agent hackathon team",
    linkLabel: "Project post",
    category: "Agentic AI and research",
  },
  {
    number: "10",
    title: "Model Compatibility Agent",
    eyebrow: "Sponsor integration · Agentic AI Hackathon",
    description:
      "An agent that compares a deep learning model with official documentation. It reports compatibility then proposes an architecture using only supported functions.",
    proof: "Runs as a CLI plus a Streamlit app or messaging backend",
    stack: ["Python", "Streamlit", "RocketRide", "XTrace"],
    href: "https://github.com/zubair480/agentic-ai-hackathon",
    presentation: "concept",
    visual: "compatibility",
    category: "Agentic AI and research",
  },
  {
    number: "11",
    title: "MCP Auditor",
    eyebrow: "Contributor · Harness Engineering Hack",
    description:
      "A governance focused security auditor. Six specialized agents probe live MCP servers for traversal and leaks plus poisoning and exfiltration.",
    proof: "Citation grounded reports with x402 settlement",
    stack: ["Multi agent", "SAFE MCP", "ClickHouse", "x402"],
    href: "https://github.com/bishnubista/mcp-auditor",
    image: "/projects/mcp-auditor.webp",
    imageAlt: "MCP Auditor security evidence dashboard",
    imagePosition: "top",
    category: "Agentic AI and research",
  },
  {
    number: "12",
    title: "Micro Loan Negotiator",
    eyebrow: "Generative UI · Gen UI Hack",
    description:
      "A mobile first lending experience. Its generative interface guides borrowers through a clear micro loan negotiation.",
    proof: "Adaptive negotiation flow built for mobile",
    stack: ["Flutter", "Dart", "Generative UI"],
    href: "https://github.com/zubair480/micro-loan-negotiator",
    presentation: "concept",
    visual: "loan",
    category: "Products and developer tools",
  },
  {
    number: "13",
    title: "Tenderly",
    eyebrow: "Backend contributor · AI for Social Good",
    description:
      "An AI volunteer matching platform for San Francisco residents and real nonprofits. Live SF 311 data surfaces urgent community needs.",
    proof: "Local data turns community urgency into better matches",
    stack: ["FastAPI", "DigitalOcean AI", "SF 311", "React"],
    href: "https://github.com/arjun-vaidya/tenderly",
    image: "/projects/tenderly.webp",
    imageAlt: "Tenderly volunteer matching landing page",
    imagePosition: "top",
    category: "Products and developer tools",
  },
  {
    number: "14",
    title: "Hifz",
    eyebrow: "Offline learning · Personal project",
    description:
      "A Qur’an memorization companion with SM2 spaced repetition and offline reciter audio. It adds word level highlighting and recitation scoring.",
    proof: "Private structured practice available offline",
    stack: ["Kotlin", "Jetpack Compose", "SM2", "Audio"],
    href: "https://github.com/zubair480/hifz-quran-app",
    presentation: "concept",
    visual: "hifz",
    category: "Mobile vision and learning",
  },
  {
    number: "15",
    title: "Signal SF",
    eyebrow: "Local discovery · Personal project",
    description:
      "A personalized San Francisco events finder with multi user profiles. It offers itinerary planning and conflict warnings for a smoother week in the city.",
    proof: "Discovery and planning in one personal itinerary",
    stack: ["Node.js", "SQLite", "Vercel", "Auth"],
    href: "https://github.com/zubair480/travel-buddy",
    presentation: "concept",
    visual: "signal",
    category: "Products and developer tools",
  },
  {
    number: "16",
    title: "Smart Safety",
    eyebrow: "Computer vision · Transatlantic AI Hackathon",
    description:
      "A real time workplace safety system that detects protective equipment with an OAK D camera. It alerts supervisors as soon as risks appear.",
    proof: "Live PPE detection with employee aware alerts",
    stack: ["YOLOv8", "OAK D", "Python", "Flask"],
    href: "https://github.com/zubair480/UltraHack-Transatlantic",
    image: "/projects/smart-safety.webp",
    imageAlt: "Smart Safety workplace violation alert",
    category: "Mobile vision and learning",
  },
  {
    number: "17",
    title: "Smart CPM Parser",
    eyebrow: "First place · Etihad Green Development",
    description:
      "A cargo message parser that validates and corrects operational CPM messages. The hackathon MVP later moved into production at Etihad.",
    proof: "95% fewer entry errors and 30% less manual work",
    stack: ["Python", "Flask", "RegEx", "JavaScript"],
    href: "https://github.com/zubair480/amadeus_hackathon2",
    image: "/projects/smart-cpm-parser.webp",
    imageAlt: "Smart CPM Parser winning team at Etihad Corporate Academy",
    imagePosition: "center",
    category: "Products and developer tools",
  },
  {
    number: "18",
    title: "Codic",
    eyebrow: "Voice to image · OpenAI Hackathon",
    description:
      "A voice led creative app that turns spoken prompts into generated images. It uses a mobile interface and an AI powered Django backend.",
    proof: "From speech to an editable creative prompt",
    stack: ["Whisper", "OpenAI API", "Django", "React Native"],
    href: "https://github.com/QU01/OpenAIHackatonApp",
    presentation: "concept",
    visual: "creative",
    category: "Mobile vision and learning",
  },
  {
    number: "19",
    title: "Navi Tutor",
    eyebrow: "AI learning · lablab.ai OpenAI Hackathon",
    description:
      "NAVI is an AI learning platform built during a lablab.ai OpenAI hackathon. It retrieves from curated articles and uses language models to answer questions across many subjects.",
    proof: "Haystack retrieval with Elasticsearch and OpenAI",
    stack: ["Python", "Haystack", "Elasticsearch", "OpenAI"],
    href: "https://github.com/zubair480/zubair480.github.io/blob/master/_projects/3_project.md",
    image: "/projects/navi-tutor.webp",
    imageAlt: "Navi Tutor AI learning platform",
    linkLabel: "Project notes",
    category: "Mobile vision and learning",
  },
];

export const allProjects = [...featuredProjects, ...moreProjects];
