import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Align Care" },
      { name: "description", content: "Reach out for a free, confidential conversation. We'll help match you to the right mental health or substance use care." },
      { property: "og:title", content: "Contact — Align Care" },
      { property: "og:description", content: "Free, confidential care matching for mental health and substance use treatment." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Let's find your next step — together.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Share a little about what's going on. A care navigator will respond within one business day. Free and 100% confidential.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <Phone className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">Call us</h3>
              <p className="mt-1 text-sm text-muted-foreground">Mon–Fri, 8am–8pm</p>
              <a href="tel:18005551234" className="mt-2 block text-lg font-semibold text-primary">(800) 555-1234</a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">Email</h3>
              <a href="mailto:care@havencare.com" className="mt-2 block text-sm text-primary">care@havencare.com</a>
            </div>
            <div className="rounded-2xl bg-[image:var(--gradient-warm)] p-6">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">In crisis?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Call or text <span className="font-semibold text-primary">988</span> anytime for free, confidential support.</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-hero)]">
                    <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-foreground">Thank you for reaching out</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">A care navigator will be in touch within one business day. You're not alone in this.</p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name</Label>
                      <Input id="name" required placeholder="Alex Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="needs">What kind of support are you looking for?</Label>
                    <Textarea id="needs" required rows={5} placeholder="Share as much or as little as you'd like — symptoms, history, what's been hard, what you've tried." />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">Send securely</Button>
                  <p className="text-center text-xs text-muted-foreground">Your information is encrypted and HIPAA-compliant.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
