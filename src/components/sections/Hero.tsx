import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import TypeWriter from "@/components/ui/TypeWriter";
import type { HeroData } from "@/types/portfolio";

interface HeroTagBadge {
  asset: string;
  size: string;
}

const heroTagBadgeMap: Record<string, HeroTagBadge> = {
  Python: {
    asset: import.meta.env.BASE_URL + "hero-badges/badge-tag-short.svg",
    size: "short",
  },
  "LLM Systems": {
    asset: import.meta.env.BASE_URL + "hero-badges/badge-tag-medium.svg",
    size: "medium",
  },
  "AI Applications": {
    asset: import.meta.env.BASE_URL + "hero-badges/badge-tag-medium.svg",
    size: "medium",
  },
  "Wireless Control": {
    asset: import.meta.env.BASE_URL + "hero-badges/badge-tag-medium.svg",
    size: "medium",
  },
  "IEEE 802.11ax": {
    asset: import.meta.env.BASE_URL + "hero-badges/badge-tag-long.svg",
    size: "long",
  },
};

const heroTagPlacementClassMap: Record<number, string> = {
  0: "col-span-1 sm:col-span-4",
  1: "col-span-1 sm:col-span-4",
  2: "col-span-1 sm:col-span-4",
  3: "col-span-1 sm:col-span-4 sm:col-start-3",
  4: "col-span-1 sm:col-span-4 sm:col-start-7",
};

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const [primaryName, ...aliasParts] = data.name.split(" ");
  const aliasName = aliasParts.join(" ");
  const aliasLetters = Array.from(aliasName);
  const aliasTransforms = [
    { rotate: -7, y: 2 },
    { rotate: 3, y: -2 },
    { rotate: -4, y: 1 },
    { rotate: 6, y: -3 },
    { rotate: -2, y: 1 },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-7rem)] items-center overflow-hidden border-4 border-black bg-[linear-gradient(125deg,#f4efe5_0_48%,transparent_48%),linear-gradient(180deg,transparent_0_18%,#d5121b_18%_100%)] px-6 py-10 shadow-p5 sm:px-8 lg:px-10"
      style={{ clipPath: "polygon(0 0,96% 0,100% 10%,100% 100%,5% 100%,0 92%)" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-[-4rem] h-60 w-96 rotate-[14deg] bg-black" />
        <div className="absolute right-[6%] top-[12%] h-64 w-64 rotate-[15deg] border-[6px] border-white/90" />
        <div className="absolute right-[-5rem] top-[34%] h-56 w-40 rotate-[26deg] bg-white/10" />
      </div>

      {aliasName ? (
        <motion.div
          initial={{ opacity: 0, x: 28, y: -10, rotate: -18 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
          transition={{ duration: 0.85, delay: 0.16 }}
          className="hero-alias-banner"
          aria-label={aliasName}
        >
          <span className="hero-name-alias">
            {aliasLetters.map((letter, index) => {
              const transform = aliasTransforms[index % aliasTransforms.length];
              return (
                <span
                  key={`${letter}-${index}`}
                  className="hero-name-alias-letter"
                  data-letter={letter}
                  style={{
                    transform: `translateY(${transform.y}px) rotate(${transform.rotate}deg)`,
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </motion.div>
      ) : null}

      <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
        <div className="text-black">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-kicker"
          >
            {data.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-4xl"
          >
            <span className="hero-name-layout">
              <span
                className="hero-name-card inline-flex px-5 py-3 sm:px-6 sm:py-4"
                style={{ transform: "skewX(-12deg) rotate(-2deg)" }}
              >
                <span className="hero-name-primary" data-text={primaryName}>
                  {primaryName}
                </span>
              </span>
            </span>
            <span
              className="p5-menu mt-4 block w-fit max-w-full bg-p5red px-4 py-2 text-balance text-xl uppercase leading-tight text-white sm:text-2xl lg:text-3xl"
              style={{ transform: "skewX(-16deg)" }}
            >
              {data.title}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="p5-menu mt-6 text-lg uppercase tracking-[0.1em] text-black sm:text-xl"
          >
            <TypeWriter lines={data.roleLines} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="p5-regular mt-6 max-w-2xl border-l-8 border-black bg-white/80 px-5 py-4 text-lg leading-8 text-black"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <NeonButton href={data.primaryAction.href}>
              {data.primaryAction.label}
            </NeonButton>
            <NeonButton href={data.secondaryAction.href} variant="secondary">
              {data.secondaryAction.label}
            </NeonButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 grid max-w-[34rem] grid-cols-2 gap-x-3 gap-y-4 sm:max-w-[38rem] sm:grid-cols-12"
          >
            {data.tags.map((tag, index) => (
              <span
                key={tag}
                className={`hero-tag-chip hero-tag-chip--${
                  (heroTagBadgeMap[tag] || { size: "medium" }).size
                } ${heroTagPlacementClassMap[index] || "col-span-1 sm:col-span-4"}`}
                style={{
                  transform:
                    index % 2 === 0
                      ? "rotate(-0.6deg) translateY(0px)"
                      : "rotate(0.6deg) translateY(1px)",
                }}
              >
                <img
                  aria-hidden="true"
                  alt=""
                  src={
                    (heroTagBadgeMap[tag] || heroTagBadgeMap["LLM Systems"]).asset
                  }
                  className="hero-tag-chip-frame"
                />
                <span className="hero-tag-chip-label">{tag}</span>
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-5">
          <GlassCard className="relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_46%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="chip">STATUS</span>
                <Sparkles className="text-p5yellow" size={18} />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="p5-paper-card px-5 py-4">
                    <p className="p5-menu text-base uppercase tracking-[0.06em] text-black/80">
                      {stat.label}
                    </p>
                    <p className="p5-display mt-3 text-4xl text-black">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
