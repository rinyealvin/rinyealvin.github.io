import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cybernaptics Ltd - Port Louis, Mauritius",
    period: "February 2025 - Present",
    description: "Consulting for SWAN Insurance to deliver enterprise software solutions across design, development, and system integration.",
  },
  {
    role: "Software Engineer",
    company: "Smart People Africa - Nairobi, Kenya",
    period: "April 2024 - February 2025",
    description: "Designed and maintained scalable backend systems and web applications with focus on performance, security, and integration.",
  },
  {
    role: "ICT Support Intern",
    company: "Nyandarua County Government - Nyandarua, Kenya",
    period: "May - August 2023",
    description: "Supported ICT operations, including systems, networks, and basic server programming, ensuring efficient service delivery.",
  },
  {
    role: "Hospital Administrative Assistant",
    company: "Pope Benedict XVI Hospital - Nyahururu",
    period: "January - September 2020",
    description: "Handled hospital roles including records, patient service, billing, and pharmaceutical stock management",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-40 section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Experience</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl">
          Where I've <span className="text-gradient">worked</span>.
        </h2>
      </motion.div>

      <div className="mt-16 space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            className="group border-t border-border py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start"
          >
            <div>
              <p className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {exp.role}
              </p>
              <p className="text-muted-foreground font-body text-sm mt-1">{exp.company}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-lg">
                {exp.description}
              </p>
              <p className="text-muted-foreground font-body text-xs tracking-widest uppercase whitespace-nowrap">
                {exp.period}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ExperienceSection;
