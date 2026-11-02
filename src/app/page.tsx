import Button from "./components/Button";
import JobPreview from "./components/JobPreview";


const steps = [
  {
    title: "Add your skills once",
    text: "List what you know and for how long, like React for 3.5 years.",
  },
  {
    title: "Paste a job description",
    text: "JobLens reads it and pulls out the skills and experience the role asks for.",
  },
  {
    title: "Decide in seconds",
    text: "See your match, what you already have, and what to learn before you apply.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <h1 className="max-w-[16ch] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            See what a job asks for, and what you already have.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
            Paste any job description. JobLens finds the required skills and
            checks them against your profile, so you spend time only on jobs
            that fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/analyze">Analyze a job description</Button>
            <Button href="/profile" variant="secondary">
              Add my skills
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm border border-match-ink/30 bg-match" />{" "}
              You have this skill
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm border border-missing-ink/30 bg-missing" />{" "}
              Missing from your profile
            </span>
          </div>
        </div>

        <JobPreview />
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-5">
              <span className="text-sm font-semibold text-brand">
                Step {i + 1}
              </span>
              <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
