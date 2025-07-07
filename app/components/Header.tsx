"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { profile } from "../data/siteContent";

import {
  motion,
  AnimatePresence,
  easeOut,
  Variants,
  TargetAndTransition,
} from "framer-motion";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];
const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * custom,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};
const mobileMenuVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
    },
  },
};
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.span
        className={clsx(
          "fixed inset-x-0 top-0 z-[60] origin-top bg-accent",
          scrolled ? "h-1" : "h-0"
        )}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 flex h-12 items-center justify-between bg-surface/70 backdrop-blur",
          "px-4 md:h-16 md:px-8 xl:h-20",
          scrolled && "ring-1 ring-white/10"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <motion.a
          href="#"
          className="text-lg font-extrabold text-accent md:text-xl xl:text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {profile.name.split(" ")[0].toUpperCase()}
        </motion.a>

        <nav className="hidden items-center gap-4 xl:gap-6 md:flex">
          {links.map(({ href, label }, i) => (
            <motion.a
              key={href}
              href={href}
              className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300
                         transition hover:bg-accent hover:text-surface xl:text-base"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="/resume.pdf"
          download="Pearl_Ekeh_Resume.pdf"
          onClick={() => setOpen(false)}
          className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-semibold
            text-surface shadow transition hover:brightness-110 md:inline xl:px-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>

        <motion.button
          ref={menuBtnRef}
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={28} />
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-surface/95 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.button
              onClick={() => {
                setOpen(false);
                menuBtnRef.current?.focus();
              }}
              className="self-end p-4"
              aria-label="Close menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} />
            </motion.button>

            <nav className="mt-6 flex flex-1 flex-col items-center justify-center gap-6 text-lg">
              {links.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="w-3/4 rounded-full bg-white/5 py-4 text-center font-medium text-gray-200
                             transition hover:bg-accent hover:text-surface"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {label}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                download="Pearl_Ekeh_Resume.pdf"
                onClick={() => setOpen(false)}
                className="mt-10 w-3/4 rounded-full bg-accent py-4
                 text-center font-semibold text-surface"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={links.length}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
