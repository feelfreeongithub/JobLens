import Link from "next/link";

type Variant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
}

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-ink/15 bg-white text-ink hover:border-ink/30",
};

export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-5 py-3 text-sm font-semibold ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
