import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <About />
        <Skills />
        {/* <Experience /> */}
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
