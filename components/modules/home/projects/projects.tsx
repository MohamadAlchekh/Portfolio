import DottedHeader from "@/components/ui/dotted-header";
import { octokit } from "@/services/octokit";
import ProjectCard from "./project-card";

export type ProjectConfig = {
  image?: string | null;
  images?: string[];
  videoUrl?: string;
  liveDemoUrl?: string;
  liveDemoButtonText?: string;
  tags: string[];
  owner?: string;
  customTitle?: string;
  customTagline?: string;
  customDescription?: string;
  role?: string;
  badge?: string;
  hasLevel3?: boolean;
  achievement?: string;
  isPrivate?: boolean;
  noGithub?: boolean;
  privateMessage?: string;
};

const projects: Record<string, ProjectConfig> = {
  "ozbag-production-api": {
    image: "/images/projects/Ozbag Production API/main.png",
    tags: ["Laravel", "MSSQL"],
    customTitle: "Özbağ Production API",
    customTagline: "Production tracking API for Özbağ, built during my internship",
    isPrivate: true,
    privateMessage: "Private Internship Project",
    hasLevel3: false,
  },
  "entry-exit-app": { 
    image: "/images/projects/Entry-Exit/Screenshot 2026-08-22 224712.png", 
    images: [
      "/images/projects/Entry-Exit/slider/iPhone-14-Plus-gir_cik_panel.test (1).png",
      "/images/projects/Entry-Exit/slider/iPhone-14-Plus-gir_cik_panel.test.png",
      "/images/projects/Entry-Exit/slider/Screenshot 2026-08-22 234226.png",
      "/images/projects/Entry-Exit/slider/Screenshot 2026-08-22 234255.png",
      "/images/projects/Entry-Exit/slider/Screenshot 2026-08-22 234428.png",
      "/images/projects/Entry-Exit/slider/Screenshot 2026-08-22 234503.png"
    ],
    tags: ["Flutter", "Dart", "Laravel"], 
    customTitle: "Entry/Exit App",
    customTagline: "QR and GPS attendance app for Özbağ employees, built during my internship",
    isPrivate: true,
    privateMessage: "Private Internship Project",
    hasLevel3: false,
  },
  ihawk: {
    owner: "MohamadAlchekh",
    image: "/images/projects/IHAWK/main.jpeg", 
    tags: ["Python", "Flask", "JavaScript", "Gemini API"], 
    customTitle: "IHAWK",
    customTagline: "AI drone damage detection for earthquake rescue",
    badge: "1st place",
    hasLevel3: true,
  },
  hassil: {
    owner: "MohamadAlchekh",
    image: "/images/projects/Hassil/salamhack.Alchekh.png",
    liveDemoUrl: "https://hassil-cash.vercel.app/",
    tags: ["ASP.NET Core", "PostgreSQL", "TypeScript", "Docker"],
    customTitle: "Hassil",
    customTagline: "Turns invoices into cash within hours",
    badge: "7th/132",
    hasLevel3: true,
  },
  "l-timer": {
    image: "/images/projects/l-timer/L-timer.png",
    images: [
      "/images/projects/l-timer/slider/L-timer.png",
      "/images/projects/l-timer/slider/Screenshot 2026-10-11 150242.png",
      "/images/projects/l-timer/slider/Screenshot 2026-10-15 133344.png",
      "/images/projects/l-timer/slider/Screenshot 2026-10-23 012037.png",
      "/images/projects/l-timer/slider/Screenshot 2026-10-23 012108.png",
    ],
    tags: ["Laravel", "MySQL", "Alpine.js", "Tailwind CSS"],
    customTitle: "L-Timer",
    customTagline: "Psychometric assessments for project-management students, built for a professor in Poland.",
    liveDemoUrl: "https://l-timer.com",
    liveDemoButtonText: "Visit Live Site",
    noGithub: true,
    hasLevel3: false,
  },
  "document-management-system-": { 
    owner: "MohamadAlchekh",
    image: "/images/projects/Document Management System/log-in.png", 
    images: [
      "/images/projects/Document Management System/slider/Main-Page.png",
      "/images/projects/Document Management System/slider/Account-Management.png",
      "/images/projects/Document Management System/slider/Document-Management.png",
      "/images/projects/Document Management System/slider/Department-Management.png",
      "/images/projects/Document Management System/slider/Staff-Info-Management.png",
      "/images/projects/Document Management System/slider/Overdue-Trusts-View.png",
      "/images/projects/Document Management System/slider/File-Type-Management.png",
      "/images/projects/Document Management System/slider/Trust-Management.png",
      "/images/projects/Document Management System/slider/Main_page.png"
    ].sort(() => 0.5 - Math.random()),
    tags: ["C#", "Windows Forms", "MySQL"],
    customTitle: "Document Management System",
    customTagline: "Desktop app for tracking university document archives",
    badge: "1st in class",
    hasLevel3: false,
  },
  "HilalAi": {
    owner: "MohamadAlchekh",
    image: "/images/projects/Hilal AI/Blue and White Simple Illustrated Background Plaid Wraparound Mug.png",
    images: [
      "/images/projects/Hilal AI/slider/1.png",
      "/images/projects/Hilal AI/slider/1743551024011.jpeg",
      "/images/projects/Hilal AI/slider/1743551024846.jpeg",
      "/images/projects/Hilal AI/slider/1743551024892.jpeg",
      "/images/projects/Hilal AI/slider/1743551024945.jpeg"
    ],
    tags: ["JavaScript", "PHP", "Laravel"],
    customTitle: "HilalAI",
    customTagline: "AI study assistant that turns notes into summaries and quizzes",
    hasLevel3: false,
  },
  Kampus_Yanimda: {
    owner: "MohamadAlchekh",
    image: "https://img.youtube.com/vi/EjCmgD9h6P8/maxresdefault.jpg",
    tags: ["ASP.NET MVC", "MSSQL", "JavaScript"],
    customTitle: "Campus Nearby",
    customTagline: "Community and event platform for students",
    hasLevel3: false,
  },
};

const ProjectsModule = async () => {
  const ghProjects = await Promise.all(
    Object.keys(projects).map(async (project) => {
      const config = projects[project];
      if (config.isPrivate || config.noGithub) {
        return {
          project: {
            data: {
              id: project as any,
              name: config.customTitle || project,
              description: config.customTagline || "",
              html_url: config.liveDemoUrl || "#",
            } as any
          },
          config,
        };
      }
      return {
        project: await octokit.rest.repos.get({
          owner: config.owner || "MohamadAlchekh",
          repo: project,
        }),
        config,
      };
    }),
  );

  return (
    <section id="projects" className="space-y-4">
      <DottedHeader>Projects</DottedHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ghProjects.map(({ project: { data }, config }) => {
          return <ProjectCard key={data.id} project={data} config={config} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsModule;
