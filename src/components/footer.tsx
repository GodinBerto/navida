"use client";

import { Mail, ArrowRight, Instagram, Twitter, Dribbble } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-gray-400 py-14 px-8 md:px-16 mx-auto mt-40 relative ">
      <div className="absolute -top-20 inset-0 w-screen h-[200px] overflow-hidden z-0">
        <Image
          src="/svg/svg_line.svg"
          alt="Decorative line background"
          fill
          priority
          className="object-cover object-end"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start z-20 relative bg-blue-700">
        {/* Left: Brand & Newsletter */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gray-800 p-2 rounded-lg">
              <Mail className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Navida</h3>
              <p className="text-sm text-gray-300">Center</p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl font-medium leading-snug">
              Imaginative minds <br /> for imaginative brands.
            </h2>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-sm text-gray-300 mb-2">
              Subscribe to our newsletter
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-900 text-white placeholder-gray-500 rounded-full py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-700"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-gray-800 hover:bg-gray-700 rounded-full p-2 flex items-center justify-center transition w-10">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex justify-center border-x border-gray-300 px-6">
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-gray-300">
            <Link href="#" className="hover:text-white transition-colors">
              Our services +
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Our Process
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Referral Program
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex md:flex-col items-center md:items-end justify-center gap-6 text-gray-300">
          <Link href="#" className="hover:text-white transition">
            <Dribbble className="w-5 h-5" />
          </Link>

          <Link href="#" className="hover:text-white transition">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
