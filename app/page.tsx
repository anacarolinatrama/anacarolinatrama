import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/hero/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Ribbon } from "@/components/Ribbon";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative overflow-x-clip bg-cream">
        <Header />
        <main>
          <Hero />
          <Ribbon />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
