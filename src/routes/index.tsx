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

function TwoCol({ left, right, className = "" }: { left: React.ReactNode; right: React.ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <SiteLayout>
      {/* Hero — two columns */}
      <TwoCol
        className="bg-muted"
        left={
          <>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Confidential clinical matching
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.1]">
              Find the right care for your <span className="text-primary">mind</span> and <span className="text-primary">recovery</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Align Care guides people facing mental health and substance use challenges to providers and programs matched to their clinical needs — not guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get matched today <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> HIPAA-compliant</div>
              <div className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-primary" /> Free & confidential</div>
            </div>
          </>
        }
        right={
          <img
            src={heroImg}
            alt="Person walking a path through peaceful hills toward a sunrise"
            width={1536}
            height={1024}
            className="rounded-2xl border border-border shadow-[var(--shadow-elegant)]"
          />
        }
      />

      {/* How it works — two columns: intro + steps */}
      <TwoCol
        left={
          <>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">A clearer path to the right care</h2>
            <p className="mt-4 text-muted-foreground">Three gentle steps. No judgment. No commitment. Our care navigators meet you where you are and walk with you toward the right next step.</p>
            <Button asChild className="mt-8" size="lg">
              <Link to="/contact">Start your match <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </>
        }
        right={
          <div className="space-y-4">
            {[
              { icon: ClipboardList, title: "Share your story", desc: "A short, private intake helps us understand symptoms, history, and goals." },
              { icon: Brain, title: "Clinical match", desc: "Our team aligns your needs with the right level of care and specialty providers." },
              { icon: Users, title: "Connect to care", desc: "We warm-hand-off to vetted clinicians and programs that accept your insurance." },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary">STEP 0{i + 1}</div>
                  <h3 className="mt-1 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        }
      />

      {/* Care types — two columns */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Care matched to clinical need</h2>
              <p className="mt-4 text-muted-foreground">From outpatient therapy to medically supervised detox — we match you to the appropriate level of care.</p>
              <Link to="/services" className="mt-6 inline-block text-sm font-medium text-primary hover:underline">View all services →</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Outpatient Therapy", desc: "Individual, group, and family therapy with licensed clinicians." },
                { title: "Intensive Outpatient", desc: "Structured programs (IOP/PHP) for stepped-up support." },
                { title: "Medication Management", desc: "Psychiatric evaluation and ongoing medication care." },
                { title: "Substance Use & Detox", desc: "Medically supervised detox and residential recovery." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial + CTA — two columns */}
      <TwoCol
        left={
          <figure className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <blockquote className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
              "I didn't know where to start. Align Care listened, understood what I was going through, and connected me with a therapist who actually fit. It changed everything."
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">— Jordan M., matched in 2 days</figcaption>
          </figure>
        }
        right={
          <div className="rounded-2xl bg-primary p-10 text-primary-foreground">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">You don't have to figure this out alone.</h2>
            <p className="mt-4 text-primary-foreground/85">Reach out today for a free, confidential conversation. We'll help you find the next right step.</p>
            <Button asChild variant="secondary" size="lg" className="mt-6">
              <Link to="/contact">Start your match <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        }
      />
    </SiteLayout>
  );
}
