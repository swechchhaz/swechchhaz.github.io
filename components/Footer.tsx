import { profile } from "@/lib/content";
import { ProfileLinks } from "./Links";

export function Footer() {
  return (
    <footer className="mt-32 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl">
          Get in touch
        </h2>
        <ProfileLinks className="mt-6 text-lg [&_a]:text-paper" />
        <p className="mt-16 text-sm text-paper/70">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
