import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "The Silo — Nebraska Panhandle from above",
    template: "%s | The Silo",
  },
  description:
    "Hyper-local satellite imagery, data maps, and sensor journalism for the Nebraska Panhandle, SE Wyoming, and NE Colorado. Look closer.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Silo",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
