"use client";

import { type GhRepo } from "@/services/octokit";
import { Transition, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import { LuFileCode2, LuX, LuArrowRight, LuExternalLink } from "react-icons/lu";
import { FaTrophy } from "react-icons/fa6";
import Link from "next/link";
import TechIcon from "./tech-icon";
import { ProjectConfig } from "./projects";

interface ProjectDialogProps {
  project: GhRepo;
  config: ProjectConfig;
  open: boolean;
  onClose: () => void;
}

function ProjectDialog({ project, config, open, onClose }: ProjectDialogProps) {
  const title = config.customTitle || project.name;
  const description = config.customTagline || project.description || "";
  const hasLevel3 = config.hasLevel3 === true;

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    if (open) {
      setCurrentImage(0);
    }
  }, [open, config]);

  const hasImages = config.images && config.images.length > 0;
  const displayImages = hasImages ? config.images! : (config.image ? [config.image] : []);

  const level3Href = (config.customTitle || project.name).toLowerCase().includes("ihawk")
    ? "/projects/ihawk"
    : `/projects/${project.name.toLowerCase()}`;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" open={open} onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 text-left align-middle shadow-2xl transition-all">
                <button
                  type="button"
                  className="absolute right-3.5 top-3.5 rounded-full p-1.5 bg-black/50 text-white hover:bg-black/70 transition-all z-10"
                  onClick={onClose}
                >
                  <LuX size={18} />
                </button>

                {displayImages.length > 0 ? (
                  <div className="relative h-52 sm:h-60 w-full shrink-0 group bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={displayImages[currentImage]}
                      alt={title}
                      fill
                      className="object-contain object-center transition-opacity duration-300"
                    />
                    {displayImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1)); }}
                          className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110 z-10"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1)); }}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110 z-10"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                          {displayImages.map((_, idx) => (
                            <button
                              type="button"
                              key={idx}
                              onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                              className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? "bg-white scale-110 shadow-sm" : "bg-white/50 hover:bg-white/80"}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="relative h-52 sm:h-60 w-full shrink-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 font-medium">No Preview</span>
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <DialogTitle
                      as="h3"
                      className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
                    >
                      {title}
                    </DialogTitle>
                    {config.badge && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-yellow-950 shadow-sm">
                        <FaTrophy className="text-yellow-900" />
                        <span>{config.badge}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {config.tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium shadow-sm"
                        >
                          <TechIcon tag={tag} className="w-3.5 h-3.5" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    {hasLevel3 && (
                      <Link href={level3Href} className="flex-1">
                        <button
                          type="button"
                          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all"
                        >
                          <span>View Details</span>
                          <LuArrowRight />
                        </button>
                      </Link>
                    )}

                    {config.liveDemoUrl && (
                      <Link href={config.liveDemoUrl} target="_blank" className="flex-1">
                        <button
                          type="button"
                          className={`w-full flex items-center justify-center gap-2 ${
                            config.liveDemoButtonText === "Visit Live Site" || config.noGithub
                              ? "bg-primary hover:bg-primary/90 text-white shadow-sm shadow-primary/20"
                              : "bg-green-600 hover:bg-green-700 text-white shadow-sm shadow-green-600/20"
                          } px-4 py-2.5 rounded-xl font-medium text-sm transition-all`}
                        >
                          <LuExternalLink />
                          <span>{config.liveDemoButtonText || "Live Demo"}</span>
                        </button>
                      </Link>
                    )}

                    {!config.isPrivate && !config.noGithub && (
                      <div className="flex-1">
                        <Link href={project.html_url} target="_blank" className="flex-1 w-full">
                          <button
                            type="button"
                            className={`w-full flex items-center justify-center gap-2 ${
                              !hasLevel3 && !config.liveDemoUrl
                                ? "bg-primary hover:bg-primary/90 text-white"
                                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            } px-4 py-2.5 rounded-xl font-medium text-sm transition-all`}
                          >
                            <LuFileCode2 />
                            <span>GitHub</span>
                          </button>
                        </Link>
                      </div>
                    )}

                    {config.isPrivate && (
                      <div className="flex-1">
                        <div className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-4 py-2.5 rounded-xl font-medium text-sm cursor-not-allowed">
                          <span>{config.privateMessage || "Private Internship Project"}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ProjectDialog;
