import React, { useRef, useState } from "react";
import { FileText, Radio, SendHorizontal } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { ContactData, SocialLink } from "@/types/portfolio";

interface ContactProps {
  data: ContactData;
  socials: SocialLink[];
}

export default function Contact({ data, socials }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useScrollAnimation(ref, { selector: "[data-animate]", stagger: 0.1 });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id={data.id} ref={ref} className="section-shell">
      <SectionTitle
        index={data.index}
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
      />

      <GlassCard data-animate className="p5-paper-card mt-10 p-6 sm:p-7">
        <p className="p5-readable-label p5-readable-label--red">
          PUBLICATION TIMELINE
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="award-count-chip award-count-chip--yellow">
            2025 / 6
          </span>
          <span className="p5-readable-label p5-readable-label--ink opacity-70">
            to
          </span>
          <span className="award-count-chip award-count-chip--paper">
            2025 / 12
          </span>
        </div>

        <div className="publication-timeline mt-6">
          {data.posts?.map((post) => {
            const featured = post.tone === "upcoming";

            return (
              <div key={`${post.date}-${post.title}`} className="publication-timeline-item">
                <div className="publication-timeline-rail">
                  <span className="publication-timeline-dot" />
                  <span className="publication-timeline-date">{post.date}</span>
                </div>

                <article
                  className={`${featured ? "p5-red-card text-white" : "p5-ink-card text-white"} publication-timeline-card p-5 sm:p-6`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-3xl">
                      <p className="p5-earwig text-base uppercase text-p5yellow sm:text-lg">
                        {post.status}
                      </p>
                      <h3 className="p5-accent mt-3 text-2xl leading-tight text-white sm:text-3xl">
                        {post.title}
                      </h3>
                    </div>
                    <span
                      className={`research-post-meta ${featured ? "research-post-meta--light" : ""}`}
                    >
                      {post.meta}
                    </span>
                  </div>

                  <p className="p5-regular mt-4 max-w-3xl text-base leading-8 text-white/85">
                    {post.summary}
                  </p>

                  {post.tags?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`research-post-tag ${featured ? "research-post-tag--light" : ""}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {post.links?.length ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {post.links.map((link, index) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`research-post-link ${
                            index === 0 ? "research-post-link--primary" : "research-post-link--secondary"
                          }`}
                        >
                          <FileText size={15} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase text-p5yellow">
                      <Radio size={15} />
                      Publication record available
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {data.noteLinks?.length ? (
        <GlassCard data-animate className="p5-paper-card mt-6 p-6">
          <p className="p5-readable-label p5-readable-label--red">
            RESEARCH NOTES / HACKMD
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
            {data.noteLinks.map((note) => (
              <a
                key={note.href}
                href={note.href}
                className="p5-note-link"
              >
                {note.label}
              </a>
            ))}
          </div>
        </GlassCard>
      ) : null}

      <GlassCard data-animate className="p5-paper-card mt-6 p-6 sm:p-7">
        <div className="border-4 border-black bg-paper p-5 text-black">
          <div className="max-w-3xl">
            <p className="p5-readable-label p5-readable-label--red">
              CALLING CARD
            </p>
            <h3 className="p5-accent mt-3 text-3xl leading-tight text-black sm:text-4xl">
              {data.messageTitle}
            </h3>
            <p className="p5-regular mt-4 text-base leading-8 text-black/80 sm:text-lg">
              {data.messageDescription}
            </p>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input className="terminal-input" placeholder="NAME" />
              <input
                className="terminal-input"
                type="email"
                placeholder="EMAIL"
              />
              <textarea
                className="terminal-input min-h-[180px] resize-none"
                placeholder="MESSAGE"
              />
              <button
                type="submit"
                className="p5-menu inline-flex items-center justify-center gap-2 border-2 border-black bg-black px-5 py-3 text-base uppercase tracking-[0.08em] text-white transition hover:-translate-y-1"
                style={{ clipPath: "polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%)" }}
              >
                <SendHorizontal size={16} />
                {submitted ? "CARD SENT" : "SEND CARD"}
              </button>
            </form>

            <div className="grid gap-4">
              <div className="p5-red-card p-6">
                <p className="p5-menu text-sm uppercase tracking-[0.06em] text-p5yellow">
                  DIRECT LINE
                </p>
                <a
                  href={`mailto:${data.email}`}
                  className="p5-accent mt-4 block break-all text-2xl text-white sm:text-3xl"
                >
                  {data.email}
                </a>
                <p className="p5-regular mt-3 text-sm leading-7 text-white/80">
                  適合研究合作、AI 系統討論、無線網路控制、LLM 應用交流，或任何你想一起實作與驗證的題目。
                </p>
              </div>

              <div className="p5-ink-card p-6">
                <p className="p5-menu text-sm uppercase tracking-[0.06em] text-p5yellow">
                  SOCIAL LINK
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="chip hover:bg-p5red hover:text-white"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
