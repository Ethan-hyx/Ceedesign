"use client";

import { useState, useEffect } from "react";

/* ── SVG Icons ── */
function IconHome({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? "2.2" : "1.8"}
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill={active ? "currentColor" : "none"} />
      <polyline points="9 22 9 12 15 12 15 22" stroke={active ? "#fff" : "currentColor"} strokeWidth="1.8" />
    </svg>
  );
}

function IconWork({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? "2.2" : "1.8"}
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" fill={active ? "currentColor" : "none"} />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke={active ? "#fff" : "currentColor"} strokeWidth="1.8" />
    </svg>
  );
}

function IconUser({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? "2.2" : "1.8"}
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" fill={active ? "currentColor" : "none"} />
      <circle cx="12" cy="7" r="4" fill={active ? "currentColor" : "none"} />
    </svg>
  );
}

function IconMail({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={active ? "2.2" : "1.8"}
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" fill={active ? "currentColor" : "none"} />
      <path d="M22 6L12 13 2 6" stroke={active ? "#fff" : "currentColor"} strokeWidth="1.8" />
    </svg>
  );
}

const tabs = [
  { id: "home",    label: "Home",    href: "#",        Icon: IconHome },
  { id: "work",    label: "Work",    href: "#work",    Icon: IconWork },
  { id: "about",   label: "About",   href: "#about",   Icon: IconUser },
  { id: "contact", label: "Contact", href: "#contact", Icon: IconMail },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["contact", "about", "work"];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id === "work" ? "work" : id);
        if (el && y >= el.offsetTop) {
          setActive(id);
          return;
        }
      }
      setActive("home");
    };
    onScroll(); // set correct initial active state on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "8px 12px",
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "999px",
        boxShadow: "0 4px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
      }}
    >
      {/* Left two tabs */}
      {tabs.slice(0, 2).map(({ id, label, href, Icon }) => (
        <TabButton key={id} id={id} label={label} href={href} active={active === id} onActivate={setActive}>
          <Icon active={active === id} />
        </TabButton>
      ))}

      {/* Center + button — 发光玻璃球 */}
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          color: "#FFFFFF",
          margin: "0 6px",
          boxShadow:
            "0 0 0 8px rgba(45, 127, 249, 0.12), 0 0 24px rgba(45, 127, 249, 0.45), 0 4px 12px rgba(45, 127, 249, 0.3)",
          transition: "transform 200ms var(--ease-out-quart), box-shadow 200ms var(--ease-out-quart)",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow =
            "0 0 0 12px rgba(45, 127, 249, 0.15), 0 0 32px rgba(45, 127, 249, 0.55), 0 4px 16px rgba(45, 127, 249, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 0 0 8px rgba(45, 127, 249, 0.12), 0 0 24px rgba(45, 127, 249, 0.45), 0 4px 12px rgba(45, 127, 249, 0.3)";
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </a>

      {/* Right two tabs */}
      {tabs.slice(2).map(({ id, label, href, Icon }) => (
        <TabButton key={id} id={id} label={label} href={href} active={active === id} onActivate={setActive}>
          <Icon active={active === id} />
        </TabButton>
      ))}
    </div>
  );
}

function TabButton({
  id, label, href, active, onActivate, children,
}: {
  id: string; label: string; href: string;
  active: boolean; onActivate: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => onActivate(id)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3px",
        padding: "8px 14px",
        borderRadius: "999px",
        color: active ? "var(--text-primary)" : "var(--text-secondary)",
        backgroundColor: active ? "var(--surface-2)" : "transparent",
        transition: "background-color 200ms var(--ease-out-quart), color 200ms var(--ease-out-quart)",
        textDecoration: "none",
        minWidth: "52px",
      }}
    >
      {children}
      <span
        style={{
          fontSize: "10px",
          fontWeight: active ? 600 : 400,
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
    </a>
  );
}
