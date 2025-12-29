"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  useEffect(() => {
    if (!isHovered) {
      setGlitchText(text);
      return;
    }

    const interval = setInterval(() => {
      setGlitchText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (Math.random() > 0.8)
              return characters[Math.floor(Math.random() * characters.length)];
            return char;
          })
          .join("")
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {glitchText}
    </motion.span>
  );
}
