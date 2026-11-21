import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { Footer } from "@/components/Footer";
import { Todo } from "@/components/Todo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | Swechchha Rahangdale`, description: p.summary } : {};
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="mt-4 max-w-[62ch] space-y-4">{children}</div>
    </section>
  );
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <header className="mx-auto max-w-5xl px-6 py-6 md:px-10">
        <Link href="/" className="underline">
          Back to all projects
        </Link>
      </header>
      <main className="mx-auto max-w-5xl px-6 pt-10 md:px-10">
        <h1 className="max-w-[20ch] text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
          {p.title}
        </h1>
        <p className="mt-6 max-w-[48ch] text-xl">{p.summary}</p>
        <p className="mt-4 text-slate">
          {p.role}. {p.date}.
        </p>

        {p.results.length > 0 && (
          <section className="mt-14">
            <h2 className="text-3xl font-bold">Key results</h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {p.results.map((r) => (
                <li key={r.text}>
                  <span className="mark font-display text-5xl font-bold">
                    {r.figure}
                  </span>
                  <p className="mt-3">{r.text}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Section title="What I built">
          <ul className="list-disc space-y-3 pl-5">
            {p.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Section>

        <Section title="The problem">
          <p>{p.problem ?? <Todo>what problem this solved, and for whom</Todo>}</p>
        </Section>

        <Section title="Data">
          <p>{p.data ?? <Todo>where the data came from and what it contained, public data only</Todo>}</p>
        </Section>

        <Section title="Approach">
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
          <p className="text-slate">Tools: {p.tools.join(", ")}.</p>
        </Section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">Screenshots</h2>
          <div className="mt-4">
            {p.visual ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.visual.src} alt={p.visual.alt} className="w-full border border-rule" />
            ) : (
              <p>
                <Todo>a real screenshot or chart from this project</Todo>
              </p>
            )}
          </div>
        </section>

        <Section title="What I learned">
          <p>{p.learned ?? <Todo>one or two honest sentences</Todo>}</p>
        </Section>

        {p.repo && (
          <p className="mt-14">
            <a className="underline" href={p.repo}>
              View the code on GitHub
            </a>
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
