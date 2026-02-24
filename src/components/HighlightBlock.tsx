import { ReactNode } from "react";

interface HighlightBlockProps {
  children: ReactNode;
}

export default function HighlightBlock({ children }: HighlightBlockProps) {
  return (
    <div className="bg-highlight border border-note-border px-7 py-6 my-7 rounded">
      <div className="text-[15.5px] leading-[1.8] text-highlight-text [&>p]:m-0 [&_strong]:font-bold [&_strong]:text-ink">
        {children}
      </div>
    </div>
  );
}
