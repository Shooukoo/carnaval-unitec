"use client"

import { motion } from "framer-motion"
import { whatsappGroups } from "@/data/whatsapp-groups"

export default function Enlaces() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "deportivo":
        return {
          gradient: "from-deep-rose to-sakura",
          bg: "bg-deep-rose/10",
          border: "border-deep-rose/30",
          text: "text-deep-rose",
        }
      case "artistico":
        return {
          gradient: "from-sakura to-light-pink",
          bg: "bg-sakura/10",
          border: "border-sakura/30",
          text: "text-sakura",
        }
      case "academico":
        return {
          gradient: "from-soft-mauve to-light-pink",
          bg: "bg-soft-mauve/10",
          border: "border-soft-mauve/30",
          text: "text-soft-mauve",
        }
      case "especial":
        return {
          gradient: "from-light-pink to-deep-rose",
          bg: "bg-light-pink/10",
          border: "border-light-pink/30",
          text: "text-light-pink",
        }
      default:
        return {
          gradient: "from-deep-rose to-sakura",
          bg: "bg-deep-rose/10",
          border: "border-deep-rose/30",
          text: "text-deep-rose",
        }
    }
  }

  const getGroupCategory = (name: string) => {
    if (name.includes("Futbol") || name.includes("Voley") || name.includes("Basquet")) {
      return "deportivo"
    }
    if (name.includes("Dibujo") || name.includes("Oratoria") || name.includes("Vestido") || name.includes("Sketch")) {
      return "artistico"
    }
    if (name.includes("Conocimiento") || name.includes("Ajedrez")) {
      return "academico"
    }
    return "especial"
  }

  const getGroupIcon = (name: string) => {
    if (name.includes("Futbol")) return "⚽"
    if (name.includes("Voley")) return "🏐"
    if (name.includes("Basquet")) return "🏀"
    if (name.includes("Dibujo")) return "🎨"
    if (name.includes("Oratoria")) return "🎤"
    if (name.includes("Conocimiento")) return "🧠"
    if (name.includes("Ajedrez")) return "♟️"
    if (name.includes("Vestido")) return "♻️"
    if (name.includes("Sketch")) return "🎭"
    if (name.includes("Exatec")) return "🎓"
    return "🌸"
  }

  const getJapaneseIcon = (category: string) => {
    switch (category) {
      case "deportivo":
        return "🥋"
      case "artistico":
        return "🌸"
      case "academico":
        return "📚"
      case "especial":
        return "⛩️"
      default:
        return "🌸"
    }
  }

  const handleWhatsAppClick = (whatsappLink: string) => {
    window.open(whatsappLink, "_blank")
  }

  return (
    <section
      id="enlaces"
      className="min-h-screen py-20 bg-gradient-to-b from-light-pink/20 to-snow-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 text-8xl text-deep-rose">🏮</div>
        <div className="absolute top-40 right-20 text-6xl text-sakura">🌸</div>
        <div className="absolute bottom-40 left-40 text-7xl text-soft-mauve">⛩️</div>
        <div className="absolute bottom-20 right-40 text-5xl text-light-pink">🎋</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-rose mb-6 text-balance">
            🏮 Únete a las Competencias 🏮
          </h2>
          <p className="text-xl text-soft-mauve max-w-3xl mx-auto text-pretty">
            Selecciona tu categoría favorita y únete al grupo de WhatsApp correspondiente.
            <br />
            <span className="text-sakura font-semibold">¡Que comience el UNITEC!</span>
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whatsappGroups.map((grupo, index) => {
            const category = getGroupCategory(grupo.name)
            const colors = getCategoryColor(category)
            const icon = getGroupIcon(grupo.name)
            const japaneseIcon = getJapaneseIcon(category)

            return (
              <motion.div
                key={grupo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
                onClick={() => handleWhatsAppClick(grupo.whatsappLink)}
              >
                <div
                  className={`bg-snow-white rounded-2xl p-6 shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 h-full ${colors.bg}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {icon}
                    </div>
                    <div className="text-2xl opacity-60">{japaneseIcon}</div>
                  </div>

                  <h3 className={`font-bold ${colors.text} text-lg mb-2 text-balance`}>{grupo.name}</h3>

                  <p className="text-sm text-gray-600 mb-3">{grupo.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <span
                        className={`text-sm ${colors.text} capitalize ${colors.bg} px-3 py-1 rounded-full border ${colors.border} text-center`}
                      >
                        {category}
                      </span>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-snow-white p-8 rounded-2xl shadow-lg border-2 border-sakura/30 max-w-2xl mx-auto bg-gradient-to-br from-sakura/5 to-light-pink/10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-3xl">🏮</span>
              <h3 className="text-2xl font-bold text-deep-rose">¿Necesitas más información?</h3>
              <span className="text-3xl">🏮</span>
            </div>
            <p className="text-soft-mauve mb-6 text-pretty leading-relaxed">
              Si tienes dudas sobre alguna competencia o necesitas ayuda con el registro, no dudes en contactar a los
              coordinadores.{" "}
              <span className="text-deep-rose font-semibold">¡Estamos aquí para ayudarte!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
