import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturesRefi from "@/components/FeaturesRefi";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Testimonials from "@/components/TestimonialsComponent";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturesRefi />
        <CTA />
        <Contact />
        <Testimonials/>
      </main>
      <Footer />
    </>
  );
}
