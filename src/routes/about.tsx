import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { HeartHandshake, ShieldCheck, Compass, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Align Care" },
      { name: "description", content: "Align Care is a clinical care navigation service helping people find the right mental health and substance use treatment based on their needs." },
      { property: "og:title", content: "About — Align Care" },
      { property: "og:description", content: "Compassionate, clinically-driven care matching for mental health and substance use." },
    ],
  }),
  component: About,
});

const values = [
  { icon: HeartHandshake, title: "Compassion first", desc: "Every conversation begins with empathy. We meet you where you are." },
  { icon: Compass, title: "Clinically guided", desc: "Recommendations are grounded in clinical assessment, not advertising." },
  { icon: ShieldCheck, title: "Private & secure", desc: "Your information is protected. HIPAA-compliant from intake to referral." },
  { icon: Users, title: "Network of trust", desc: "We partner with vetted, licensed providers and accredited programs." },
];

function About() {
  return (
    <SiteLayout>
      {/* Hero — two columns */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Healing should never feel like a maze.</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Align Care was built on a simple belief: people in pain shouldn't have to navigate a fragmented system alone. We bridge the gap between asking for help and finding the right care.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-10">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div><div className="text-3xl font-semibold text-primary">10k+</div><div className="mt-1 text-xs text-muted-foreground">People matched</div></div>
                <div><div className="text-3xl font-semibold text-primary">48hr</div><div className="mt-1 text-xs text-muted-foreground">Average match time</div></div>
                <div><div className="text-3xl font-semibold text-primary">300+</div><div className="mt-1 text-xs text-muted-foreground">Vetted providers</div></div>
                <div><div className="text-3xl font-semibold text-primary">100%</div><div className="mt-1 text-xs text-muted-foreground">Confidential</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — two columns */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We help individuals and families facing mental health and substance use challenges connect to care that fits their clinical needs, insurance, location, and life. No cold lists. No guessing. Just guidance from people who care.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team includes licensed clinicians, care navigators, and people in recovery — because lived experience matters.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10 shadow-[var(--shadow-soft)]">
            <p className="text-lg italic leading-relaxed text-foreground">
              "We believe care should feel human — not transactional. Every person who reaches out deserves to be heard, understood, and guided to the right next step."
            </p>
            <div className="mt-6 text-sm font-medium text-muted-foreground">— The Align Care team</div>
          </div>
        </div>
      </section>

      {/* Values — two-column grid */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">What we stand for</h2>
              <p className="mt-4 text-muted-foreground">The values that guide every conversation, recommendation, and referral we make.</p>
              <Button asChild size="lg" className="mt-8">
                <Link to="/contact">Talk with our team</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
                    <v.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
