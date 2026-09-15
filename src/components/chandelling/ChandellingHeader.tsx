import Image from 'next/image';
import Link from 'next/link';

export default function ChandellingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/chandelling" className="flex items-center">
          <Image src="/logo.png" alt="BABSJIDDS" width={196} height={80} priority className="h-14 w-auto sm:h-16" />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#contact" className="text-porcelain hover:text-gold">Contact</a>
          <Link href="/travel" className="text-slate hover:text-gold">Travelling service</Link>
        </nav>
      </div>
    </header>
  );
}
