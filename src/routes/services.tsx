import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Pill, Users, Activity, Home, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Haven Care" },
      { name: "description", content: "Explore mental health and substance use services matched to your clinical needs: therapy, IOP/PHP, medication, detox, and residential care." },
      { property: "og:title", content: "Services — Haven Care" },
      { property: "og:description", content: "Therapy, IOP/PHP, medication management, detox, and residential recovery — matched to clinical need." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Brain, title: "Outpatient Therapy", desc: "Individual, couples, family, and group therapy with licensed clinicians specializing in anxiety, depression, trauma, and more." },
  { icon: Activity, title: "Intensive Outpatient (IOP)", desc: "Structured group-based programs several days a week — for those who need more support than weekly therapy." },
  { icon: Stethoscope, title: "Partial Hospitalization (PHP)", desc: "Day-treatment programs offering intensive clinical care while you live at home." },
  { icon: Pill, title: "Medication Management", desc: "Psychiatric evaluation, prescribing, and ongoing medication monitoring with board-certified providers." },
  { icon: Users, title: "Substance Use Treatment", desc: "Evidence-based recovery programs including MAT, group counseling, and relapse prevention." },
  { icon: Home, title: "Detox & Residential", desc: "Medically supervised detoxification and residential treatment for safe, supported recovery." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Care across the full continuum</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            We match you to the right level of care — from weekly therapy to residential treatment — based on a clinical assessment of what you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] shadow-[var(--shadow-soft)]">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[image:var(--gradient-warm)] p-10 text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Not sure what level of care fits?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">That's exactly what we're here for. A short conversation helps us recommend the right starting point.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get a clinical match</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
