import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Great Supper Club",
  description: "A modern supper club booking experience (mock data).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-100">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-900/20 blur-[120px]" />
          <div className="absolute top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[700px] w-[700px] rounded-full bg-purple-900/15 blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        </div>

        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
