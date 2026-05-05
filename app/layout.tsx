import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Chen — Full-Stack Engineer",
    template: "%s | Alex Chen",
  },
  description:
    "Full-stack engineer specializing in React, Next.js, Node.js, and cloud infrastructure. Building scalable web applications and developer tools.",
  keywords: ["Full-Stack Engineer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Alex Chen", url: "https://alexdev.io" }],
  creator: "Alex Chen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexdev.io",
    title: "Alex Chen — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, Node.js, and cloud infrastructure.",
    siteName: "Alex Chen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, Node.js, and cloud infrastructure.",
    creator: "@alexdev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
