"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  Database,
  Brain,
  Gamepad2,
  Network,
  Shield,
  Search,
  Code,
  Globe,
  Building,
  Music,
  Bot,
  BookOpen,
  Smartphone,
  MessageSquare,
  ShoppingCart,
  GraduationCap,
  Scale,
  Volume2,
  PlayCircle,
  Car,
  Keyboard,
  Bird,
  Shirt,
  Cat,
  LayoutGrid,
} from "lucide-react";
import { useGameStore } from "@/hooks/use-game-store";

interface QuestCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
}

export function QuestCard({
  title,
  description,
  tags,
  github,
  link,
}: QuestCardProps) {
  const addLog = useGameStore((state) => state.addLog);
  const addXp = useGameStore((state) => state.addXp);

  const getIcon = () => {
    const t = title.toLowerCase();
    const tagsString = tags.join(" ").toLowerCase();

    if (
      t.includes("evolution") ||
      t.includes("ai") ||
      t.includes("neural") ||
      tagsString.includes("ann") ||
      tagsString.includes("ml")
    )
      return Brain;
    if (
      t.includes("muffin") ||
      t.includes("game") ||
      t.includes("bird") ||
      t.includes("snake") ||
      tagsString.includes("unity")
    )
      return Gamepad2;
    if (t.includes("racing") || t.includes("car")) return Car;
    if (t.includes("network") || t.includes("anomaly")) return Network;
    if (t.includes("chess")) return LayoutGrid;
    if (t.includes("hotel") || t.includes("management")) return Building;
    if (t.includes("media") || t.includes("player")) return PlayCircle;
    if (t.includes("macropad") || t.includes("keypad") || t.includes("arduino"))
      return Keyboard;
    if (t.includes("pet") || t.includes("companion")) return Cat;
    if (t.includes("visual novel") || tagsString.includes("ren'py"))
      return BookOpen;
    if (t.includes("snapchat") || t.includes("clone")) return Smartphone;
    if (
      t.includes("chatting") ||
      t.includes("app") ||
      tagsString.includes("azure")
    )
      return MessageSquare;
    if (
      t.includes("e-commerce") ||
      t.includes("clothing") ||
      t.includes("store") ||
      tagsString.includes("woocommerce")
    ) {
      if (t.includes("clothing")) return Shirt;
      return ShoppingCart;
    }
    if (
      t.includes("hero academy") ||
      t.includes("tuition") ||
      t.includes("teacher")
    )
      return GraduationCap;
    if (t.includes("wakeel") || t.includes("lawyer")) return Scale;
    if (t.includes("text-to-speech") || t.includes("tts")) return Volume2;

    return Database;
  };

  const BackgroundIcon = getIcon();

  const handleInteraction = () => {
    addLog(`Decrypting Repository: ${title}`);
    addXp(10);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onMouseEnter={handleInteraction}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px -20px rgba(239, 68, 68, 0.15)",
      }}
      className="relative bg-black/5 border border-black/5 p-6 rounded-xl overflow-hidden group transition-all h-full flex flex-col"
    >
      {/* Scanning Line Animation */}
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-primary/20 pointer-events-none z-20 group-hover:bg-primary/50"
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Terminal className="w-5 h-5 text-primary" />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -inset-1 bg-primary/20 blur-sm rounded-full"
              />
            </div>
            <h3 className="font-game text-[10px] text-foreground tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-black/5 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-black/5 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-foreground/80 mb-6 leading-relaxed font-sans font-medium">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/30 rounded-md"
            >
              <span className="text-[9px] font-mono text-primary font-bold uppercase">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/60 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/60 group-hover:border-primary transition-colors" />

      {/* Background data visual */}
      <div className="absolute -bottom-2 -left-2 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <BackgroundIcon className="w-24 h-24 text-primary" />
      </div>
    </motion.div>
  );
}
