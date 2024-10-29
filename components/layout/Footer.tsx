import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Adam Huss. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:Adam.david.huss@gmail.com"
            className="text-sm hover:text-primary transition-colors"
          >
            Adam.david.huss@gmail.com
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
