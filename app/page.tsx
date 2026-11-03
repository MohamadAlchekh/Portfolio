import BioModule from "@/components/modules/home/bio";
import ConnectModule from "@/components/modules/home/connect";
import ProjectsModule from "@/components/modules/home/projects/projects";
import SkillsModule from "@/components/modules/home/skills/skills";
import Card from "@/components/ui/card";
import Image from "next/image";
import { LuFileText, LuMapPin } from "react-icons/lu";

export default function Home() {
  return (
    <main className="space-y-20 mb-10">
      <section className="flex flex-col items-center md:items-end">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <Image
            src="/images/profile.jpg"
            alt="Profile Image"
            height={200}
            width={200}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <Card className="space-y-2">
              <h3 className="text-2xl font-semibold">Mohamad Alchekh</h3>
              <h4 className="md:text-lg">A Backend Developer</h4>
              <div className="md:hidden flex items-center justify-end gap-2 p-1">
                <LuMapPin />
                <p>Bydgoszcz, Poland</p>
              </div>
            </Card>
            <a
              href="/Resume/My%20Resume%20-%20EN%20%20.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 self-center md:self-start px-3 py-1.5 text-sm rounded-lg transition-all hover:brightness-95 bg-gradient-to-r from-pink-100 to-gray-50 dark:from-secondary-background-dark dark:to-background-dark to-95%"
            >
              <LuFileText className="size-3.5" />
              Resume
            </a>
          </div>
        </div>
        <Card className="hidden md:flex items-center gap-2 p-1">
          <LuMapPin />
          <p>Bydgoszcz, Poland</p>
        </Card>
      </section>

      <BioModule />
      <ConnectModule />
      <SkillsModule />
      <ProjectsModule />
    </main>
  );
}
