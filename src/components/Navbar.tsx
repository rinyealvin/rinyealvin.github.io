import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 section-padding py-6 flex items-center justify-between bg-background/60 backdrop-blur-sm"
    >
      <a href="#" className="font-display text-xl font-bold text-foreground tracking-tight">
        Rinye Alvin Ngamau<span className="text-gradient">.</span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50 relative"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="block w-6 h-0.5 bg-foreground"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="block w-6 h-0.5 bg-foreground"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="block w-6 h-0.5 bg-foreground"
        />
      </button>

      {/* Dropdown menu — portaled out of the blend-mode nav so its colors render normally */}
      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <>
              <div
                className="fixed inset-0 z-40 md:hidden"
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -8 }}
                transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-20 right-6 z-50 w-56 rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-xl p-2 origin-top-right md:hidden"
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-body font-medium text-muted-foreground tracking-wide uppercase hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.nav>
  );
};

export default Navbar;
