import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "WDD 430 Portfolio",
  description: "My WDD 430 Next.js portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto min-h-screen px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}