"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Japanese-inspired decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <svg width="80" height="40" viewBox="0 0 80 40" className="text-primary-foreground/20">
                <path d="M10 30 Q 25 10, 40 30 T 70 30" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-primary-foreground/30 rounded-full flex items-center justify-center">
                  <span className="text-xs">🌸</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">UNITEC Sistemas y Ciberseguridad</h3>
            <p className="text-lg text-primary-foreground/90">Competencia Universitaria</p>
            <div className="w-16 h-1 bg-primary-foreground/50 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-primary-foreground/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/80 text-sm">
                © 2025 Carnaval UNITEC. Todos los derechos reservados.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-primary-foreground/60 text-xs italic">
              "En la tradición japonesa, cada flor de sakura representa un nuevo comienzo" 🌸
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
