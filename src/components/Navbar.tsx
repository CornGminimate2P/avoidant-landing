type NavItem = { href: string; label: string };

const links: NavItem[] = [
  { href: "#ch1", label: "ที่มาของทฤษฎี" },
  { href: "#ch2", label: "Attachment System" },
  { href: "#ch3", label: "Strange Situation" },
  { href: "#ch4", label: "IWM" },
  { href: "#ch5", label: "โมเดล 4 ช่อง" },
  { href: "#ch6", label: "AAI" },
  { href: "#ch7", label: "ECR Scale" },
  { href: "#ch8", label: "Defensive Exclusion" },
  { href: "#ch9", label: "Deactivating Strategy" },
  { href: "#ch10", label: "Disorganized" },
  { href: "#ch11", label: "ประสาทวิทยา" },
  { href: "#ch12", label: "Mentalization" },
  { href: "#ch13", label: "วิวัฒนาการ" },
  { href: "#ch14", label: "ข้อถกเถียง" },
  { href: "#ch15", label: "เปลี่ยนได้ไหม" },
  { href: "#refs", label: "อ้างอิง" },
];

export default function Navbar() {
  return (
    <nav className="bg-ink sticky top-0 z-50 hidden md:block">
      <div className="mx-auto flex h-12 max-w-[1200px] items-stretch">
        <div className="font-mono text-[11px] tracking-[0.08em] px-6 flex items-center border-r border-nav-border text-nav-text whitespace-nowrap shrink-0">
          ATTACHMENT THEORY · FULL THEORY
        </div>
        <ul className="flex items-stretch overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] text-nav-text no-underline px-4 flex items-center h-full tracking-[0.05em] border-r border-nav-dim whitespace-nowrap transition-colors hover:bg-nav-dim hover:text-rule"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
