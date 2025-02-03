"use client";

import Features from "@/components/Features";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Steps } from "@/components/Steps";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMenuToggle = () => {
    console.log("Menu toggled"); //temporary
  };

  return (
    <div>
      <Navbar links={links} onMenuToggle={handleMenuToggle} />
      <div className="items-center bg-custom justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <Steps />
        <Features />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}
