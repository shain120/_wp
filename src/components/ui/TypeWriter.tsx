import { useEffect, useMemo, useState } from "react";

interface TypeWriterProps {
  lines: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

export default function TypeWriter({
  lines,
  speed = 75,
  pause = 1300,
  className = "",
}: TypeWriterProps) {
  const values = useMemo(() => lines.filter(Boolean), [lines]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!values.length) {
      return undefined;
    }

    const current = values[index % values.length];
    const atEnd = text === current;
    const atStart = text === "";

    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          const nextText = current.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === current) {
            setDeleting(true);
          }
        } else {
          setText(current.slice(0, Math.max(text.length - 1, 0)));

          if (atStart) {
            setDeleting(false);
            setIndex((value) => (value + 1) % values.length);
          }
        }
      },
      atEnd && !deleting ? pause : deleting ? speed / 2 : speed
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, pause, speed, text, values]);

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span>{text}</span>
      <span className="h-6 w-[2px] animate-pulse bg-p5red" />
    </span>
  );
}
