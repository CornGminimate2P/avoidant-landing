import { ReactNode } from "react";

interface TheoryBoxProps {
  label: string;
  title: string;
  children: ReactNode;
}

export default function TheoryBox({ label, title, children }: TheoryBoxProps) {
  return (
    <div className="bg-paper border border-rule border-l-4 border-l-accent px-8 py-7 my-8 rounded-r">
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent mb-3 block">
        {label}
      </span>
      <h4 className="font-serif text-[19px] font-semibold text-ink mb-3">
        {title}
      </h4>
      <div className="text-[15.5px] leading-[1.8] text-ink-mid [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
