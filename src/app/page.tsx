import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      {/* White page card */}
      <div
        className="relative mx-auto min-h-screen"
        style={{
          maxWidth: "680px",
          backgroundColor: "var(--surface)",
          boxShadow: "var(--shadow-page)",
        }}
      >
        <Nav />
        <main className="pb-36">
          <Hero />
          <Projects />
          <About />
          <Footer />
        </main>
      </div>

      {/* Floating bottom dock */}
      <BottomNav />
    </div>
  );
}
