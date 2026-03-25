import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "C++", category: "Languages" },
  { name: ".NET", category: "Frameworks" },
  { name: "Java", category: "Languages" },
  { name: "Node.js", category: "Runtime" },
  { name: "React", category: "Frameworks" },
  { name: "Vue", category: "Frameworks" },
  { name: "Snaplogic", category: "Integration" },
  { name: "Server Deployment", category: "DevOps" },
  { name: "CI/CD Pipelines", category: "DevOps" },
  { name: "Spring Boot", category: "Frameworks" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-40 section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Skills</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
          What I <span className="text-gradient">Know</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap gap-4 mt-16">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="group relative px-6 py-4 rounded-xl border border-border bg-secondary/30 cursor-default transition-colors duration-300 hover:border-primary/50 hover:bg-secondary/60"
          >
            <p className="font-display text-lg font-semibold text-foreground">{skill.name}</p>
            <p className="text-muted-foreground text-xs font-body tracking-wide uppercase mt-1">{skill.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
