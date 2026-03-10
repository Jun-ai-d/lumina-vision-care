import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import AboutDoctor from "@/components/AboutDoctor";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandsShowcase from "@/components/BrandsShowcase";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutDoctor />

      {/* Wave overlaps the TOP of Why Choose Us, colored like About Doctor (#f8fafb) */}
      <SectionDivider fillColor="#f8fafb" overlap="next" variant="wave1" />

      <WhyChooseUs />

      {/* Wave overlaps the BOTTOM of Why Choose Us, colored like BrandsShowcase (#ffffff) */}
      <SectionDivider fillColor="#ffffff" overlap="previous" variant="wave3" />

      <BrandsShowcase />
      <Testimonials />
      <ContactForm />

      {/* Wave overlaps the BOTTOM of ContactForm, colored like Footer (#0f1923) */}
      <SectionDivider fillColor="#0f1923" overlap="previous" variant="wave2" />

      <Footer />
      <BackToTop />
    </main>
  );
}
