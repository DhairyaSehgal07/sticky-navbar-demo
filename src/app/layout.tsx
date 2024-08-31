import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load the Inter font with the 'swap' display strategy
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Sticky navbar",
  description: "Basic tutorial on how to make you navbar sticky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-full`}>
        <div className="flex flex-col overflow-x-clip">
          <Navbar />
          <main className="flex flex-grow flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
