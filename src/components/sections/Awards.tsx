import { useRef } from "react";
import { FileText, Medal, Trophy } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { AwardsData } from "@/types/portfolio";

interface AwardsProps {
  data: AwardsData;
}

export default function Awards({ data }: AwardsProps) {
  const ref = useRef<HTMLElement>(null);
  const [featuredAward, ...awardLog] = data.entries;

  useScrollAnimation(ref, { selector: "[data-animate]", stagger: 0.12 });

  if (!featuredAward) {
    return null;
  }

  return (
    <section id={data.id} ref={ref} className="section-shell">
      <SectionTitle
        index={data.index}
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
      />

      <div className="award-feature-grid mt-10">
        <GlassCard data-animate className="p5-paper-card p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="award-count-chip award-count-chip--yellow">
              Recognition
            </span>
            <span className="award-count-chip">
              {featuredAward.year ?? "2025"} Highlight
            </span>
          </div>

          <div className="award-certificate-stage mt-5">
            <img
              src={featuredAward.image}
              alt={`${featuredAward.label} certificate`}
              className="award-certificate-image"
            />
          </div>
        </GlassCard>

        <GlassCard data-animate className="p5-ink-card p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="award-count-chip">
              <Trophy size={15} />
              Featured Award
            </span>
            <span className="award-count-chip award-count-chip--paper">
              <Medal size={15} />
              {featuredAward.label}
            </span>
          </div>

          <h3 className="p5-accent mt-5 text-4xl leading-[0.92] text-white sm:text-5xl">
            {featuredAward.label}
          </h3>
          <div className="award-summary-board mt-4">
            <p className="award-summary text-base leading-8 sm:text-lg">
              {featuredAward.summary}
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="award-detail-item">
              <p className="award-detail-label">Conference</p>
              <div className="award-detail-panel">
                <p className="award-detail-value">{featuredAward.conference}</p>
              </div>
            </div>
            <div className="award-detail-item">
              <p className="award-detail-label">Date / Location</p>
              <div className="award-detail-panel">
                <p className="award-detail-value">{featuredAward.dateLocation}</p>
              </div>
            </div>
            <div className="award-detail-item">
              <p className="award-detail-label">Paper Title</p>
              <div className="award-detail-panel">
                <p className="award-detail-value award-detail-value--title">
                  {featuredAward.paperTitle}
                </p>
              </div>
            </div>
            <div className="award-detail-item">
              <p className="award-detail-label">Presented To</p>
              <div className="award-detail-panel">
                <p className="award-detail-value">{featuredAward.recipients}</p>
              </div>
            </div>
          </div>

          {featuredAward.links?.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {featuredAward.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`research-post-link ${
                    index === 0
                      ? "research-post-link--primary"
                      : "research-post-link--secondary"
                  }`}
                >
                  <FileText size={15} />
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </GlassCard>
      </div>

      <GlassCard data-animate className="p5-paper-card mt-6 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="p5-readable-label p5-readable-label--red">
              AWARD LOG
            </p>
            <h3 className="p5-accent mt-3 text-3xl leading-tight text-black sm:text-4xl">
              Recognition ready for future entries.
            </h3>
          </div>
          <span className="award-count-chip">
            {data.entries.length} item{data.entries.length > 1 ? "s" : ""} logged
          </span>
        </div>

        <div className="award-log-grid mt-6">
          {[featuredAward, ...awardLog].map((award) => (
            <article key={award.paperTitle} className="award-log-item">
              <p className="p5-earwig text-base uppercase text-p5yellow sm:text-lg">
                {award.label}
              </p>
              <h4 className="p5-accent mt-3 text-2xl leading-tight text-white sm:text-3xl">
                {award.conference}
              </h4>
              <div className="award-log-info mt-4">
                <div className="award-log-panel">
                  <p className="award-log-info-label">Date / Location</p>
                  <p className="award-log-meta mt-2 text-sm leading-7 sm:text-base">
                    {award.dateLocation}
                  </p>
                </div>
                <div className="award-log-panel">
                  <p className="award-log-info-label">Paper Title</p>
                  <p className="award-log-copy mt-2 text-sm leading-7 sm:text-base">
                    {award.paperTitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
