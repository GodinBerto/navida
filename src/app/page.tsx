"use client";
import HeroSection from "@/components/hero";
import WhyChooseUs from "@/components/whyChooseUs";
import Mission from "@/components/mission";
import About from "@/components/about";
import JoinCommunity from "@/components/joinCommunity";
import ContactForm from "@/components/contact";
import Programs from "@/components/programs";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <About />
      <Mission />
      <Programs />
      <JoinCommunity />
      {/* <Pricing /> */}
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
}
