import { HoverCard } from "./HoverCard";

const base = "relative overflow-hidden flex flex-col rounded-[28px] p-6";

// A tile is a rounded block. With an href it becomes a link that responds
// to the cursor.
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
      <HoverCard href={href} className={`${base} h-full ${className}`}>
        {children}
      </HoverCard>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}

export function ArrowBadge() {
  return (
    <span
      aria-hidden="true"
      className="hover-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-current"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

export const outlined = "border-[1.5px] border-ink bg-white";
