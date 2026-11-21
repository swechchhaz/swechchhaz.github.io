import { profile } from "@/lib/content";

export function ProfileLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      <li>
        <a className="underline" href={profile.linkedin}>
          LinkedIn
        </a>
      </li>
      <li>
        <a className="underline" href={profile.github}>
          GitHub
        </a>
      </li>
      {profile.email && (
        <li>
          <a className="underline" href={`mailto:${profile.email}`}>
            Email
          </a>
        </li>
      )}
    </ul>
  );
}
