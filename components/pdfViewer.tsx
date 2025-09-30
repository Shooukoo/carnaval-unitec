"use client"

import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import {
    FileText,
    ChevronLeft,
    ChevronRight,
    ZoomIn,
    ZoomOut,
    Download,
    Menu,
    AlertCircle,
    X,
    Loader2,
    CheckCircle2,
} from "lucide-react"

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`

interface PdfViewerProps {
    file: string
    fileName?: string
    height?: string
    className?: string
}

export default function PdfViewer({ file, fileName, height, className }: PdfViewerProps) {
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [zoom, setZoom] = useState(1.0)
    const [rotation, setRotation] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [downloading, setDownloading] = useState(false)
    const [downloadSuccess, setDownloadSuccess] = useState(false)

    useEffect(() => {
        setMounted(true)
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const handleDownload = async () => {
        setDownloading(true)
        setDownloadSuccess(false)

        try {
            const link = document.createElement("a")
            link.href = file
            link.download = fileName || file.split("/").pop() || "document.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            setTimeout(() => {
                setDownloading(false)
                setDownloadSuccess(true)
                setTimeout(() => {
                    setDownloadSuccess(false)
                }, 2000)
            }, 800)
        } catch (error) {
            console.error("Error downloading PDF:", error)
            setDownloading(false)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handleZoomIn = () => {
        if (zoom < 2.0) setZoom(zoom + 0.25)
    }

    const handleZoomOut = () => {
        if (zoom > 0.5) setZoom(zoom - 0.25)
    }

    const handleRotate = () => {
        setRotation((rotation + 90) % 360)
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        console.log("PDF loaded successfully with", numPages, "pages")
        setTotalPages(numPages)
        setIsLoading(false)
        setError(null)
    }

    const onDocumentLoadError = (error: Error) => {
        console.error("Error loading PDF:", error)
        setIsLoading(false)
        setError(error.message || "Error desconocido al cargar el PDF")
    }

    if (!mounted) {
        return (
            <section className={`relative ${className} min-h-screen`}>
                <div className="bg-white border border-[var(--border)] rounded-2xl shadow-sm p-12">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-12 h-12 border-4 border-[var(--sakura-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-[var(--muted-foreground)]">Inicializando visor...</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (isMobile) {
        return (
            <section
                className="min-h-[70vh] py-20 bg-gradient-to-b from-snow-white to-light-pink/30 relative overflow-hidden px-4"
                id="reglamento"
            >
                <div className="bg-gradient-to-br from-white to-[var(--sakura-light)] border-4 border-[var(--secondary)] rounded-2xl shadow-lg p-6  max-w-[80vh] min-h-[40vh]">
                    <div className="flex flex-col items-center text-center space-y-10">
                        <div>
                            <h2 className="font-bold text-xl text-[var(--font-sans)] mb-1 text-sakura">REGLAMENTO UNITEC 2025</h2>
                        </div>
                        <p className="text-sm text-[var(--font-sans)] leading-relaxed text-prety text-deep-rose">
                            Descarga el reglamento completo en PDF para consultarlo en cualquier momento. Ayudanos a compartirlo.
                        </p>
                        <button
                            onClick={handleDownload}
                            disabled={downloading || downloadSuccess}
                            className={`w-full px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-3 font-medium text-base touch-manipulation ${downloading
                                    ? "bg-sakura/70 border-sakura cursor-wait"
                                    : downloadSuccess
                                        ? "bg-green-500 border-green-500 text-snow-white"
                                        : "bg-deep-rose text-snow-white border-deep-rose hover:bg-sakura hover:border-sakura"
                                } ${downloading || downloadSuccess ? "pointer-events-none" : ""}`}
                        >
                            {downloading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Descargando...
                                </>
                            ) : downloadSuccess ? (
                                <>
                                    <CheckCircle2 className="w-5 h-5" />
                                    ¡Descargado!
                                </>
                            ) : (
                                <>
                                    <Download className="w-5 h-5" />
                                    Descargar PDF
                                </>
                            )}
                        </button>
                        <div className="pt-2 text-xs text-[var(--font-sans)] text-deep-rose">
                            <p>Toca el botón para descargar</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            className="min-h-[50vh] py-20 bg-gradient-to-b from-snow-white to-light-pink/30 relative overflow-hidden"
            id=""
        >
            <div className="bg-white border border-[var(--border)] rounded-t-2xl shadow-sm">
                <div className="flex items-center justify-between px-3 py-2.5 gap-2 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="p-1.5 rounded-lg bg-gradient-to-br from-[var(--sakura-primary)] to-[var(--sakura-accent)] flex-shrink-0">
                            <FileText className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h2 className="font-medium text-[var(--elegant-black)] text-sm truncate">{fileName}</h2>
                        </div>
                    </div>
                    <button
                        onClick={handleDownload}
                        disabled={downloading || downloadSuccess}
                        className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-sm flex-shrink-0 touch-manipulation ${downloading
                                ? "bg-blue-400 text-white cursor-wait"
                                : downloadSuccess
                                    ? "bg-green-500 text-white"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                            } ${downloading || downloadSuccess ? "pointer-events-none" : ""}`}
                    >
                        {downloading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span className="hidden sm:inline">Descargando...</span>
                            </>
                        ) : downloadSuccess ? (
                            <>
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="hidden sm:inline">¡Listo!</span>
                            </>
                        ) : (
                            <Download className="w-4 h-4" />
                        )}
                    </button>
                </div>
                <div className="px-3 py-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation active:bg-gray-200 transition-colors"
                            aria-label="Página anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-medium text-[var(--elegant-black)] min-w-[60px] text-center">
                            {currentPage} / {totalPages || "..."}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation active:bg-gray-200 transition-colors"
                            aria-label="Página siguiente"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={handleZoomOut}
                            disabled={zoom <= 0.5}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation active:bg-gray-200 transition-colors"
                            aria-label="Alejar"
                        >
                            <ZoomOut className="w-5 h-5" />
                        </button>
                        <span className="text-sm text-[var(--muted-foreground)] min-w-[50px] text-center font-medium">
                            {Math.round(zoom * 100)}%
                        </span>
                        <button
                            onClick={handleZoomIn}
                            disabled={zoom >= 2.0}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation active:bg-gray-200 transition-colors"
                            aria-label="Acercar"
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-lg hover:bg-gray-100 touch-manipulation active:bg-gray-200 transition-colors lg:hidden"
                        aria-label="Ver páginas"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex bg-gray-50 border-x border-[var(--border)] relative" style={{ height }}>
                <div
                    className={`
            fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto
            w-64 lg:w-48 bg-white border-r border-[var(--border)] overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
                >
                    <div className="sticky top-0 bg-white border-b border-[var(--border)] p-3 flex items-center justify-between lg:block z-10">
                        <h3 className="text-sm font-medium text-[var(--elegant-black)]">Páginas</h3>
                        <button onClick={toggleSidebar} className="lg:hidden p-1 rounded hover:bg-gray-100 touch-manipulation">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-3">
                        <div className="space-y-2">
                            {totalPages > 0 &&
                                Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => {
                                            setCurrentPage(page)
                                            if (window.innerWidth < 1024) {
                                                setIsSidebarOpen(false)
                                            }
                                        }}
                                        className={`w-full p-2 rounded-lg border-2 transition-all touch-manipulation active:scale-95 ${currentPage === page
                                                ? "border-[var(--sakura-primary)] bg-[var(--sakura-light)]"
                                                : "border-gray-200 hover:border-gray-300"
                                            }`}
                                    >
                                        <div className="aspect-[3/4] bg-white rounded border overflow-hidden mb-1">
                                            <Document file={file} loading="">
                                                <Page pageNumber={page} width={100} renderTextLayer={false} renderAnnotationLayer={false} />
                                            </Document>
                                        </div>
                                        <div className="text-xs text-center">Página {page}</div>
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
                {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleSidebar} />}
                <div className="flex-1 relative overflow-hidden">
                    {isLoading && !error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                            <div className="text-center">
                                <div className="w-12 h-12 border-4 border-[var(--sakura-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-[var(--muted-foreground)]">Cargando documento...</p>
                            </div>
                        </div>
                    )}
                    <div className="h-full overflow-auto bg-gray-100 p-2 md:p-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <Document
                                    file={file}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    onLoadError={onDocumentLoadError}
                                    loading={
                                        <div className="flex items-center justify-center p-12">
                                            <div className="w-12 h-12 border-4 border-[var(--sakura-primary)] border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    }
                                    error={
                                        <div className="flex flex-col items-center justify-center p-6 md:p-12 text-red-500">
                                            <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-red-500 mb-4" />
                                            <h3 className="text-base md:text-lg font-medium text-red-600 mb-2">Error al cargar el PDF</h3>
                                            <p className="text-xs md:text-sm text-gray-600 mb-4 text-center max-w-md px-4">
                                                {error || "No se pudo cargar el documento"}
                                            </p>
                                            <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-left text-xs text-gray-700 max-w-md mx-4">
                                                <p className="font-medium mb-2">Verifica lo siguiente:</p>
                                                <ul className="list-disc list-inside space-y-1">
                                                    <li>
                                                        El archivo existe en: <code className="bg-gray-200 px-1 rounded break-all">{file}</code>
                                                    </li>
                                                    <li>El archivo es un PDF válido (no corrupto)</li>
                                                    <li>
                                                        Si es un archivo local, está en la carpeta{" "}
                                                        <code className="bg-gray-200 px-1 rounded">public/</code>
                                                    </li>
                                                    <li>Si es una URL externa, el servidor permite CORS</li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                >
                                    {!error && (
                                        <Page
                                            pageNumber={currentPage}
                                            scale={zoom}
                                            rotate={rotation}
                                            renderTextLayer={true}
                                            renderAnnotationLayer={true}
                                            className="mx-auto"
                                            width={
                                                typeof window !== "undefined" && window.innerWidth < 768 ? window.innerWidth - 32 : undefined
                                            }
                                        />
                                    )}
                                </Document>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white border border-t-0 border-[var(--border)] rounded-b-2xl px-3 py-2">
                <div className="flex items-center justify-center text-xs text-[var(--muted-foreground)]">
                    <span>
                        Página {currentPage} de {totalPages || "..."} • {Math.round(zoom * 100)}%
                    </span>
                </div>
            </div>
        </section>
    )
}
