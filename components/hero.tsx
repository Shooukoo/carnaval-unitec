"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [sakuraPetals, setSakuraPetals] = useState<
    Array<{ id: number; left: number; delay: number; duration: number }>
  >([])

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  useEffect(() => {
    // Generate sakura petals
    const petals = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }))
    setSakuraPetals(petals)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const newsItems = [
    {
      title: "¡Registro Abierto!",
      description:
        "Las inscripciones para todas las competencias están abiertas. ¡No te quedes fuera!",
      date: "Septiembre 2025",
      color: "border-sakura bg-sakura/5",
      icon: "",
      japaneseIcon: "",
    },
    {
      title: "Seleccion de Tematica",
      description:
        "Las temáticas para este año son: Cultura Japonesa, con colores rosas.",
      date: "Septiembre 2025",
      color: "border-deep-rose bg-deep-rose/5",
      icon: "",
      japaneseIcon: "",
    },
    {
      title: "Torneo entre Carreras",
      description:
        "Prepárate para el torneo entre carreras que se llevará estos días. ¡Demuestra tu talento!",
      date: "Septiembre 2025",
      color: "border-soft-mauve bg-soft-mauve/5",
      icon: "",
      japaneseIcon: "",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-snow-white via-light-pink/20 to-sakura/30"
    >
      {sakuraPetals.map((petal) => (
        <motion.div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: `${petal.left}%`,
          }}
          animate={{
            y: ["-10vh", "110vh"],
            rotate: [0, 360],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      <div className="absolute top-4 right-2 md:top-20 md:right-10 opacity-5 md:opacity-10 text-3xl md:text-9xl text-deep-rose pointer-events-none">
        ⛩️
      </div>
      <div className="absolute bottom-4 left-2 md:bottom-20 md:left-10 opacity-5 md:opacity-10 text-2xl md:text-8xl text-sakura pointer-events-none">
        🌸
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-5 text-4xl md:text-6xl text-soft-mauve pointer-events-none hidden lg:block">
        🏮
      </div>
      <div className="absolute bottom-1/3 right-4 md:right-10 opacity-5 text-3xl md:text-7xl text-light-pink pointer-events-none hidden lg:block">
        🎋
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8 md:pb-16 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left column - Welcome message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance"
              >
                <span className="text-deep-rose">Bienvenidos al</span>
                <br />
                <span className="text-sakura">UNITEC</span>
                <br />
                <span className="text-soft-mauve text-lg sm:text-xl md:text-2xl lg:text-3xl">祭り • Matsuri 2025</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-deep-rose font-semibold"
              >
                Sistemas y Ciberseguridad
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-sm sm:text-base lg:text-lg text-soft-mauve text-pretty leading-relaxed px-2 lg:px-0">
                Únete al UNITEC. Competencias deportivas, artísticas y académicas te esperan.{" "}
                <span className="text-deep-rose font-semibold">¡Que comience el UNITEC!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 lg:px-0">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("organigrama")}
                  className="border-2 border-deep-rose text-deep-rose px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-deep-rose hover:text-white transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Ver Organigrama</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - News carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 lg:space-y-6 w-full mt-8 lg:mt-0"
          >
            <div className="text-center mb-4 md:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-deep-rose mb-2">🏮 Noticias Importantes</h2>
              <p className="text-soft-mauve text-xs sm:text-sm lg:text-base">
                Mantente al día con las últimas actualizaciones
              </p>
              <p className="text-sakura text-xs lg:text-sm mt-1">ニュース • Nyūsu</p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl mx-4 sm:mx-8 lg:mx-12">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentNewsIndex * 100}%)` }}
                >
                  {newsItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-1">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className={`bg-snow-white p-3 sm:p-4 lg:p-6 rounded-2xl shadow-lg border-2 ${item.color} hover:shadow-xl transition-all`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg sm:text-xl lg:text-2xl">{item.icon}</span>
                            <h3 className="font-bold text-deep-rose text-xs sm:text-sm lg:text-base">{item.title}</h3>
                            <span className="text-sm sm:text-base lg:text-lg opacity-60">{item.japaneseIcon}</span>
                          </div>
                          <span className="text-xs lg:text-sm text-soft-mauve bg-light-pink/30 px-2 lg:px-3 py-1 rounded-full whitespace-nowrap">
                            {item.date}
                          </span>
                        </div>
                        <p className="text-soft-mauve text-xs sm:text-sm lg:text-sm text-pretty leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button
                onClick={() => setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-deep-rose hover:scale-110 transition-all border-2 border-sakura/20 hover:border-deep-rose/30 z-10"
                aria-label="Anterior noticia"
                title="Anterior noticia"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-deep-rose hover:scale-110 transition-all border-2 border-sakura/20 hover:border-deep-rose/30 z-10"
                aria-label="Siguiente noticia"
                title="Siguiente noticia"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel indicators */}
              <div className="flex justify-center space-x-2 mt-4 lg:mt-6">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNewsIndex(index)}
                    title={`Ir a la noticia ${index + 1}`}
                    className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                      index === currentNewsIndex
                        ? "bg-deep-rose scale-125 shadow-lg"
                        : "bg-sakura/40 hover:bg-sakura/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
