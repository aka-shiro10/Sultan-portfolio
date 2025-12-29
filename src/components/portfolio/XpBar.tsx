"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/hooks/use-game-store";

export function XpBar() {
  const xp = useGameStore((state) => state.xp);
  const level = useGameStore((state) => state.level);
  const maxXp = 1000;
  const percentage = (xp / maxXp) * 100;

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-end mb-1">
        <div className="flex items-baseline gap-2">
          <span className="font-game text-xs text-primary">LVL</span>
          <span className="font-game text-2xl text-primary">{level}</span>
        </div>
        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          XP: {Math.floor(xp)} / {maxXp}
        </div>
      </div>
      <div className="h-4 bg-secondary border border-border rounded-sm overflow-hidden p-[2px]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="h-full bg-primary relative"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
