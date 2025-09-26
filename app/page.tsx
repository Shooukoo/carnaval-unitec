import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Organigrama from "@/components/organigrama"
import Enlaces from "@/components/enlaces"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Organigrama />
      <Enlaces />
      <Footer />
    </main>
  )
}
