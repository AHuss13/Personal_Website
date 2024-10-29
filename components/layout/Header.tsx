"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { ChaosButton } from "../ui/ChaosButton";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          Adam Huss
        </Link>

        <div className="flex items-center gap-6">
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
          <ThemeToggle />
          <ChaosButton />
        </div>
      </nav>
    </header>
  );
}
