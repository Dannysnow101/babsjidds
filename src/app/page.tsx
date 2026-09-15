import Image from 'next/image';
import Link from 'next/link';
import { Plane, Ship } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130vw] w-[130vw] max-h-[1000px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14]"
      >
        <Image src="/hero-emblem.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mb-14 flex flex-col items-center text-center">
        <p className="font-display text-3xl text-porcelain sm:text-4xl">BABSJIDDS</p>
        <p className="mt-6 max-w-sm text-sm text-slate">
          One company, two service lines. Choose the one you&apos;re here for.
        </p>
      </div>

      <div className="relative z-10 grid w-full max-w-4xl grid-cols-1 divide-y divide-ink-line border border-ink-line bg-ink sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <Link
          href="/travel"
          className="group flex flex-col items-center gap-4 px-8 py-16 text-center transition-colors duration-300 hover:bg-ink-deep"
        >
          <Plane className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.25} />
          <span className="font-display text-2xl text-porcelain">Travelling Service</span>
          <span className="max-w-xs text-sm text-slate">
            Visa assistance for any country, plus hotel booking support.
          </span>
          <span className="mt-2 border-b border-transparent pb-0.5 text-sm text-gold transition-colors group-hover:border-gold">
            Enter
          </span>
        </Link>

        <Link
          href="/chandelling"
          className="group flex flex-col items-center gap-4 px-8 py-16 text-center transition-colors duration-300 hover:bg-ink-deep"
        >
          <Ship className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.25} />
          <span className="font-display text-2xl text-porcelain">Chandelling Service</span>
          <span className="max-w-xs text-sm text-slate">
            Deck and engine stores, safety equipment, and spares for vessels in port.
          </span>
          <span className="mt-2 border-b border-transparent pb-0.5 text-sm text-gold transition-colors group-hover:border-gold">
            Enter
          </span>
        </Link>
      </div>

      <p className="relative z-10 mt-14 text-xs text-slate">Lagos, Nigeria</p>
    </main>
  );
}
