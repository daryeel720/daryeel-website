import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Daryeel Community & Senior Centre",
    template: "%s | Daryeel Community & Senior Centre",
  },
  description:
    "Daryeel Community & Senior Centre supports seniors, youth, families, and newcomers in Toronto through advocacy, community support, education, and referral services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
