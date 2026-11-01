interface PageTitleProps {
  title: string;
  subtitle?: string; // the "?" means optional
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
    </div>
  );
}
