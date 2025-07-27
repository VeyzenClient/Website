import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { DownloadCloud, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Download() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  return (
    <section className="min-h-screen w-full py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-10" data-aos="fade-up">
        <div>
          <div className="inline-block mb-4 px-4 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full border border-border">
            Download <span className="gradient-text">VeyzenClient</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get VeyzenClient</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            VeyzenClient is currently in active development. A public download is not yet available.
            Stay tuned — the first pre-release will be announced soon!
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            disabled
            className="px-6 py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-md bg-muted/30 text-muted cursor-not-allowed"
          >
            <DownloadCloud className="mr-2 h-5 w-5" />
            Coming Soon
          </Button>
        </div>

        <div className="text-sm text-muted-foreground flex justify-center items-center gap-2">
          <Info className="w-4 h-4" />
          Started development in mid-2025 • Forge 1.8.9 Client • Open Source
        </div>
      </div>
    </section>
  );
}