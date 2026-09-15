import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export default function TravelFooter() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-10">
        <div>
          <span className="font-display text-lg text-porcelain">BABSJIDDS</span>
          <p className="mt-3 max-w-xs text-sm text-slate">
            Visa and travel assistance from a registered Nigerian company, {CONTACT.rcNumber}.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm text-porcelain">Travelling service</p>
          <ul className="space-y-2 text-sm text-slate">
            <li><Link href="/travel/visa-services" className="hover:text-gold">Visa services</Link></li>
            <li><Link href="/travel/apply" className="hover:text-gold">Start an application</Link></li>
            <li><Link href="/travel/hotels" className="hover:text-gold">Hotels</Link></li>
            <li><Link href="/travel/about" className="hover:text-gold">About us</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm text-porcelain">Get in touch</p>
          <ul className="space-y-3 text-sm text-slate">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
              <a href={CONTACT.phoneHref} className="hover:text-gold">{CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
              <a href={CONTACT.emailHref} className="hover:text-gold">{CONTACT.emailDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line px-6 py-6 text-center text-xs text-slate lg:px-10">
        <p>&copy; {new Date().getFullYear()} {CONTACT.companyName}. {CONTACT.rcNumber}.</p>
      </div>
    </footer>
  );
}
