// The hero visual: a sample job description with skills highlighted
// like a highlighter pen. Mint = you have it, peach = missing.

type Part = string | { skill: string; have: boolean };

const description: Part[] = [
  "We're looking for an engineer with 3+ years of ",
  { skill: "React", have: true },
  " and ",
  { skill: "TypeScript", have: true },
  " experience. You'll build product features in ",
  { skill: "Next.js", have: true },
  ", integrate ",
  { skill: "REST APIs", have: true },
  ", write tests with ",
  { skill: "Jest", have: true },
  ", and work with our ",
  { skill: "PostgreSQL", have: false },
  " and ",
  { skill: "GraphQL", have: false },
  " backend.",
];

const skills = description.filter((part) => typeof part !== "string");
const found = skills.filter((s) => s.have);
const missing = skills.filter((s) => !s.have);
const score = Math.round((found.length / skills.length) * 100);

export default function JobPreview() {
  let index = 0;

  return (
    <figure className="rounded-2xl border border-ink/10 bg-white shadow-[0_24px_60px_-30px_rgba(30,27,58,0.35)]">
      <div className="border-b border-ink/10 px-6 py-4">
        <p className="font-semibold">Frontend Engineer</p>
        <p className="text-sm text-muted">Remote, India</p>
      </div>

      <p className="px-6 py-5 font-serif text-[17px] leading-8">
        {description.map((part, i) => {
          if (typeof part === "string") return <span key={i}>{part}</span>;
          const order = index++;
          return (
            <mark
              key={i}
              style={{ "--i": order } as React.CSSProperties}
              className={`highlight ${part.have ? "highlight-match" : "highlight-missing"}`}
            >
              {part.skill}
            </mark>
          );
        })}
      </p>

      <figcaption className="flex flex-wrap items-end justify-between gap-4 rounded-b-2xl bg-ink px-6 py-5 text-white">
        <div>
          <p className="text-4xl font-bold leading-none">{score}%</p>
          <p className="mt-1 text-sm text-white/70">
            {found.length} of {skills.length} skills found
          </p>
        </div>
        <p className="text-sm text-white/80">
          Missing:{" "}
          <span className="font-semibold text-missing">
            {missing.map((s) => s.skill).join(", ")}
          </span>
        </p>
      </figcaption>
    </figure>
  );
}
