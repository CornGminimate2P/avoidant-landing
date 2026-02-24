interface PullQuoteProps {
  children: string;
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="font-serif italic text-[clamp(20px,2.5vw,26px)] text-ink-mid leading-[1.5] py-9 pl-7 border-l-[3px] border-accent my-10">
      {children}
    </blockquote>
  );
}
