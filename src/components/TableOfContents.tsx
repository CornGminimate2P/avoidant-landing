const tocItems = [
  { num: "01", href: "#ch1", title: "ที่มา: ทำไม Bowlby ถึงเริ่มสนใจ" },
  {
    num: "02",
    href: "#ch2",
    title: "Attachment Behavioral System: ระบบที่ถูกหลีกเลี่ยง",
  },
  {
    num: "03",
    href: "#ch3",
    title: "Strange Situation: การทดลองที่เปลี่ยนโลก",
  },
  { num: "04", href: "#ch4", title: "Internal Working Models: แผนที่จิตใจ" },
  {
    num: "05",
    href: "#ch5",
    title: "Bartholomew 4-Category Model: โมเดล 4 ช่อง",
  },
  { num: "06", href: "#ch6", title: "Adult Attachment Interview (AAI)" },
  { num: "07", href: "#ch7", title: "โมเดลสองมิติและ ECR Scale" },
  { num: "08", href: "#ch8", title: "Defensive Exclusion: หัวใจของทฤษฎี" },
  { num: "09", href: "#ch9", title: "Deactivating Strategies: กลไกควบคุม" },
  {
    num: "10",
    href: "#ch10",
    title: "Disorganized Attachment: ความกลัวที่ไม่มีทางออก",
  },
  { num: "11", href: "#ch11", title: "ประสาทชีววิทยาของ Avoidance" },
  { num: "12", href: "#ch12", title: "Mentalization & Reflective Functioning" },
  { num: "13", href: "#ch13", title: "มุมมองวิวัฒนาการ" },
  { num: "14", href: "#ch14", title: "ข้อถกเถียงในงานวิจัย Attachment" },
  {
    num: "15",
    href: "#ch15",
    title: "Earned Security: Attachment เปลี่ยนได้ไหม",
  },
  { num: "REF", href: "#refs", title: "แหล่งอ้างอิงทั้งหมด" },
];

export default function TableOfContents() {
  return (
    <div className="bg-paper border-b-2 border-ink p-12 max-md:p-5">
      <h2 className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim mb-7">
        สารบัญ
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] max-w-[1200px]">
        {tocItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-baseline gap-3 py-2.5 pr-4 border-b border-rule no-underline text-ink transition-colors hover:text-accent"
          >
            <span className="font-mono text-[10px] text-ink-dim shrink-0">
              {item.num}
            </span>
            <span className="text-sm leading-snug">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
