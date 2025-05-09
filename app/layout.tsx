import type React from "react"
import "@/app/globals.css"
import { VT323 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

// Using VT323 for a retro pixel font
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
})

export const metadata = {
  title: "Nischal Neupane - Retro Portfolio",
  description: "Personal portfolio website of Nischal Neupane, Full Stack Developer & UI/UX Designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vt323.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
