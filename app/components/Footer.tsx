"use client";

import { profile } from "../data/siteContent";
import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-surface/80 backdrop-blur-md border-t border-accent/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-100">
            Let’s build something&nbsp;
            <span className="text-accent">great</span> together
          </h2>
          <p className="mt-3 text-gray-400">
            Have an idea or opportunity? I’m always open to new projects and
            collaborations.
          </p>

          <a
            href={`mailto:${profile.contacts.email}`}
            className="group mt-6 inline-flex items-center gap-2 rounded-lg
                       bg-accent px-6 py-3 font-medium text-surface
                       transition hover:brightness-110"
          >
            <Mail size={18} className="transition group-hover:scale-110" />
            Say&nbsp;hello
          </a>
        </div>


        <div className="flex flex-col items-center justify-center md:items-end">
          <span className="mb-4 text-sm uppercase tracking-widest text-gray-400">
            Connect
          </span>

          <div className="flex gap-6">
            <a
              href={profile.contacts.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-full p-2 ring-1 ring-white/10
                         text-gray-300 transition
                         hover:bg-accent/20 hover:text-accent"
            >
              <Linkedin size={22} />
            </a>

            <a
              href={profile.contacts.github}
              target="_blank"
              aria-label="GitHub"
              className="rounded-full p-2 ring-1 ring-white/10
                         text-gray-300 transition
                         hover:bg-accent/20 hover:text-accent"
            >
              <Github size={22} />
            </a>
          </div>
        </div>
      </div>

  
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {profile.name}.
        All&nbsp;rights&nbsp;reserved.
      </div>
    </footer>
  );
}
