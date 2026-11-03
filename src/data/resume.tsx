import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

const imageIcon = (src: string) =>
  function ImageIcon({ className }: { className?: string }) {
    return <img src={src} alt="" aria-hidden="true" className={className} />;
  };

 export const DATA = {
  name: "Ditsu Kundu",
  initials: "DK",
  url: "",
  location: "Kolkata, India",
  locationLink: "",
  description:
    "Final-year Electronics and Communication Engineering undergraduate interested in full-stack development, AI-integrated systems, and problem solving.",
  summary:
    "I am an Electronics and Communication Engineering undergraduate at IEM/UEM, building full-stack and AI-integrated systems. I enjoy applying data structures, algorithms, and object-oriented design to practical projects.",
  avatarUrl: "/dp.jpg",
  skills: [
    { category: "Frontend", skills: [{ name: "HTML", icon: "/html.png" }, { name: "CSS", icon: "/css.jpg" }, { name: "JavaScript", icon: "/Javascript.png" }, { name: "TypeScript", icon: "/typescript.png" }, { name: "React", icon: "/react.png" }, { name: "Next.js", icon: "/nextjs.png" }] },
    { category: "Backend", skills: [{ name: "Node.js", icon: "/nodejs.png" }, { name: "PostgreSQL", icon: "/postgre.png" }, { name: "REST APIs", icon: "/rest api.png" }] },
    { category: "Languages", skills: [{ name: "Java", icon: "/java.png" }, { name: "Python", icon: "/python.png" }, { name: "SQL", icon: "/sql.jpg" }] },
    { category: "Tools", skills: [{ name: "ServiceNow", icon: "/servicenow.png" }, { name: "Git", icon: "/git.png" }, { name: "GitHub", icon: "/github.png" }, { name: "Swagger", icon: "/swagger.png" }, { name: "Canva", icon: "/canva.png" }] },
    { category: "Software", skills: [{ name: "Premiere Pro", icon: "/premiere-pro.png" }, { name: "After Effects", icon: "/after effects.png" }, { name: "Photoshop", icon: "/photoshop.png" }] },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ditsukundu/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ditleondae67",
        icon: Icons.x,

        navbar: true,
      },
      Devfolio: {
        name: "Devfolio",
        url: "https://devfolio.co/@ditsukundu",
        icon: imageIcon("/devfolio.png"),
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Ditsu08/",
        icon: imageIcon("/leetcode.png"),
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IBM SkillsBuild / BharatCares",
      href: "https://skillsbuild.org/",
      badges: [],
      location: "Remote",
      title: "Data Analytics with AI Intern",
      logoUrl: "/IBM.png",
      start: "Aug 2026",
      end: "Sep 2026",
      description:
        "Cleaned and analyzed a large dataset, explored model predictions, and used generative AI to forecast possible outcomes. Used IBM Bob to assist with coding tasks and project documentation.",
    },
    {
      company: "IEM UEM Generative AI Centre of Excellence",
      href: "https://iem.edu.in/",
      badges: [],
      location: "Kolkata, India",
      title: "Generative AI Intern",
      logoUrl: "/iem uem coe.jpg",
      start: "September 2025",
      end: "June 2026",
      description:
        "Built an AI-powered SQL query generator in an agile team, translating natural language into SQL with a Qwen2.5 and Gemini pipeline, including feedback-driven query regeneration.",
    },
    {
      company: "Jadavpur University",
      href: "https://jadavpuruniversity.in/",
      badges: [],
      location: "Kolkata, India",
      title: "VLSI Trainee",
      logoUrl: "/jadavpur.jpg",
      start: "May 2025",
      end: "July 2025",
      description:
        "Simulated more than 15 digital VLSI circuits in Xilinx Vivado, verified designs with test benches, and programmed an Artix-7 FPGA using Verilog for real-time validation.",
    },
  ],
  education: [
    {
      school: "Institute of Engineering & Management / University of Engineering & Management",
      href: "https://iem.edu.in/",
      degree: "B.Tech, Electronics & Communication Engineering | GPA: 8.62/10",
      logoUrl: "/iem.png",
      start: "July 2023",
      end: "Expected May 2027",
    },
    {
      school: "St. Augustine's Day School",
      href: "#",
      degree: "Class XII | ISC | 86.33%",
      logoUrl: "/augustine logo.png",
      start: "May 2021",
      end: "May 2023",
    },
    {
      school: "St. Claret School",
      href: "#",
      degree: "Class X | ICSE | 86.9%",
      logoUrl: "/claret.png",
      start: "May 2021",
      end: "May 2021",
    },
  ],
  projects: [
    {
      title: "Queryra - AI-Powered Data Querying Platform",
      href: "https://github.com/LeonDae/Queryra.git",
      dates: "Academic project",
      active: true,
      description:
        "A full-stack application and standalone command-line interface that transforms natural-language questions into validated, read-only SQL using Gemini and a schema-aware generation pipeline. Includes CSV schema discovery, SQL safety validation, and local DuckDB execution, with command-line dataset selection and support for user-provided Gemini API keys.",
      technologies: ["Gemini", "SQL", "DuckDB", "CSV", "Full-Stack", "CLI"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/LeonDae/Queryra.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Watt-Watch Phantom Cut",
      href: "https://github.com/LeonDae/WattWatch_PhantomCut",
      dates: "Hackathon winner",
      active: true,
      description:
        "An intelligent energy auditor that detects 10+ electrical devices in real time with YOLOv8 and triggers power-wastage alerts through an ESP32. Winner at Frost Hacks Season 2, evaluated by TCS.",
      technologies: ["YOLOv8", "ESP32", "Computer Vision", "IoT"],
      links: [
        {
          type: "Google Drive",
          href: "https://drive.google.com/file/d/19VBPAbT6kg-GUzp58_pjIF7JSLG0pg9G/view?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "",
      video: "/PhantomCutVideo/PhantomCutShort.mp4",
    },
    {
      title: "TermShield",
      href: "https://termshield-tyii.vercel.app/",
      dates: "Academic project",
      active: true,
      description:
        "An AI contract risk analyzer for Indian freelancers. It uses LLM analysis to flag risky clauses, summarize contracts, and draft replies, with retrieval-augmented generation and vector search grounded in reference contract templates.",
      technologies: ["LLMs", "RAG", "Embeddings", "Vector Search", "Full-Stack Development"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/LeonDae/termshield.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/termshield-preview.mp4",
    },
  ],
  hackathons: [
    {
      title: "FrostHack Season 2",
      award: "Winner · Evaluated by TCS",
      image: "/frosthacks.jpg",
      partnerLogo: "/tcs.jpg",
      partnerAlt: "TCS",
      description: "Led a four-member team to first place with PhantomCut, an intelligent energy-monitoring solution. Developed the software pipeline and integrated it with ESP32 hardware, combining occupancy detection and energy monitoring to identify phantom energy consumption and reduce unnecessary electricity usage.",
    },
    {
      title: "Diversion 2K26",
      award: "Event Organizer · MLH Hackathon",
      image: "/diversion.jpg",
      partnerLogo: "/MLH.png",
      partnerAlt: "Major League Hacking",
      description: "Managed technical operations, team coordination, registrations, and participant support, helping deliver a seamless hackathon experience for 100+ teams and 300+ participants.",
    },
    {
      title: "HackNex Season 2",
      award: "Hackathon Mentor · MLH",
      image: "/invoccon logo.jpg",
      partnerLogo: "/MLH.png",
      partnerAlt: "Major League Hacking",
      description: "Guided teams through technical challenges, idea refinement, and project development, supporting participants in transforming concepts into working solutions at an event featuring 110+ teams and 400+ participants.",
    },
    {
      title: "ISMAW Sustainability Hackathon",
      award: "Runner-up · Internal College Hackathon",
      image: "/sustainability.jpg",
      description: "Proposed a sensor-based pipeline leakage detection system for municipal and household water supply networks. Combined ESP32, DHT11 temperature sensing, and software-based recognition to identify potential leaks and minimise water wastage through smarter monitoring.",
    },
  ],
} as const;

