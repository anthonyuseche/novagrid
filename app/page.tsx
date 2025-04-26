// app/page.tsx
import { Montserrat, Space_Grotesk } from "next/font/google";
import Header from "@components/header";
import ScrollNavigation from "@components/scroll-navigation";
import PortfolioSection from "@components/portfolio-section";
import CertificationSection from "@components/certification-section";
import WhyChooseMeSection from "@components/why-chose-me-section";
import TestimonialsSection from "@components/testimonials-section";
import FinalCtaSection from "@components/final-cta-section";

// Configuración de fuentes
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// Secciones para navegación
const sections = [
  "hero",
  "portfolio",
  "certificación",
  "porque-elegirme",
  "testimonios",
  "contacto"
];

export default function Home() {
  return (
    <main className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <Header />
      <ScrollNavigation sections={sections} />
      <PortfolioSection />
      <CertificationSection />
      <WhyChooseMeSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
  );
}
