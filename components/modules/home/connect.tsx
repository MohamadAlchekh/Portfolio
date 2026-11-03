import DottedHeader from "@/components/ui/dotted-header";
import { BsMedium, BsYoutube } from "react-icons/bs";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const links = {
  GitHub: {
    link: "https://github.com/MohamadAlchekh",
    icon: LuGithub,
  },
  LinkedIn: {
    link: "https://www.linkedin.com/in/mohamad-alchekh/",
    icon: LuLinkedin,
  },
  YouTube: {
    link: "https://www.youtube.com/@Mohammed_alchekh",
    icon: BsYoutube,
  },
  Medium: {
    link: "https://medium.com/@mmmhamod12345",
    icon: BsMedium,
  },
  "m.alchekh@outlook.com": {
    link: "mailto:m.alchekh@outlook.com",
    icon: LuMail,
  },
};

const ConnectModule = () => {
  return (
    <section id="connect" className="space-y-5">
      <DottedHeader>Connect</DottedHeader>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Object.entries(links).map(([name, { link, icon: Icon }]) => (
          <div
            key={name}
            className="p-3 rounded-lg transition-all hover:brightness-95 bg-gradient-to-r from-pink-100 to-gray-50 dark:from-secondary-background-dark dark:to-background-dark to-95%"
          >
            <a
              href={link}
              className="flex items-center gap-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              <p>{name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConnectModule;
