import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/history", label: "History" },
  { href: "/profile", label: "My skills" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <Logo size={28} />
          <span>JobLens</span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-muted sm:block hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/analyze"
            className="ml-2 rounded-md bg-brand px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap text-white hover:bg-brand-dark"
          >
            Analyze a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
