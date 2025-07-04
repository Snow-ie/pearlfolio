"use client";

import Image from "next/image";
import { projects } from "../data/siteContent";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import clsx from "clsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-4 md:px-8">
      <SectionTitle id="projects">Projects</SectionTitle>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.li key={p.name} variants={card}>
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "group flex h-full flex-col overflow-hidden rounded-xl bg-surface/70 ring-1 ring-white/5",
                "transition hover:-translate-y-1.5 hover:ring-accent/80"
              )}
            >
              <div className="relative h-48 w-full shrink-0">
                {p.thumbnail ? (
                  <Image
                    src={p.thumbnail}
                    alt={`${p.name} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-accent/20 to-accent/40" />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-100">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-400">{p.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded bg-accent/20 px-2 py-0.5 text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1 text-accent">
                  Live&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition group-hover:translate-x-0.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
