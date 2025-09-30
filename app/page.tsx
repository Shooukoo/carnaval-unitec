import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Organigrama from "@/components/organigrama"
import Enlaces from "@/components/enlaces"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

const PdfViewer = dynamic(() => import("@/components/pdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[75vh] mx-auto">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
        <p className="text-gray-600">Cargando visor PDF...</p>
      </div>
    </div>
  ),
})

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SpeedInsights />
      <Navbar />
      <Hero />
      <PdfViewer
        file="/docs/reglamento.pdf"
      />
      <Organigrama />
      <Enlaces />
      <Footer />
    </main>
  )
}
