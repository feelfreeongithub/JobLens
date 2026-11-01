import Link from "next/link";

// Our own reusable button (no UI library).
// "variant" can only be one of these two strings, and TypeScript checks it.
type Variant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
}

const styles: Record<Variant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
};

export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-md px-5 py-2.5 text-sm font-semibold ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
