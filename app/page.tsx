import Link from "next/link";
import {
  education,
  experience,
  heroResults,
  leadership,
  profile,
  projects,
  skills,
} from "@/lib/content";
import { Footer } from "@/components/Footer";
import { ProfileLinks } from "@/components/Links";
import { Todo } from "@/components/Todo";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-6 md:px-10">
        <span className="font-display text-lg font-semibold">{profile.name}</span>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-base">
            <li><a className="hover:underline" href="#projects">Projects</a></li>
            <li><a className="hover:underline" href="#experience">Experience</a></li>
            <li><a className="hover:underline" href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:px-10 md:pt-24">
          <h1 className="font-display text-[clamp(3rem,9.5vw,7.75rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            {profile.name}
          </h1>
          <p className="mt-8 max-w-[34ch] font-display text-2xl leading-snug md:text-3xl">
            {profile.tagline}
          </p>

          <ul className="mt-14 max-w-[62ch] space-y-5 text-xl md:text-2xl">
            {heroResults.map((r, i) => (
              <li key={r.slug}>
                <Link
                  href={`/projects/${r.slug}/`}
                  className="hover:underline"
                >
                  {r.before}
                  <span
                    className="mark mark-swipe font-semibold"
                    style={{ ["--i" as string]: i }}
                  >
                    {r.figure}
                  </span>
                  {r.after}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-lg text-slate">Now: {profile.now}.</p>
          <p className="mt-1 text-lg text-slate">Looking for analytics and consulting roles.</p>
          <ProfileLinks className="mt-4 text-lg" />
        </section>

        <section
          id="projects"
          className="mx-auto mt-24 max-w-5xl scroll-mt-8 px-6 md:px-10"
        >
          <h2 className="text-4xl font-bold md:text-5xl">Projects</h2>
          <ul className="mt-10 border-b border-rule">
            {projects.map((p) => (
              <li key={p.slug} className="border-t border-rule">
                <Link
                  href={`/projects/${p.slug}/`}
                  className="group grid gap-4 py-8 md:grid-cols-[1fr_15rem] md:gap-10"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold group-hover:underline md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[58ch]">{p.summary}</p>
                  </div>
                  <div className="text-base text-slate">
                    <p>{p.date}</p>
                    <p className="mt-2">{p.tags.join(", ")}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="experience"
          className="mx-auto mt-28 max-w-5xl scroll-mt-8 px-6 md:px-10"
        >
          <h2 className="text-4xl font-bold md:text-5xl">Experience</h2>
          <ol className="mt-10">
            {experience.map((e) => (
              <li
                key={e.org}
                className="grid gap-3 border-t border-rule py-8 md:grid-cols-[15rem_1fr] md:gap-10"
              >
                <p className="text-base text-slate">{e.dates}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    {e.role}, {e.org}
                  </h3>
                  <ul className="mt-4 max-w-[62ch] list-disc space-y-3 pl-5">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="about"
          className="mx-auto mt-28 max-w-5xl scroll-mt-8 px-6 md:px-10"
        >
          <h2 className="text-4xl font-bold md:text-5xl">About</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-[15rem_1fr]">
            <div>
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="aspect-square w-full object-cover"
                />
              ) : (
                <p className="text-sm">
                  <Todo>headshot to come</Todo>
                </p>
              )}
            </div>
            <div className="max-w-[62ch] space-y-5">
              <p>
                I&rsquo;m a graduate student in Business Analytics and
                Information Management at Purdue&rsquo;s Daniels School of
                Business, with a bachelor&rsquo;s degree in computer science and
                engineering.
              </p>
              <p>
                My work so far includes a Python and Gemini chatbot for Purdue
                Softball, Alteryx workflow automation, a Streamlit sales
                dashboard, and campaign engagement analysis for a marketing
                team.
              </p>
              <p>
                I&rsquo;m looking for analytics roles first and consulting roles
                second.
              </p>
              <p>
                <Todo>
                  one or two sentences in your own words on what drew you to
                  analytics
                </Todo>
              </p>
            </div>
          </div>

          <h3 className="mt-16 text-2xl font-semibold">Education</h3>
          <ul className="mt-4">
            {education.map((e) => (
              <li
                key={e.school}
                className="grid gap-2 border-t border-rule py-5 md:grid-cols-[15rem_1fr] md:gap-10"
              >
                <p className="text-base text-slate">{e.dates}</p>
                <p>
                  <span className="font-display text-xl font-semibold">
                    {e.school}
                  </span>
                  <br />
                  {e.degree}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 text-2xl font-semibold">Skills</h3>
          <ul className="mt-4 flex max-w-[62ch] flex-wrap gap-x-6 gap-y-2 text-lg">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h3 className="mt-16 text-2xl font-semibold">Leadership</h3>
          <ul className="mt-4 max-w-[62ch] list-disc space-y-3 pl-5">
            {leadership.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
