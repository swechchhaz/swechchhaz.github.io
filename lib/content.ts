// All the words on the site live in this one file. Every fact comes from
// Swechchha's resume. Anything not yet confirmed is `null`, and the page
// shows a red dashed [TODO] box where it goes.

export const profile = {
  name: "Swechchha Rahangdale",
  tagline:
    "Business analytics graduate student at Purdue with a computer science background.",
  now: "Business Analytics Practicum Consultant, Purdue Softball",
  linkedin: "https://www.linkedin.com/in/swechchha-rahangdale",
  github: "https://github.com/swechchhaz",
  email: "srahangd@purdue.edu" as string | null, // temporary: Purdue address, to be replaced later
  photo: null as string | null, // TODO: headshot, to come
};

export type Result = { figure: string; text: string };

export type Tone = "lime" | "sky" | "peach" | "blush";

export type Project = {
  slug: string;
  tone: Tone;
  teaser: { figure: string; text: string } | null;
  title: string;
  summary: string;
  date: string;
  role: string;
  tags: string[];
  results: Result[];
  built: string[];
  problem: string | null;
  data: string | null;
  approach: string[] | null;
  tools: string[];
  learned: string | null;
  visual: { src: string; alt: string } | null;
  repo: string | null;
};

export const projects: Project[] = [
  {
    slug: "sales-decision-support",
    tone: "lime",
    teaser: { figure: "60%", text: "less manual analysis time with a sales dashboard" },
    title: "A sales dashboard that cut manual analysis time by 60%",
    summary:
      "An interactive Streamlit dashboard and decision support system over 100,000+ sales records.",
    date: "March 2026",
    role: "Data Analytics Developer (academic project)",
    tags: ["Python", "Streamlit", "KPI analysis", "Data cleaning"],
    results: [
      { figure: "60%", text: "less manual analysis time" },
      { figure: "95%", text: "improvement in data quality" },
      { figure: "100,000+", text: "sales records analyzed" },
    ],
    built: [
      "An interactive dashboard in Python and Streamlit for revenue trends, product performance and regional sales insights.",
      "Data cleaning and KPI analysis across the full set of records.",
      "A decision support system, inspired by RAG, that produces business insights from the sales data.",
    ],
    problem: null,
    data: null,
    approach: null,
    tools: ["Python", "Streamlit"],
    learned: null,
    visual: null,
    repo: null,
  },
  {
    slug: "softball-coach-chatbot",
    tone: "sky",
    teaser: null,
    title: "A chatbot that answers coaches' questions about pitch and batting data",
    summary:
      "A Python and Gemini chatbot for Purdue Softball that answers plain-English questions by choosing from analysis functions.",
    date: "August 2026 to present",
    role: "Business Analytics Practicum Consultant, Purdue Softball",
    tags: ["Python", "Gemini", "Google Cloud", "Data documentation"],
    results: [],
    built: [
      "A chatbot on Python and Gemini (Google Cloud) that answers coaches' plain-English questions about pitch and batting data.",
      "The chatbot answers by choosing from a set of analysis functions.",
      "Data documentation for the client: data dictionaries and entity relationship diagrams (ERDs).",
    ],
    problem: null,
    data: null,
    approach: null,
    tools: ["Python", "Gemini", "Google Cloud"],
    learned: null,
    visual: null,
    repo: null,
  },
  {
    slug: "alteryx-workflow-automation",
    tone: "peach",
    teaser: { figure: "65%", text: "less manual data prep time with 10+ Alteryx workflows" },
    title: "Automating 10+ Alteryx workflows to cut data prep time by 65%",
    summary:
      "Designed and automated Alteryx workflows over 50,000+ records during a data analyst internship.",
    date: "May 2025 to July 2025",
    role: "Data Analyst Intern, Alteryx",
    tags: ["Alteryx", "Workflow automation", "Reporting"],
    results: [
      { figure: "65%", text: "less manual data preparation time" },
      { figure: "60%", text: "faster reporting turnaround" },
      { figure: "50,000+", text: "records analyzed" },
    ],
    built: [
      "More than 10 Alteryx workflows, designed and automated.",
      "Analysis of 50,000+ records.",
      "Analytical solutions built with faculty and peers from their business requirements.",
    ],
    problem: null,
    data: null,
    approach: null,
    tools: ["Alteryx"],
    learned: null,
    visual: null,
    repo: null,
  },
  {
    slug: "marketing-campaign-analytics",
    tone: "blush",
    teaser: { figure: "25%", text: "growth in campaign reach, plus 40% more engagement" },
    title: "Growing campaign reach by 25% and engagement by 40%",
    summary:
      "Ran 15+ digital marketing campaigns and used engagement analysis to improve them.",
    date: "June 2025 to November 2025",
    role: "Marketing Analyst Intern, Anherb Naturals",
    tags: ["Marketing analytics", "Engagement analysis", "Meta Business Suite"],
    results: [
      { figure: "40%", text: "increase in engagement" },
      { figure: "25%", text: "growth in campaign reach" },
      { figure: "15+", text: "campaigns executed" },
    ],
    built: [
      "Executed more than 15 digital marketing campaigns across multiple product lines.",
      "Scheduled 80+ social media posts in Meta Business Suite and kept the content calendar on time.",
      "Applied engagement analysis to improve campaign performance and audience reach.",
    ],
    problem: null,
    data: null,
    approach: null,
    tools: ["Meta Business Suite"],
    learned: null,
    visual: null,
    repo: null,
  },
];

export const experience = [
  {
    org: "Purdue Softball",
    role: "Business Analytics Practicum Consultant",
    dates: "August 2026 to present",
    bullets: [
      "Built a Python and Gemini (Google Cloud) chatbot that answers coaches' plain-English questions about pitch and batting data by choosing from analysis functions.",
      "Translate client needs into analytical requirements and project deliverables, and write the data documentation: data dictionaries and ERDs.",
    ],
  },
  {
    org: "Anherb Naturals",
    role: "Marketing Analyst Intern",
    dates: "June 2025 to November 2025",
    bullets: [
      "Contributed to a 40% increase in engagement and 25% growth in campaign reach by applying engagement analysis to campaign performance.",
      "Executed 15+ digital marketing campaigns and scheduled 80+ social media posts in Meta Business Suite, keeping the content calendar on time.",
    ],
  },
  {
    org: "Alteryx",
    role: "Data Analyst Intern",
    dates: "May 2025 to July 2025",
    bullets: [
      "Cut manual data preparation time by 65% by designing and automating 10+ Alteryx workflows and analyzing 50,000+ records.",
      "Cut reporting turnaround time by 60% by working with faculty and peers to turn business requirements into scalable analytical solutions.",
    ],
  },
];

export const education = [
  {
    school: "Purdue University, Daniels School of Business",
    degree: "Master of Science in Business Analytics and Information Management",
    dates: "Expected August 2027",
  },
  {
    school: "Medicaps University",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    dates: "May 2026",
  },
];

export const skills = [
  "Python",
  "SQL",
  "R",
  "Power BI",
  "Alteryx",
  "Excel",
  "Streamlit",
  "Flask",
  "AWS",
  "Google Cloud",
  "Exploratory data analysis",
];

export const leadership = [
  "Led a cross-functional team of 60+ students planning and running university events attended by 15,000+ people.",
  "Hosted and volunteered at 40+ university and external events, working with organizers, sponsors, faculty and volunteers.",
  "Represented the university to prospective students at admissions, orientation and outreach events.",
  "Mentored junior team members, delegated work and solved operational problems as events unfolded.",
];
