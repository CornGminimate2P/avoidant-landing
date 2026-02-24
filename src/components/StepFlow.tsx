interface Step {
  title: string;
  description: string;
}

interface StepFlowProps {
  steps: Step[];
}

export default function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="my-7">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-5 mb-5 items-start">
          <div className="font-mono text-[11px] font-bold text-paper bg-accent w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            {i + 1}
          </div>
          <div>
            <h5 className="text-[15px] font-bold text-ink mb-1">
              {step.title}
            </h5>
            <p className="text-[14.5px] text-ink-mid leading-[1.7] m-0">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
