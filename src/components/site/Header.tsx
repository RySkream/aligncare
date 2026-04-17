import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export function Header() {
  const linkCls = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";
  const activeCls = { className: "text-sm font-medium text-primary" };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] shadow-[var(--shadow-soft)]">
            <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Align Care</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={activeCls}>Home</Link>
          <Link to="/services" className={linkCls} activeProps={activeCls}>Services</Link>
          <Link to="/about" className={linkCls} activeProps={activeCls}>About</Link>
          <Link to="/contact" className={linkCls} activeProps={activeCls}>Contact</Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
        >
          Get Matched
        </Link>
      </div>
    </header>
  );
}
