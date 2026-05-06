"use client";

import { HUD } from "@/components/portfolio/HUD";
import { StatCard } from "@/components/portfolio/StatCard";
import { QuestCard } from "@/components/portfolio/QuestCard";
import { XpBar } from "@/components/portfolio/XpBar";
import { GlitchText } from "@/components/portfolio/GlitchText";
import { motion } from "framer-motion";
import { useGameStore } from "@/hooks/use-game-store";
import Image from "next/image";
import {
  Brain,
  Code,
  Cpu,
  Gamepad2,
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageSquare,
  Instagram,
  Youtube,
  Zap,
  Activity,
  Globe,
  Target,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const addLog = useGameStore((state) => state.addLog);
  const addXp = useGameStore((state) => state.addXp);

  const handleSectionHover = (section: string) => {
    addLog(`Neural Link: Optimizing ${section} view...`);
    addXp(2);
  };

  const projects = [
    // ── AI / ML  (primary signal) ──────────────────────────────
    {
      title: "Evolution Simulator",
      description:
        "Unity simulation where agents with feed-forward neural networks evolve foraging behavior under selection pressure. Population-based genetic algorithm with mutation and crossover.",
      tags: ["Unity", "ANN", "Genetic Algorithms"],
      github: "https://github.com/aka-shiro10",
    },
    {
      title: "Car Racing AI Trainer",
      description:
        "Reinforcement learning setup using Unity ML-Agents to train cars on procedurally generated tracks. Reward shaping experiments for stable lap-time learning.",
      tags: ["Unity", "ML-Agents", "Reinforcement Learning"],
      github: "https://github.com/aka-shiro10",
    },
    {
      title: "Network Anomaly Detection",
      description:
        "Python ML pipeline that flags anomalous network traffic flows using classical models on labeled traffic data. Packaged with a Tkinter GUI for live inspection.",
      tags: ["Python", "scikit-learn", "GUI"],
      github: "https://github.com/aka-shiro10",
    },
    {
      title: "Server Parallel Log Analyzer",
      description:
        "High-performance log-processing tool using Python multiprocessing to chunk and aggregate massive server logs in parallel with real-time statistics.",
      tags: ["Python", "Multiprocessing", "Systems"],
      github: "https://github.com/aka-shiro10",
    },

    // ── Game Development  (secondary signal) ──────────────────
    {
      title: "Muffin Time",
      description:
        "Networked Unity platformer with handcrafted art and real-time multiplayer mechanics. Built networking, lobby system, and synced gameplay state across clients.",
      tags: ["Unity", "Networking", "Multiplayer"],
      github: "https://github.com/aka-shiro10",
    },
    {
      title: "Visual Novel",
      description:
        "Story-driven game built with Ren'Py featuring branching dialogue, character art, and persistent save state.",
      tags: ["Ren'Py", "Narrative Design"],
      github: "https://github.com/aka-shiro10",
    },

    // ── Web Development  (tertiary signal) ────────────────────
    {
      title: "WakeelOnline",
      description:
        "React + TailwindCSS platform connecting clients with verified lawyers, including profile management, search, and consultation booking.",
      tags: ["React", "TailwindCSS", "Full-Stack"],
      github: "https://github.com/aka-shiro10",
    },
    {
      title: "Hero Academy",
      description:
        "Web platform where teachers can offer tuition to students, with class scheduling and student-teacher matching.",
      tags: ["React", "Web App"],
      github: "https://github.com/aka-shiro10",
    },
    {
      title: "Chatting App",
      description:
        "Real-time chat application deployed on Microsoft Azure with cloud database, authentication, and live messaging.",
      tags: ["Azure", "Real-time", "Cloud"],
      github: "https://github.com/aka-shiro10",
    },

    // ── Hardware / Other ──────────────────────────────────────
    {
      title: "Macropad",
      description:
        "Custom programmable keypad built with Arduino Pro Micro and QMK firmware for productivity shortcuts and macros.",
      tags: ["Arduino", "QMK", "Hardware"],
      github: "https://github.com/aka-shiro10",
    },
  ];

  const internships = [
    {
      company: "Sybrid",
      role: "Data / ML Intern",
      period: "May 2025 – Jul 2025",
      tasks:
        "Built ETL pipelines, set up a vector DB, and prototyped a RAG chatbot. Trained the RAG pipeline using a custom bash automation script for repeatable end-to-end experiments.",
    },
    {
      company: "KeyMech",
      role: "Software Intern",
      period: "Jul 2024 – Sep 2024",
      tasks:
        "Shipped cross-platform mobile features and REST API integrations used by field maintenance teams. Owned production build pipelines.",
    },
    {
      company: "Seasons Foods",
      role: "Audit Intern",
      period: "Aug 2023 – Sep 2023",
      tasks:
        "Performed inventory audits and reconciliations; identified process gaps that reduced count variances.",
    },
  ];

  return (
    <HUD>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-32"
      >
        {/* Hero Section - AAA Red/White Style */}
        <motion.section
          variants={itemVariants}
          onMouseEnter={() => handleSectionHover("Profile")}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-primary"
              >
                <Zap className="w-4 h-4" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
                  Class_S_Developer
                </span>
              </motion.div>

              <h1 className="font-game text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                <GlitchText text="SULTAN MUHAMMAD" />
                <br />
                <span className="text-primary group relative">
                  KHAN
                  <motion.span
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all"
                    layoutId="underline"
                  />
                </span>
              </h1>

              <div className="flex flex-wrap gap-4 font-mono text-[10px] text-foreground/80 uppercase tracking-widest font-bold">
                <span className="flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Haripur, Pakistan
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-3 h-3" /> Remote Ready
                </span>
                <span className="flex items-center gap-2">
                  <Target className="w-3 h-3" /> Seeking AI Challenges
                </span>
              </div>
            </div>

            <p className="text-lg text-foreground leading-relaxed max-w-2xl font-sans font-medium italic !whitespace-pre-line">
              "Final-year AI student building end-to-end ML systems — from
              custom-trained CNN and YOLO models to LLM-powered agents with RAG,
              voice I/O, and computer vision. I work across Python, FastAPI,
              and Unity (C#), and I care about shipping working prototypes, not
              just notebooks."
            </p>

            <div className="pt-4">
              <XpBar />
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                href="resume.pdf"
                download="Sultan_Muhammad_Khan_Resume.pdf"
                className="flex items-center gap-3 px-6 py-3 bg-primary text-white font-game text-[10px] rounded-lg transition-all !whitespace-pre-line"
              >
                RESUME.DLL
              </motion.a>

              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/aka-shiro10" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sultan-muhammad-khan-8a5b73244/",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0,0,0,0.1)",
                    }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-black/20 rounded-lg text-foreground hover:text-primary transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative group">
            {/* AI Scanning UI - Adjusted for light theme */}
            <div className="relative aspect-[3/4] rounded-2xl border border-black/20 overflow-hidden bg-black/5 backdrop-blur-3xl shadow-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Sultan-resized-1767035719155.jpg?width=8000&height=8000&resize=contain"
                alt="Sultan Muhammad Khan"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />

              {/* Scanning Animations */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_var(--color-primary)] z-20"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

              {/* Data tags */}
              <div className="absolute bottom-4 left-4 font-mono text-[8px] space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  ANALYZING_CORE...
                </div>
                <div className="text-foreground tracking-tighter font-bold">
                  LAT: 34.0084° N, LON: 72.9317° E
                </div>
              </div>
            </div>

            {/* Floaties */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 p-4 bg-white/90 border border-primary/20 backdrop-blur-md rounded-xl z-30 hidden lg:block shadow-lg"
            >
              <Cpu className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section - AAA Dashboard */}
        <motion.section
          variants={itemVariants}
          onMouseEnter={() => handleSectionHover("Attributes")}
          className="space-y-12"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-game text-sm text-primary uppercase tracking-widest">
              Neural_Aptitude
            </h2>
            <p className="font-mono text-[10px] text-foreground/80 uppercase font-bold">
              Skill calibration data verified
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              label="Artificial Intelligence"
              value={8}
              max={10}
              icon={<Brain className="w-4 h-4" />}
            />
            <StatCard
              label="Game Engineering"
              value={9}
              max={10}
              icon={<Gamepad2 className="w-4 h-4" />}
            />
            <StatCard
              label="System Architecture"
              value={7}
              max={10}
              icon={<Code className="w-4 h-4" />}
            />
          </div>
        </motion.section>

        {/* Quest Log - AAA Mission Board with 2D Horizontal Scrolling */}
        <motion.section
          variants={itemVariants}
          onMouseEnter={() => handleSectionHover("Missions")}
          className="space-y-12 relative"
        >
          <div className="flex items-end justify-between border-b border-black/10 pb-4">
            <div className="space-y-1">
              <h2 className="font-game text-sm text-foreground uppercase">
                Operational_History
              </h2>
              <p className="font-mono text-[8px] text-foreground/80 uppercase font-bold">
                10 Successful Deployments Found
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-full"
              >
                <QuestCard
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  github={p.github}
                  link={(p as { link?: string }).link}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* BOSS BATTLE - Enhanced FYP Section */}
        <motion.section
          variants={itemVariants}
          onMouseEnter={() => handleSectionHover("Boss Battle")}
          className="group relative"
        >
          <div className="absolute inset-0 bg-primary/5 blur-[100px] group-hover:bg-primary/10 transition-all rounded-full" />
          <div className="relative bg-black/5 border border-primary/20 p-12 rounded-3xl backdrop-blur-2xl overflow-hidden shadow-2xl">
            {/* Warning Overlay */}
            <div className="absolute top-0 right-0 px-6 py-2 bg-primary text-white font-game text-[10px] uppercase">
              Major_Boss_Encounter
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="font-game text-2xl text-foreground uppercase group-hover:text-primary transition-colors">
                    ENE — 3D AI Desktop Companion
                  </h3>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-foreground/80 uppercase font-bold">
                    <span>STATUS: IN_DEVELOPMENT</span>
                    <span>|</span>
                    <span>FYP_2025-26</span>
                    <span>|</span>
                    <span>THREAT_LEVEL: OMEGA</span>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed font-medium text-base">
                  A voice-driven 3D anime-style AI companion that runs as a
                  transparent always-on-top Windows overlay. ENE listens, watches
                  your face for emotion, sees your screen, opens or closes apps,
                  and remembers conversations across sessions. Unity (C#) client
                  on Windows, Python FastAPI backend on Ubuntu, talking over LAN
                  via REST + WebSocket.
                </p>

                <ul className="space-y-2 text-sm text-foreground/90 font-medium list-none">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">▸</span>
                    <span>
                      Custom 7-class emotion CNN trained on FER-2013 (
                      <span className="text-primary font-bold">66.3% acc</span>)
                      via Unity Sentis ONNX
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">▸</span>
                    <span>
                      YOLOv8s 7-class UI element detector at{" "}
                      <span className="text-primary font-bold">
                        95.85% mAP@0.5
                      </span>{" "}
                      for real-time screen analysis
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">▸</span>
                    <span>
                      Whisper STT + Kokoro TTS + Groq LLaMA-3.1 — full voice loop
                      with ~1–2s latency
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">▸</span>
                    <span>
                      Fernet-encrypted SQLite memory with adaptive personality
                      scoring every 10 turns
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-video rounded-xl bg-white border border-black/10 overflow-hidden group-hover:border-primary/40 transition-all shadow-inner">
                {/* Visualizer representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                      className="font-game text-xl md:text-2xl text-primary/40 uppercase tracking-[0.3em]"
                    >
                      Under_Dev
                    </motion.div>
                    <div className="flex gap-1 justify-center">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: i * 0.2,
                          }}
                          className="w-1 h-1 bg-primary/40 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 inset-x-4 flex justify-between font-mono text-[8px] text-foreground/70 uppercase font-bold">
                  <span>Neural_Node_Active</span>
                  <span>78% Core Load</span>
                </div>
              </div>
            </div>

            {/* ── Tech Stack (full width, below grid) ── */}
            <div className="mt-12 pt-8 border-t border-black/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] font-bold">
                  Tech_Stack
                </span>
                <div className="h-[1px] flex-1 bg-black/10" />
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Unity (C#)",
                  "Python",
                  "FastAPI",
                  "WebSocket",
                  "Groq LLM",
                  "Whisper",
                  "Kokoro TTS",
                  "YOLOv8",
                  "ONNX",
                  "SQLite",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white border border-black/10 rounded-full font-mono text-[10px] text-primary uppercase shadow-sm font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Expeditions - AAA Timeline */}
        <motion.section variants={itemVariants} className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="font-game text-sm text-foreground uppercase">
              Field_Operations
            </h2>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((exp) => (
              <motion.div
                key={exp.company}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                className="p-8 border border-black/10 rounded-2xl space-y-4 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-game text-xs text-primary uppercase">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-[10px] text-foreground uppercase tracking-widest font-bold">
                      {exp.role}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-foreground/80 font-bold">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-foreground leading-relaxed italic font-medium">
                  "{exp.tasks}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final Attributes - Grid Style */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4 space-y-8">
            <h2 className="font-game text-sm text-foreground uppercase">
              Education_Log
            </h2>
            <div className="p-8 bg-black/5 border border-black/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <Globe className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-game text-[10px] text-foreground uppercase mb-2">
                BS AI
              </h3>
              <p className="text-xs text-foreground mb-6 font-bold">
                Pak-Austria Fachhochschule (PAF-IAST)
              </p>
              <div className="font-mono text-[10px] text-primary font-bold">
                2022 - 2026
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-game text-sm text-foreground uppercase">
              System_Protocols
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "Urdu", val: "NATIVE" },
                { label: "English", val: "PROFICIENT" },
                { label: "Strategy", val: "CHESS_LVL_MAX" },
                { label: "Digital Art", val: "ACTIVE_PROTOCOL" },
                { label: "Neural Expansion", val: "UPGRADING..." },
                { label: "Gaming", val: "LEVEL_MAX" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 border border-black/10 rounded-xl group hover:border-primary/40 transition-colors"
                >
                  <div className="text-[8px] font-mono text-foreground uppercase mb-1 font-bold">
                    {item.label}
                  </div>
                  <div className="text-[10px] font-mono text-primary group-hover:animate-pulse font-bold">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer - AAA End Credits */}
        <motion.footer
          variants={itemVariants}
          className="pt-32 pb-16 text-center space-y-12"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="space-y-4">
            <div className="font-game text-xs text-primary animate-pulse tracking-[0.3em] uppercase">
              Sultan_M_Khan // System_Status: Online
            </div>
            <div className="flex justify-center gap-8">
              {[Instagram, Youtube, MessageSquare].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-5 h-5 text-foreground/80 hover:text-primary transition-all cursor-pointer hover:scale-125"
                />
              ))}
            </div>
          </div>

          <div className="font-mono text-[8px] text-foreground/60 uppercase tracking-[0.5em] font-bold">
            Developed in Haripur Node // © 2024 S.M.KHAN
          </div>
        </motion.footer>
      </motion.div>
    </HUD>
  );
}
