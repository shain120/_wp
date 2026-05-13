import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { ProjectsData } from "@/types/portfolio";

interface ProjectsProps {
  data: ProjectsData;
}

export default function Projects({ data }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollAnimation(ref, { selector: "[data-animate]", stagger: 0.14 });

  return (
    <section id={data.id} ref={ref} className="section-shell">
      <SectionTitle
        index={data.index}
        eyebrow={data.eyebrow}
        title={data.title}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {data.items.map((project) => (
          <div key={project.title} data-animate>
            <TiltCard className="p5-paper-card">
              <div className="flex h-full flex-col p-5">
                <div
                  className={`relative h-48 overflow-hidden border-4 border-black bg-gradient-to-br ${project.accent}`}
                  style={{ clipPath: "polygon(0 0,94% 0,100% 10%,100% 100%,6% 100%,0 92%)" }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_30%),linear-gradient(180deg,rgba(5,5,5,0.02),rgba(5,5,5,0.45))]" />
                  <div className="absolute inset-4 border-2 border-white/30 bg-black/10" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-2 border-black bg-black px-4 py-3">
                    <span className="p5-black-readable text-base uppercase tracking-[0.06em] text-white sm:text-lg">
                      CASE FILE
                    </span>
                    <span className="chip">Live Prototype</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="p5-accent text-3xl text-black">
                    {project.title}
                  </h3>
                  <p className="p5-regular mt-4 flex-1 text-base leading-8 text-black/80">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.live}
                      className="p5-menu inline-flex items-center gap-2 border-2 border-black bg-p5red px-4 py-2 text-sm uppercase tracking-[0.08em] text-white"
                      style={{ clipPath: "polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%)" }}
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                    <a
                      href={project.repo}
                      className="p5-menu inline-flex items-center gap-2 border-2 border-black bg-black px-4 py-2 text-sm uppercase tracking-[0.08em] text-white"
                      style={{ clipPath: "polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%)" }}
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
