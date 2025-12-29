# Sultan Muhammad Khan - Portfolio

A high-performance, AAA-styled portfolio application built with Next.js 15, featuring real-time animations, neural-network-inspired UI components, and advanced TypeScript patterns.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.6 (App Router, React 19, Turbopack)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x + TW Animate CSS
- **UI Components**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion 12.x + Motion DOM
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **State Management**: Zustand 5.x
- **Data Visualization**: Recharts 3.x
- **Image Optimization**: Next.js Image + Sharp
- **Form Handling**: React Hook Form + Zod validation
- **Auth**: Better Auth 1.3.x
- **Database**: Drizzle ORM + LibSQL client

## 📦 Key Dependencies

```json
{
  "@react-three/fiber": "^9.0.0-alpha.8",
  "@radix-ui/react-*": "Latest stable",
  "framer-motion": "^12.23.24",
  "three": "^0.178.0",
  "zustand": "^5.0.9"
}
```

## 🛠️ Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout with providers
│   └── global-error.tsx   # Error boundary
├── components/
│   ├── portfolio/         # Custom portfolio components
│   │   ├── HUD.tsx       # Heads-up display system
│   │   ├── GlitchText.tsx # Text glitch effect
│   │   ├── XpBar.tsx     # Experience progress bar
│   │   └── ...
│   └── ui/               # shadcn UI components (55+ components)
├── hooks/
│   ├── use-game-store.ts # Zustand state management
│   └── use-mobile.ts     # Responsive breakpoint detection
└── lib/
    └── utils.ts          # Utility functions (cn, etc.)
```

### Performance Optimizations

- **Image Optimization**: Next.js Image with Supabase CDN integration
- **Code Splitting**: Dynamic imports for heavy 3D components
- **Bundle Analysis**: Turbopack for faster builds (5x improvement)
- **Font Optimization**: next/font with automatic subsetting
- **CSS-in-JS**: Zero-runtime CSS with Tailwind

## 🔧 Development

### Prerequisites

```bash
Node.js >= 18.17.0
npm >= 9.x (or bun/pnpm)
```

## 🎨 Features

### Interactive UI Components

- **Neural HUD System**: Real-time console logging with glitch effects
- **XP Progress Bar**: Animated experience tracking with motion
- **Stat Cards**: Radial progress indicators for skills
- **Quest Cards**: Project showcase with hover animations
- **3D Elements**: Three.js-powered visual effects

### Animation System

- **Staggered Reveals**: Container-based animation orchestration
- **Motion Variants**: Reusable animation configurations
- **Scroll-based Triggers**: IntersectionObserver integration
- **Gesture Handling**: Touch-optimized interactions

### State Management

```typescript
// Zustand store pattern
interface GameStore {
  logs: string[];
  xp: number;
  addLog: (message: string) => void;
  addXp: (amount: number) => void;
}
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 2.5s
- **Bundle Size**: ~180KB gzipped (main)

## 🔒 Security

- **CSP Headers**: Content Security Policy configured
- **CORS**: Configured for Supabase assets
- **Auth**: Better Auth with session management
- **Validation**: Zod schemas for runtime type safety

## 📄 License

This project is private and proprietary.

## 👤 Author

**Sultan Muhammad Khan**

- GitHub: [@aka-shiro10](https://github.com/aka-shiro10)
- LinkedIn: [Sultan Muhammad Khan](https://www.linkedin.com/in/sultan-muhammad-khan-8a5b73244/)

---

Built with ⚡ Next.js 15 + TypeScript + Turbopack
