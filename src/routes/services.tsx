import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Pill, Users, Activity, Home, Stethoscope, LifeBuoy, HandHeart } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Addiction Treatment, Intervention & Mental Health Services | Align Care" },
      { name: "description", content: "Nationwide addiction treatment, professional interventions, sober companions, therapy, IOP/PHP, medication management, detox & residential recovery. Evidence-based, insurance-friendly care matched to your clinical needs. Call 24/7." },
      { name: "keywords", content: "addiction treatment, drug rehab, alcohol rehab, professional intervention services, certified interventionist, sober companion, sober coach, recovery coaching, mental health treatment, dual diagnosis treatment, IOP, PHP, medical detox, residential treatment, MAT, medication assisted treatment, substance abuse help, anxiety treatment, depression treatment, trauma therapy, PTSD treatment" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Align Care" },
      { property: "og:title", content: "Addiction Treatment, Intervention & Mental Health Services | Align Care" },
      { property: "og:description", content: "Expert interventions, sober companions, therapy, IOP/PHP, medication management, detox & residential recovery — matched to clinical need." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Align Care" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Addiction Treatment, Intervention & Mental Health Services | Align Care" },
      { name: "twitter:description", content: "Expert interventions, sober companions, therapy, IOP/PHP, detox & residential recovery — matched to clinical need." },
    ],
    links: [
      { rel: "canonical", href: "https://embrace-your-care.lovable.app/services" },
    ],
  }),
  component: Services,
});

const services = [
  { icon: HandHeart, slug: "intervention", title: "Professional Intervention Services", desc: "Compassionate, family-led interventions guided by certified interventionists. We help families confront addiction and mental health crises and move loved ones into the right level of treatment — safely and quickly." },
  { icon: LifeBuoy, slug: "sober-companion", title: "Sober Companion & Recovery Coaching", desc: "24/7 sober companions and recovery coaches who provide one-on-one support during early recovery, travel, transitions, and high-risk moments — protecting sobriety wherever life takes you." },
  { icon: Brain, slug: "therapy", title: "Outpatient Therapy", desc: "Individual, couples, family, and group therapy with licensed clinicians specializing in anxiety, depression, trauma, PTSD, and co-occurring disorders." },
  { icon: Activity, slug: "iop", title: "Intensive Outpatient (IOP)", desc: "Structured group-based programs several days a week — for those who need more support than weekly therapy but want to stay in their daily lives." },
  { icon: Stethoscope, slug: "php", title: "Partial Hospitalization (PHP)", desc: "Day-treatment programs offering intensive clinical care for mental health and substance use while you live at home or in supportive housing." },
  { icon: Pill, slug: "medication", title: "Medication Management & MAT", desc: "Psychiatric evaluation, prescribing, and ongoing medication monitoring — including Medication-Assisted Treatment (MAT) for opioid and alcohol use disorders — with board-certified providers." },
  { icon: Users, slug: "substance-use", title: "Substance Use & Addiction Treatment", desc: "Evidence-based recovery programs for alcohol, opioids, stimulants, and polysubstance use — including group counseling, relapse prevention, and family support." },
  { icon: Home, slug: "detox-residential", title: "Detox & Residential Treatment", desc: "Medically supervised detoxification and 24/7 residential treatment for safe, structured, and supported recovery from drugs and alcohol." },
];

const faqs = [
  {
    q: "What is a professional intervention and when is it needed?",
    a: "A professional intervention is a structured, family-led conversation guided by a certified interventionist to help a loved one accept treatment for addiction or mental health issues. It's appropriate when a person refuses help despite escalating consequences, or when families feel stuck and need expert support to take action safely.",
  },
  {
    q: "What does a sober companion do?",
    a: "A sober companion (also called a sober coach) provides one-on-one, around-the-clock support during early recovery, after treatment, during travel, or through high-risk life events. They help prevent relapse, build healthy routines, and bridge the gap between residential care and independent sober living.",
  },
  {
    q: "How do I know which level of care I need?",
    a: "We provide a free clinical assessment to match you to the right level of care — outpatient therapy, IOP, PHP, residential, or detox — based on medical, psychiatric, and substance use history. Most people don't need the most intensive option; they need the right one.",
  },
  {
    q: "Do you accept insurance for addiction and mental health treatment?",
    a: "Yes. We work with most major insurance carriers and verify benefits before you commit to anything. Our team handles pre-authorization and explains your coverage clearly so there are no surprises.",
  },
  {
    q: "Is treatment confidential and HIPAA-compliant?",
    a: "Absolutely. All assessments, communications, and treatment records are protected under HIPAA and 42 CFR Part 2 — the federal regulations that provide additional confidentiality for substance use treatment records.",
  },
  {
    q: "Can you help with dual diagnosis (mental health + substance use)?",
    a: "Yes. Many of the people we serve have co-occurring disorders such as depression and alcohol use, anxiety and stimulant use, or PTSD and opioid use. We match you to programs that treat both conditions together — the gold standard for lasting recovery.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://embrace-your-care.lovable.app/#org",
      name: "Align Care",
      url: "https://embrace-your-care.lovable.app",
      medicalSpecialty: ["Psychiatry", "AddictionMedicine", "Psychology"],
      areaServed: "United States",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    ...services.map((s) => ({
      "@type": "MedicalTherapy",
      name: s.title,
      description: s.desc,
      provider: { "@id": "https://embrace-your-care.lovable.app/#org" },
    })),
  ],
};

function Services() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — two columns */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Addiction Treatment, Intervention & Mental Health Services
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                Nationwide, evidence-based care across the full continuum — from professional interventions and sober companions to therapy, IOP, PHP, medical detox, and residential treatment. Matched to your clinical needs, not a sales script.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h2 className="text-lg font-semibold text-foreground">Not sure what level of care fits?</h2>
              <p className="mt-2 text-sm text-muted-foreground">A short, confidential conversation helps us recommend the right starting point. Insurance verified at no cost.</p>
              <Button asChild size="lg" className="mt-5">
                <Link to="/contact">Get a free clinical match</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO intro */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">A complete continuum of recovery and mental health care</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Align Care helps individuals and families navigate addiction treatment, mental health treatment, and dual diagnosis recovery with clarity and dignity. Whether you need a certified interventionist, a 24/7 sober companion, medical detox, or long-term residential rehab, our clinical team matches you to the level of care that actually fits.
            </p>
            <p>
              Every program we recommend is evidence-based, insurance-friendly, and HIPAA-compliant — including treatment for alcohol use disorder, opioid addiction, stimulant use, anxiety, depression, PTSD, and trauma. One call connects you to the right starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Services — two-column grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ — two columns */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">Frequently asked questions</h2>
              <p className="mt-4 text-muted-foreground">
                Answers about interventions, sober companions, insurance, confidentiality, and choosing the right level of care.
              </p>
              <Button asChild variant="soft" size="lg" className="mt-6">
                <Link to="/contact">Talk to our clinical team</Link>
              </Button>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
