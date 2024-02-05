import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const epilogue = Epilogue({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Marvel Heroes",
  description: "Site para aplicação na 2a fase de recrutamento da Pontua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
