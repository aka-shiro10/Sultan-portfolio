"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/hooks/use-game-store";
import { useEffect, useState } from "react";

interface StatCardProps {
  label: string;
  value: number;
  max: number;
  icon?: React.ReactNode;
}

export function StatCard({ label, value, max, icon }: StatCardProps) {
  const addLog = useGameStore((state) => state.addLog);
  const addXp = useGameStore((state) => state.addXp);
  const [dataString, setDataString] = useState("");

  useEffect(() => {
    const chars = "01ABCDEF";
    const generate = () => {
      let str = "";
      for (let i = 0; i < 8; i++)
        str += chars[Math.floor(Math.random() * chars.length)];
      setDataString(str);
    };
    const interval = setInterval(generate, 150);
    return () => clearInterval(interval);
  }, []);

  const handleInteraction = () => {
    addLog(`Neural Analysis: ${label} @ ${value}/${max}`);
    addXp(5);
  };

  const percentage = (value / max) * 100;

  return (
    <motion.div
      onMouseEnter={handleInteraction}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative bg-black/5 border border-black/5 p-5 rounded-xl backdrop-blur-md overflow-hidden group hover:border-primary/40 transition-all shadow-xl"
    >
      {/* AI Metadata Overlay */}
      <div className="absolute top-2 right-3 font-mono text-[8px] text-primary/80 group-hover:text-primary transition-colors font-bold">
        REF_{dataString}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              {label}
            </span>
            <span className="font-game text-xs text-foreground">
              LEVEL_{value}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-[8px] font-mono text-primary font-bold">
          <span>EFFICIENCY</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-1.5 bg-black/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-primary relative z-10 shadow-[0_0_10px_var(--color-primary)]"
          />
          {/* Animated data pulse */}
          <motion.div
            animate={{ left: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
          />
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 blur-2xl rounded-full" />
    </motion.div>
  );
}
