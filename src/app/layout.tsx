import type { Metadata } from "next";
import { Sarabun, EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Avoidant Attachment — Full Theory",
  description:
    "รวมทุกแนวคิดหลัก ตั้งแต่ Bowlby ถึง Mikulincer & Shaver — Defensive Exclusion, Internal Working Models, AAI, ECR Scale, Deactivating Strategies, Mentalization, Neuroscience, Life History Theory และแนวทางบำบัด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${sarabun.variable} ${ebGaramond.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
