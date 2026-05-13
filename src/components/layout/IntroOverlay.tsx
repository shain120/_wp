import { motion } from "framer-motion";
import { useMemo } from "react";

function formatDateLabel(date: Date): string {
  return `${date.getMonth() + 1}/${String(date.getDate()).padStart(2, "0")}`;
}

interface IntroOverlayProps {
  progress: number;
  brand: string;
  name: string;
  title: string;
}

export default function IntroOverlay({ progress, brand, name, title }: IntroOverlayProps) {
  const introDate = useMemo(() => new Date(), []);
  const weekday = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", { weekday: "long" })
        .format(introDate)
        .toUpperCase(),
    [introDate],
  );

  const percent = String(Math.round(progress)).padStart(3, "0");

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.38, ease: "easeInOut" } }}
    >
      <motion.div
        className="intro-shape intro-shape-top"
        initial={{ x: "-110%", rotate: 10 }}
        animate={{ x: 0, rotate: 8 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="intro-shape intro-shape-bottom"
        initial={{ x: "110%", rotate: -6 }}
        animate={{ x: 0, rotate: -4 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="intro-date-tag"
        initial={{ opacity: 0, y: 18, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.6, delay: 0.18 }}
      >
        <span className="intro-date-main">{formatDateLabel(introDate)}</span>
        <span className="intro-date-day">{weekday}</span>
      </motion.div>

      <motion.div
        className="intro-rank-tag"
        initial={{ opacity: 0, y: -18, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ duration: 0.6, delay: 0.22 }}
      >
        RANK S
      </motion.div>

      <div className="intro-stage">
        <div className="intro-centerpiece">
          <motion.div
            className="intro-burst-ring"
            initial={{ scale: 0.72, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="intro-burst-lines" />
            <div className="intro-core-disc">
              <div className="intro-core-glow" />
              <div className="intro-core-mark">
                <span className="intro-core-symbol">S</span>
                <span className="intro-core-brand">{brand}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="intro-copy-shell"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.28 }}
          >
            <span className="intro-kicker">OPERATION START</span>
            <h1 className="intro-title">{name}</h1>
            <p className="intro-subtitle">{title}</p>
            <div className="intro-cutline" aria-label="Our Beginning">
              {["Our", "Beginning"].map((chunk) => (
                <span key={chunk}>{chunk}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="intro-progress-shell"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.44 }}
        >
          <div className="intro-progress-head">
            <span className="intro-progress-label">ROUTE SECURED</span>
            <span className="intro-progress-value">{percent}%</span>
          </div>

          <div className="intro-progress-track" aria-hidden="true">
            <motion.div
              className="intro-progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <span className="intro-progress-sheen" />
            </motion.div>
            <div className="intro-progress-stripes" />
          </div>

          <div className="intro-progress-foot">
            <span>WIRELESS NETWORK CONTROL</span>
            <span>LLM SYSTEM DESIGN</span>
            <span>PYTHON / AI / ML</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
