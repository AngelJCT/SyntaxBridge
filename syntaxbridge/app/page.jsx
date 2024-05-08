import Navbar from "@/components/Navbar";
import SyntaxBridge from "@/components/SyntaxBridge";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
