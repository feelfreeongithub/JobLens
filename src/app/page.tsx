import Button from "./components/Button";

const steps = [
  {
    title: "Save your skills",
    text: "Add the skills you have and your years of experience.",
  },
  {
    title: "Paste a job description",
    text: "AI reads it and pulls out the required skills.",
  },
  {
    title: "See your match",
    text: "Get a match score, matched and missing skills, and a summary.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Know your match <span className="text-indigo-600">before</span> you
          apply
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          JobLens compares any job description with your skills and shows
          exactly what matches and what is missing.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/analyze">Analyze a job</Button>
          <Button href="/profile" variant="secondary">
            Add my skills
          </Button>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <span className="text-sm font-semibold text-indigo-600">
              Step {index + 1}
            </span>
            <h2 className="mt-1 font-semibold">{step.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{step.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
