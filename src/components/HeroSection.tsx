import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import profileHero from "@/assets/Profile.png";

const HeroSection = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setIsMoving(true);
    setMousePos({ x: e.clientX, y: e.clientY });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsMoving(false), 300);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [handleMouseMove]);

  // Subtle parallax offset based on mouse position
  const offsetX = (mousePos.x / window.innerWidth - 0.5) * 20;
  const offsetY = (mousePos.y / window.innerHeight - 0.5) * 15;

  return (
    <section className="relative min-h-screen flex flex-col justify-end section-padding pb-16 md:pb-24 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]" style={{
        background: 'radial-gradient(circle, hsl(45 100% 58%), transparent 70%)',
      }} />

      {/* Profile image - visible only when cursor moves */}
      <div
        className="absolute right-8 md:right-24 lg:right-32 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
        style={{
          transform: `translate(${offsetX}px, calc(-50% + ${offsetY}px))`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div
          className="relative w-[320px] lg:w-[420px] h-[420px] lg:h-[550px] transition-opacity duration-500 ease-in-out"
          style={{ opacity: isMoving ? 1 : 0 }}
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 rounded-full blur-[80px] opacity-30" style={{
            background: 'radial-gradient(circle, hsl(45 100% 58%), transparent 70%)',
          }} />
          <img
            src={profileHero}
            alt="Profile"
            width={768}
            height={1024}
            className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
            style={{
              filter: `grayscale(30%) contrast(1.1)`,
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground font-body text-sm md:text-base tracking-widest uppercase mb-6"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-[8rem] font-bold leading-[0.9] tracking-tight"
        >
          <span className="text-foreground">ALVIN</span>
          <br />
          <span className="text-gradient">RINYE</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-border mt-10 origin-left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center justify-between mt-6"
        >
          <p className="text-muted-foreground text-sm font-body">Based in Ebene-CyberCity, Mauritius</p>
          <motion.a
            href="#work"
            whileHover={{ x: 5 }}
            className="text-sm font-body text-primary flex items-center gap-2 hover:gap-3 transition-all"
          >
            View Work
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
