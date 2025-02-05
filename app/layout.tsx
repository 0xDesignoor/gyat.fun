import "./globals.css"
import { Modak } from "next/font/google"
import type React from "react"
import Navigation from "@/components/Navigation"

const modak = Modak({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: "Slap Dat Gyat",
  description: "A global click counter app with style",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={modak.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

