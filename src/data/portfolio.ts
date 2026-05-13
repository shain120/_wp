import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  brand: "SHAIN PROFILE",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "TAKE YOUR TIME",
    name: "黃冠勛 SHAIN",
    title: "Wireless Network Control Researcher",
    description:
      "I focus on AI applications, wireless network control, and LLM-driven system design. My recent work explores how large language models can improve IEEE 802.11ax contention control in dynamic environments. I also enjoy building practical systems that combine software engineering, machine learning, and real-world deployment.",
    roleLines: [
      "LLM Application Developer",
      "Wireless Network Researcher",
      "Python Developer",
      "AI / ML Enthusiast",
      "System Optimization Explorer",
    ],
    primaryAction: { label: "View Case Files", href: "#projects" },
    secondaryAction: { label: "Send Calling Card", href: "#contact" },
    stats: [
      { label: "LLM Apps", value: "85" },
      { label: "Wireless", value: "88" },
      { label: "Python", value: "90" },
      { label: "Research", value: "92" },
    ],
    tags: ["AI Applications", "Wireless Control", "IEEE 802.11ax", "LLM Systems", "Python"],
  },
  about: {
    id: "about",
    index: "01",
    eyebrow: "About Me",
    title: "Researching intelligent systems for dynamic networks.",
    paragraphs: [
      "I focus on AI applications, wireless network control, and LLM-driven system design.",
      "My recent work explores how large language models can improve IEEE 802.11ax contention control in dynamic environments, while my side projects often connect software engineering, machine learning, and deployable system design.",
    ],
    highlights: [
      "LLM-driven system design",
      "Wireless network control research",
      "Experiment design and evaluation",
      "Practical AI application building",
    ],
    metrics: [
      { label: "Primary Language", value: "Python" },
      { label: "Research Domain", value: "Wireless / AI" },
      { label: "Current Focus", value: "LLM Control" },
      { label: "Work Style", value: "Experiment-driven" },
    ],
  },
  skills: {
    id: "skills",
    index: "02",
    eyebrow: "Skill Matrix",
    title: "What I bring into the palace.",
    description:
      "This stack reflects both my research direction and the tools I actually use when building or evaluating intelligent systems.",
    groups: [
      {
        category: "Programming Languages",
        blurb: "Core languages for research, prototyping, and implementation.",
        items: [
          { name: "Python", level: 90, icon: "Code2" },
          { name: "C / C++", level: 70, icon: "Binary" },
          { name: "JavaScript", level: 60, icon: "Braces" },
          { name: "SQL", level: 55, icon: "Database" },
        ],
      },
      {
        category: "AI / ML",
        blurb: "Applied intelligence, evaluation, and LLM-centered system design.",
        items: [
          { name: "LLM Apps", level: 85, icon: "Sparkles" },
          { name: "Prompt Eng.", level: 85, icon: "Orbit" },
          { name: "Machine Learning", level: 75, icon: "Radar" },
          { name: "Deep RL", level: 75, icon: "Atom" },
          { name: "GraphRAG", level: 70, icon: "Box" },
          { name: "Model Eval", level: 80, icon: "ScanLine" },
        ],
      },
      {
        category: "Development Tools",
        blurb: "Tools used to ship experiments, systems, and local deployments.",
        items: [
          { name: "Git / GitHub", level: 80, icon: "Component" },
          { name: "Linux / Ubuntu", level: 75, icon: "Zap" },
          { name: "LangChain", level: 80, icon: "Sparkles" },
          { name: "Ollama", level: 75, icon: "Orbit" },
          { name: "Docker / Cloud", level: 60, icon: "Box" },
          { name: "MySQL", level: 55, icon: "Database" },
        ],
      },
    ],
  },
  projects: {
    id: "projects",
    index: "03",
    eyebrow: "Selected Projects",
    title: "Case files with style and control.",
    items: [
      {
        title: "LLM-Based Contention Window Optimization for IEEE 802.11ax",
        description:
          "Designed an LLM-driven control framework to dynamically adjust CWmin in IEEE 802.11ax networks. The project compares traditional EDCA, DQN, and LLM-based decision strategies under static and dynamic node conditions.",
        tech: ["Python", "IEEE 802.11ax", "LangChain", "OpenAI API", "Gemini", "Data Analysis"],
        accent: "from-p5red/70 via-black to-white/30",
        live: "#",
        repo: "#",
      },
      {
        title: "Hierarchical Memory Mechanism for LLM Network Control",
        description:
          "Built a hierarchical memory mechanism with short-term, summary, and event memory to improve decision stability in dynamic wireless environments. This design helps the LLM use historical context instead of relying only on current observations.",
        tech: ["Python", "LLM", "Memory Design", "Network Simulation", "Experimental Analysis"],
        accent: "from-black via-p5red/80 to-p5yellow/40",
        live: "#",
        repo: "#",
      },
      {
        title: "Local GraphRAG Knowledge System with Ollama",
        description:
          "Explored local GraphRAG deployment with Ollama-based models, embedding pipelines, chunking strategies, and vector database setup. The project focused on improving retrieval quality and reducing local inference friction.",
        tech: ["GraphRAG", "Ollama", "Python", "Embedding Models", "LanceDB", "YAML"],
        accent: "from-white/40 via-black to-p5red/80",
        live: "#",
        repo: "#",
      },
    ],
  },
  awards: {
    id: "awards",
    index: "04",
    eyebrow: "Award Log",
    title: "Recognition earned in the field.",
    description:
      "A focused record of conference recognition and paper milestones, presented in a cleaner display format while staying inside the Persona 5 visual language.",
    entries: [
      {
        year: "2025",
        label: "Best Paper Award",
        conference: "9th EAI International Conference on Smart Grid and Internet of Things",
        dateLocation: "December 6-7, 2025 · Taichung, Taiwan",
        paperTitle:
          "An LLM-Based Approach to Improving Throughput and Reducing Collisions in IEEE 802.11 Wireless Networks",
        recipients: "Guan-Sheng Huang, Chih-Heng Ke, Chong-Yi Yang, Yeong-Sheng Chen",
        summary:
          "Received the Best Paper Award at SGIoT 2025 for the wireless contention-control study, highlighting the practical value of LLM-guided decision strategies in IEEE 802.11 environments.",
        image: "/awards/best-paper-award-clean.svg",
        links: [{ label: "Camera-ready PDF", href: "/papers/archive_file_cameraready.pdf" }],
      },
    ],
  },
  contact: {
    id: "contact",
    index: "05",
    eyebrow: "Research Dispatch",
    title: "Publication timeline, notes, and the next journal target.",
    description:
      "A quick board for published paper milestones, the journal submission currently in preparation, supporting notes, and the easiest way to reach me for collaboration or research discussion.",
    messageTitle: "Leave a message worth noticing.",
    messageDescription:
      "If you want to discuss AI applications, LLM systems, wireless network research, or practical system implementation, this is the place to reach me.",
    email: "sshain1220@gmail.com",
    posts: [
      {
        date: "2025 / 6",
        status: "Publication 01",
        meta: "Conference paper",
        title:
          "An LLM-Based Approach to Improving Throughput and Reducing Collisions in IEEE 802.11 Wireless Networks",
        summary:
          "The first published version of this research line appeared in mid-2025, establishing the core LLM-based direction for improving throughput and reducing collisions in IEEE 802.11 wireless environments.",
        tone: "paper",
        tags: ["2025 / 6", "Conference Paper", "Wireless Control", "LLM Research"],
        links: [{ label: "Publication PDF", href: "/papers/20250315.pdf" }],
      },
      {
        date: "2025 / 12",
        status: "Publication 02",
        meta: "Best Paper · SGIoT 2025",
        title:
          "An LLM-Based Approach to Improving Throughput and Reducing Collisions in IEEE 802.11 Wireless Networks",
        summary:
          "The December 2025 conference-stage publication reached the camera-ready milestone and was further recognized with the Best Paper Award at the 9th EAI International Conference on Smart Grid and Internet of Things.",
        tone: "upcoming",
        tags: ["2025 / 12", "Best Paper Award", "Camera-ready", "SGIoT 2025"],
        links: [{ label: "Camera-ready PDF", href: "/papers/archive_file_cameraready.pdf" }],
      },
      {
        date: "IN PREP",
        status: "Journal Submission",
        meta: "Target: IEEE OJ-COMS",
        title:
          "History-Aware LLM-Based Decision Framework for Contention Window Adaptation in IEEE 802.11ax Networks",
        summary:
          "The current journal version is being prepared for IEEE OJ-COMS, extending the earlier conference-stage work with a history-aware LLM decision framework for contention window adaptation in dynamic IEEE 802.11ax networks.",
        tone: "upcoming",
        tags: ["In Preparation", "IEEE OJ-COMS", "802.11ax", "History-aware LLM"],
      },
    ],
    noteLinks: [
      { label: "Fine-tuning LLM", href: "https://hackmd.io/@Shain120/SkImerIAJl" },
      { label: "ChatSDN", href: "https://hackmd.io/@Shain120/rJYGBp_R1l" },
      { label: "GraphRAG Notes", href: "https://hackmd.io/@Shain120/S1z7k4bjll" },
      { label: "M2I-CWO Paper Notes", href: "https://hackmd.io/@Shain120/HkvVyPW21e" },
      { label: "OFDMA Notes", href: "https://hackmd.io/@Shain120/SkjNA1moke" },
      { label: "802.11a Notes", href: "https://hackmd.io/@Shain120/S1zEOkx4yg" },
      { label: "Wireless & Mobile Networking", href: "https://hackmd.io/@Shain120/H1vTJLY7kl" },
      { label: "Computer Networks Intro", href: "https://hackmd.io/@Shain120/S1Xtf6jDA" },
      { label: "Linux Server Setup", href: "https://hackmd.io/@Shain120/H1MbAcfNkg" },
      { label: "Linux Notes", href: "https://hackmd.io/@Shain120/HkQjMof7xl" },
      { label: "TCP/IP Notes", href: "https://hackmd.io/@Shain120/S1zIOgh4yx" },
      { label: "Mininet Notes", href: "https://hackmd.io/@Shain120/Syc0hXAPC" },
    ],
  },
  socials: [
    { label: "GitHub", href: "https://github.com/shain120/" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:sshain1220@gmail.com" },
    { label: "Google Scholar", href: "#" },
  ],
};
