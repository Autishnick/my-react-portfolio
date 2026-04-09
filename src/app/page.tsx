import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <Hero />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
