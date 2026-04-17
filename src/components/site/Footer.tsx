import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="Align Care Group logo" className="h-12 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Connecting people with compassionate, evidence-based mental health and substance use care — matched to your clinical needs.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Crisis Support</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              If you are in crisis, call or text <span className="font-semibold text-primary">988</span> for 24/7 support.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Align Care. Not a substitute for emergency medical care.
        </div>
      </div>
    </footer>
  );
}
