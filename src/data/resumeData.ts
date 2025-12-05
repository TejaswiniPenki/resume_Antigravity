/**
 * Resume Data Configuration
 * 
 * This is the single source of truth for all resume content.
 * All components consume data from this file.
 * 
 * IMPORTANT: Only real resume data - no placeholders or invented content.
 */

// ============ TypeScript Interfaces ============

export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    email: string;
    tagline: string;
    summary: string;
}

export interface EducationItem {
    id: number;
    degree: string;
    institution: string;
    period: string;
    grade: string;
    gradeType: 'cgpa' | 'percentage';
}

export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    type: string;
    period: string;
    responsibilities: string[];
    keywords: string[];
}

export interface SkillGroup {
    category: string;
    skills: string[];
}

export interface Project {
    id: number;
    title: string;
    category: 'ai' | 'ml' | 'web';
    description: string;
    techStack: string[];
}

export interface Certification {
    id: number;
    title: string;
    issuer: string;
    highlight?: string;
}

export interface ExtraCurricularItem {
    id: number;
    activity: string;
}

export interface Strength {
    id: number;
    name: string;
}

export interface Metric {
    id: string;
    label: string;
    value: number;
    suffix?: string;
    decimals: number;
}

export interface ResumeData {
    personal: PersonalInfo;
    education: EducationItem[];
    experience: ExperienceItem[];
    skills: SkillGroup[];
    projects: Project[];
    certifications: Certification[];
    extraCurricular: ExtraCurricularItem[];
    strengths: Strength[];
    metrics: Metric[];
}

// ============ Resume Data ============

export const resumeData: ResumeData = {
    personal: {
        name: "Tejaswini Penki",
        title: "AI Engineer (Onsite)",
        location: "Vizianagaram, Andhra Pradesh — 535003",
        email: "tejaswinipenki@gmail.com",
        tagline: "Building agentic AI systems, RAG solutions, and intelligent automation.",
        summary: "AI Engineer with hands-on experience developing LLM agents, retrieval-augmented generation applications, and document automation systems. Skilled in Python, vector search, semantic chunking, embeddings, and modern AI frameworks. Strong analytical and problem-solving ability with a focus on building scalable, production-ready applications and real-world automation workflows."
    },

    education: [
        {
            id: 1,
            degree: "B.Tech – Computer Science & Engineering",
            institution: "Bapatla Engineering College",
            period: "2021 – 2025",
            grade: "8.51",
            gradeType: "cgpa"
        },
        {
            id: 2,
            degree: "Intermediate (MPC)",
            institution: "Narayana Junior College",
            period: "2019 – 2021",
            grade: "93.7",
            gradeType: "percentage"
        },
        {
            id: 3,
            degree: "10th Standard",
            institution: "Sri Chaitanya School",
            period: "2018 – 2019",
            grade: "10",
            gradeType: "cgpa"
        }
    ],

    experience: [
        {
            id: 1,
            role: "AI Engineer",
            company: "Village Minds Pvt. Ltd",
            type: "Onsite",
            period: "May 2025 – Present",
            responsibilities: [
                "Developing real-time AI agent applications using embeddings, vector databases, and multi-step reasoning workflows.",
                "Built a Smart PDF App using FAISS, semantic chunking, LangChain, LangGraph, PyMuPDF, and Google Generative AI with context-validation to reduce hallucinations and produce high-confidence answers.",
                "Developed a Dynamic Web Login Agent that performs automated authentication using LangGraph decision graphs, Playwright browser automation, DOM analysis, and Streamlit dashboards for screenshots, request logs, and structured output.",
                "Designing and evaluating agentic architectures for scalable, production-grade AI/automation systems."
            ],
            keywords: ["LLM Agents", "RAG", "Embeddings", "Vector Databases", "FAISS", "LangChain", "LangGraph", "Semantic Chunking", "PyMuPDF", "Playwright", "Streamlit", "Google Generative AI APIs", "Automation"]
        }
    ],

    skills: [
        {
            category: "AI / ML",
            skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "LangChain", "LangGraph", "RAG", "Vector Search", "Embeddings", "Semantic Chunking", "FAISS", "Gemini APIs", "PyMuPDF", "Playwright", "Browser Automation", "LLM Agents"]

        },
        {
            category: "Frontend",
            skills: ["HTML", "CSS", "Bootstrap", "Basic JavaScript"]
        },
        {
            category: "Backend",
            skills: ["Python", "Basic Java"]
        },
        {
            category: "Databases",
            skills: ["MySQL", "SQLite"]
        },
        {
            category: "Cloud / Tools",
            skills: ["AWS EC2", "GitHub", "Streamlit", "PyPDF2", "PyMuPDF"]
        },
        {
            category: "Soft Skills",
            skills: ["Communication", "Leadership", "Teamwork", "Problem-solving"]
        }
    ],

    projects: [
        {

            id: 1,
            title: "Smart PDF App",
            category: "ai",
            description: "Built an agentic PDF QA system with semantic chunking, FAISS vector index, and retrieval-based hallucination control using LangGraph.",
            techStack: ["LangGraph", "FAISS", "PyPDF2", "PyMuPDF", "RAG", "Embeddings"]

        },
        {
            id: 2,
            title: "Dynamic Web Login Agent",
            category: "ai",
            description: "LLM-driven authentication agent capable of reasoning through multi-step login flows, parsing dynamic DOM content, and executing browser actions automatically.",
            techStack: ["LLM Agents", "Playwright", "LangGraph", "DOM Parsing", "Browser Automation", "Streamlit"]
        },
        {
            id: 3,
            title: "AI PDF Data Extraction Agent",
            category: "ai",
            description: "Agentic Streamlit application that parses documents and auto-generates structured JSON from text, tables, and metadata using Google Gemini.",
            techStack: ["Google Gemini APIs", "Streamlit", "PyMuPDF", "Semantic Parsing", "Table Extraction", "JSON Output"]
        },
        {
            id: 4,
            title: "Diabetes Prediction",
            category: "ml",
            description: "Classification models using preprocessing, feature scaling, and Scikit-Learn algorithms.",
            techStack: ["Scikit-Learn", "Python", "Pandas"]
        },
        {
            id: 5,
            title: "Titanic Survival Prediction",
            category: "ml",
            description: "ML classification workflow using supervised learning techniques.",
            techStack: ["Scikit-Learn", "Python", "NumPy"]
        },
        {
            id: 6,
            title: "Food Munch",
            category: "web",
            description: "Responsive website using HTML, CSS, and Bootstrap.",
            techStack: ["HTML", "CSS", "Bootstrap"]
        },
        {
            id: 7,
            title: "Tourism Website",
            category: "web",
            description: "UI-focused multi-page website using Bootstrap components.",
            techStack: ["HTML", "CSS", "Bootstrap"]
        }
    ],

    certifications: [
        {
            id: 1,
            title: "Machine Learning with Python",
            issuer: "SPYPRO"
        },
        {
            id: 2,
            title: "Naukri Young Turks Challenge",
            issuer: "Data & AI Track",
            highlight: "Rank 802, Advanced to Level 2"
        }
    ],

    extraCurricular: [
        { id: 1, activity: "Core committee member, Annual Fest (event management)" },
        { id: 2, activity: "NSS candidate" },
        { id: 3, activity: "Essay writing certificates" },
        { id: 4, activity: "Zone-level throwball player (tennikoit certified)" },
        { id: 5, activity: "Active in co-curricular activities" }
    ],

    strengths: [
        { id: 1, name: "Effective communication" },
        { id: 2, name: "Problem-solving" },
        { id: 3, name: "Leadership" },
        { id: 4, name: "Team collaboration" },
        { id: 5, name: "Self-motivated mindset" }
    ],

    metrics: [
        { id: "btech-cgpa", label: "B.Tech CGPA", value: 8.51, decimals: 2 },
        { id: "intermediate", label: "Intermediate", value: 93.7, suffix: "%", decimals: 1 },
        { id: "tenth-cgpa", label: "10th CGPA", value: 10.0, decimals: 1 },
        { id: "naukri-rank", label: "Naukri Rank", value: 802, decimals: 0 },
        { id: "projects", label: "Key Projects", value: 7, decimals: 0 }
    ]
};
