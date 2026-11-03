"use client";

import Card from "@/components/ui/card";
import type { GhRepo } from "@/services/octokit";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTrophy, FaCirclePlay } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import ProjectDialog from "./project-dialog";
import { useDisclosure } from "@/utils/hooks/use-disclosure";
import TechIcon from "./tech-icon";
import { ProjectConfig } from "./projects";

interface ProjectCardProps {
  project: GhRepo;
  config: ProjectConfig;
}

function ProjectCard({ project, config }: ProjectCardProps) {
  const { open, onClose, onOpen } = useDisclosure();
  
  const title = config.customTitle || project.name;
  const tagline = config.customTagline || project.description;

  return (
    <>
      <ProjectDialog
        project={project}
        config={config}
        open={open}
        onClose={onClose}
      />
      <Card 
        className="flex flex-col h-full space-y-4 cursor-pointer transition-all hover:brightness-95 active:scale-95 hover:shadow-lg dark:hover:shadow-primary/5"
        onClick={onOpen}
        tabIndex={0}
      >
        <div className="relative h-48 w-full group rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          {config.badge && (
            <div className="absolute top-2.5 right-2.5 z-10 bg-yellow-400 text-yellow-950 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-md backdrop-blur-sm">
              <FaTrophy className="text-yellow-900" />
              <span>{config.badge}</span>
            </div>
          )}

          {config.image ? (
            <>
              <Image
                src={config.image}
                alt={title}
                fill
                className="object-contain object-center rounded-lg"
              />
              {config.videoUrl && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                  <FaCirclePlay className="text-white/90 drop-shadow-lg w-12 h-12 group-hover:scale-110 transition-transform" />
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500 font-medium text-sm">No Preview</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-col flex-grow space-y-3">
          <div className="flex justify-between items-start min-h-[3.5rem]">
            <h3 className="text-xl font-bold line-clamp-2 pr-4 flex-1">
              {title}
            </h3>
            {!config.isPrivate && !config.noGithub && (
              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors shrink-0 pt-0.5"
                onClick={(e) => e.stopPropagation()}
                title="GitHub Repo"
              >
                <FaGithub size={22} />
              </a>
            )}
            {config.noGithub && config.liveDemoUrl && (
              <a
                href={config.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors shrink-0 pt-0.5"
                onClick={(e) => e.stopPropagation()}
                title="Visit Live Site"
              >
                <LuExternalLink size={20} />
              </a>
            )}
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 min-h-[2.5rem]">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {config.tags.slice(0, 5).map((tag) => (
              <div
                key={tag}
                className="p-1.5 sm:p-2 bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-sm transition-all hover:scale-110 cursor-default flex items-center justify-center"
                title={tag}
              >
                <TechIcon tag={tag} className="w-4 h-4" />
              </div>
            ))}
            {config.tags.length > 5 && (
              <div className="p-1.5 sm:p-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full text-[10px] font-bold w-7 h-7 sm:w-8 sm:h-8">
                +{config.tags.length - 5}
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProjectCard;
