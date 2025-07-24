import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Karima Hill | Sacred Leadership Portal",
  description: "Karima Hill: Christ-centered executive strategy, mentorship, and radiant legacy. Enter the digital temple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {/* Header/Nav will go here */}
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
