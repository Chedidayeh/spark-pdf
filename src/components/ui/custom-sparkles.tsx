"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Sparkle {
  id: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  size: number;
}

interface CustomSparklesProps {
  color?: string;
  quantity?: number;
  className?: string;
}

export function CustomSparkles({
  color = "#4E6BFF",
  quantity = 50,
  className = "",
}: CustomSparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newSparkles: Sparkle[] = Array.from({ length: quantity }).map(
      (_, i) => ({
        id: i,
        left: Math.random() * 110 + "%",
        top: Math.random() * 110 + "%",
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 1,
        size: Math.random() * 15 + 1,
      })
    );
    setSparkles(newSparkles);
  }, [quantity]);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 10 10"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 0L6.18034 3.81966L10 5L6.18034 6.18034L5 10L3.81966 6.18034L0 5L3.81966 3.81966L5 0Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
