import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ashwin V | Full Stack Developer",
  description: "Portfolio of Ashwin V, a full stack developer specializing in Node.js, React, and Next.js.",
  icons: { icon: "/favicon-code.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
