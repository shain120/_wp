interface SectionTitleProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ index, eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="p5-accent border-2 border-black bg-p5red px-3 py-1 text-sm text-white">
          {index}
        </span>
        <div className="section-kicker">
          <span>{eyebrow}</span>
        </div>
      </div>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
