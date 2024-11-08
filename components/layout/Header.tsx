"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { ChaosButton } from "../ui/ChaosButton";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          Adam Huss
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks isActive={isActive} />
          <ThemeToggle />
          <ChaosButton />
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <NavLinks isActive={isActive} />
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <ChaosButton />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Extract NavLinks to a separate component for reuse
function NavLinks({ isActive }: { isActive: (path: string) => boolean }) {
  return (
    <>
      <Link
        href="/"
        className={`hover:text-primary transition-colors ${
          isActive("/") ? "text-primary font-medium" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={`hover:text-primary transition-colors ${
          isActive("/projects") ? "text-primary font-medium" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        href="/about"
        className={`hover:text-primary transition-colors ${
          isActive("/about") ? "text-primary font-medium" : ""
        }`}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`hover:text-primary transition-colors ${
          isActive("/contact") ? "text-primary font-medium" : ""
        }`}
      >
        Contact
      </Link>
    </>
  );
}
