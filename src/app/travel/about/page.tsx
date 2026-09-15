import Link from 'next/link';
import { CONTACT } from '@/lib/contact';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 lg:px-10">
      <p className="text-sm text-gold">About us</p>
      <h1 className="mt-4 font-display text-3xl text-porcelain sm:text-4xl">
        A Nigerian company, built on getting the details right.
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate">
        <p>
          {CONTACT.companyName} is a registered Nigerian company, {CONTACT.rcNumber}. Travelling
          is one of two service lines we operate — the other is our ship chandelling division,
          supplying vessels calling at Nigerian ports.
        </p>
        <p>
          On the travelling side, we help people apply for tourist, student, work, business,
          and transit visas to any destination. We don&apos;t work off a script — you talk to a
          real person who walks you through what your specific trip needs.
        </p>
        <p>
          If you&apos;re not sure where to start, fill in our{' '}
          <Link href="/travel/apply" className="text-gold hover:text-gold-bright">
            application form
          </Link>{' '}
          or just call us directly, and we&apos;ll take it from there.
        </p>
      </div>

      <div className="mt-10 border-t border-ink-line pt-6">
        <p className="text-sm text-slate">
          Curious about our other service line?{' '}
          <Link href="/chandelling" className="text-gold hover:text-gold-bright">
            Visit BABSJIDDS Chandelling
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
