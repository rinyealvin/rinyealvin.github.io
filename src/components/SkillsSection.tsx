import { motion, useInView } from "framer-motion";
import { useRef } from "react";

  const skills = [
    // Languages
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "C++", category: "Languages" },

    // Frameworks & Libraries
    { name: "Spring Boot", category: "Frameworks" },
    { name: "Vue", category: "Frameworks" },
    { name: "React", category: "Frameworks" },
    { name: ".NET", category: "Frameworks" },

    // Runtime & Backend
    { name: "Node.js", category: "Runtime" },
    { name: "REST API Development", category: "Backend" },
    { name: "Microservices Architecture", category: "Backend" },

    // Database & Data
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Oracle DB", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Database Design", category: "Database" },
    { name: "Query Optimization", category: "Database" },

    // DevOps & Version Control
    { name: "Git", category: "DevOps" },
    { name: "GitHub", category: "DevOps" },
    { name: "Bitbucket", category: "DevOps" },
    { name: "Azure DevOps", category: "DevOps" },
    { name: "CI/CD Pipelines", category: "DevOps" },
    { name: "Server Deployment", category: "DevOps" },

    // Tools & Development Environment
    { name: "IntelliJ IDEA", category: "Tools" },
    { name: "Eclipse IDE", category: "Tools" },
    { name: "Visual Studio", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Android Studio", category: "Tools" },
    { name: "DataGrip", category: "Tools" },
    { name: "Maven", category: "Tools" },

    // API & Integration
    { name: "Postman", category: "API Tools" },
    { name: "Swagger / OpenAPI", category: "API Tools" },
    { name: "API Testing", category: "API Tools" },
    { name: "SnapLogic", category: "Integration" },

    // Operating Systems
    { name: "Linux", category: "Environment" },
    { name: "macOS", category: "Environment" },
    { name: "Windows", category: "Environment" },
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
