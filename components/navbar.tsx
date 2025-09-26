"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { name: "Inicio", id: "hero", icon: "home" },
    { name: "Organigrama", id: "organigrama", icon: "users" },
    { name: "Enlaces", id: "enlaces", icon: "link" },
  ]

  const IconHome = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  )

  const IconUsers = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  )

  const IconLink = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  )

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "home":
        return <IconHome />
      case "users":
        return <IconUsers />
      case "link":
        return <IconLink />
      default:
        return null
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-snow-white/95 backdrop-blur-md shadow-lg border-b-2 border-sakura/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-deep-rose to-sakura rounded-full flex items-center justify-center shadow-lg">
                <span className="text-snow-white text-lg lg:text-xl">⛩️</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base lg:text-lg text-deep-rose">UNITEC SIS - CIB 2025</span>
                <span className="text-xs text-soft-mauve hidden sm:block">祭り • Matsuri</span>
              </div>
            </motion.div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-deep-rose hover:text-sakura font-medium transition-colors px-3 py-2 rounded-lg hover:bg-light-pink/20"
                >
                  {getIcon(item.icon)}
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg shadow-lg border-2 transition-all duration-200 ${
                isScrolled
                  ? "bg-deep-rose text-snow-white border-deep-rose hover:bg-sakura hover:border-sakura"
                  : "bg-snow-white text-deep-rose border-deep-rose hover:bg-light-pink/20"
              }`}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] md:hidden"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-snow-white shadow-2xl border-l-4 border-sakura overflow-hidden z-[9999]"
            >
              <div className="absolute inset-0 bg-snow-white" />

              <div className="relative z-10 h-full">
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-white text-deep-rose hover:bg-sakura/10 hover:text-sakura shadow-lg border border-sakura/20 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="flex flex-col pt-20 px-6 space-y-2 h-full">
                  <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-deep-rose">UNITEC Carnaval</h3>
                    <p className="text-sm text-soft-mauve mt-1">祭り • Matsuri 2024</p>
                  </div>
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-4 text-deep-rose hover:text-sakura font-medium transition-all duration-200 px-4 py-4 rounded-xl hover:bg-sakura/10 hover:shadow-md text-left border border-transparent hover:border-sakura/20"
                    >
                      <div className="p-2 rounded-lg bg-sakura/10">{getIcon(item.icon)}</div>
                      <span className="text-lg">{item.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
