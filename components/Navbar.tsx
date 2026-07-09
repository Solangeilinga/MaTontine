"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#1B6B3A" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                fill="white"
              />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                fill="none"
                stroke="white"
                strokeWidth="0"
              />
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            MaTontine
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Fonctionnalités", "Comment ça marche", "Pour qui"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/[éè]/g, "e").replace(/[àâ]/g, "a")}`}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#telecharger"
            className="px-5 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{ backgroundColor: "#C9963A", color: "white" }}
          >
            Télécharger
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: "#134d2b" }}
        >
          {["Fonctionnalités", "Comment ça marche", "Pour qui"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#telecharger"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-center mt-2"
            style={{ backgroundColor: "#C9963A", color: "white" }}
            onClick={() => setOpen(false)}
          >
            Télécharger l'application
          </a>
        </div>
      )}
    </nav>
  );
}
