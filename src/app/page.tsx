import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Footer />
      </main>
    </div>
  );
}
