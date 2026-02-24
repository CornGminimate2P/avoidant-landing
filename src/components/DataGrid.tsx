interface DataCell {
  value: string;
  label: string;
  source: string;
}

interface DataGridProps {
  cells: DataCell[];
}

export default function DataGrid({ cells }: DataGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px bg-rule border border-rule my-7">
      {cells.map((cell, i) => (
        <div key={i} className="bg-paper px-[18px] py-5">
          <div className="font-serif text-4xl font-medium text-accent leading-none mb-1">
            {cell.value}
          </div>
          <div
            className="text-[13px] text-ink-dim leading-snug"
            dangerouslySetInnerHTML={{ __html: cell.label }}
          />
          <span className="font-mono text-[9px] text-rule mt-1.5 block">
            {cell.source}
          </span>
        </div>
      ))}
    </div>
  );
}
