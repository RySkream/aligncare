import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Pill, Users, Activity, Home, Stethoscope, LifeBuoy, HandHeart } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mental Health, Addiction Treatment & Intervention Services | Align Care" },
      { name: "description", content: "Nationwide mental health and addiction treatment services: professional interventions, sober companions, therapy, IOP/PHP, medication management, detox, and residential recovery — matched to your clinical needs." },
      { name: "keywords", content: "professional intervention services, sober companion, sober coach, addiction treatment, mental health treatment, drug intervention, alcohol intervention, IOP, PHP, detox, residential treatment, recovery support, dual diagnosis, substance abuse help" },
      { property: "og:title", content: "Mental Health, Addiction Treatment & Intervention Services | Align Care" },
      { property: "og:description", content: "Expert interventions, sober companions, therapy, IOP/PHP, medication management, detox, and residential recovery — matched to clinical need." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: HandHeart, title: "Professional Intervention Services", desc: "Compassionate, family-led interventions guided by certified interventionists. We help families confront addiction and mental health crises and move loved ones into the right level of treatment — safely and quickly." },
  { icon: LifeBuoy, title: "Sober Companion & Recovery Coaching", desc: "24/7 sober companions and recovery coaches who provide one-on-one support during early recovery, travel, transitions, and high-risk moments — protecting sobriety wherever life takes you." },
  { icon: Brain, title: "Outpatient Therapy", desc: "Individual, couples, family, and group therapy with licensed clinicians specializing in anxiety, depression, trauma, PTSD, and co-occurring disorders." },
  { icon: Activity, title: "Intensive Outpatient (IOP)", desc: "Structured group-based programs several days a week — for those who need more support than weekly therapy but want to stay in their daily lives." },
  { icon: Stethoscope, title: "Partial Hospitalization (PHP)", desc: "Day-treatment programs offering intensive clinical care for mental health and substance use while you live at home or in supportive housing." },
  { icon: Pill, title: "Medication Management", desc: "Psychiatric evaluation, prescribing, and ongoing medication monitoring — including MAT (Medication-Assisted Treatment) — with board-certified providers." },
  { icon: Users, title: "Substance Use & Addiction Treatment", desc: "Evidence-based recovery programs for alcohol, opioids, stimulants, and polysubstance use — including group counseling, relapse prevention, and family support." },
  { icon: Home, title: "Detox & Residential Treatment", desc: "Medically supervised detoxification and 24/7 residential treatment for safe, structured, and supported recovery from drugs and alcohol." },
];

function Services() {
  return (
    <SiteLayout>
      {/* Header — two columns */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Care across the full continuum</h1>
              <p className="mt-5 text-lg text-muted-foreground">
                We match you to the right level of care — from weekly therapy to residential treatment — based on a clinical assessment of what you need.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h2 className="text-lg font-semibold text-foreground">Not sure what level of care fits?</h2>
              <p className="mt-2 text-sm text-muted-foreground">A short conversation helps us recommend the right starting point.</p>
              <Button asChild size="lg" className="mt-5">
                <Link to="/contact">Get a clinical match</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services — two-column grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
