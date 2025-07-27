import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Cpu, MonitorUp, Puzzle, ShieldCheck, GaugeCircle, Wrench } from "lucide-react";

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: <GaugeCircle className="h-8 w-8 text-primary" />,
      title: "FPS Boost",
      description: "Get smoother gameplay with optimizations tailored for Minecraft 1.8.9 PvP.",
    },
    {
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      title: "Mod Support",
      description: "Built on Forge, fully compatible with popular mods and custom tweaks.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Open Source",
      description: "No black box. 100% open and customizable by the community.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Modular Settings",
      description: "Toggle and configure what you need. Nothing extra. Everything clean.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Optimized Core",
      description: "Low memory footprint with improved tick rates and rendering tweaks.",
    },
    {
      icon: <MonitorUp className="h-8 w-8 text-primary" />,
      title: "Custom UI",
      description: "Sleek, minimal interface made for usability and performance clarity.",
    },
  ];

  return (
    <section className="min-h-screen w-full py-20 px-6 sm:px-12 lg:px-24">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Core <span className="gradient-text">Features</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need from a performance Minecraft client, without the bloat.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-muted rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}