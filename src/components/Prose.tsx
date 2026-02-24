import { ReactNode } from "react";

export function Body({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-ink text-[17px] leading-[1.9] [&_strong]:font-bold [&_strong]:text-ink [&_em]:italic [&_em]:text-accent-warm">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-[22px] font-semibold text-ink mt-11 mb-4 pb-2 border-b border-rule">
      {children}
    </h3>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-sans text-[15px] font-bold text-accent mt-7 mb-2.5 tracking-wide">
      {children}
    </h4>
  );
}

export function Ref({ children }: { children: string }) {
  return (
    <sup className="font-mono text-[9px] text-accent2 bg-accent2/8 px-1 rounded-sm ml-0.5 font-bold border border-accent2/15">
      {children}
    </sup>
  );
}

export function Term({ children }: { children: ReactNode }) {
  return (
    <span className="italic font-semibold text-accent underline decoration-dotted underline-offset-[3px] cursor-help">
      {children}
    </span>
  );
}

export function Divider() {
  return <hr className="border-0 border-t border-rule my-14" />;
}
