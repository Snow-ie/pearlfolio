"use client";

import { motion } from "framer-motion";

type Props = { id: string; children: string };

export default function SectionTitle({ id, children }: Props) {
  return (
    <motion.h2
      id={id}
      className="my-8 flex items-center gap-3 text-3xl font-bold tracking-tight text-gray-100 md:text-4xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className="inline-block h-0.5 w-8 bg-accent md:w-10" />
      {children}
    </motion.h2>
  );
}
