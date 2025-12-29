"use client";

import { useEffect, useRef } from "react";
import { MotionValue } from "framer-motion";

export function NeuralBackground({
  scrollProgress,
}: {
  scrollProgress?: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollOffset = useRef(0);

  useEffect(() => {
    if (scrollProgress) {
      return scrollProgress.on("change", (v) => {
        scrollOffset.current = v * 200;
      });
    }
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 150;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      parallaxFactor: number;

      constructor(w: number, h: number) {
        this.baseX = Math.random() * w;
        this.baseY = Math.random() * h;
        this.x = this.baseX;
        this.y = this.baseY;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 1;
        this.parallaxFactor = Math.random() * 0.5 + 0.2;
      }

      update(w: number, h: number) {
        this.baseX += this.vx;
        this.baseY += this.vy;

        if (this.baseX < 0) this.baseX = w;
        if (this.baseX > w) this.baseX = 0;
        if (this.baseY < 0) this.baseY = h;
        if (this.baseY > h) this.baseY = 0;

        this.x = this.baseX;
        this.y = this.baseY - scrollOffset.current * this.parallaxFactor;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(239, 68, 68, 0.3)"; // Red particles
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${
              1 - (distance / connectionDistance) * 0.8
            })`; // Red connections
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]"
    />
  );
}
