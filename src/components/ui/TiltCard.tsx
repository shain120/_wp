import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useStore } from "@/store/useStore";

interface TiltCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TiltCard({ className = "", children }: TiltCardProps) {
  const ref = useRef<HTMLElement>(null);
  const setCursorVariant = useStore((state) => state.setCursorVariant);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 18,
  });

  const handleMove = (event: React.MouseEvent) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    x.set(px);
    y.set(py);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setCursorVariant("default");
  };

  return (
    <motion.article
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      onMouseMove={handleMove}
      onMouseEnter={() => setCursorVariant("active")}
      onMouseLeave={reset}
      className={`glass-panel relative overflow-hidden rounded-[28px] ${className}`}
    >
      {children}
    </motion.article>
  );
}
