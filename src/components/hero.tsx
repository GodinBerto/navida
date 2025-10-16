"use client";

import { Button } from "./ui/button";
import Tag from "./tag";
import { GraduationCap } from "lucide-react";
import HeroRightSide from "./hero-rightside";

export default function HeroSection() {
  return (
    <section className="py-20 h-screen bg-[url('/images/backgrounds/Artboard2.png')] bg-cover bg-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
        {/* Left Content */}
        <div className="flex-1 text-start mt-16 lg:mt-0">
          <div className="lg:mb-6 mb-2">
            <Tag>
              <GraduationCap /> Navida Center
            </Tag>
          </div>

          <h1 className="lg:text-7xl text-5xl font-semibold  text-gray-900 fredka">
            Welcome to <span className=" text-blue-700">Navida</span> Recruiting
            and Training Center
          </h1>

          <p className="mt-6 text-gray-600 max-w-md lg:text-lg text-md mx-auto lg:mx-0">
            Empowering individuals to succeed in the healthcare industry through
            comprehensive training in Phlebotomy and Sterile Technology
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-start gap-4">
            <Button className="px-4 py-6">Get Started</Button>
          </div>
        </div>

        {/* Right Side Image + Stats */}
        <div className="flex-1 relative">
          <HeroRightSide />
        </div>
      </div>
    </section>
  );
}
