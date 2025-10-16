import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={"/images/logo.png"}
            alt="Navida Logo"
            className="h-12 w-auto"
            width={1000}
            height={1000}
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("programs")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection("why-us")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Why Choose Us
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="transition-opacity"
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
}
