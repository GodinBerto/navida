"use client";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import WhyChooseUs from "@/components/whyChooseUs";
import Mission from "@/components/mission";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Mission />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
