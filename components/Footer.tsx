import { profile } from "@/lib/content";
import { ProfileLinks } from "./Links";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-5xl px-6 pb-10 md:px-10">
      <div className="on-dark rounded-[28px] bg-ink p-8 text-white md:p-12">
        <h2 className="text-4xl md:text-5xl">Get in touch</h2>
        <ProfileLinks className="mt-6 text-xl" />
        <p className="mt-14 text-base text-white/70">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
