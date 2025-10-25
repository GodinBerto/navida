"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Tag from "./tag";

export default function ContactForm() {
  return (
    <section className="py-20 flex justify-center flex-col items-center p-2">
      <div className="container mx-auto text-start mb-12 animate-fade-in flex gap-5 flex-col items-start">
        <div className="flex gap-5 flex-col items-start max-w-4xl">
          <Tag>Contact Us</Tag>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Get in Touch with <span className="text-blue-700">Navida</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions or need support? Contact Navida today — we’re here to
            guide you with expert healthcare training and recruitment solutions.
          </p>
        </div>
      </div>
      <div className="w-full container flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden">
        {/* Left: Contact Info */}
        <div className="bg-blue-700 text-white p-10 md:w-1/3 flex flex-col justify-between rounded-r-2xl h-full xs:h-fit relative overflow-hidden">
          <div className="bg-transparent border-10 border-blue-500/30 rounded-full h-[200px] w-[200px] absolute -top-30 z-0"></div>
          <div className="bg-transparent border-10 border-blue-500/30 rounded-full h-[200px] w-[200px] absolute -bottom-30 -left-30 z-0"></div>
          <div className="bg-transparent border-10 border-blue-500/30 rounded-full h-[500px] w-[500px] absolute -bottom-100 -right-40 z-0"></div>
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
            <p className="text-sm text-teal-100 leading-relaxed mb-8">
              We&apos;ll create high-quality linkable content and build at least
              40 high-authority links.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <div className="flex flex-col">
                  <span>+8801779778866</span>
                  <span>+988678363866</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@uprangly.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 bg-white/10 rounded-full h-32 w-32 self-end blur-2xl opacity-60" />
        </div>

        {/* Right: Form */}
        <form className="flex-1 p-10 space-y-6 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Trangely"
                className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="hello@nurency.com"
                className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Subject
            </label>
            <input
              type="text"
              placeholder="I want to hire you quickly"
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              placeholder="Write here your message"
              rows={4}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 resize-none"
            />
          </div>

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
