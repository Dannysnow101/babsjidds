import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export default function ChandellingFooter() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:px-10">
        <div>
          <span className="font-display text-lg text-porcelain">BABSJIDDS Chandelling</span>
          <p className="mt-3 max-w-xs text-sm text-slate">
            Ship chandelling for vessels calling at Nigerian ports. Part of {CONTACT.companyName}, {CONTACT.rcNumber}.
          </p>
        </div>
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
      <div className="border-t border-ink-line px-6 py-6 text-center text-xs text-slate lg:px-10">
        <p>&copy; {new Date().getFullYear()} {CONTACT.companyName}. {CONTACT.rcNumber}.</p>
      </div>
    </footer>
  );
}
