interface ComparisonTableProps {
  headers: string[];
  rows: (string | { text: string; bold?: boolean })[][];
}

export default function ComparisonTable({
  headers,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-7">
      <table className="w-full border-collapse text-[14.5px]">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="bg-ink text-bg px-3.5 py-2.5 text-left font-mono text-[10px] tracking-[0.1em] uppercase font-normal"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => {
                const isObj = typeof cell === "object";
                const text = isObj ? cell.text : cell;
                const bold = isObj && cell.bold;
                return (
                  <td
                    key={j}
                    className={`px-3.5 py-3 border-b border-rule align-top leading-relaxed text-ink-mid ${
                      i % 2 === 1 ? "bg-paper" : ""
                    } ${j === 0 ? "font-semibold text-ink whitespace-nowrap" : ""} ${
                      bold ? "font-bold text-ink" : ""
                    }`}
                  >
                    {text}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
