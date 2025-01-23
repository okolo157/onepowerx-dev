"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMenuToggle = () => {
    console.log("Menu toggled"); //default
  };

  return (
    <div>
      <Navbar links={links} onMenuToggle={handleMenuToggle} />
      <div className="items-center bg-custom justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />
      </div>
    </div>
  );
}
