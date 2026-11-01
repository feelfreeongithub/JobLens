import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "JobLens – AI job match analyzer",
  description:
    "Paste a job description and see how well it matches your skills.",
};

// The root layout wraps EVERY page: the header shows on all of them.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
