import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🌖 Dreamly - Build Dreams with AI",
  description: "World's most convenient Vibe Coding platform, stable LLM API, and AI marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
