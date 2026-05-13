import { motion } from "framer-motion";
import {
  Atom,
  Binary,
  Box,
  Braces,
  Code2,
  Component,
  Database,
  Orbit,
  Radar,
  ScanLine,
  Sparkles,
  Zap,
  LucideIcon,
} from "lucide-react";
import { useStore } from "@/store/useStore";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Binary,
  Box,
  Braces,
  Code2,
  Component,
  Database,
  Orbit,
  Radar,
  ScanLine,
  Sparkles,
  Zap,
};

interface HexagonSkillProps {
  name: string;
  level: number;
  icon: string;
}

export default function HexagonSkill({ name, level, icon }: HexagonSkillProps) {
  const Icon = iconMap[icon] || Code2;
  const setCursorVariant = useStore((state) => state.setCursorVariant);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      onMouseEnter={() => setCursorVariant("active")}
      onMouseLeave={() => setCursorVariant("default")}
      className="group relative isolate h-56 overflow-hidden border-4 border-black bg-black shadow-p5"
      style={{ clipPath: "polygon(0 0,94% 0,100% 14%,100% 100%,6% 100%,0 86%)" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(213,18,27,0.82),rgba(0,0,0,0.12)_30%,rgba(255,255,255,0.06))]" />
      <div
        className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.2))] transition-all duration-500"
        style={{ height: `${level}%` }}
      />
      <div className="absolute inset-[1px] border border-white/10 bg-[#111111]/92" />
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-7">
        <div className="flex items-start justify-between gap-4">
          <span className="border-2 border-black bg-paper p-3 text-black">
            <Icon size={24} />
          </span>
          <span className="p5-accent text-2xl text-white">{level}</span>
        </div>

        <div>
          <h4 className="p5-menu text-xl uppercase tracking-[0.03em] leading-tight text-white">{name}</h4>
          <div className="mt-3 h-2 overflow-hidden bg-white/10">
            <div
              className="h-full bg-[linear-gradient(90deg,#f4ce4f,#d5121b)]"
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
