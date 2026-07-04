import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/pages/Navbar/Header";
import Footer_2 from "@/components/pages/Footer_2";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Sonia Nursing Home & Diagnostic Centre",
  description: "Sonia Nursing Home & Diagnostic Centre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer_2 />
      </body>
    </html>
  );
}