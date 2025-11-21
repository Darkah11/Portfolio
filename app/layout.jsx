import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E.Harris",
  description: `A creative and dedicated frontend developer with a passion for
            building seamless, high-performance, and visually stunning web
            interfaces.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
