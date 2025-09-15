import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "@/styles/base.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Todd Fisher - PA DOC Recruitment | Pennsylvania Corrections Careers",
  description:
    "Connect with Lieutenant Todd Fisher, PA Department of Corrections Recruitment Specialist. Get personalized guidance for corrections careers, competitive benefits, and application support. 16+ years experience helping candidates start meaningful careers with Pennsylvania DOC.",
  keywords:
    "Pennsylvania corrections jobs, PA DOC careers, correctional officer recruitment, Todd Fisher recruiter, Pennsylvania Department of Corrections employment, corrections careers PA, prison jobs Pennsylvania, law enforcement careers",
  openGraph: {
    title: "Todd Fisher - PA DOC Recruitment Specialist",
    description:
      "Get personalized guidance for corrections careers in Pennsylvania. Lieutenant Todd Fisher helps candidates navigate PA DOC applications and start meaningful careers.",
    type: "website",
    locale: "en_US",
    siteName: "PA DOC Recruitment - Todd Fisher",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todd Fisher - PA DOC Recruitment Specialist",
    description:
      "Get personalized guidance for corrections careers in Pennsylvania. Lieutenant Todd Fisher helps candidates navigate PA DOC applications.",
  },
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
