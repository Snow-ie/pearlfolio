"use client";
import { useState } from "react";

const palette = ["#10b981", "#06b6d4", "#8b5cf6", "#f59e0b"];

export default function AccentToggle() {
  const [accent, setAccent] = useState("#10b981");

  function apply(color: string) {
    setAccent(color);
    document.documentElement.style.setProperty("--color-accent", color);
  }

  return (
    <div className="flex gap-3">
      {palette.map((c) => (
        <button
          key={c}
          onClick={() => apply(c)}
          style={{ background: c }}
          className={`h-6 w-6 rounded-full ring-2 ${
            accent === c ? "ring-(--color-accent)" : "ring-transparent"
          }`}
          aria-label={`Switch accent to ${c}`}
        />
      ))}
    </div>
  );
}
