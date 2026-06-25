export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="app-shell section-spacing pb-4">
      <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
      <p className="mt-3 max-w-6xl text-[var(--text-muted)]">{description}</p>
    </div>
  );
}
