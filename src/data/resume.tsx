import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, DownloadIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Yuvraj",
  initials: "Y",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a software engineer who mostly works in web development, XR, and game dev.",
  summary:
    "I usually work across three distinct tech stacks—because curiosity never let me stay idle. Most days, I'm doing full-stack development, helping businesses improve their websites or build better digital products using web and XR tech.\n\nWhen I'm not doing that, I'm usually building games, jumping into hackathons, or messing around with ideas just to see if they work.\n\nI didn't get into programming with a big plan. I started because I was curious, and that curiosity still drives how I work today. My process is simple: try something new, break it, learn from it, and build it better the next time.\n\nThat mindset shows up in everything I build—whether it's a website, an experiment, or a side project. If you share the same curiosity or like my work and want to hire me, feel free to connect.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://drive.google.com/file/d/1P-IEY3fIMrT2JqiCAcjrmzXD93-p7Zor/view?usp=sharing", icon: DownloadIcon, label: "Resume" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yuvrajsharmaaa",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yuvrajsharma03/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bacardisharma",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@TheEngineeRooom",
        icon: Icons.youtube,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/work4bacardi",
        icon: Icons.instagram,
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
      company: "Embrizon Technologies",
      href: "https://embrizon.com",
      badges: [],
      location: "Hyderabad, India",
      title: "AI Intern",
      logoUrl: "/embrizon.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Contributed to AI-driven systems for embedded devices and low-cost automation. Introduced to Python Libraries and Frameworks.",
    },
    {
      company: "ArchDo",
      badges: [],
      href: "https://archdo.in",
      location: "New Delhi, India",
      title: "Freelance",
      logoUrl: "/archdo.png",
      start: "September 2024",
      end: "Ongoing",
      description:
        "Worked with teams active participation in hackathons and focused on real world applications and use cases. Explored full stack development with a focus on Web3 and XR.",
    },
    {
      company: "TheEngineeRoom",
      badges: [],
      href: "https://www.youtube.com/@TheEngineeRooom",
      location: "New Delhi, India",
      title: "Lead",
      logoUrl: "",
      start: "January 2025",
      end: "Ongoing",
      description:
        "Led a college game dev community; organized 7+ workshops (Unity, Godot, Blender and parametric design).",
    },
  ],
  education: [
    {
      school: "APEEJAY SCHOOL PANCHSHEEL PARK",
      href: "https://www.apeejay.edu/panchsheel/",
      degree: "Science Stream (PCM)",
      logoUrl: "/apeejay.jpg",
      start: "2009",
      end: "2023",
    },
    {
      school: "Manav Rachna International Institute of Research and Studies",
      href: "https://manavrachna.edu.in/mriirs",
      degree: "Bachelor of Technology AIML specialization",
      logoUrl: "/mriirs.png",
      start: "2023",
      end: "2027",
    },
    
  ],
  projects: [
    {
      title: "ResuMax",
      href: "https://resu-max-omega.vercel.app/",
      dates: "November 2025 - January 2026",
      active: true,
      description:
        "An intelligent web application that automates resume evaluation using NLP and Machine Learning. It extracts skills, experience, and education, predicts ATS scores, and provides personalized feedback using NER, TF-IDF, and semantic analysis.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Machine Learning",
        "Natural Language Processing",
        "TF-IDF",
        "Named Entity Recognition (NER)",
        "Semantic Analysis",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://resu-max-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/yuvrajsharmaaa/ResuMax",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Lorri",
      href: "https://github.com/yuvrajsharmaaa/Lorri",
      dates: "Jan 2025 - Mar 2025",
      active: true,
      description:
        "Lorri is a revolutionary platform that combines AI-powered music generation with Solana blockchain to create unique music tracks from text descriptions and mint them as verifiable NFTs.",
      technologies: [
        "AI Music Generation",
        "Solana Blockchain",
        "NFT Minting",
        "Node.js",
        "PostgreSQL",
        "Next.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://lorri-6td5.vercel.app/auth/sign-in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/yuvrajsharmaaa/Lorri",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TerminalCraft",
      href: "https://github.com/yuvrajsharmaaa/Terminacraft",
      dates: "Feb 2025 - Apr 2025",
      active: true,
      description:
        "TerminalCraft is a humorous, interactive Minecraft-style terminal game for the web. Chat with a sassy version of Steve who roasts users, triggers random Minecraft events, and responds to commands in a retro terminal interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      links: [
        {
          type: "Website",
          href: "https://terminalcraft-azure.vercel.app/mc-terminal.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/yuvrajsharmaaa/Terminacraft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://private-user-images.githubusercontent.com/154763797/452038640-eb5d3144-efd8-47ec-8652-f6cc68b73884.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njg3NzIzNTcsIm5iZiI6MTc2ODc3MjA1NywicGF0aCI6Ii8xNTQ3NjM3OTcvNDUyMDM4NjQwLWViNWQzMTQ0LWVmZDgtNDdlYy04NjUyLWY2Y2M2OGI3Mzg4NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDExOFQyMTM0MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNWY1ODc4ODYwMjQyYjdkOWVjYzdkMzU4N2Y1ZTI4ZWUxZjVlODNmMTJkNTI2NDZlOWYzZDM2NTcwZjVhOGY5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.PLpr6etRH0rR2lLm_qCb0bzWpRzcSewtA5TDC_UXXBk",
      video: "",
    },
    {
      title: "Cattle Classification using DL",
      href: "https://colab.research.google.com/drive/1yg7HOjnf747Lv9Y6uCdBjK5XLdjmtPHL?usp=sharing",
      dates: "April 2024 - September 2025",
      active: true,
      description:
        "Built a deep learning–based cow patch detection system using a pre-trained ResNet50 model. Implemented image preprocessing, model fine-tuning, training with Adam optimizer and learning rate scheduling, and evaluated performance using accuracy, precision, recall, F1-score, and confusion matrices with visualized training metrics.",
      technologies: [
        "Python",
        "PyTorch",
        "Torchvision",
        "NumPy",
        "Matplotlib",
        "scikit-learn",
      ],
      links: [
        {
          type: "Colab Notebook",
          href: "https://colab.research.google.com/drive/1yg7HOjnf747Lv9Y6uCdBjK5XLdjmtPHL?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Aptos Hackathon",
      dates: "October 2025",
      location: "New delhi, India",
      description:
        "SplitWise DApp makes it easy to split expenses with friends using blockchain technology. No more awkward conversations about who owes what - let the blockchain handle it with gasless transactions!",
      image: "",
      links: [
        {
          title: "github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yuvrajsharmaaa/SmoothSplit",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://smooth-split.vercel.app/",
        },
      ],
    },
    {
      title: "Monad Blitz Delhi",
      dates: "January 2026",
      location: "New Delhi, India",
      description:
        "A full-stack decentralized platform for music remix competitions built on the Monad blockchain, featuring on-chain voting, prize pools, and real-time leaderboards. Includes NFT remix minting, automatic prize distribution, and IPFS integration.",
      image:
        "https://opengraph.githubassets.com/c621d169d611c44c1dd9c946f41e505ca65e7d8a311e64fb62a9badfada9c76b/yuvrajsharmaaa/Sonad",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yuvrajsharmaaa/Sonad",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://monad-blitz-delhi-bacardisharma.vercel.app/",
        },
      ],
    },
    {
      title: "TON hacathon",
      dates: "October 2025",
      location: "Online",
      description:
        "A blockchain-based job platform connecting daily wage workers with employers via the TON blockchain. Enables trusted job postings, on-chain reputation, and escrowed Toncoin payments through Telegram integration.",
      image:
        "https://imgs.search.brave.com/2sERYmkVoaytGKKyhO10mOcSzZ2ohV06JRpgnl0swWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbHRj/b2luc2JveC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDEvdG9uLWZ1bGwt/dG9uY29pbi1sb2dv/LTMwMHgxMTUud2Vi/cA",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yuvrajsharmaaa/WajoB",
        },
      ],
    },
    {
      title: "EthGlobal New Delhi",
      dates: "September 2025",
      location: "New Delhi, India",
      description:
        "A dynamic blockchain platform for real estate tokenization with ERC-3643 compliance and advanced lease management. Features configurable property creation, rent-to-own conversions, and real-time compliance tracking.",
      image:
        "https://imgs.search.brave.com/8-DIpegUueTv2c8c16ewrFdUV3MeNkE1sn9Yt5Bzymw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly95dDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3l0/Yy9BSWRyb19rYUp0/VVVpQ2lMOGhKZVRu/VEJkN2NoVXJoWm5l/ZHVWRnljRVVFeG1l/UVpwekk9czkwMC1j/LWstYzB4MDBmZmZm/ZmYtbm8tcmo",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yuvrajsharmaaa/ArEstate",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ar-estate.vercel.app",
        },
      ],
    },
  ],
} as const;
