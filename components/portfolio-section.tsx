"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import SectionDivider from "./section-divider"

const projects = [
  {
    id: 1,
    title: "IA Asistente Financiero",
    description: "Asistente virtual para análisis financiero y recomendaciones de inversión basadas en IA.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tech: ["Next.js", "OpenAI", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    fullDescription:
      "Un asistente virtual impulsado por IA que analiza datos financieros en tiempo real y proporciona recomendaciones personalizadas de inversión. Utiliza algoritmos avanzados de procesamiento de lenguaje natural para interpretar consultas complejas y ofrecer respuestas precisas.",
  },
  {
    id: 2,
    title: "Plataforma E-learning",
    description: "Sistema completo de aprendizaje en línea con cursos interactivos y seguimiento de progreso.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    demoUrl: "#",
    fullDescription:
      "Plataforma educativa completa que permite a los instructores crear y gestionar cursos interactivos. Incluye funcionalidades como seguimiento de progreso, evaluaciones automatizadas, foros de discusión y certificaciones digitales.",
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    description: "Panel de control para visualización de datos empresariales con métricas en tiempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tech: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
    demoUrl: "#",
    fullDescription:
      "Dashboard analítico avanzado que transforma datos complejos en visualizaciones interactivas y fáciles de entender. Proporciona métricas en tiempo real, informes personalizables y alertas automáticas para ayudar en la toma de decisiones empresariales.",
  },
  {
    id: 4,
    title: "App de Comercio Electrónico",
    description: "Tienda online completa con pasarela de pagos, gestión de inventario y panel de administración.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
    demoUrl: "#",
    fullDescription:
      "Solución de comercio electrónico completa con catálogo de productos, carrito de compras, pasarela de pagos segura, gestión de inventario y panel de administración. Incluye funcionalidades como recomendaciones personalizadas y programa de fidelización.",
  },
]

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <>
      <SectionDivider type="wave" position="top" />
      <section id="portfolio" className="py-20 relative overflow-hidden section-transition" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Mi <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Explora algunos de mis proyectos más destacados en WordPress y desarrollo web, y descubre cómo puedo
              ayudarte a alcanzar tus objetivos digitales.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 hover:border-gradient transition-all duration-300 hover:shadow-gradient group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-xl border border-gray-100 dark:border-white/10 text-gray-800 dark:text-white max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gradient">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            <div className="relative h-64 md:h-80 my-4 rounded-lg overflow-hidden">
              {selectedProject && (
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <DialogDescription className="text-gray-700 dark:text-white/90 text-base">
              {selectedProject?.fullDescription}
            </DialogDescription>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Tecnologías utilizadas:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject?.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                className="button-gradient text-white hover:bg-gradient-hover font-medium"
                onClick={() => window.open(selectedProject?.demoUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver demo en vivo
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>
      <SectionDivider type="wave" position="bottom" />
    </>
  )
}
