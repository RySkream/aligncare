import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";
  const activeCls = { className: "text-sm font-medium text-primary" };
  const mobileLinkCls = "block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors";
  const mobileActiveCls = { className: "block rounded-lg px-3 py-3 text-base font-medium text-primary bg-muted" };

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:h-40">
        <Link to="/" className="flex items-center gap-2" onClick={close}>
          <img src={logo} alt="Align Care Group logo" className="h-16 w-auto md:h-36" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={activeCls}>Home</Link>
          <Link to="/services" className={linkCls} activeProps={activeCls}>Services</Link>
          <Link to="/about" className={linkCls} activeProps={activeCls}>About</Link>
          <Link to="/contact" className={linkCls} activeProps={activeCls}>Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 font-sans"
          >
            Call Now
          </Link>
          <a
            href="tel:18889702304"
            className="inline-flex md:hidden h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)]"
            aria-label="Call Align Care"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-border/60 bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-1">
            <Link to="/" className={mobileLinkCls} activeOptions={{ exact: true }} activeProps={mobileActiveCls} onClick={close}>Home</Link>
            <Link to="/services" className={mobileLinkCls} activeProps={mobileActiveCls} onClick={close}>Services</Link>
            <Link to="/about" className={mobileLinkCls} activeProps={mobileActiveCls} onClick={close}>About</Link>
            <Link to="/contact" className={mobileLinkCls} activeProps={mobileActiveCls} onClick={close}>Contact</Link>
            <Link
              to="/contact"
              onClick={close}
              className="mt-2 inline-flex w-full h-11 items-center justify-center rounded-lg bg-primary px-5 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)]"
            >
              Get Free Care Match
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
