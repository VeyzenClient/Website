import {
  Github,
  Mail,
  Heart,
  Code,
  Users,
  Book,
  FileText,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import arctyllLogo from "@assets/arctyll.png";

const iconMap = {
  Github,
  Mail,
  Twitter,
  Youtube,
  Code,
  Users,
  Book,
  FileText,
};

export default function Footer() {
  const [data, setData] = useState < any > (null);
  
  useEffect(() => {
    fetch("/config/footer.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Failed to load footer.json", err));
  }, []);
  
  if (!data) return null;
  
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo + description + socials */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center space-x-2 mb-4"
            >
              <img
                src={arctyllLogo}
                alt="Veyzen Logo"
                className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold tracking-tight gradient-text">
                Veyzen Client
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              A modern, high-performance Forge-based client for 1.8.9 — designed for the next generation of competitive Minecraft players.
            </p>
            <div className="flex items-center space-x-4">
              {data.socials.map(({ href, label, icon }: any) => {
                const Icon = iconMap[icon as keyof typeof iconMap];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-muted-foreground hover:text-primary transition duration-200 hover:scale-110"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {data.sections.map(({ title, icon, links }: any) => {
            const Icon = iconMap[icon as keyof typeof iconMap];
            return (
              <div key={title}>
                <h3 className="text-sm font-semibold mb-4 flex items-center">
                  <Icon className="w-4 h-4 mr-2 text-muted-foreground" />
                  {title}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {links.map(({ label, href, external }: any) =>
                    external ? (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:gradient-text transition-colors"
                        >
                          {label}
                        </a>
                      </li>
                    ) : (
                      <li key={label}>
                        <Link href={href} className="hover:gradient-text">
                          {label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; 2025{" "}
            <span className="font-bold gradient-text">Arctyll</span>. All rights
            reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by the Arctyll team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}