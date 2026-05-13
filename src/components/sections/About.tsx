import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { AboutData } from "@/types/portfolio";

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollAnimation(ref);

  return (
    <section id={data.id} ref={ref} className="section-shell">
      <SectionTitle
        index={data.index}
        eyebrow={data.eyebrow}
        title={data.title}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <GlassCard data-animate className="p5-paper-card p-6 sm:p-8">
          <div className="grid gap-5">
            {data.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-base leading-8 text-black sm:text-lg ${
                  index === 0 ? "p5-accent text-2xl leading-tight sm:text-3xl" : "p5-regular"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-2 flex flex-wrap gap-3">
              {data.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="p5-black-readable inline-flex items-center gap-2 border-2 border-black bg-black px-5 py-3 text-base text-white sm:text-lg"
                  style={{ transform: "skewX(-14deg)" }}
                >
                  <CheckCircle2 size={16} className="text-p5red" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>

        <div className="grid gap-4">
          {data.metrics.map((metric, index) => (
            <div
              key={metric.label}
              data-animate
              className={`${index % 2 === 0 ? "p5-red-card" : "p5-ink-card"} px-5 py-5`}
            >
              <p className="p5-menu text-sm uppercase tracking-[0.08em] text-white/80">
                0{index + 1} / {metric.label}
              </p>
              <p className="p5-accent mt-3 text-3xl text-white">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
