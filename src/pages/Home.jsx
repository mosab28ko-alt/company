import Hero from "../components/Hero";
import Services from "../components/Services";
import Staff from "../components/Staff";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-14 md:gap-16">
      <Hero />
      <Services />
      <Staff />
      <Contact />
    </main>
  );
}