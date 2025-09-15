import "@/styles/base.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pennsylvania Department of Corrections",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
