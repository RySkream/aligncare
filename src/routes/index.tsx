import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Brain, HeartHandshake, ShieldCheck, Sparkles, ClipboardList, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Align Care — Find the right mental health & recovery care" },
      { name: "description", content: "We match you with mental health and substance use treatment based on your clinical needs. Compassionate, confidential, evidence-based." },
      { property: "og:title", content: "Align Care — Find the right mental health & recovery care" },
      { property: "og:description", content: "Personalized care matching for mental health and substance use, based on clinical needs." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-soft)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-primary shadow-[var(--shadow-soft)]">
              <Sparkles className="h-3.5 w-3.5" /> Confidential clinical matching
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
              Find the right care for your <span className="text-primary">mind</span> and <span className="text-primary">recovery</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Align Care guides people facing mental health and substance use challenges to providers and programs matched to their clinical needs — not guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get matched today <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> HIPAA-compliant</div>
              <div className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-primary" /> Free & confidential</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Person walking a path through peaceful sage hills toward a sunrise"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">A clearer path to the right care</h2>
          <p className="mt-4 text-muted-foreground">Three gentle steps. No judgment. No commitment.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: ClipboardList, title: "Share your story", desc: "A short, private intake helps us understand symptoms, history, and goals." },
            { icon: Brain, title: "Clinical match", desc: "Our team aligns your needs with the right level of care and specialty providers." },
            { icon: Users, title: "Connect to care", desc: "We warm-hand-off to vetted clinicians and programs that accept your insurance." },
          ].map((s, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] shadow-[var(--shadow-soft)]">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-6 text-xs font-semibold text-primary">STEP 0{i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Care types */}
      <section className="bg-[image:var(--gradient-warm)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Care matched to clinical need</h2>
              <p className="mt-4 text-muted-foreground">From outpatient therapy to medically supervised detox — we match you to the appropriate level of care.</p>
            </div>
            <Link to="/services" className="text-sm font-medium text-primary hover:underline">View all services →</Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Outpatient Therapy", desc: "Individual, group, and family therapy with licensed clinicians." },
              { title: "Intensive Outpatient", desc: "Structured programs (IOP/PHP) for stepped-up support." },
              { title: "Medication Management", desc: "Psychiatric evaluation and ongoing medication care." },
              { title: "Substance Use & Detox", desc: "Medically supervised detox and residential recovery." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)]">
                <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <figure className="rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-soft)]">
          <blockquote className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            “I didn't know where to start. Align Care listened, understood what I was going through, and connected me with a therapist who actually fit. It changed everything.”
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">— Jordan M., matched in 2 days</figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] px-8 py-16 text-center shadow-[var(--shadow-elegant)] md:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">You don't have to figure this out alone.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">Reach out today for a free, confidential conversation. We'll help you find the next right step.</p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="soft" size="xl">
              <Link to="/contact">Start your match <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
