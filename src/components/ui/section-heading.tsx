export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-light">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-sm text-muted sm:text-base">{description}</p> : null}
    </div>
  );
}
