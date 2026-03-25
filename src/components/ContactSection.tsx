import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/rinyealvin" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/alvin-rinye-b47718288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "WhatsApp", url: "https://wa.me/23055190781" },
  ];

  return (
    <section id="contact" className="py-24 md:py-40 section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-6">Get in Touch</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight">
          Let's build
          <br />
          <span className="text-gradient">something great</span>.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex flex-col items-center gap-6"
      >
        <motion.a
          href="mailto:alvinrinye@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Say Hello
          <span>→</span>
        </motion.a>
        <p className="text-muted-foreground font-body text-sm">alvinrinye@gmail.com</p>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-border mt-24 origin-left"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <p className="text-muted-foreground font-body text-xs tracking-wide">
          © 2026 Alvin Rinye. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground font-body text-xs tracking-wide uppercase transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
