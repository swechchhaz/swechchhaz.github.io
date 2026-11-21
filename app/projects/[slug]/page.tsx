import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/lib/content";
import { Backdrop } from "@/components/Backdrop";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Todo } from "@/components/Todo";
import { outlined } from "@/components/Tile";
import { toneBg } from "@/components/tones";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const p = projects.find((x) => x.slug === slug);
  return p
    ? { title: `${p.title} | ${profile.name}`, description: p.summary }
    : {};
}

function Panel({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className={className}>
      <section className={`${outlined} h-full rounded-[28px] p-6 md:p-8`}>
        <h2 className="text-2xl md:text-3xl">{title}</h2>
        <div className="mt-4 max-w-[62ch] space-y-4">{children}</div>
      </section>
    </Reveal>
  );
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <Backdrop />
      <header className="mx-auto max-w-5xl px-6 py-6 md:px-10">
        <Link
          href="/"
          className="inline-flex rounded-full border-[1.5px] border-ink px-4 py-1.5 hover:bg-white"
        >
          Back to all projects
        </Link>
      </header>

      <main className="mx-auto max-w-5xl px-6 md:px-10">
        <div className={`${toneBg[p.tone]} rounded-[28px] p-8 md:p-12`}>
          <p className="text-base">
            {p.role}. {p.date}.
          </p>
          <h1 className="mt-5 max-w-[20ch] text-[clamp(2.4rem,6.5vw,4.5rem)] leading-[1] tracking-[-0.035em]">
            {p.title}
          </h1>
          <p className="mt-5 max-w-[52ch] text-xl leading-snug">{p.summary}</p>
        </div>

        {p.results.length > 0 && (
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {p.results.map((r, i) => (
              <li key={r.text}>
                <Reveal delay={i * 110} className="h-full">
                  <div className={`${outlined} h-full rounded-[28px] p-6`}>
                    <span className="block text-[clamp(2.5rem,4.6vw,3.5rem)] font-bold leading-none tracking-[-0.04em]">
                      {r.figure}
                    </span>
                    <p className="mt-3">{r.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Panel title="What I built" className="lg:col-span-2">
            <ul className="list-disc space-y-3 pl-5">
              {p.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Panel>

          <Panel title="The problem">
            <p>{p.problem ?? <Todo>what problem this solved, and for whom</Todo>}</p>
          </Panel>

          <Panel title="Data">
            <p>
              {p.data ?? (
                <Todo>where the data came from and what it contained, public data only</Todo>
              )}
            </p>
          </Panel>

          <Panel title="Approach" className="lg:col-span-2">
            {p.approach ? (
              <ol className="list-decimal space-y-3 pl-5">
                {p.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
            ) : (
              <p>
                <Todo>the steps I took, in order</Todo>
              </p>
            )}
            <p className="text-mute">Tools: {p.tools.join(", ")}.</p>
          </Panel>

          <Reveal className="lg:col-span-2">
          <section className={`${outlined} rounded-[28px] p-6 md:p-8`}>
            <h2 className="text-2xl md:text-3xl">Screenshots</h2>
            <div className="mt-4">
              {p.visual ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.visual.src}
                  alt={p.visual.alt}
                  className="w-full rounded-2xl border-[1.5px] border-ink"
                />
              ) : (
                <p>
                  <Todo>a real screenshot or chart from this project</Todo>
                </p>
              )}
            </div>
          </section>
          </Reveal>

          <Panel title="What I learned" className="lg:col-span-2">
            <p>{p.learned ?? <Todo>one or two honest sentences</Todo>}</p>
            {p.repo && (
              <p>
                <a className="underline" href={p.repo}>
                  View the code on GitHub
                </a>
              </p>
            )}
          </Panel>
        </div>
      </main>

      <Footer />
    </>
  );
}
