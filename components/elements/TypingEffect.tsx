"use client";

import { motion } from "framer-motion";

export default function TypingEffect({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "linear" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      <span className="border-r-2 border-white animate-blink">|</span>
    </motion.p>
  );
}
