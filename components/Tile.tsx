import Link from "next/link";

const base = "flex flex-col rounded-[28px] p-6";
const lift =
  "h-full transition-transform duration-200 motion-safe:hover:-translate-y-1";

// A tile is a rounded block. With an href it is a link and lifts on hover.
export function Tile({
  href,
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link href={href} className={`${base} ${lift} ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}

export function ArrowBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-current"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

export const outlined = "border-[1.5px] border-ink bg-white";
