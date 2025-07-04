"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { profile } from "../data/siteContent";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

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

  const mailHref = `mailto:${profile.contacts.email}`;

  return (
    <>
      <span
        className={clsx(
          "fixed inset-x-0 top-0 z-[60] origin-top bg-accent transition-transform duration-300",
          scrolled ? "h-1 scale-y-100" : "h-0 scale-y-0"
        )}
      />

      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 flex h-12 items-center justify-between bg-surface/70 backdrop-blur",
          "px-4 md:h-16 md:px-8 xl:h-20",
          scrolled && "ring-1 ring-white/10"
        )}
      >
        <a
          href="#"
          className="text-lg font-extrabold text-accent md:text-xl xl:text-2xl"
        >
          {profile.name.split(" ")[0].toUpperCase()}
        </a>

        <nav className="hidden items-center gap-4 xl:gap-6 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300
                         transition hover:bg-accent hover:text-surface xl:text-base"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={mailHref}
          className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-semibold
                     text-surface shadow transition hover:brightness-110 md:inline xl:px-6"
        >
          Hire&nbsp;Me
        </a>

        <button
          ref={menuBtnRef}
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-50 flex flex-col bg-surface/95 backdrop-blur-sm transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => {
            setOpen(false);
            menuBtnRef.current?.focus();
          }}
          className="self-end p-4"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <nav className="mt-6 flex flex-1 flex-col items-center justify-center gap-6 text-lg">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="w-3/4 rounded-full bg-white/5 py-4 text-center font-medium text-gray-200
                         transition hover:bg-accent hover:text-surface"
            >
              {label}
            </a>
          ))}

          <a
            href={mailHref}
            onClick={() => setOpen(false)}
            className="mt-10 w-3/4 rounded-full bg-accent py-4 text-center font-semibold text-surface"
          >
            Hire&nbsp;Me
          </a>
        </nav>
      </div>
    </>
  );
}
