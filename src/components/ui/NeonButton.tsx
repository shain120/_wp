import React from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";

interface NeonButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function NeonButton({
  href,
  children,
  variant = "primary",
  className = "",
}: NeonButtonProps) {
  const setCursorVariant = useStore((state) => state.setCursorVariant);

  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, x: 1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setCursorVariant("active")}
      onMouseLeave={() => setCursorVariant("default")}
      className={`group hero-action-button hero-action-button--${variant} ${className}`}
    >
      <img
        aria-hidden="true"
        alt=""
        src="/hero-badges/badge-action.svg"
        className="hero-action-button-frame"
      />
      <span className="hero-action-button-label">{children}</span>
    </motion.a>
  );
}
