import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Raleway } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Inter({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Student Senate",
  description: "Student Senate of IIIT Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-white`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className={`flex-grow min-h-[100vh]`}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
