"use client";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
