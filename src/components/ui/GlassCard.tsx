import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function GlassCard({
  as: Tag = motion.div,
  className = "",
  children,
  ...props
}: GlassCardProps) {
  return (
    <Tag
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`glass-panel ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
