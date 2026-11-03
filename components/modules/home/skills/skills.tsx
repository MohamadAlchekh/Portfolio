import DottedHeader from "@/components/ui/dotted-header";
import SkillItem from "./skill-item";
import colors from "tailwindcss/colors";

const skills = {
  PHP: ["php-colored", "https://www.php.net/", colors.indigo[400]],
  Laravel: ["laravel-colored", "https://laravel.com/", colors.red[500]],
  "C#": ["/icons/csharp.svg", "https://learn.microsoft.com/en-us/dotnet/csharp/", colors.purple[600]],
  "ASP.NET": ["/icons/dotnetcore.svg", "https://dotnet.microsoft.com/apps/aspnet", colors.purple[500]],
  Python: ["python-colored", "https://www.python.org/", colors.yellow[500]],
  Flask: ["flask-colored", "https://flask.palletsprojects.com/", colors.gray[600]],
  JavaScript: [
    "javascript-colored",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    colors.yellow[500],
  ],
  Dart: ["dart-colored", "https://dart.dev/", colors.teal[500]],
  Flutter: ["flutter-colored", "https://flutter.dev/", colors.sky[400]],
  "Alpine.js": ["/icons/alpinejs.svg", "https://alpinejs.dev/", colors.cyan[400]],
  HTML5: [
    "html5-colored",
    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    colors.orange[700],
  ],
  CSS3: ["css3-colored", "https://www.w3.org/TR/CSS/#css", colors.blue[800]],
  TailwindCSS: [
    "tailwindcss-colored",
    "https://tailwindcss.com/",
    colors.teal[500],
  ],
  Bootstrap: [
    "bootstrap-colored",
    "https://getbootstrap.com/",
    colors.purple[700],
  ],
  MySQL: ["mysql-colored", "https://www.mysql.com/", colors.blue[500]],
  MSSQL: ["/icons/mssql.svg", "https://www.microsoft.com/en-us/sql-server", colors.red[600]],
  Firebase: [
    "firebase-colored",
    "https://firebase.google.com/",
    colors.orange[400],
  ],
  Docker: ["docker-colored", "https://www.docker.com/", colors.blue[400]],
  Git: ["git-colored", "https://git-scm.com/", colors.orange[600]],
  Linux: ["linux-colored", "https://www.kernel.org/", colors.yellow[600]],
};

const SkillsModule = () => {
  return (
    <section id="skills" className="space-y-6">
      <DottedHeader>Skills</DottedHeader>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Object.entries(skills).map(([skill, [icon, link, color]]) => (
          <SkillItem
            key={skill}
            src={icon}
            link={link}
            skill={skill}
            color={color}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsModule;
