import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
}

export default function Button({ href, children, variant = 'primary', external, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200';

  const styles =
    variant === 'primary'
      ? 'bg-gold text-ink hover:bg-gold-bright'
      : 'border border-gold-dim text-porcelain hover:border-gold hover:text-gold';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
