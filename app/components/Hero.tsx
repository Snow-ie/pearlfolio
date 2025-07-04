"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "../data/siteContent";

export default function Hero() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-32">
      <Image
        src="/HeroImage.png"
        alt="dark futuristic banner"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={profile.avatar}
            alt={`${profile.name} photo`}
            width={160}
            height={160}
            priority
            className="rounded-full border-4 border-accent shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl font-bold leading-tight text-gray-100 md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I’m&nbsp;
          <span className="text-accent">{profile.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {profile.summary}
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-medium text-surface"
          whileHover={{ scale: 1.05 }}
        >
          View my work
        </motion.a>
      </div>
    </section>
  );
}
