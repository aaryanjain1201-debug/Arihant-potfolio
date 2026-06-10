import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Animation Studio | 3D & Gen AI Artist",
  description:
    "Cinematic 3D worlds and AI-driven visual storytelling. Portfolio of a 3D artist & generative AI creator.",
  keywords: [
    "3D Artist",
    "Generative AI",
    "Animation",
    "Portfolio",
    "Dream Animation Studio",
    "Blender",
    "ComfyUI",
    "Midjourney",
  ],
  authors: [{ name: "Dream Animation Studio" }],
  openGraph: {
    title: "Dream Animation Studio | 3D & Gen AI Artist",
    description: "Cinematic 3D worlds and AI-driven visual storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
