import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  return (
    <section className="min-h-screen w-full py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12" data-aos="fade-up">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full border border-border">
            About <span className="gradient-text">VeyzenClient</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Forging the Future of Minecraft PvP
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            VeyzenClient is a Forge-based Minecraft 1.8.9 PvP client currently in development.
            Designed to be sleek, modern, and highly optimized, Veyzen aims to provide players with a powerful yet intuitive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">A Journey That Just Began</h2>
            <p className="text-muted-foreground text-base">
              The idea behind VeyzenClient was born in mid-2025, driven by the need for a client that could merge customization, open-source values,
              and a refined UI experience tailored for the Minecraft PvP community.
            </p>
            <p className="text-muted-foreground text-base mt-4">
              While still in development, the project has already made strides toward building a solid foundation, with core systems, modular structure,
              and design goals clearly defined.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Modern UI/UX</h3>
                <p className="text-muted-foreground text-sm">Inspired by clean, glassy design trends (like LunarClient), every element is focused on clarity and elegance.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Fully Open Source</h3>
                <p className="text-muted-foreground text-sm">Veyzen is open-source, inviting community contributions and full transparency.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">PvP-Focused</h3>
                <p className="text-muted-foreground text-sm">Optimized for Minecraft 1.8.9 Forge PvP gameplay — stability, performance, and support for essentials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}