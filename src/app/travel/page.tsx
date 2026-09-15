import Link from 'next/link';
import { FileCheck2, PhoneCall, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/contact';

const STEPS = [
  {
    number: '1',
    title: 'Fill in your details',
    description: 'Tell us your visa type, destination, and travel date on our application form.',
    icon: Send,
  },
  {
    number: '2',
    title: 'Get your copy',
    description: 'Save or print a summary of what you submitted, for your own records.',
    icon: FileCheck2,
  },
  {
    number: '3',
    title: 'We take it from there',
    description: 'Call or WhatsApp us and we walk through the rest of the process together.',
    icon: PhoneCall,
  },
];

const VISA_TYPES = ['Tourist', 'Student', 'Work', 'Business', 'Transit'];

export default function TravelHomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-24">
        <div className="lg:col-span-7">
          <p className="text-sm text-gold">BABSJIDDS Travelling</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-porcelain sm:text-5xl lg:text-6xl">
            Visa applications, handled properly.
          </h1>
          <p className="mt-6 max-w-lg text-base text-slate">
            We assist with tourist, student, work, business, and transit visas to any
            destination. Tell us where you&apos;re going, and we&apos;ll guide you through
            what&apos;s needed and see it through with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/travel/apply">Start your application</Button>
            <Button href="/travel/visa-services" variant="secondary">View visa services</Button>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-line pt-10 lg:col-span-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="text-sm text-porcelain">Visa types we handle</p>
          <ul className="mt-4 space-y-3">
            {VISA_TYPES.map((type) => (
              <li key={type} className="flex items-center justify-between border-b border-ink-line pb-3 text-sm">
                <span className="text-slate">{type} visa</span>
                <span className="text-slate">Any destination</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="font-display text-2xl text-porcelain sm:text-3xl">How it works</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.number}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl text-gold">{step.number}</span>
                  <step.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-porcelain">{step.title}</p>
                <p className="mt-2 text-sm text-slate">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="font-display text-xl text-porcelain">Travelling somewhere? We also help with hotels.</p>
            <p className="mt-2 max-w-md text-sm text-slate">
              Ask us when you reach out about your visa, and we&apos;ll help sort out where you&apos;re staying too.
            </p>
          </div>
          <Link href="/travel/hotels" className="text-sm text-gold hover:text-gold-bright">
            Learn more
          </Link>
        </div>
      </section>

      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-10">
          <h2 className="font-display text-2xl text-porcelain sm:text-3xl">Ready when you are.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate">
            Call or WhatsApp us directly, or fill in the application form first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={CONTACT.phoneHref}>Call us</Button>
            <Button href={CONTACT.whatsappHref} variant="secondary" external>
              WhatsApp us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
