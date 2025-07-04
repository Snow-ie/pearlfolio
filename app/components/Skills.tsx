"use client";

import { motion } from "framer-motion";
import { skills } from "../data/siteContent";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8">
      <SectionTitle id="skills">Skills</SectionTitle>

      <motion.ul
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        viewport={{ once: true }}
      >
        {Object.entries(skills).map(([group, list]) => (
          <motion.li
            key={group}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-lg bg-surface/70 p-6 ring-1 ring-white/5"
          >
            <h3 className="mb-3 font-semibold capitalize text-gray-100">
              {group}
            </h3>

            <ul className="flex flex-wrap gap-3 text-sm text-gray-300">
              {list.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded bg-accent/20 px-2 py-0.5"
                >
                  {/* Icon is already a React component */}
                  <Icon className="h-5 w-5 shrink-0" aria-hidden />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
