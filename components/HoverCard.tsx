"use client";

import Link from "next/link";
import { useRef } from "react";

// A card that leans towards the cursor. It writes the pointer's position into
// two CSS variables; the stylesheet decides whether to use them, so a touch
// screen or a reduced-motion setting simply ignores them.
export function HoverCard({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const track = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", (((e.clientX - r.left) / r.width) - 0.5).toFixed(3));
    el.style.setProperty("--py", (((e.clientY - r.top) / r.height) - 0.5).toFixed(3));
  };

  const settle = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={`hover-card ${className}`}
      onPointerMove={track}
      onPointerLeave={settle}
      onPointerCancel={settle}
      onBlur={settle}
    >
      {children}
    </Link>
  );
}
