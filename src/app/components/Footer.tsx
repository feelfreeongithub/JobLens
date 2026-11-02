export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm text-muted">
        <p>Built by Sonam Charak with Next.js and TypeScript.</p>
        <a
          href="https://github.com/feelfreeongithub/JobLens"
          className="font-medium text-ink underline-offset-4 hover:underline"
        >
          View the code on GitHub
        </a>
      </div>
    </footer>
  );
}
