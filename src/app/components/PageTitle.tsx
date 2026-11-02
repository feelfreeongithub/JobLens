interface PageTitleProps {
  title: string;
  subtitle?: string; // the "?" means optional
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-2 max-w-[60ch] text-muted">{subtitle}</p>}
    </div>
  );
}
