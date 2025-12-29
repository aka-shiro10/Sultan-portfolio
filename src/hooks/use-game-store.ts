"use client";

import { create } from "zustand";

interface Log {
  id: string;
  message: string;
  timestamp: string;
}

interface GameState {
  xp: number;
  level: number;
  logs: Log[];
  addLog: (message: string) => void;
  addXp: (amount: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  xp: 840,
  level: 6,
  logs: [
    {
      id: "1",
      message: "SYSTEM INITIALIZED...",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: "2",
      message: "WELCOME, OPERATOR.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
  addLog: (message: string) =>
    set((state) => ({
      logs: [
        {
          id: Math.random().toString(36).substr(2, 9),
          message: message.toUpperCase(),
          timestamp: new Date().toLocaleTimeString(),
        },
        ...state.logs,
      ].slice(0, 5),
    })),
  addXp: (amount: number) =>
    set((state) => {
      const newXp = state.xp + amount;
      const leveledUp = newXp >= 1000;
      return {
        xp: leveledUp ? newXp - 1000 : newXp,
        level: leveledUp ? state.level + 1 : state.level,
      };
    }),
}));
