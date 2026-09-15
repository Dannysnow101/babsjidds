'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/travel' },
  { label: 'Visa services', href: '/travel/visa-services' },
  { label: 'Apply', href: '/travel/apply' },
  { label: 'Hotels', href: '/travel/hotels' },
  { label: 'About', href: '/travel/about' },
  { label: 'Contact', href: '/travel/contact' },
];

export default function TravelHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/travel' ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/travel" className="flex items-center">
          <Image src="/logo.png" alt="BABSJIDDS" width={196} height={80} priority className="h-14 w-auto sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href) ? 'text-gold' : 'text-porcelain hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/chandelling" className="text-sm text-slate transition-colors hover:text-gold">
            Chandelling division
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-porcelain lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink-line px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${isActive(link.href) ? 'text-gold' : 'text-porcelain'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/chandelling" onClick={() => setOpen(false)} className="text-sm text-slate">
                Chandelling division
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
