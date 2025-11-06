"use client";

import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Cog,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import Tag from "./tag";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper/types";
import { useRef, useEffect, useState } from "react";

export default function Programs() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const programs = [
    {
      icon: HeartPulse,
      title: "BLS / CPR Training",
      image: "/images/cpr.jpg",
      description:
        "Gain life-saving skills in Basic Life Support and CPR. This hands-on program covers emergency response techniques for healthcare providers and the public.",
      highlights: [
        "Adult, child, and infant CPR",
        "AED usage and airway management",
        "Team-based emergency response",
        "American Heart Association certification",
      ],
    },
    {
      icon: Activity,
      title: "Phlebotomy and EKG Training",
      image: "/images/phlebotomy_training.jpg",
      description:
        "Combine two vital healthcare skills — phlebotomy and electrocardiography — in one complete program designed to prepare you for immediate clinical employment.",
      highlights: [
        "Venipuncture and specimen handling",
        "EKG operation and interpretation",
        "Hands-on clinical experience",
        "National certification preparation",
      ],
    },
    {
      icon: Cog,
      title: "Central Sterile Processing Training",
      image: "/images/sterile_technology.jpg",
      description:
        "Develop skills in sterilizing, assembling, and maintaining surgical instruments. Learn the essential processes that ensure patient safety in medical environments.",
      highlights: [
        "Decontamination and sterilization procedures",
        "Instrument identification and assembly",
        "Regulatory compliance standards",
        "Career preparation for healthcare facilities",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Security Guard Training",
      image: "/images/security.jpg",
      description:
        "Prepare for a career in security with comprehensive training in protection, surveillance, and emergency response. Gain the knowledge needed to obtain your professional license.",
      highlights: [
        "Legal responsibilities and ethics",
        "Patrol and surveillance techniques",
        "Emergency response training",
        "State certification requirements",
      ],
    },
  ];

  // ✅ Wait for refs to be ready before initializing navigation
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="py-20 flex justify-center px-4 overflow-hidden relative">
      <div className="container mx-auto">
        <div className="max-w-3xl text-start mb-16 animate-fade-in flex gap-5 flex-col items-start">
          <Tag>Services</Tag>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide a comprehensive range of healthcare recruitment,
            training, and support services designed to meet the needs of both
            individuals and organizations. From skill development to workforce
            placement, our services empower clients to achieve excellence in
            every aspect of healthcare delivery.
          </p>
        </div>

        <div className="">
          {swiperReady && (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper: SwiperType) => {
                // Type guard to ensure navigation is an object, not just `true`
                if (typeof swiper.params.navigation === "object") {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              className="pb-12 mx-32"
            >
              {programs.map((program, index) => (
                <SwiperSlide key={index}>
                  <Card className="p-6 hover:shadow-card transition-all duration-300 rounded-2xl flex flex-col justify-between h-full">
                    <div>
                      <div
                        className="w-full h-[200px] bg-cover bg-no-repeat bg-center rounded-2xl mb-6 relative overflow-hidden"
                        style={{ backgroundImage: `url(${program.image})` }}
                      >
                        <div className="bg-black/40 absolute top-0 w-full h-full"></div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {program.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {program.description}
                      </p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2"></span>
                          <span className="text-foreground text-sm">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="bg-gray-100 shadow-inner rounded-lg p-2 w-fit">
                          <h4 className="text-md text-gray-500">GHS 1,700</h4>
                        </div>
                        <p className="text-gray-500">1 month</p>
                      </div>

                      <Button
                        className="w-full hover:opacity-90 transition-opacity"
                        onClick={() => (window.location.href = "/apply")}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}

              {/* ✅ Custom Navigation Buttons */}
              <div className="mt-5 w-full flex gap-3 justify-end">
                <button
                  ref={prevRef}
                  className="bg-black hover:bg-black/50 p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
                >
                  <ChevronLeft className="text-white w-5 h-5" />
                </button>

                <button
                  ref={nextRef}
                  className="bg-black hover:bg-black/50 p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
                >
                  <ChevronRight className="text-white w-5 h-5" />
                </button>
              </div>
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
