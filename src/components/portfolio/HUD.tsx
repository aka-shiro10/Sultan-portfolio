"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Battery, Signal, Wifi, Cpu, Shield, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { SystemConsole } from "./SystemConsole";
import { NeuralBackground } from "./NeuralBackground";

function ScrollingText() {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] select-none">
      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap text-[15vh] font-game uppercase leading-none tracking-tighter"
      >
        NEURAL_LINK_ESTABLISHED SYSTEM_SYNC_ACTIVE AI_MODEL_LOADING
        DATA_STREAM_STABLE
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="whitespace-nowrap text-[15vh] font-game uppercase leading-none tracking-tighter text-primary"
      >
        SULTAN_MUHAMMAD_KHAN CLASS_S_DEVELOPER MISSION_CRITICAL
        OPERATIONS_ACTIVE
      </motion.div>
      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap text-[15vh] font-game uppercase leading-none tracking-tighter"
      >
        HARIPUR_NODE_CONNECTED SECURE_SHELL_ENABLED ENCRYPTION_VERIFIED
      </motion.div>
    </div>
  );
}

export function HUD({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBooting, setIsBooting] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => setIsBooting(false), 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative bg-background overflow-x-hidden cursor-crosshair text-foreground selection:bg-primary selection:text-white"
    >
      <NeuralBackground scrollProgress={scrollYProgress} />
      <ScrollingText />

      {/* Cinematic Vignette - adjusted for white theme */}
      <div className="fixed inset-0 pointer-events-none z-[60] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)]" />

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[55] opacity-[0.02] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Scanline Effect - modified for lighter theme */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />

      {/* Boot Sequence Overlay */}
      <AnimatePresence>
        {isBooting && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center font-mono space-y-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              className="h-1 bg-primary"
            />
            <div className="text-primary text-[10px] uppercase tracking-[0.2em] animate-pulse">
              Initializing_Neural_Core...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mouse Follower Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
      />

      {/* Top HUD Bar */}
      <div className="fixed top-0 inset-x-0 h-16 border-b border-black/5 bg-background/80 backdrop-blur-md z-[70] flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-primary animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-primary uppercase">
                System_Load
              </span>
              <span className="text-[10px] font-mono font-bold">2.4%</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-primary uppercase">
                Security
              </span>
              <span className="text-[10px] font-mono font-bold text-green-600">
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[8px] font-mono text-primary uppercase">
              Protocol
            </span>
            <span className="text-[10px] font-mono font-bold">
              AAA-RED-NODE
            </span>
          </div>
          <div className="h-8 w-[1px] bg-black/10" />
          <div className="flex gap-3">
            <Wifi className="w-4 h-4 text-primary" />
            <Signal className="w-4 h-4 text-primary" />
            <Battery className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="fixed top-24 left-8 space-y-4 z-[70] pointer-events-none hidden lg:block">
        <div className="p-4 border-l-2 border-primary bg-black/5 backdrop-blur-sm">
          <div className="text-[8px] font-mono text-primary uppercase mb-1 font-bold">
            Neural_Inference
          </div>
          <div className="text-[10px] font-mono text-foreground/90 font-bold">
            LATENCY: 12ms
          </div>
          <div className="text-[10px] font-mono text-foreground/90 font-bold">
            TOKENS: 4.2k/s
          </div>
        </div>
      </div>

      <SystemConsole />

      <main className="relative z-10 pt-32 pb-24 container mx-auto px-6 max-w-6xl">
        {children}
      </main>

      {/* Decorative Grid Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[5] opacity-[0.05] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
}
