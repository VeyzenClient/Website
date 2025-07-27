import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is VeyzenClient?",
    answer: "VeyzenClient is a custom Forge-based Minecraft 1.8.9 client designed for performance, modern visuals, and modding flexibility.",
  },
  {
    question: "Is VeyzenClient released?",
    answer: "No, VeyzenClient is still in development as of mid-2025. A public release will be announced soon.",
  },
  {
    question: "What makes Veyzen different?",
    answer: "It's open-source, built for mod developers, and optimized for both casual and competitive PvP gameplay.",
  },
  {
    question: "Will Veyzen support custom mods?",
    answer: "Yes! Since it’s Forge-based, you’ll be able to use and build mods with it just like any other 1.8.9 Forge client.",
  },
  {
    question: "Where can I follow updates?",
    answer: "You can follow progress via GitHub, Twitter, or Discord. Links are available in the footer or About page.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen w-full py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full border border-border">
            Frequently Asked <span className="gradient-text">Questions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions about VeyzenClient? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl p-5 bg-muted/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold"
                onClick={() => setOpen(open === index ? null : index)}
              >
                {faq.question}
                {open === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <div
                className={cn(
                  "mt-3 text-muted-foreground text-sm transition-all duration-300 overflow-hidden",
                  open === index ? "max-h-[500px]" : "max-h-0 opacity-0"
                )}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}