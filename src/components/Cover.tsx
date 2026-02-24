export default function Cover() {
  return (
    <div className="bg-ink text-bg relative overflow-hidden px-12 pt-[100px] pb-20 max-md:px-6 max-md:pt-16 max-md:pb-12">
      {/* Decorative stripes */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
        }}
      />

      <div className="relative z-10 max-w-[800px]">
        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-dim mb-6 flex items-center gap-3">
          <span className="block w-10 h-px bg-ink-mid" />
          THEORETICAL COMPENDIUM · ATTACHMENT PSYCHOLOGY
        </div>

        <h1 className="font-serif text-[clamp(38px,6vw,72px)] font-medium leading-[1.1] mb-6 tracking-tight">
          Avoidant Attachment
          <br />
          <em className="italic text-nav-text">ฉบับทฤษฎีเต็ม</em>
        </h1>

        <p className="text-[17px] text-ink-dim leading-[1.75] max-w-[600px] mb-12 font-light">
          รวมทุกแนวคิดหลัก ตั้งแต่ Bowlby ถึง Mikulincer &amp; Shaver —
          Defensive Exclusion, Internal Working Models, AAI, ECR Scale,
          Deactivating Strategies, Mentalization, Neuroscience, Life History
          Theory และแนวทางบำบัด
        </p>

        <div className="flex flex-wrap gap-0 border-t border-nav-dim pt-6">
          {[
            { label: "ครอบคลุม", value: "11 บทหลัก" },
            { label: "แหล่งอ้างอิง", value: "งานวิจัย 18 ชิ้น" },
            { label: "ช่วงเวลา", value: "1940s – 2025" },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`pr-8 mr-8 ${i < arr.length - 1 ? "border-r border-nav-dim" : ""}`}
            >
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-meta-dim mb-1">
                {item.label}
              </div>
              <div className="text-[15px] text-nav-text">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
