import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Organigrama from "@/components/organigrama"
import Enlaces from "@/components/enlaces"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SpeedInsights />
      <Navbar />
      <Hero />
      <Organigrama />
      <Enlaces />
      <Footer />
    </main>
  )
}
