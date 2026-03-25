import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "Bachelor of Business Information Technology",
    school: "KCA University - Nairobi, Kenya",
    period: "2020 — 2024",
    description: "Graduated with Second Class Honors ~ Upper Division. Focused on software engineering, algorithms, and human-computer interaction.",
  },
  {
    degree: "High School - KCSE",
    school: "St. Mary's Boys Secondary School - Nyeri, Kenya",
    period: "2016 — 2019",
    description: "Excelled in computer studies, delivering a strong final year project recognized for its quality."
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-40 section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Education</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl">
          Where I <span className="text-gradient">studied</span>.
        </h2>
      </motion.div>

      <div className="mt-16 space-y-0">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            className="group border-t border-border py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start"
          >
            <div>
              <p className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {edu.degree}
              </p>
              <p className="text-muted-foreground font-body text-sm mt-1">{edu.school}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-lg">
                {edu.description}
              </p>
              <p className="text-muted-foreground font-body text-xs tracking-widest uppercase whitespace-nowrap">
                {edu.period}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default EducationSection;
