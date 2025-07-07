"use client";

import { education } from "../data/siteContent";
import SectionTitle from "./SectionTitle";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section className="mx-auto mt-24 max-w-2xl px-4 md:px-8">
      <SectionTitle id="education">Education</SectionTitle>

      <div className="relative">
        <span className="absolute left-4 top-0 h-full w-0.5 rounded bg-accent/70 md:left-6" />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 pl-12 md:pl-20"
        >
          {education.map((edu) => (
            <motion.li
              key={edu.school}
              variants={item}
              className="group relative"
            >
              <span
                className={clsx(
                  "absolute -left-[25px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-surface ring-4 ring-accent transition",
                  "group-hover:scale-110"
                )}
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div className="rounded-lg bg-surface/80 p-5 ring-1 ring-white/10 backdrop-blur">
                <h3 className="font-semibold text-gray-100">{edu.school}</h3>
                <p className="mt-1 text-gray-300">{edu.degree}</p>
                <time className="mt-2 block text-sm text-gray-400">
                  {edu.period}
                </time>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
