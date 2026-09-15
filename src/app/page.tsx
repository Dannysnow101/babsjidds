import Image from 'next/image';
import Link from 'next/link';
import { Plane, Ship } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130vw] w-[130vw] max-h-[1000px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14]"
      >
        <Image src="/hero-emblem.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mb-6 flex flex-col items-center text-center sm:mb-14">
        <p className="font-display text-2xl text-porcelain sm:text-4xl">BABSJIDDS</p>
        <p className="mt-2 max-w-sm text-xs text-slate sm:mt-6 sm:text-sm">
          One company, two service lines. Choose the one you&apos;re here for.
        </p>
      </div>

      <div className="relative z-10 grid w-full max-w-4xl grid-cols-2 divide-x divide-ink-line border border-ink-line bg-ink">
        <Link
          href="/travel"
          className="group flex flex-col items-center gap-2 px-4 py-8 text-center transition-colors duration-300 hover:bg-ink-deep sm:gap-4 sm:px-8 sm:py-16"
        >
          <Plane className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10" strokeWidth={1.25} />
          <span className="font-display text-lg text-porcelain sm:text-2xl">Travelling Service</span>
          <span className="max-w-xs text-xs text-slate sm:text-sm">
            Visa assistance for any country, plus hotel booking support.
          </span>
          <span className="mt-1 border-b border-transparent pb-0.5 text-xs text-gold transition-colors group-hover:border-gold sm:mt-2 sm:text-sm">
            Enter
          </span>
        </Link>

        <Link
          href="/chandelling"
          className="group flex flex-col items-center gap-2 px-4 py-8 text-center transition-colors duration-300 hover:bg-ink-deep sm:gap-4 sm:px-8 sm:py-16"
        >
          <Ship className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10" strokeWidth={1.25} />
          <span className="font-display text-lg text-porcelain sm:text-2xl">Chandelling Service</span>
          <span className="max-w-xs text-xs text-slate sm:text-sm">
            Deck and engine stores, safety equipment, and spares for vessels in port.
          </span>
          <span className="mt-1 border-b border-transparent pb-0.5 text-xs text-gold transition-colors group-hover:border-gold sm:mt-2 sm:text-sm">
            Enter
          </span>
        </Link>
      </div>

      <p className="relative z-10 mt-6 text-xs text-slate sm:mt-14">Lagos, Nigeria</p>
    </main>
  );
}