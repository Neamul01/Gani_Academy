"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen
              className={`h-6 w-6  ${isScrolled ? "text-black" : "text-white"}`}
            />
            <span
              className={cn(
                "font-bold text-lg",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              Gani Academy
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                className={cn(isScrolled ? "text-primary" : "text-white")}
              >
                Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                className={cn(isScrolled ? "text-primary" : "text-white")}
              >
                Contact
              </Button>
            </Link>
            <Button
              className="bg-primary text-primary-foreground"
              onClick={scrollToBooking}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
