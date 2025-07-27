import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Features from "@/pages/featudes";
import FrequentlyAskedQuestions from "@/pages/faq";
import Download from "@/pages/download";
import License from "@/pages/license";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Particles from "@/components/particles";
import { useEffect } from "react";

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/download" component={Download} />
        <Route path="/faq" component={FrequentlyAskedQuestions} />
        <Route path="/features" component={Features} />
        <Route path="/license" component={License} />
        <Route component={NotFound} />
      </Switch>
      <RouteMeta />
    </>
  );
}

declare global {
  interface Window {
    AOS: any;
  }
}

function App() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      });
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="arctyll-ui-theme">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Particles />
            <Navbar />
            <main>
              <Router />
            </main>
            <Footer />
            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;