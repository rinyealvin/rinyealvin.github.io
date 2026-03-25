import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "2", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-40 section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">About</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl">
          I craft digital experiences that blend{" "}
          <span className="text-gradient">aesthetics</span> with{" "}
          <span className="text-gradient">performance</span>.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 text-muted-foreground font-body text-base md:text-lg max-w-2xl leading-relaxed"
      >
        With a passion for clean code and bold design, I build modern web applications 
        that push creative boundaries. From concept to deployment, every detail matters.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-border mt-16 origin-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
          >
            <p className="font-display text-5xl md:text-6xl font-bold text-gradient">{stat.number}</p>
            <p className="text-muted-foreground font-body text-sm mt-2 tracking-wide uppercase">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
