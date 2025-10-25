"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false); // close menu on navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Navida Logo"
            className="h-12 w-auto cursor-pointer"
            width={1000}
            height={1000}
            onClick={() => router.push("/")}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavigation("/about_us")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("/programs")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Programs
          </button>
          <button
            onClick={() => handleNavigation("/contact_us")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </button>
          <Button
            onClick={() => handleNavigation("/apply")}
            className="transition-opacity"
          >
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 " />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="flex flex-col items-start px-6 py-4 space-y-4">
            <button
              onClick={() => handleNavigation("/about_us")}
              className="w-full text-left text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/programs")}
              className="w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => handleNavigation("/contact_us")}
              className="w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </button>
            <Button
              onClick={() => handleNavigation("/apply")}
              className="w-full transition-opacity"
            >
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
