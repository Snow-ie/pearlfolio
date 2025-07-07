import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pearl Ekeh – Frontend Dev",
  icons: {
    icon: "/avatar/png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
