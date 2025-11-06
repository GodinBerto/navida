"use client";

import { Award, Layers, Clock, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import Tag from "./tag";

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="container mx-auto px-4 text-start mb-12 flex flex-col items-start gap-4">
        <Tag>Why Choose Us</Tag>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight">
          Why <span className="text-blue-700">Navida</span> Is The Right Choice
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {/* Top Row Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 hover:shadow-md transition flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Outstanding success rate in placing graduates in top
                    healthcare facilities across the region.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 hover:shadow-md transition flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Career-Boost Certify
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Earn certifications that help enhance your resume, gain
                    recognition, and open doors to career opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 hover:shadow-md transition flex-1">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  100+ High Impact Courses
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  Explore over 100 courses with hands-on, practical learning for
                  beginners and professionals alike.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column (Dark card) */}
        <div className="bg-blue-700 text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Background circles */}
          <div className="absolute -left-[150px] lg:-left-20 top-10 w-48 h-48 border-8 border-blue-500/30 rounded-full"></div>
          <div className="absolute -bottom-32 lg:-bottom-20 -right-24 w-96 h-96 border-8 border-blue-500/30 rounded-full"></div>

          <div className="relative z-10">
            <div className="bg-button-primary  p-3 rounded-lg inline-block mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold leading-snug mb-4">
              Flexible Learning <br /> Schedules
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Balance learning with your lifestyle. Study anytime, anywhere —
              our courses are available on-demand at your pace.
            </p>
          </div>

          <Link
            href="/apply"
            className="mt-8 inline-flex items-center gap-2 bg-button-primary hover:bg-button-primary/90 text-white font-medium rounded-full px-6 py-3 transition-all w-fit relative"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
