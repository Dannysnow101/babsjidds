import { Anchor, Cog, LifeBuoy } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/contact';

const SUPPLIES = [
  {
    name: 'Deck & engine stores',
    description: 'General stores and consumables to keep a vessel running while in port.',
    icon: Cog,
  },
  {
    name: 'Safety equipment',
    description: 'Safety gear and equipment to keep crew and vessel compliant.',
    icon: LifeBuoy,
  },
  {
    name: 'Spare parts',
    description: 'Spares sourced and supplied for vessels calling at Nigerian ports.',
    icon: Anchor,
  },
];

export default function ChandellingPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
        <p className="text-sm text-gold">BABSJIDDS Chandelling</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-porcelain sm:text-5xl">
          Ship chandelling for vessels calling at Nigerian ports.
        </h1>
        <p className="mt-6 max-w-lg text-sm text-slate">
          We supply deck and engine stores, safety equipment, and spare parts to vessels in
          port. Get in touch and we&apos;ll talk through what your vessel needs.
        </p>
        <div className="mt-8">
          <Button href="#contact">Get in touch</Button>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <h2 className="font-display text-2xl text-porcelain sm:text-3xl">What we supply</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {SUPPLIES.map((item) => (
              <div key={item.name}>
                <item.icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
                <p className="mt-4 text-porcelain">{item.name}</p>
                <p className="mt-2 text-sm text-slate">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate">
            More on our full range is coming soon — for now, reach out directly and we&apos;ll
            confirm what we can supply for your vessel.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-10">
          <h2 className="font-display text-2xl text-porcelain sm:text-3xl">Get in touch</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate">{CONTACT.address}</p>
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
