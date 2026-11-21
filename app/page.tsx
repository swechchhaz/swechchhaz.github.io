import {
  education,
  experience,
  leadership,
  profile,
  projects,
  skills,
  type Project,
} from "@/lib/content";
import { Footer } from "@/components/Footer";
import { Todo } from "@/components/Todo";
import { ArrowBadge, Tile, outlined } from "@/components/Tile";
import { toneBg } from "@/components/tones";

const find = (slug: string): Project => projects.find((p) => p.slug === slug)!;

function ResultTile({ project }: { project: Project }) {
  const t = project.teaser!;
  return (
    <Tile
      href={`/projects/${project.slug}/`}
      className={`${toneBg[project.tone]} justify-between`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[clamp(3rem,5vw,4.25rem)] font-bold leading-none tracking-[-0.04em]">
          {t.figure}
        </span>
        <ArrowBadge />
      </div>
      <p className="mt-6 text-base leading-snug">{t.text}</p>
    </Tile>
  );
}

export default function Home() {
  const softball = find("softball-coach-chatbot");

  return (
    <>
      <header className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-6 md:px-10">
        <span className="text-lg font-semibold">{profile.name}</span>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-base">
            <li><a className="hover:underline" href="#projects">Projects</a></li>
            <li><a className="hover:underline" href="#experience">Experience</a></li>
            <li><a className="hover:underline" href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 md:px-10">
        <section
          aria-label="Introduction"
          className="grid gap-4 pt-4 sm:grid-cols-2 lg:auto-rows-[minmax(220px,auto)] lg:grid-cols-4"
        >
          <Tile className="justify-between bg-brand p-8 text-white sm:col-span-2 lg:row-span-2">
            <div>
              <h1 className="text-[clamp(2.4rem,9vw,4.4rem)] leading-[0.95] tracking-[-0.04em] lg:text-[clamp(2.8rem,5.6vw,4.4rem)]">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-[30ch] text-xl leading-snug text-indigo-100">
                {profile.tagline}
              </p>
            </div>
            <div className="mt-10">
              <p className="text-base text-indigo-100">Now: {profile.now}.</p>
              <p className="mt-3 inline-block rounded-full bg-brand-deep px-4 py-1.5 text-base">
                Looking for analytics and consulting roles
              </p>
            </div>
          </Tile>

          <ResultTile project={find("sales-decision-support")} />
          <ResultTile project={find("alteryx-workflow-automation")} />

          <Tile
            href={`/projects/${softball.slug}/`}
            className={`${toneBg[softball.tone]} justify-between sm:col-span-2`}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="max-w-[28ch] text-2xl leading-tight">
                {softball.title}
              </h2>
              <ArrowBadge />
            </div>
            <p className="mt-6 text-base leading-snug">
              Python and Gemini on Google Cloud, for Purdue Softball
            </p>
          </Tile>

          <ResultTile project={find("marketing-campaign-analytics")} />

          <Tile className="on-dark justify-between bg-ink text-white">
            <p className="text-base text-white/70">Find me on</p>
            <ul className="mt-6 space-y-1 text-xl">
              <li><a className="underline" href={profile.linkedin}>LinkedIn</a></li>
              <li><a className="underline" href={profile.github}>GitHub</a></li>
              {profile.email && (
                <li><a className="underline" href={`mailto:${profile.email}`}>Email</a></li>
              )}
            </ul>
          </Tile>

          <Tile className={`${outlined} justify-between sm:col-span-2`}>
            <p className="text-base text-mute">Tools I work in</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {skills.slice(0, 8).map((s) => (
                <li
                  key={s}
                  className="rounded-full border-[1.5px] border-ink px-3.5 py-1 text-[15px]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Tile>
        </section>

        <section id="projects" className="mt-28 scroll-mt-8">
          <h2 className="text-4xl md:text-5xl">Projects</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Tile
                  href={`/projects/${p.slug}/`}
                  className={`${toneBg[p.tone]} min-h-[300px] justify-between p-8`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-base">{p.date}</p>
                      <ArrowBadge />
                    </div>
                    <h3 className="mt-5 text-3xl leading-[1.05]">{p.title}</h3>
                    <p className="mt-4 max-w-[44ch]">{p.summary}</p>
                  </div>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border-[1.5px] border-ink px-3 py-0.5 text-[15px]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Tile>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="mt-28 scroll-mt-8">
          <h2 className="text-4xl md:text-5xl">Experience</h2>
          <ol className="mt-8 grid gap-4">
            {experience.map((e) => (
              <li
                key={e.org}
                className={`${outlined} rounded-[28px] p-6 md:grid md:grid-cols-[13rem_1fr] md:gap-8 md:p-8`}
              >
                <p className="text-base text-mute">{e.dates}</p>
                <div className="mt-2 md:mt-0">
                  <h3 className="text-2xl">
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

        <section id="about" className="mt-28 scroll-mt-8">
          <h2 className="text-4xl md:text-5xl">About</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Tile className={`${outlined} lg:row-span-2`}>
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              ) : (
                <p>
                  <Todo>headshot to come</Todo>
                </p>
              )}
            </Tile>

            <Tile className={`${outlined} gap-4 lg:col-span-2`}>
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
            </Tile>

            <Tile className={`${outlined} gap-5 lg:col-span-2`}>
              <h3 className="text-2xl">Education</h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="font-semibold">{e.school}</p>
                    <p>{e.degree}</p>
                    <p className="text-base text-mute">{e.dates}</p>
                  </li>
                ))}
              </ul>
            </Tile>

            <Tile className={`${outlined} gap-4 lg:col-span-3`}>
              <h3 className="text-2xl">Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border-[1.5px] border-ink px-3.5 py-1 text-[15px]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Tile>

            <Tile className={`${outlined} gap-4 lg:col-span-3`}>
              <h3 className="text-2xl">Leadership</h3>
              <ul className="max-w-[70ch] list-disc space-y-3 pl-5">
                {leadership.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Tile>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
