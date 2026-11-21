"use client";

import { useEffect, useState } from "react";

// A donut that fills to the real percentage, with the number counting up.
// The figure is the project's own stated result. It renders at its true
// value first, so the correct number shows even if the animation never runs.
export function StatRing({ percent, size = 148 }: { percent: number; size?: number }) {
  const [value, setValue] = useState(percent);
  const stroke = 14;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    setValue(0);
    const start = performance.now();
    const run = (now: number) => {
      const t = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(percent * eased));
      if (t < 1) frame = requestAnimationFrame(run);
    };
    frame = requestAnimationFrame(run);

    // If the frames stop coming, land on the real number.
    const failsafe = window.setTimeout(() => {
      cancelAnimationFrame(frame);
      setValue(percent);
    }, 2500);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(failsafe);
    };
  }, [percent]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
        className="-rotate-90"
      >
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} opacity={0.22} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
          style={{ transition: "stroke-dashoffset 90ms linear" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[2.5rem] font-bold tracking-[-0.04em] tabular-nums">
        {value}%
      </span>
    </div>
  );
}
