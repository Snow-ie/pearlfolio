"use client";

import { experience } from "../data/siteContent";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import clsx from "clsx";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section className="mx-auto mt-24 max-w-4xl px-4 md:px-8">
      <SectionTitle id="experience">Experience</SectionTitle>

      <div className="relative">
        <span className="absolute left-4 top-0 h-full w-0.5 rounded bg-accent/70 md:left-6" />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10 pl-12 md:pl-20"
        >
          {experience.map((job) => (
            <motion.li
              key={job.company}
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
                <header className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-semibold text-gray-100">
                    {job.title}
                    <span className="font-normal text-gray-400">
                      {" "}
                      · {job.company}
                    </span>
                  </h3>
                  <time className="mt-1 text-sm text-gray-400 md:mt-0">
                    {job.period}
                  </time>
                </header>

                <ul className="mt-4 space-y-1 text-gray-300 marker:text-accent">
                  {job.bullets.map((b) => (
                    <li key={b} className="list-disc pl-4">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
