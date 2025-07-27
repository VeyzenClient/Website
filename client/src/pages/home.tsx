import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Rocket, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  return (
    <section className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center py-24 hero-gradient text-center px-6 sm:px-8 relative overflow-hidden">
        <div className="container z-10" data-aos="fade-up">
          <div className="inline-block mb-4 px-4 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full border border-border">
            Design • Code • Systems
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Veyzen</span> —{" "}
            <br className="hidden sm:block" />
            <span>Crafting Better Software</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Arctyll designs and builds refined software solutions for developers, startups, and ambitious platforms.
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              We solve technical problems with clarity, precision, and polish.
            </span>
          </p>

          {/* Updated Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="px-6 py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Work With Us
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-4 text-base sm:text-lg font-semibold rounded-2xl border-muted hover:border-foreground hover:bg-muted transition-colors"
              >
                <Code className="mr-2 h-5 w-5" />
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}