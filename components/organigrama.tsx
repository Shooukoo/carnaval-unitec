"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Organigrama() {
  const [selectedComite, setSelectedComite] = useState<string | null>(null)

  const comites = [
    {
      id: "coordinacion",
      name: "Coordinación General",
      members: [
        { name: "Emanuel Saldaña", role: "Presidente", photo: "./encargados/mani.png" },
        { name: "Edgar Cortez", role: "Vice-presidente", photo: "./encargados/edgar.png" },
        { name: "Angel Canela", role: "Coordinador", photo: "./encargados/canela.png" },
        { name: "Yatziri Garcia", role: "Asistente", photo: "./encargados/yatziri.png" },
      ],
      color: "bg-deep-rose",
      icon: "",
      gradient: "gradient-rose",
      japaneseSymbol: "統括", // Leadership
      description: "Coordinan y supervisan todas las actividades del UNITEC",
    },
    {
      id: "artistico",
      name: "Comité Artístico",
      members: [
        { name: "Miguel Angel", role: "Director Artístico", photo: "./encargados/miguel.png" },
        { name: "Alondra ", role: "Diseñadora", photo: "./encargados/alondra.png" },
        { name: "Sergio Octavio", role: "Coordinador Visual", photo: "./encargados/usuario.png" },
      ],
      color: "bg-sakura",
      icon: "🎨",
      gradient: "gradient-sakura",
      japaneseSymbol: "芸術", // Art
      description: "Organizan las competencias de dibujo, oratoria y sketch",
    },
    {
      id: "deportivo",
      name: "Comité Deportivo",
      members: [
        { name: "Omar Vega", role: "Coordinador Deportivo", photo: "./encargados/omar.png" },
        { name: "Isis Lizbeth", role: "Organizadora", photo: "./encargados/isis.png" },
        { name: "David Melgoza", role: "Instructor", photo: "./encargados/david.png" },
      ],
      color: "bg-soft-mauve",
      icon: "🥋",
      gradient: "gradient-sakura",
      japaneseSymbol: "運動", // Sports
      description: "Coordinan todas las competencias deportivas del UNITEC",
    },
    {
      id: "logistica",
      name: "Comité de Logística",
      members: [
        { name: "Maritza Santibañez", role: "Jefa de Logística", photo: "./encargados/maritza.png" },
        { name: "Jesus Alfonso", role: "Coordinador", photo: "./encargados/poncho.png" },
        { name: "Daniel Mendez", role: "Asistente", photo: "./encargados/daniel.png" },
        { name: "David Melgoza", role: "Ayuda Presidencial", photo: "./encargados/david.png" },
        { name: "Katia Paola", role: "Supervisora", photo: "./encargados/katia.png" },
      ],
      color: "bg-light-pink",
      icon: "🏮",
      gradient: "gradient-rose",
      japaneseSymbol: "物流", // Logistics
      description: "Se encargan de la organización y recursos necesarios",
    },
    {
      id: "seguridad",
      name: "Comité de Seguridad",
      members: [
        { name: "Alexis Chavez", role: "Jefe de Seguridad", photo: "./encargados/alexis.png" },
        { name: "Bryan Esquivel", role: "Coordinador", photo: "./encargados/brayan.png" },
        { name: "Amado Carrillo", role: "Guardia", photo: "./encargados/amado.png" },
      ],
      color: "bg-deep-rose",
      icon: "🛡️",
      gradient: "gradient-rose",
      japaneseSymbol: "安全", // Security
      description: "Garantizan la seguridad de todos los participantes",
    },
    {
      id: "finanzas",
      name: "Comité de Finanzas",
      members: [
        { name: "Daniel Villaseñor", role: "Tesorero", photo: "./encargados/danielV.png" },
        { name: "Isamar Chavez", role: "Auditora", photo: "./encargados/isamar.png" },
        { name: "Ludwig Ivan", role: "Asesor Financiero", photo: "./encargados/ludwig.png" },
      ],
      color: "bg-sakura",
      icon: "💰",
      gradient: "gradient-sakura",
      japaneseSymbol: "財政", // Finance
      description: "Administran los recursos económicos del evento",
    },
  ]

  const selectedComiteData = comites.find((c) => c.id === selectedComite)

  return (
    <section
      id="organigrama"
      className="min-h-screen py-20 bg-gradient-to-b from-snow-white to-light-pink/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating sakura petals */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sakura-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Japanese architectural elements */}
        <div className="absolute top-10 right-10 opacity-5 text-8xl text-deep-rose">🏯</div>
        <div className="absolute top-40 left-20 opacity-5 text-6xl text-sakura">🎋</div>
        <div className="absolute bottom-20 right-20 opacity-5 text-7xl text-soft-mauve">🏮</div>
        <div className="absolute bottom-40 left-10 opacity-5 text-5xl text-light-pink">🌸</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-rose mb-6 text-balance">
            🌸 Organización del Carnaval 🌸
          </h2>
          <p className="text-xl text-soft-mauve max-w-3xl mx-auto text-pretty">
            Conoce a los equipos que hacen posible este UNITEC.
          </p>
          <p className="text-lg text-sakura mt-2 font-medium">組織 • Soshiki</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {comites.map((comite, index) => (
            <motion.div
              key={comite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-snow-white rounded-2xl shadow-lg border-2 border-sakura/20 overflow-hidden hover:shadow-2xl hover:border-deep-rose/40 transition-all cursor-pointer group"
              onClick={() => setSelectedComite(comite.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl opacity-60">{comite.japaneseSymbol}</div>
                </div>

                <h3 className="font-bold text-deep-rose text-xl mb-2 text-balance">{comite.name}</h3>
                <p className="text-soft-mauve text-sm mb-4 text-pretty leading-relaxed">{comite.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-sakura bg-sakura/10 px-3 py-1 rounded-full border border-sakura/30">
                    {comite.members.length} miembros
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-8 h-8 bg-deep-rose rounded-full flex items-center justify-center text-white shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedComite && selectedComiteData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedComite(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-snow-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-bold text-deep-rose text-2xl">{selectedComiteData.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sakura text-lg font-medium">{selectedComiteData.japaneseSymbol}</span>
                        <span className="text-soft-mauve text-sm">• {selectedComiteData.members.length} miembros</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedComite(null)}
                    className="w-10 h-10 bg-deep-rose/10 hover:bg-deep-rose/20 rounded-full flex items-center justify-center text-deep-rose transition-colors"
                    aria-label="Cerrar"
                    title="Cerrar"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-soft-mauve mb-8 text-pretty leading-relaxed">{selectedComiteData.description}</p>

                <div className="space-y-4">
                  <h4 className="font-bold text-deep-rose text-lg mb-4">Miembros del Equipo</h4>
                  {selectedComiteData.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: memberIndex * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-sakura/5 to-light-pink/10 border border-sakura/20 hover:border-deep-rose/30 transition-colors"
                    >
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-3 border-sakura shadow-lg"
                      />
                      <div className="flex-1">
                        <span className="text-deep-rose font-bold text-lg block">{member.name}</span>
                        <span className="text-soft-mauve">{member.role}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
