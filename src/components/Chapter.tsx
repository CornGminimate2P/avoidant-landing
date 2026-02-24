import { ReactNode } from "react";

interface ChapterProps {
  id: string;
  num: string;
  title: string;
  children: ReactNode;
}

export default function Chapter({ id, num, title, children }: ChapterProps) {
  return (
    <div className="pt-20" id={id}>
      <div className="border-t-2 border-ink pt-5 mb-10 flex items-baseline gap-5">
        <span className="font-mono text-[11px] text-ink-dim tracking-[0.1em] shrink-0">
          {num}
        </span>
        <h2 className="font-serif text-[clamp(24px,3.5vw,38px)] font-medium leading-[1.2] text-ink tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
