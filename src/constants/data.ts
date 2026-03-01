import { IconType } from 'react-icons';
import { FaBrain, FaMicrophone, FaCode, FaToolbox } from 'react-icons/fa6';

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Core AI & ML',
    icon: FaBrain,
    skills: ['LLMs', 'RAG', 'Computer Vision', 'YOLO', 'OpenCV', 'NLP', 'Voice Agents', 'STT / TTS', 'VAD'],
  },
  {
    title: 'Voice Technology',
    icon: FaMicrophone,
    skills: ['Pipecat', 'WebRTC', 'Session Orchestration', 'Real-time Latency Optimization'],
  },
  {
    title: 'Languages & Frameworks',
    icon: FaCode,
    skills: ['Python', 'SQL', 'FastAPI', 'LangChain', 'CrewAI', 'Crawl4AI'],
  },
  {
    title: 'Tools & Platforms',
    icon: FaToolbox,
    skills: ['Docker', 'MongoDB', 'Qdrant', 'Git', 'n8n', 'Render'],
  },
];

export interface ExperienceDetail {
  title: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  details: ExperienceDetail[];
}

export const experiences: Experience[] = [
  {
    role: 'AI Systems Engineer',
    company: 'Amani AI',
    period: 'May 2025 — Present',
    type: 'Full-time, Remote',
    details: [
      {
        title: 'Production-Grade Voice KYC Platform',
        bullets: [
          'Architected and deployed a real-time multilingual Voice KYC system (Arabic, English, Turkish)',
          'Built using Pipecat, WebRTC, low-latency STT/TTS pipelines',
          'Designed concurrent session orchestration layer with deterministic dialogue state management',
          'Reduced conversational latency via streaming optimization',
          'Implemented VAD-driven interruption handling for natural turn-taking',
        ],
      },
      {
        title: 'Multi-Modal Identity Verification',
        bullets: [
          'Integrated LLM-powered vision verification for ID + selfie validation',
          'Automated onboarding workflows with image quality validation pipeline',
          'Reduced manual review dependency significantly',
        ],
      },
      {
        title: 'AML Entity Resolution & Profile Export System',
        bullets: [
          'Designed deterministic Entity Resolution pipeline producing canonical Golden Profiles (JSONL.GZ)',
          'Implemented FULL and DELTA export modes with stable SHA256-based resourceId system',
          'Built canonical merge logic with state-based hash comparison and deterministic ordering guarantees',
          'Engineered distributed web scraping & ETL pipelines for AML screening across hundreds of sources',
        ],
      },
    ],
  },
  {
    role: 'AI Engineer',
    company: 'H&H',
    period: 'Jan 2025 — Apr 2025',
    type: 'Full-time, Remote',
    details: [
      {
        title: 'Scalable AI Chatbot Infrastructure',
        bullets: [
          'Designed scalable AI chatbot infrastructure with dynamic model switching (OpenAI / Groq)',
          'Built LLMProviderFactory abstraction with session persistence',
          'Applied ReAct reasoning framework for improved agent behavior',
          'Optimized cost vs latency routing strategy for production workloads',
        ],
      },
    ],
  },
  {
    role: 'Co-Founder',
    company: 'Aleppo Dev Community',
    period: 'April 2025 — Present',
    type: 'Community',
    details: [
      {
        title: 'Community Leadership',
        bullets: [
          'Co-founded regional AI & software engineering community',
          'Organized AI workshops and bootcamps for developers',
          'Built strategic tech partnerships across the region',
          'Mentored ML students and aspiring engineers',
        ],
      },
    ],
  },
  {
    role: 'Computer Vision Engineer',
    company: 'Freelance',
    period: 'July 2023 — Nov 2024',
    type: 'Freelance',
    details: [
      {
        title: 'Autonomous Driving & Perception Systems',
        bullets: [
          'Implemented object detection pipelines with multi-sensor fusion and 3D scene understanding',
          'Worked with LiDAR data and stereo vision systems',
          'Deployed YOLO real-time inference for autonomous perception',
          'Improved robustness under dynamic conditions',
        ],
      },
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Omdena',
    period: '2023 — Nov 2023',
    type: 'Collaborative',
    details: [
      {
        title: 'Global AI Impact Projects',
        bullets: [
          'Participated in global AI impact projects with distributed teams',
          'Feature engineering and predictive modeling for real-world datasets',
          'Distributed AI collaboration across international teams',
        ],
      },
    ],
  },
  {
    role: 'Remote Support Engineer',
    company: 'Mostaql.com',
    period: 'May 2023 — Nov 2023',
    type: 'Part-time',
    details: [
      {
        title: 'Technical Support',
        bullets: [
          'Infrastructure troubleshooting and software issue resolution',
          'International client support with high satisfaction ratings',
        ],
      },
    ],
  },
];

export interface Project {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: 'Autonomous Driving Systems',
    period: 'Mar 2024 — Aug 2024',
    description: 'Graduation project — a comprehensive autonomous driving perception system validated on industry-standard benchmarks and simulation environments.',
    achievements: [
      'Validated on KITTI dataset & CARLA simulator',
      'Trained YOLOv3 through YOLOv10, Faster RCNN, SSD models',
      'Implemented edge detection, lane detection pipelines',
      'Applied SIFT, ORB, HOG feature extraction techniques',
      'Improved 3D object detection accuracy by 30%',
      'Integrated stereo vision + LiDAR for depth perception',
    ],
    techStack: ['Python', 'YOLO', 'OpenCV', 'LiDAR', 'CARLA', 'KITTI', 'Deep Learning'],
  },
  {
    title: 'AI-Driven Document Processing',
    period: 'Oct 2024',
    description: 'An intelligent document processing system with semantic search capabilities, built for scalable enterprise deployment.',
    achievements: [
      'Built semantic search engine using Qdrant + RAG',
      'Designed modular API architecture with FastAPI',
      'MongoDB metadata management for document indexing',
      'Optimized chunking strategy for improved retrieval accuracy',
      'Docker containerized deployment for portability',
    ],
    techStack: ['Python', 'FastAPI', 'Qdrant', 'RAG', 'MongoDB', 'Docker', 'LangChain'],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    degree: "Master's in Artificial Intelligence",
    institution: 'Aleppo University',
    period: 'Sept 2025 — Present',
    current: true,
  },
  {
    degree: 'Bachelor of Science in IT Engineering',
    institution: 'Aleppo University',
    period: 'Sept 2019 — Sept 2024',
  },
];

export const volunteering = {
  role: 'Academic Content Creator',
  organization: 'Blue Bits Team',
  period: 'Mar 2023 — Sept 2024',
  description: 'Authored & proofread technical lectures for the academic community.',
};

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Professional' },
];

export const socialLinks = {
  email: 'ibrahim.alobid44@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ibrahimalobaid44/',
  github: 'https://github.com/IbrahimAlobid2',
};

export const aboutSummary = `AI Systems Engineer specializing in building production-grade intelligent systems that bridge cutting-edge AI research with real-world deployment. From real-time multilingual Voice KYC platforms to distributed AML screening pipelines, I architect solutions that operate at the intersection of voice technology, multi-modal AI, and enterprise automation.`;

export const heroTaglines = [
  'Voice Agents',
  'Multi-Modal Systems',
  'Production AI',
  'LLM Pipelines',
  'Computer Vision',
];
