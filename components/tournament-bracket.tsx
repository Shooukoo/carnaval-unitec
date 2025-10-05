"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Match {
    id: string
    deporte: string
    categoria: "masculino" | "femenino"
    equipoA: string
    equipoB: string
    resultado: string
    hora: string
    ganador?: string
    ronda: "cuartos" | "semifinal" | "final" | "campeon"
}

interface BracketData {
    cuartos: Match[]
    semifinal: Match[]
    final: Match[]
    campeon: Match[]
}

const sampleBracketData: Record<string, BracketData> = {
    // ⚽ FÚTBOL VARONIL
    "Fútbol-masculino": {
        cuartos: [
            {
                id: "fm-q1",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "Sistemas/Ciber",
                equipoB: "Arquitectura",
                resultado: "",
                hora: "4:15 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "fm-q2",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "Innovación",
                equipoB: "Contabilidad",
                resultado: "",
                hora: "10:00 AM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "fm-q3",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "Gestión Empresarial",
                equipoB: "Administración",
                resultado: "",
                hora: "3:00 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "fm-q4",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "Industrial",
                equipoB: "Bioquímica",
                resultado: "",
                hora: "12:30 PM",
                ganador: "",
                ronda: "cuartos",
            },
        ],
        semifinal: [
            {
                id: "fm-s1",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "9:00 AM",
                ganador: "",
                ronda: "semifinal",
            },
            {
                id: "fm-s2",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "G3",
                equipoB: "G4",
                resultado: "",
                hora: "11:30 AM",
                ganador: "",
                ronda: "semifinal",
            },
        ],
        final: [
            {
                id: "fm-f1",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "9:00 AM",
                ganador: "",
                ronda: "final",
            },
        ],
        campeon: [
            {
                id: "fm-c1",
                deporte: "Fútbol",
                categoria: "masculino",
                equipoA: "",
                equipoB: "",
                resultado: "🏆",
                hora: "",
                ganador: "",
                ronda: "campeon",
            },
        ],
    },

    // ⚽ FÚTBOL FEMENIL
    "Fútbol-femenino": {
        cuartos: [
            {
                id: "ff-q1",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "Sistemas/Ciber",
                equipoB: "Arquitectura",
                resultado: "",
                hora: "1:45 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "ff-q2",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "Innovación",
                equipoB: "Contabilidad",
                resultado: "",
                hora: "1:45 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "ff-q3",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "Gestión Empresarial",
                equipoB: "Administración",
                resultado: "",
                hora: "11:15 AM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "ff-q4",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "Industrial",
                equipoB: "Bioquímica",
                resultado: "",
                hora: "11:15 AM",
                ganador: "",
                ronda: "cuartos",
            },
        ],
        semifinal: [
            {
                id: "ff-s1",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "10:15 AM",
                ganador: "",
                ronda: "semifinal",
            },
            {
                id: "ff-s2",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "G3",
                equipoB: "G4",
                resultado: "",
                hora: "10:15 AM",
                ganador: "",
                ronda: "semifinal",
            },
        ],
        final: [
            {
                id: "ff-f1",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "10:00 AM",
                ganador: "",
                ronda: "final",
            },
        ],
        campeon: [
            {
                id: "ff-c1",
                deporte: "Fútbol",
                categoria: "femenino",
                equipoA: "",
                equipoB: "",
                resultado: "🏆",
                hora: "",
                ganador: "",
                ronda: "campeon",
            },
        ],
    },

    // 🏀 BÁSQUETBOL VARONIL
    "Básquetbol-masculino": {
        cuartos: [
            {
                id: "bm-q1",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "Sistemas/Ciber",
                equipoB: "Arquitectura",
                resultado: "",
                hora: "10:00 AM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "bm-q2",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "Innovación",
                equipoB: "Contabilidad",
                resultado: "",
                hora: "12:30 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "bm-q3",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "Gestión Empresarial",
                equipoB: "Administración",
                resultado: "",
                hora: "1:45 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "bm-q4",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "Industrial",
                equipoB: "Bioquímica",
                resultado: "",
                hora: "11:15 AM",
                ganador: "",
                ronda: "cuartos",
            },
        ],
        semifinal: [
            {
                id: "bm-s1",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "12:00 PM",
                ganador: "",
                ronda: "semifinal",
            },
            {
                id: "bm-s2",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "G3",
                equipoB: "G4",
                resultado: "",
                hora: "11:00 AM",
                ganador: "",
                ronda: "semifinal",
            },
        ],
        final: [
            {
                id: "bm-f1",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "3:30 PM",
                ganador: "",
                ronda: "final",
            },
        ],
        campeon: [
            {
                id: "bm-c1",
                deporte: "Básquetbol",
                categoria: "masculino",
                equipoA: "",
                equipoB: "",
                resultado: "🏆",
                hora: "",
                ganador: "",
                ronda: "campeon",
            },
        ],
    },

    // 🏀 BÁSQUETBOL FEMENIL
    "Básquetbol-femenino": {
        cuartos: [
            {
                id: "bf-q1",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "Sistemas/Ciber",
                equipoB: "Arquitectura",
                resultado: "",
                hora: "11:15 AM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "bf-q2",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "Innovación",
                equipoB: "Contabilidad",
                resultado: "",
                hora: "10:00 AM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "bf-q3",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "Gestión Empresarial",
                equipoB: "Administración",
                resultado: "",
                hora: "12:30 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "bf-q4",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "Industrial",
                equipoB: "Bioquímica",
                resultado: "",
                hora: "1:45 PM",
                ganador: "",
                ronda: "cuartos",
            },
        ],
        semifinal: [
            {
                id: "bf-s1",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "11:00 AM",
                ganador: "",
                ronda: "semifinal",
            },
            {
                id: "bf-s2",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "G3",
                equipoB: "G4",
                resultado: "",
                hora: "12:00 PM",
                ganador: "",
                ronda: "semifinal",
            },
        ],
        final: [
            {
                id: "bf-f1",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "2:30 PM",
                ganador: "",
                ronda: "final",
            },
        ],
        campeon: [
            {
                id: "bf-c1",
                deporte: "Básquetbol",
                categoria: "femenino",
                equipoA: "",
                equipoB: "",
                resultado: "🏆",
                hora: "",
                ganador: "",
                ronda: "campeon",
            },
        ],
    },

    // 🏐 VÓLEIBOL VARONIL
    "Vóleibol-masculino": {
        cuartos: [
            {
                id: "vm-q1",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "Sistemas/Ciber",
                equipoB: "Arquitectura",
                resultado: "",
                hora: "12:00 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "vm-q2",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "Innovación Agrícola",
                equipoB: "Contabilidad",
                resultado: "",
                hora: "5:00 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "vm-q3",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "Gestión Empresarial",
                equipoB: "Administración",
                resultado: "",
                hora: "4:00 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "vm-q4",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "Industrial",
                equipoB: "Bioquímica",
                resultado: "",
                hora: "2:00 PM",
                ganador: "",
                ronda: "cuartos",
            },
        ],
        semifinal: [
            {
                id: "vm-s1",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "10:00 AM",
                ganador: "",
                ronda: "semifinal",
            },
            {
                id: "vm-s2",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "G3",
                equipoB: "G4",
                resultado: "",
                hora: "1:00 PM",
                ganador: "",
                ronda: "semifinal",
            },
        ],
        final: [
            {
                id: "vm-f1",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "1:30 PM",
                ganador: "",
                ronda: "final",
            },
        ],
        campeon: [
            {
                id: "vm-c1",
                deporte: "Vóleibol",
                categoria: "masculino",
                equipoA: "",
                equipoB: "",
                resultado: "🏆",
                hora: "",
                ganador: "",
                ronda: "campeon",
            },
        ],
    },

    // 🏐 VÓLEIBOL FEMENIL
    "Vóleibol-femenino": {
        cuartos: [
            {
                id: "vf-q1",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "Sistemas/Ciber",
                equipoB: "Arquitectura",
                resultado: "",
                hora: "3:00 PM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "vf-q2",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "Innovación Agrícola",
                equipoB: "Contabilidad",
                resultado: "",
                hora: "11:00 AM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "vf-q3",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "Gestión Empresarial",
                equipoB: "Administración",
                resultado: "",
                hora: "10:00 AM",
                ganador: "",
                ronda: "cuartos",
            },
            {
                id: "vf-q4",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "Industrial",
                equipoB: "Bioquímica",
                resultado: "",
                hora: "1:00 PM",
                ganador: "",
                ronda: "cuartos",
            },
        ],
        semifinal: [
            {
                id: "vf-s1",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "11:00 AM",
                ganador: "",
                ronda: "semifinal",
            },
            {
                id: "vf-s2",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "G3",
                equipoB: "G4",
                resultado: "",
                hora: "12:00 PM",
                ganador: "",
                ronda: "semifinal",
            },
        ],
        final: [
            {
                id: "vf-f1",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "G1",
                equipoB: "G2",
                resultado: "",
                hora: "12:30 PM",
                ganador: "",
                ronda: "final",
            },
        ],
        campeon: [
            {
                id: "vf-c1",
                deporte: "Vóleibol",
                categoria: "femenino",
                equipoA: "",
                equipoB: "",
                resultado: "🏆",
                hora: "",
                ganador: "",
                ronda: "campeon",
            },
        ],
    },
};

const sportIcons = {
    Fútbol: "",
    Básquetbol: "",
    Vóleibol: "",
}

const roundNames = {
    cuartos: "Cuartos de Final",
    semifinal: "Semifinales",
    final: "Final",
    campeon: "Campeón",
}

export default function TournamentBracket() {
    const [selectedSport, setSelectedSport] = useState<string>("Fútbol")
    const [selectedCategory, setSelectedCategory] = useState<string>("masculino")
    const [bracketData, setBracketData] = useState<BracketData | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const sports = ["Fútbol", "Básquetbol", "Vóleibol"]
    const categories = ["masculino", "femenino"]

    useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
            const key = `${selectedSport}-${selectedCategory}`
            setBracketData(sampleBracketData[key] || null)
            setIsLoading(false)
        }, 500)
    }, [selectedSport, selectedCategory])

    const MatchCard = ({ match, index }: { match: Match; index: number }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bracket-match w-full"
        >
            <Card className="bg-card border-2 border-sakura shadow-sm hover:shadow-lg hover:border-deep-rose transition-all duration-300 rounded-lg overflow-hidden">
                {match.ronda === "campeon" ? (
                    <div className="p-4 text-center gradient-rose">
                        <div className="text-3xl mb-2"></div>
                        <div className="font-bold text-snow-white text-xl">{match.equipoA}</div>
                        <div className="text-light-pink text-sm mt-1">
                            Campeón {match.deporte} {match.categoria === "femenino" ? "Femenino" : "Masculino"}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="bg-light-pink px-4 py-3 border-b border-sakura">
                            <div className="flex items-center gap-2 justify-center">
                                <span className="text-lg">{sportIcons[match.deporte as keyof typeof sportIcons] || ""}</span>
                                <span className="font-medium text-sm text-deep-rose">
                                    {match.deporte} {match.categoria === "femenino" ? "" : ""}
                                </span>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-between text-base">
                                    <span
                                        className={`font-medium ${match.ganador === match.equipoA ? "text-deep-rose font-bold" : "text-muted-foreground"}`}
                                    >
                                        {match.equipoA}
                                    </span>
                                    <span className="text-sm text-soft-mauve font-medium px-2">VS</span>
                                    <span
                                        className={`font-medium ${match.ganador === match.equipoB ? "text-deep-rose font-bold" : "text-muted-foreground"}`}
                                    >
                                        {match.equipoB}
                                    </span>
                                </div>

                                <div className="text-center">
                                    <div className="text-xl font-bold text-snow-white bg-deep-rose rounded-lg px-4 py-2 inline-block">
                                        {match.resultado}
                                    </div>
                                </div>
                            </div>

                            {match.hora && (
                                <div className="flex items-center justify-center gap-2 text-soft-mauve text-sm">
                                    <span>{match.hora}</span>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </Card>
        </motion.div>
    )

    const BracketConnector = ({ type }: { type: "horizontal" | "vertical" | "corner" }) => (
        <div className={`bracket-line bracket-connector-${type} hidden md:block`} />
    )

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin text-4xl mb-4"></div>
                    <p className="text-muted-foreground">Cargando bracket del torneo universitario...</p>
                </div>
            </div>
        )
    }

    if (!bracketData) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4 opacity-30"></div>
                    <h3 className="text-lg font-medium text-deep-rose mb-2">No hay datos del torneo</h3>
                    <p className="text-sm text-muted-foreground">Los resultados aparecerán aquí cuando estén disponibles</p>
                </div>
            </div>
        )
    }

    return (
        <div id="torneo" className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-deep-rose mb-2">Torneo del UNITEC</h1>
                    <p className="text-muted-foreground">Sigue el progreso de cada carrera hacia la victoria</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 mb-8"
                >
                    {/* Sport Selection */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {sports.map((sport) => (
                            <Button
                                key={sport}
                                variant={selectedSport === sport ? "default" : "outline"}
                                onClick={() => setSelectedSport(sport)}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${selectedSport === sport
                                    ? "bg-deep-rose text-snow-white hover:bg-soft-mauve"
                                    : "border-sakura text-deep-rose hover:bg-light-pink hover:text-deep-rose"
                                    }`}
                            >
                                {sportIcons[sport as keyof typeof sportIcons]} {sport}
                            </Button>
                        ))}
                    </div>

                    {/* Category Selection */}
                    <div className="flex justify-center gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category
                                    ? "bg-soft-mauve text-snow-white hover:bg-deep-rose"
                                    : "border-sakura text-soft-mauve hover:bg-light-pink hover:text-soft-mauve"
                                    }`}
                            >
                                {category === "femenino" ? "♀ Femenino" : "♂ Masculino"}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                {/* Tournament Bracket */}
                <div className="w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedSport}-${selectedCategory}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-8"
                        >
                            {/* Mobile Layout */}
                            <div className="block md:hidden space-y-8">
                                {/* Cuartos de Final */}
                                <div>
                                    <h3 className="text-center font-semibold text-deep-rose mb-6 text-lg">{roundNames.cuartos}</h3>
                                    <div className="space-y-4">
                                        {bracketData.cuartos.map((match, index) => (
                                            <MatchCard key={match.id} match={match} index={index} />
                                        ))}
                                    </div>
                                </div>

                                {/* Semifinales */}
                                <div>
                                    <h3 className="text-center font-semibold text-deep-rose mb-6 text-lg">{roundNames.semifinal}</h3>
                                    <div className="space-y-4">
                                        {bracketData.semifinal.map((match, index) => (
                                            <MatchCard key={match.id} match={match} index={index + 4} />
                                        ))}
                                    </div>
                                </div>

                                {/* Final */}
                                <div>
                                    <h3 className="text-center font-semibold text-deep-rose mb-6 text-lg">{roundNames.final}</h3>
                                    <div className="space-y-4">
                                        {bracketData.final.map((match, index) => (
                                            <MatchCard key={match.id} match={match} index={index + 6} />
                                        ))}
                                    </div>
                                </div>

                                {/* Campeón */}
                                <div>
                                    <h3 className="text-center font-semibold text-deep-rose mb-6 text-lg">{roundNames.campeon}</h3>
                                    <div className="flex justify-center">
                                        {bracketData.campeon.map((match, index) => (
                                            <div key={match.id} className="w-full max-w-sm">
                                                <MatchCard match={match} index={index + 7} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:block overflow-x-auto pb-8">
                                <div className="min-w-[800px] mx-auto">
                                    <div className="grid grid-cols-4 gap-8 items-center">
                                        {/* Cuartos de Final */}
                                        <div className="space-y-4">
                                            <h3 className="text-center font-semibold text-deep-rose mb-4">{roundNames.cuartos}</h3>
                                            {bracketData.cuartos.map((match, index) => (
                                                <div key={match.id} className="flex items-center">
                                                    <MatchCard match={match} index={index} />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Semifinales */}
                                        <div className="space-y-8">
                                            <h3 className="text-center font-semibold text-deep-rose mb-4">{roundNames.semifinal}</h3>
                                            {bracketData.semifinal.map((match, index) => (
                                                <div key={match.id} className="flex items-center">
                                                    <MatchCard match={match} index={index + 4} />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Final */}
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="text-center font-semibold text-deep-rose mb-4">{roundNames.final}</h3>
                                            {bracketData.final.map((match, index) => (
                                                <div key={match.id} className="flex items-center">
                                                    <MatchCard match={match} index={index + 6} />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Campeón */}
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="text-center font-semibold text-deep-rose mb-4">{roundNames.campeon}</h3>
                                            {bracketData.campeon.map((match, index) => (
                                                <div key={match.id} className="flex items-center">
                                                    <MatchCard match={match} index={index + 7} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <div className="inline-flex items-center gap-4 text-sm text-muted-foreground bg-light-pink/30 rounded-lg px-4 py-2">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-deep-rose rounded-full"></div>
                            <span>Ganador</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                            <span>Perdedor</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
