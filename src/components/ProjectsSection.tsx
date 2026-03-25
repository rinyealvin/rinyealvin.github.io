import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Nova Dashboard",
    category: "Web App · UI/UX",
    year: "2025",
    description: "A real-time analytics dashboard with immersive data visualizations and dark-mode-first design.",
  },
  {
    title: "Meridian Studio",
    category: "Branding · Website",
    year: "2024",
    description: "Full brand identity and portfolio site for a boutique architecture firm.",
  },
  {
    title: "Pulse Fitness",
    category: "Mobile · Design System",
    year: "2024",
    description: "Cross-platform fitness tracking app with a comprehensive component library.",
  },
  {
    title: "Aether Commerce",
    category: "E-Commerce · Full Stack",
    year: "2023",
    description: "High-performance headless commerce platform with sub-second page loads.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="flex items-start justify-between py-10 border-b border-border">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-muted-foreground font-body text-xs tracking-widest uppercase">
              {project.category}
            </span>
            <span className="text-muted-foreground font-body text-xs">
              {project.year}
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground group-hover:text-gradient transition-all duration-500">
            {project.title}
          </h3>
          <p className="text-muted-foreground font-body text-sm md:text-base mt-3 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </p>
        </div>
        <motion.div
          className="mt-3 text-muted-foreground group-hover:text-primary transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          <span className="text-2xl">→</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-40 section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-16"
      >
        <div>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Selected Work</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Projects
          </h2>
        </div>
      </motion.div>

      <div className="border-t border-border">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
