import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "UNITEC 2025 - Sistemas y Ciberseguridad",
    template: "%s | UNITEC 2025 - Sistemas y Ciberseguridad",
  },
  description:
    "Celebra con nosotros el UNITEC 2025 con temática japonesa. Un evento lleno de cultura y diversión.",
  keywords: [
    "UNITEC",
    "Carnaval UNITEC",
    "Ciberseguridad",
    "Sistemas",
    "Tecnología",
    "Japón",
    "Eventos universitarios",
  ],
  authors: [{ name: "Santiago Nuñez" }],
  creator: "Santiago Nuñez",
  publisher: "Santiago Nuñez",
  metadataBase: new URL("https://unitec-sis-2025.vercel.app/"), // tu dominio real
  alternates: {
    canonical: "https://unitec-sis-2025.vercel.app/",
  },
  openGraph: {
    title: "UNITEC 2025 - Sistemas y Ciberseguridad",
    description:
      "Vive el Carnaval UNITEC con temática japonesa. Cultura y tecnología en un solo lugar.",
    url: "https://unitec-sis-2025.vercel.app/",
    siteName: "UNITEC 2025",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UNITEC 2025 con temática japonesa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNITEC 2025",
    description:
      "Celebra el Carnaval UNITEC con temática japonesa. Innovación y cultura en un solo evento.",
    images: ["/og-image.jpg"], 
    creator: "@XdSho33181", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
