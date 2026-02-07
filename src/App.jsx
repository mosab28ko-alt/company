/**
 * Main App Component
 * Orchestrates all sections of the website layout
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-16 pt-6 md:px-6 lg:px-8">
        {/* Header Navigation */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex flex-col gap-14 md:gap-16">
          <Hero />
          {/* <About /> */}
           <Services />
          <Staff />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
