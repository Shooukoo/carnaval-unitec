import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Organigrama from "@/components/organigrama"
import Enlaces from "@/components/enlaces"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import TournamentBracket from "@/components/tournament-bracket"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SpeedInsights />
      <Navbar />
      <Hero />
      <TournamentBracket />
      <Organigrama />
      <Enlaces />
      <Footer />
    </main>
  )
}
