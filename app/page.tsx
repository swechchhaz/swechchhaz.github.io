import {
  education,
  experience,
  leadership,
  profile,
  projects,
  skills,
  type Project,
} from "@/lib/content";
import { Backdrop } from "@/components/Backdrop";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { StatRing } from "@/components/StatRing";
import { Todo } from "@/components/Todo";
import { ArrowBadge, Tile, outlined } from "@/components/Tile";
import { toneBg, toneDot } from "@/components/tones";

const find = (slug: string): Project => projects.find((p) => p.slug === slug)!;

function ResultTile({ project, i }: { project: Project; i: number }) {
  const t = project.teaser!;
  const percent = Number(t.figure.replace("%", ""));
  return (
    <div className="deal h-full" style={{ ["--i" as string]: i }}>
      <Tile
        href={`/projects/${project.slug}/`}
        className={`${toneBg[project.tone]} justify-between`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="hover-float">
            <StatRing percent={percent} size={118} />
          </div>
          <ArrowBadge />
        </div>
        <p className="mt-5 text-base leading-snug">{t.text}</p>

        <div
          className={`hover-panel absolute inset-0 ${toneBg[project.tone]} flex flex-col justify-center px-6`}
        >
          <p className="text-xl font-semibold leading-tight">{project.title}</p>
          <p className="mt-3 text-base">Read the full project</p>
        </div>
      </Tile>
    </div>
  );
}

export default function Home() {
  const softball = find("softball-coach-chatbot");

  return (
    <>
      <Backdrop />

      <header className="sticky top-0 z-20 mx-auto mb-2 flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 md:px-10">
        <span className="rounded-full border-[1.5px] border-ink bg-white/80 px-4 py-1.5 text-base font-semibold backdrop-blur">
          {profile.name}
        </span>
        <nav aria-label="Main">
          <ul className="flex gap-1 rounded-full border-[1.5px] border-ink bg-white/80 px-2 py-1.5 text-base backdrop-blur">
            <li><a className="rounded-full px-3 py-1 hover:bg-ink hover:text-white" href="#projects">Projects</a></li>
            <li><a className="rounded-full px-3 py-1 hover:bg-ink hover:text-white" href="#experience">Experience</a></li>
            <li><a className="rounded-full px-3 py-1 hover:bg-ink hover:text-white" href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 md:px-10">
        <section
          aria-label="Introduction"
          className="grid gap-4 pt-2 sm:grid-cols-2 lg:auto-rows-[minmax(240px,auto)] lg:grid-cols-4"
        >
          <div
            className="deal sm:col-span-2 lg:row-span-2"
            style={{ ["--i" as string]: 0 }}
          >
            <Tile className="h-full justify-between bg-brand p-8 text-white">
              <div>
                <h1 className="text-[clamp(2.4rem,9vw,4.4rem)] leading-[0.95] tracking-[-0.04em] lg:text-[clamp(2.8rem,5.6vw,4.4rem)]">
                  {profile.name}
                </h1>
                <p className="mt-5 max-w-[30ch] text-xl leading-snug text-indigo-100">
                  {profile.tagline}
                </p>
              </div>
              <div className="mt-10">
                <p className="text-base text-indigo-100">
                  Purdue MS BAIM, expected August 2027
                </p>
                <p className="mt-1 text-base text-indigo-100">Now: {profile.now}.</p>
                <p className="mt-3 inline-block rounded-full bg-brand-deep px-4 py-1.5 text-base">
                  Looking for analytics and consulting roles
                </p>
              </div>
            </Tile>
          </div>

          <ResultTile project={find("sales-decision-support")} i={1} />
          <ResultTile project={find("alteryx-workflow-automation")} i={2} />

          <div className="deal sm:col-span-2" style={{ ["--i" as string]: 3 }}>
            <Tile
              href={`/projects/${softball.slug}/`}
              className={`${toneBg[softball.tone]} h-full justify-between`}
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

              <div
                className={`hover-panel absolute inset-x-0 bottom-0 ${toneBg[softball.tone]} border-t-[1.5px] border-ink/15 px-6 pb-6 pt-4`}
              >
                <p className="text-[17px] leading-snug">
                  Answers coaches&rsquo; plain-English questions by choosing
                  from a set of analysis functions.
                </p>
                <p className="mt-2 text-base font-semibold">
                  Read the full project
                </p>
              </div>
            </Tile>
          </div>

          <ResultTile project={find("marketing-campaign-analytics")} i={4} />

          <div className="deal" style={{ ["--i" as string]: 5 }}>
            <Tile className="on-dark h-full justify-between bg-ink text-white">
              <p className="text-base text-white/70">Find me on</p>
              <ul className="mt-6 space-y-1 text-xl">
                <li><a className="underline" href={profile.linkedin}>LinkedIn</a></li>
                <li><a className="underline" href={profile.github}>GitHub</a></li>
                {profile.email && (
                  <li><a className="underline" href={`mailto:${profile.email}`}>Email</a></li>
                )}
              </ul>
            </Tile>
          </div>

          <div className="deal sm:col-span-2" style={{ ["--i" as string]: 6 }}>
            <Tile className={`${outlined} h-full justify-center gap-6`}>
              <p className="text-base text-mute">Tools I work in</p>
              <ul className="flex flex-wrap gap-2">
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
          </div>
        </section>

        <Reveal className="mt-20">
          <div className="marquee rounded-full border-[1.5px] border-ink bg-white py-3 text-xl">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1}>
                {skills.map((s) => (
                  <li key={s} className="whitespace-nowrap">
                    {s}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>

        <section id="projects" className="mt-24 scroll-mt-24">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">Projects</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={(i % 2) * 110} className="h-full">
                  <Tile
                    href={`/projects/${p.slug}/`}
                    className={`${toneBg[p.tone]} min-h-[300px] justify-between p-8`}
                  >
                    <div className="hover-float">
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

                    <div
                      className={`hover-panel absolute inset-x-0 bottom-0 ${toneBg[p.tone]} border-t-[1.5px] border-ink/15 px-8 pb-8 pt-5`}
                    >
                      {p.results.length > 0 ? (
                        <ul className="grid grid-cols-3 gap-3">
                          {p.results.map((r) => (
                            <li key={r.text}>
                              <span className="text-xl font-bold tracking-[-0.03em]">
                                {r.figure}
                              </span>
                              <span className="block text-[14px] leading-snug">
                                {r.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <>
                          <p className="text-[15px] leading-snug">
                            {p.tools.join(", ")}
                          </p>
                          <p className="mt-2 text-base font-semibold">
                            Read the full project
                          </p>
                        </>
                      )}
                    </div>
                  </Tile>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="mt-24 scroll-mt-24">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">Experience</h2>
          </Reveal>
          <ol className="relative mt-10 grid gap-10 md:grid-cols-3 md:gap-5">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[2.6rem] hidden h-[2px] bg-ink/25 md:block"
            />
            {experience.map((e, i) => (
              <li key={e.org}>
                <Reveal delay={i * 120}>
                  <p className="text-base text-mute">{e.dates}</p>
                  <span
                    aria-hidden="true"
                    className={`mt-3 block h-4 w-4 rounded-full border-[2px] border-ink ${toneDot[i % toneDot.length]}`}
                  />
                  <div className={`${outlined} mt-5 rounded-[28px] p-6`}>
                    <h3 className="text-xl leading-snug">{e.role}</h3>
                    <p className="mt-1 text-base text-mute">{e.org}</p>
                    <ul className="mt-4 list-disc space-y-3 pl-5 text-[17px]">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="mt-24 scroll-mt-24">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">About</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Reveal className={profile.photo ? "lg:row-span-2" : ""}>
              <Tile className={`${outlined} h-full`}>
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
            </Reveal>

            <Reveal delay={110} className="lg:col-span-2">
              <Tile className={`${outlined} h-full gap-4`}>
                <p>
                  I&rsquo;m a graduate student in Business Analytics and
                  Information Management at Purdue&rsquo;s Daniels School of
                  Business, with a bachelor&rsquo;s degree in computer science
                  and engineering.
                </p>
                <p>
                  My work so far includes a Python and Gemini chatbot for Purdue
                  Softball, Alteryx workflow automation, a Streamlit sales
                  dashboard, and campaign engagement analysis for a marketing
                  team.
                </p>
                <p>
                  I&rsquo;m looking for analytics roles first and consulting
                  roles second.
                </p>
                <p>
                  <Todo>
                    one or two sentences in your own words on what drew you to
                    analytics
                  </Todo>
                </p>
              </Tile>
            </Reveal>

            <Reveal delay={110} className="lg:col-span-2">
              <Tile className={`${outlined} h-full gap-5`}>
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
            </Reveal>

            <Reveal className="lg:col-span-3">
              <Tile className={`${outlined} gap-4`}>
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
            </Reveal>

            <Reveal className="lg:col-span-3">
              <Tile className={`${outlined} gap-4`}>
                <h3 className="text-2xl">Leadership</h3>
                <ul className="max-w-[70ch] list-disc space-y-3 pl-5">
                  {leadership.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </Tile>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
