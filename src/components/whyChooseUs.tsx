"use client";

import { Award, Layers, Clock, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import Tag from "./tag";

export default function WhyChooseUs() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-3 text-start mb-12 animate-fade-in flex gap-5 flex-col items-start">
        <Tag>Why Choose Us</Tag>
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
          Why <span className="text-blue-700">Navida</span> Is The Right Choice
        </h2>
      </div>
      <div className="container mx-auto px-3 grid md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <div className="flex gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl  border border-border p-8 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Outstanding success rate in placing graduates in top
                    healthcare facilities across the region
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl  border border-border p-8 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Career-Boost Certify
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Earn certifications that are highly regarded by employers,
                    helping you enhance your resume, gain industry recognition,
                    and open doors to new career opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl  border border-border p-8 hover:shadow-md transition flex-1">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  100+ High Impact Courses
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  Explore over 100 courses that cover essential skills in
                  today&apos;s tech industry. Whether you&apos;re a beginner or
                  an experienced professional, our courses provide practical,
                  hands-on learning to help you stay competitive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column (Dark card) */}
        <div className="bg-blue-700 text-white rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="bg-transparent border-10 border-blue-500/30 rounded-full h-[200px] w-[200px] absolute -left-30 z-0"></div>
          <div className="bg-transparent border-10 border-blue-500/30 rounded-full h-[500px] w-[500px] absolute -bottom-100 -right-40 z-0"></div>
          <div className="relative z-10">
            <div className="bg-blue-500 p-3 rounded-lg inline-block mb-4 z-10">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold leading-snug mb-4">
              Flexible Learning <br /> Schedules
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              At Navida, we understand the importance of balancing learning with
              a busy lifestyle. That&apos;s why our courses are available
              on-demand, allowing you to learn at your own pace, anytime and
              anywhere.
            </p>
          </div>

          <Link
            href="/apply"
            className="mt-8 inline-flex items-center gap-2 bg-blue-500/60 hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 transition-all w-fit"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
