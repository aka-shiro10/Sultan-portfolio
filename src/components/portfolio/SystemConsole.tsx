"use client";

import { useGameStore } from "@/hooks/use-game-store";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function SystemConsole() {
  const logs = useGameStore((state) => state.logs);

  return (
    <div className="fixed bottom-8 left-8 z-[60] w-64 pointer-events-none">
      <div className="bg-background/80 backdrop-blur-md border border-primary/30 p-4 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 mb-3 border-b border-primary/20 pb-2">
          <Terminal className="w-3 h-3 text-primary animate-pulse" />
          <span className="text-[10px] font-game text-primary uppercase tracking-tighter">
            System_Logs
          </span>
        </div>
        <div className="space-y-2 h-24 overflow-hidden relative">
          <AnimatePresence initial={false}>
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col"
              >
                <span className="text-[8px] font-mono text-foreground/70 font-bold">
                  [{log.timestamp}]
                </span>
                <span className="text-[9px] font-mono text-primary uppercase leading-tight font-bold">
                  {">"} {log.message}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </div>
    </div>
  );
}
