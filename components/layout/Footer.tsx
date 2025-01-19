export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-sm text-foreground/60 text-center sm:text-left">
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
          ></a>
        </div>
      </div>
    </footer>
  );
}
