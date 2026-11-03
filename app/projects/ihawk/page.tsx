import React from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { FaTrophy } from "react-icons/fa6";
import TechIcon from "@/components/modules/home/projects/tech-icon";

const IhawkPage = () => {
  const team = [
    { name: "Mohamad Alchekh", role: "AI + Backend, Team Leader" },
    { name: "Besmullah Nikzada", role: "AI + Backend" },
    { name: "Ömer Turhan", role: "Full-Stack" },
    { name: "Merve Subaşı", role: "Frontend" },
    { name: "Mehmet Sahaf Bayrakçı", role: "Frontend" },
  ];

  const techStack = ["Python", "Flask", "JavaScript", "Gemini API"];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mb-4">
            <LuArrowLeft /> Back to Portfolio
          </Link>
          
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              IHAWK – UAV-Based Disaster Response Platform
            </h1>
            
            <div className="inline-flex items-center self-start gap-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 px-4 py-2 rounded-full shadow-sm">
              <FaTrophy className="text-yellow-600 dark:text-yellow-500" />
              <span className="font-bold text-yellow-900 dark:text-yellow-500 text-sm">1st Place — Hackathon Winner</span>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              AI-powered platform that detects building damage from drone imagery to speed up earthquake search-and-rescue.
            </p>
          </div>

          <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden mt-8 shadow-lg">
            {/* Placeholder for Cover Image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
              [Cover Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* The Challenge */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Following an earthquake, search-and-rescue teams face the critical challenge of quickly locating severely damaged structures. We were tasked with solving this problem under an intense 24-hour hackathon time constraint, needing to process aerial imagery rapidly to direct ground teams where they are needed most.
          </p>
        </section>

        {/* What We Built */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What We Built</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            IHAWK analyzes drone-captured imagery using AI to detect building damage in real-time. By generating live sectoring maps, it allows emergency response coordinators to instantly see which areas are heavily damaged, empowering them to make faster, better-informed decisions that save lives.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map(tag => (
              <div key={tag} className="flex items-center gap-2 px-4 py-1.5 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium">
                <TechIcon tag={tag} className="w-4 h-4" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* The Team */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Team</h2>
          <div className="relative w-full h-64 sm:h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-sm">
            {/* Placeholder for Team Photo */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
              [Team Photo Placeholder]
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="font-bold text-gray-900 dark:text-white">{member.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Behind the Scenes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="relative w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
                  [Gallery Image {i + 1}]
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Win */}
        <section className="space-y-4 bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl border border-primary/10 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Win</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            After 24 hours of non-stop coding, whiteboarding, and refining our pitch, IHAWK successfully demonstrated its real-time capabilities to the judges. We were thrilled to be awarded <strong>1st place</strong> among all competing teams!
          </p>
        </section>

      </div>
    </main>
  );
}

export default IhawkPage;
