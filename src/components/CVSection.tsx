import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { FileText, Download } from "lucide-react";

const CVSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="cv" className="py-24 md:py-40 section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Resume</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
          My <span className="text-gradient">CV</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 max-w-xl"
      >
        <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8">
          Interested in my full background? Download/View my CV to see my complete work history, education, and certifications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold tracking-wide transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(45_100%_58%/0.3)]"
          >
            <FileText className="w-5 h-5" />
            View CV
          </motion.button>

          <motion.a
            href="/CV.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-border bg-secondary/30 text-foreground font-display font-semibold tracking-wide transition-all duration-300 hover:border-primary/50"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">

              <div className="relative w-[90%] h-[90%] bg-background rounded-xl overflow-hidden shadow-2xl">

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 bg-black/60 text-white px-3 py-1 rounded-lg hover:bg-black"
                >
                  ✕
                </button>

                {/* PDF Viewer */}
                <iframe
                  src="/CV.pdf"
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CVSection;
