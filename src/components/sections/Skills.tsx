import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import HexagonSkill from "@/components/ui/HexagonSkill";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { SkillsData } from "@/types/portfolio";

interface SkillsProps {
  data: SkillsData;
}

export default function Skills({ data }: SkillsProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollAnimation(ref, { selector: "[data-animate]", stagger: 0.08 });

  return (
    <section id={data.id} ref={ref} className="section-shell">
      <SectionTitle
        index={data.index}
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {data.groups.map((group) => (
          <GlassCard
            key={group.category}
            data-animate
            className="p5-paper-card p-6 sm:p-7"
          >
            <p className="p5-readable-label p5-readable-label--red">
              {group.category}
            </p>
            <h3 className="p5-accent mt-3 text-3xl text-black">
              {group.blurb}
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {group.items.map((item) => (
                <HexagonSkill key={item.name} {...item} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
