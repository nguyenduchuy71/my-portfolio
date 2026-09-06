/**
 * Single source of truth for all portfolio copy and SEO metadata.
 * Edit this file to personalise the site — no component changes needed.
 */

/** Canonical origin. Update after deploying to a custom domain. */
export const siteUrl = "https://nguyenduchuy71.vercel.app";

export const profile = {
  name: "Huy Nguyen",
  fullName: "Huy Nguyen Duc",
  initials: "HN",
  role: ["SOFTWARE", "ENGINEER"],
  jobTitle: "Software Engineer",
  location: "Ho Chi Minh City, Vietnam",
  experience: "4+ years experience",
  availability: "Available for remote work",
  email: "ndhuy712k@gmail.com",
  github: "https://github.com/nguyenduchuy71",
  githubHandle: "nguyenduchuy71",
  linkedin: "https://www.linkedin.com/in/huy-nguyen-26146a14a/",
  intro:
    "Software engineer with four years building Python services — FastAPI and Django APIs, Kafka pipelines, Redis caching and Celery workers — for camera analytics at scale, clinic booking platforms and AI agent systems. I own architecture from schema design through to Docker and Kubernetes deploys.",
};

/** Scrolling keyword ribbon under the hero. */
export const ribbon = [
  "Software Engineer",
  "Python",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Celery",
  "Docker",
  "Kubernetes",
  "AWS S3",
  "RESTful API",
  "Microservices",
  "RAG Pipeline",
];

export type ProjectGlyph =
  | "agents"
  | "testing"
  | "database"
  | "queue"
  | "realtime"
  | "pipeline"
  | "booking"
  | "vision"
  | "storage"
  | "monitor";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Public repo URL. Empty for client work with no public source. */
  href: string;
  /** Which architecture glyph illustrates this project's data flow. */
  glyph: ProjectGlyph;
  /** Set on professional work only. */
  company?: string;
  period?: string;
  team?: string;
};

/**
 * Professional work delivered at Checker, FPT Telecom and TMA Solutions.
 * Sourced from the CV — these are client systems, so there is no public repo.
 */
export const workProjects: Project[] = [
  {
    title: "F&B AI Agent Platform",
    description:
      "R&D platform running an integrated AI agent system for a food & beverage business. Serves as an internal assistant across business workflows, where the hard part is keeping agent responses stable and accurate against food-industry domain rules — ingredients, food safety, production processes.",
    tags: ["FastAPI", "Gemini", "Qdrant", "RAG", "Celery", "SSE"],
    href: "",
    glyph: "agents",
    company: "Checker Software System",
    period: "2026",
    team: "Team of 10",
  },
  {
    title: "Clinic Booking Management System",
    description:
      "Booking platform for clinics delivering insomnia treatment on specialised sleep-therapy devices. I owned the backend end to end — architecture and technology selection through to implementation: scheduling APIs, device allocation, room assignment, per-customer session tracking, and a form-builder engine letting staff configure treatment forms without code changes.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Keycloak", "GCP", "Docker"],
    href: "",
    glyph: "booking",
    company: "Checker Software System",
    period: "2026",
    team: "Team of 7",
  },
  {
    title: "FPT VMSMART",
    description:
      "B2B camera device platform for realtime viewing and monitoring, with AI analytics for people counting, face recognition, speech-to-text and action detection. I designed the AI-services microservice, defined integration contracts with third-party AI providers, and moved the pipelines onto Kafka eventing to decouple them.",
    tags: ["Django", "Kafka", "Redis", "AWS S3", "Kubernetes"],
    href: "",
    glyph: "vision",
    company: "FPT Telecom",
    period: "2024 — 2026",
    team: "Team of 20",
  },
  {
    title: "Web Storage",
    description:
      "File storage and management for Japanese universities, fronting Amazon S3, Google Drive and ownCloud behind one interface. I designed functions from template and sequence diagram through to implementation, and wrote roughly 70% of the unit tests holding project coverage above 90%.",
    tags: ["Django", "Flask", "Celery", "AWS S3", "Kubernetes"],
    href: "",
    glyph: "storage",
    company: "TMA Solutions",
    period: "2022 — 2024",
    team: "Team of 6",
  },
  {
    title: "ZVC Call Centre Monitor",
    description:
      "Realtime monitoring for Genesys Cloud and Nice InContact call centres, tracking operator state from login onward over WebSocket. Won the Star Performance award with the team.",
    tags: ["Node.js", "Fastify", "WebSocket", "Redis", "ReactJS"],
    href: "",
    glyph: "monitor",
    company: "TMA Solutions",
    period: "2022 — 2024",
    team: "Team of 3",
  },
];

/** Personal repositories from github.com/nguyenduchuy71. */
export const projects: Project[] = [
  {
    title: "Agentic AI Application",
    description:
      "Multi-agent FastAPI service implementing routing, orchestrator-worker delegation and an agent-skills standard. Intent classification routes each request to the right worker agent behind a versioned HTTP API.",
    tags: ["Python", "FastAPI", "Multi-Agent", "REST API"],
    href: "https://github.com/nguyenduchuy71/agentic-application",
    glyph: "agents",
  },
  {
    title: "FastAPI Automation Demo",
    description:
      "CRUD service built on FastAPI and Pydantic v2, covered end to end by Playwright at both the HTTP API layer and a real Chromium browser. Fixtures spin the server up per test run; OpenAPI docs generated from the schemas.",
    tags: ["FastAPI", "Pydantic", "pytest", "Playwright"],
    href: "https://github.com/nguyenduchuy71/fast-api-automation",
    glyph: "testing",
  },
  {
    title: "Camera Shop Platform",
    description:
      "Next.js catalog backed by Supabase Postgres, Storage and Auth. Row-level security policies separate public reads from admin writes, middleware guards the admin area, and GitHub Actions gates every deploy on lint, typecheck and build.",
    tags: ["Supabase", "PostgreSQL", "RLS", "GitHub Actions"],
    href: "https://github.com/nguyenduchuy71/web-ecom",
    glyph: "database",
  },
  {
    title: "Flask Redis Queue",
    description:
      "Background job processing with Flask, Redis Queue and Docker Compose. Long-running work is pushed off the request thread onto worker containers, with job status polled back through a small status API.",
    tags: ["Python", "Redis", "Job Queue", "Docker"],
    href: "https://github.com/nguyenduchuy71/Flask_Redis",
    glyph: "queue",
  },
  {
    title: "Realtime Todo WebSocket",
    description:
      "Node.js WebSocket server pushing task changes to every connected client in real time, with Novu handling notification delivery and a React client consuming the socket stream.",
    tags: ["Node.js", "WebSocket", "Realtime", "Novu"],
    href: "https://github.com/nguyenduchuy71/Todo_WebSocket",
    glyph: "realtime",
  },
  {
    title: "MediMind",
    description:
      "Health app that reads Vietnamese medical documents via a Gemini vision pipeline. A request queue enforces rate-limit spacing, results are flagged against Vietnamese reference ranges, and all data stays on-device — no account, no server storage. 372 tests passing.",
    tags: ["TypeScript", "Gemini API", "Rate Limiting", "Testing"],
    href: "https://github.com/nguyenduchuy71/MediMind",
    glyph: "pipeline",
  },
];

export type SkillGroup = {
  heading: string;
  level: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    heading: "Backend",
    level: "Core",
    items: [
      "Python — primary language",
      "FastAPI and Django",
      "RESTful API design, OOP, MVC, ORM",
      "PostgreSQL and MySQL",
      "Redis — caching and latency optimisation",
      "Celery — async and scheduled jobs",
      "Kafka — event-driven pipelines",
      "Microservice design and integration contracts",
      "WebSocket and Server-Sent Events",
      "Unit and integration testing, 90%+ coverage",
    ],
  },
  {
    heading: "Platform & Frontend",
    level: "Working",
    items: [
      "Docker and Kubernetes",
      "AWS — S3, IAM",
      "GCP — Cloud Storage",
      "Keycloak — identity and access management",
      "Linux administration",
      "Git and SVN",
      "N8N workflow automation",
      "JavaScript, ReactJS, Node.js, Fastify",
    ],
  },
  {
    heading: "AI Engineering",
    level: "Applied",
    items: [
      "RAG pipeline design and tuning",
      "Gemini and LLM API integration",
      "Qdrant vector database",
      "AI agent behaviour debugging and evaluation",
      "Third-party AI provider integration contracts",
      "Claude Code and Cursor in daily workflow",
    ],
  },
];

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  /** Course page on Anthropic Academy. */
  href: string;
};

/** Anthropic Education certifications, linked to their course pages. */
export const certificates: Certificate[] = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic Education",
    date: "03/2026",
    href: "https://anthropic.skilljar.com/claude-code-in-action",
  },
  {
    name: "Claude Agent Skills",
    issuer: "Anthropic Education",
    date: "03/2026",
    href: "https://anthropic.skilljar.com/introduction-to-agent-skills",
  },
  {
    name: "Claude Subagents",
    issuer: "Anthropic Education",
    date: "05/2026",
    href: "https://anthropic.skilljar.com/introduction-to-subagents",
  },
  {
    name: "Claude MCP",
    issuer: "Anthropic Education",
    date: "08/2026",
    href: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
  },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

/** Professional experience, most recent first. */
export const experience: Role[] = [
  {
    title: "Python Developer",
    company: "Checker Software System",
    period: "03/2026 — Present",
    summary:
      "F&B AI Agent Platform and a clinic Booking Management System for sleep-therapy treatment centres.",
    highlights: [
      "Owned the booking system backend end to end — architecture design, technology selection and implementation from scratch.",
      "Built RESTful APIs for date/time scheduling, device allocation and treatment-room assignment.",
      "Developed a configurable form-builder engine so staff create dynamic treatment forms without code changes.",
      "Debugged and resolved AI agent behaviour and response-accuracy issues across business workflows.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Keycloak", "Qdrant", "Gemini", "Docker"],
  },
  {
    title: "Backend Developer",
    company: "FPT Telecom",
    period: "11/2024 — 03/2026",
    summary:
      "FPT VMSMART — B2B camera device management with AI analytics: people counting, face recognition, speech-to-text and action detection.",
    highlights: [
      "Designed and implemented a microservice for AI services within a 20-person team.",
      "Defined integration contracts and managed communication with third-party AI providers.",
      "Implemented Kafka-based eventing to decouple processing pipelines.",
      "Cut latency with Redis caching and database access optimisation; profiled performance to raise throughput and reduce resource cost.",
    ],
    stack: ["Django", "Kafka", "Redis", "AWS S3", "Docker", "Kubernetes"],
  },
  {
    title: "Python Developer",
    company: "TMA Solutions",
    period: "01/2022 — 10/2024",
    summary:
      "Web Storage — multi-cloud file management for Japanese universities. ZVC — call-centre monitoring for Genesys Cloud and Nice InContact.",
    highlights: [
      "Wrote roughly 70% of the unit tests on Web Storage, holding coverage above 90% project-wide.",
      "Integrated Amazon S3, Google Drive and ownCloud behind one storage interface.",
      "Built realtime call-centre monitoring on Node.js, Fastify and WebSocket.",
      "Won the Star Performance award with the ZVC team.",
    ],
    stack: ["Django", "Flask", "Celery", "AWS S3", "Node.js", "WebSocket", "Kubernetes"],
  },
];

export const education = {
  degree: "Bachelor's in Computer Science",
  school: "Industrial University of Ho Chi Minh City",
  period: "08/2018 — 04/2023",
  detail: "Degree grade 3.35/4.0 (very good)",
};

export const about = {
  bio: [
    "I am a software engineer with four years in backend development, mostly in Python. My work runs from designing the schema and the service boundaries through to the Docker and Kubernetes setup that ships them — camera analytics handling AI workloads at FPT Telecom, multi-cloud storage for Japanese universities at TMA, and most recently AI agent platforms and a clinic booking system at Checker.",
    "Learning new languages and technologies is what I am passionate about, and I work well in a team — I like helping others and tend to be the person who writes the tests nobody else wants to. I care most about systems that fail loudly and recover quietly: good logs, honest health checks, and migrations that can be rolled back.",
  ],
  howIWork: [
    "Investigate and design first — sequence diagram before implementation.",
    "Design the data model first; the API tends to follow from it.",
    "Test coverage is part of the feature, not a follow-up ticket.",
    "If it isn't measured, it isn't running — profile before optimising.",
    "Decouple with events when two services start knowing too much about each other.",
  ],
  currentFocus: [
    "Agentic AI systems, RAG pipelines and vector search",
    "Event-driven architecture and idempotent job handling",
    "Database performance: query planning, indexing, caching strategy",
    "Kubernetes and platform reliability",
    "Contributing to open source and writing about backend work",
  ],
};

/** Keywords for the meta keywords tag and general discoverability. */
export const seoKeywords = [
  "Software Engineer",
  "Backend Engineer",
  "Backend Developer",
  "Python Developer",
  "FastAPI Developer",
  "Django Developer",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Celery",
  "Docker",
  "Kubernetes",
  "Microservices",
  "RESTful API",
  "RAG Pipeline",
  "AI Agent",
  "Ho Chi Minh City",
  "Vietnam",
  "Remote Software Engineer",
  "Huy Nguyen Duc",
  "Nguyen Duc Huy",
];
