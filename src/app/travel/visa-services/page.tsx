import Button from '@/components/ui/Button';

const SERVICES = [
  {
    name: 'Tourist visa',
    description:
      'For holidays, family visits, and short leisure trips. We help you understand what your destination requires and prepare a complete application.',
  },
  {
    name: 'Student visa',
    description:
      'For admission to a school, college, or university abroad. We guide you through the documents institutions and embassies typically ask for.',
  },
  {
    name: 'Work visa',
    description:
      'For a confirmed job or work assignment overseas. We help you put together a clean, complete application around your offer.',
  },
  {
    name: 'Business visa',
    description:
      'For conferences, meetings, and short business trips. We help you prepare the supporting documents your trip needs.',
  },
  {
    name: 'Transit visa',
    description:
      'For layovers where your route requires one. We help you check whether you need it and get it sorted before you travel.',
  },
];

export default function VisaServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
      <p className="text-sm text-gold">Visa services</p>
      <h1 className="mt-4 font-display text-3xl text-porcelain sm:text-4xl">
        Five visa types. Any destination.
      </h1>
      <p className="mt-4 max-w-xl text-sm text-slate">
        We don&apos;t limit ourselves to a shortlist of countries. Tell us where you&apos;re
        headed and what for, and we&apos;ll tell you exactly how we can help.
      </p>

      <div className="mt-12 divide-y divide-ink-line border-t border-ink-line">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="sm:max-w-xl">
              <p className="font-display text-xl text-porcelain">{service.name}</p>
              <p className="mt-2 text-sm text-slate">{service.description}</p>
            </div>
            <Button href={`/travel/apply?type=${encodeURIComponent(service.name)}`} variant="secondary" className="shrink-0">
              Apply for this
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
