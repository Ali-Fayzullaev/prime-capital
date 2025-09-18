import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturesRefi from "@/components/features-refi";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

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
      </main>
      <Footer />
    </>
  );
}
