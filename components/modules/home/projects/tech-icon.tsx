import {
  SiFlutter,
  SiDart,
  SiCplusplus,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiQt,
  SiSpring,
  SiRust,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiAlpinedotjs,
  SiChartdotjs,
  SiGooglegemini,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";

interface TechIconProps {
  tag: string;
  className?: string;
}

export default function TechIcon({ tag, className = "" }: TechIconProps) {
  const normalizedTag = tag.toLowerCase().trim();
  
  switch (normalizedTag) {
    case "flutter":
      return <SiFlutter className={className} color="#02569B" />;
    case "dart":
      return <SiDart className={className} color="#0175C2" />;
    case "c++":
      return <SiCplusplus className={className} color="#00599C" />;
    case "c#":
    case "asp.net core":
    case "asp.net mvc":
      return <img src="/icons/csharp.svg" alt="C#" className={className} />;
    case "windows forms":
      return <FaWindows className={className} color="#0078D6" />;
    case "mysql":
      return <SiMysql className={className} color="#4479A1" />;
    case "mssql":
      return <img src="/icons/mssql.svg" alt="MSSQL" className={className} />;
    case "gemini api":
    case "gemini":
      return <SiGooglegemini className={className} color="#1BA1E2" />;
    case "react":
    case "react native":
      return <SiReact className={className} color="#61DAFB" />;
    case "typescript":
      return <SiTypescript className={className} color="#3178C6" />;
    case "next.js":
      return <SiNextdotjs className={className} />;
    case "tailwind":
    case "tailwind css":
    case "tailwindcss":
      return <SiTailwindcss className={className} color="#06B6D4" />;
    case "python":
      return <SiPython className={className} color="#3776AB" />;
    case "qt":
      return <SiQt className={className} color="#41CD52" />;
    case "java":
      return <FaJava className={className} color="#007396" />;
    case "spring":
      return <SiSpring className={className} color="#6DB33F" />;
    case "rust":
      return <SiRust className={className} />;
    case "php":
      return <SiPhp className={className} color="#777BB4" />;
    case "laravel":
    case "laravel 12":
    case "blade":
      return <SiLaravel className={className} color="#FF2D20" />;
    case "alpine.js":
    case "alpine":
    case "alpinedotjs":
      return <SiAlpinedotjs className={className} color="#8BC0D0" />;
    case "chart.js":
    case "chartjs":
      return <SiChartdotjs className={className} color="#FF6384" />;
    case "javascript":
      return <SiJavascript className={className} color="#F7DF1E" />;
    case "flask":
      return <SiFlask className={className} />;
    case "postgresql":
      return <SiPostgresql className={className} color="#4169E1" />;
    case "docker":
      return <SiDocker className={className} color="#2496ED" />;
    default:
      return null;
  }
}
