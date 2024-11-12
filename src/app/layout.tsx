import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";

const sourGummy = Sour_Gummy({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio Juliane Pires",
  description: "Acervo de projetos e criações de Juliane Pires",
  keywords: ["frontend", "backend", "projects", "development"],
  authors: [{ name: "Juliane Pires" }],
  appLinks: {
    web: {
      url: "https://portfolio-juliane-pires.vercel.app/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourGummy.className} antialiased`}>{children}</body>
    </html>
  );
}
