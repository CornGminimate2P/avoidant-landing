import { ReactNode } from "react";

interface NoteBoxProps {
  label: string;
  children: ReactNode;
}

export default function NoteBox({ label, children }: NoteBoxProps) {
  return (
    <div className="bg-note-bg border border-note-border rounded px-6 py-5 my-7">
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-note-label mb-2 block">
        {label}
      </span>
      <div className="text-[15px] leading-[1.75] text-note-text [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}
