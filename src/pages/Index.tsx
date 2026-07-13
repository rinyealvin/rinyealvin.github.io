import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const ToolsSection = lazy(() => import("@/components/ToolsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const CVSection = lazy(() => import("@/components/CVSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={null}>
        <ToolsSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CVSection />
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Index;
