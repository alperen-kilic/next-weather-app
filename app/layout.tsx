import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT Günlük Hava Durumu",
  description: "ChatGPT Günlük Hava Durumu",
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg" },
    shortcut: { url: "/favicon.svg", type: "image/svg" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
