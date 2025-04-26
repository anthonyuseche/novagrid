import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",  // Sin coma al final
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function Home() {
  return (
    <main className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      {/* Contenido */}
    </main>
  );
}
