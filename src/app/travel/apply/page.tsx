'use client';

import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/contact';

const VISA_TYPES = ['Tourist', 'Student', 'Work', 'Business', 'Transit'];

const inputClass =
  'w-full border border-ink-line bg-transparent px-4 py-3 text-sm text-porcelain placeholder:text-slate focus:border-gold focus:outline-none';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-porcelain">{label}</span>
      {children}
    </label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-ink-line py-3 text-sm">
      <dt className="text-slate">{label}</dt>
      <dd className="text-right text-porcelain">{value || '—'}</dd>
    </div>
  );
}

// Native <select> popups largely ignore custom colors in most browsers
// (Chrome on Windows in particular), so this is a fully custom dropdown
// built from our own elements — no native popup involved, so it always
// matches the brand.
function VisaTypeSelect({ value, onChange }: { value: string; onChange: (type: string) => void }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${inputClass} flex items-center justify-between text-left`}
      >
        <span className={value ? 'text-porcelain' : 'text-slate'}>{value || 'Select a visa type'}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${open ? 'rotate-180' : ''}`} strokeWidth={1.5} />
      </button>

      {open && (
        <ul role="listbox" className="absolute z-20 mt-1 w-full border border-ink-line bg-ink shadow-lg shadow-black/40">
          {VISA_TYPES.map((type) => (
            <li key={type} role="option" aria-selected={value === type}>
              <button
                type="button"
                onClick={() => {
                  onChange(type);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-3 text-left text-sm transition-colors ${
                  value === type ? 'bg-ink-deep text-gold' : 'text-porcelain hover:bg-ink-deep hover:text-gold'
                }`}
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ApplyPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // Prefill the visa type from ?type= if the visitor arrived from the visa
  // services page. Read inside the lazy initializer (not an effect) so it
  // resolves on the very first client render, with no extra re-render.
  const [form, setForm] = useState(() => {
    const type = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('type') : null;
    return {
      fullName: '',
      phone: '',
      email: '',
      visaType: type && VISA_TYPES.includes(type) ? type : '',
      destination: '',
      travelDate: '',
      notes: '',
    };
  });

  const update =
    (field: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.visaType) {
      setErrorMessage('Please select a visa type.');
      return;
    }
    setSubmitting(true);
    setErrorMessage(null);
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'visa-application', ...form }),
      });
      setSubmitted(true);
    } catch {
      setErrorMessage('Something went wrong sending this — please try again, or call/WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 lg:px-10">
        <p className="text-sm text-gold">Application received</p>
        <h1 className="mt-4 font-display text-3xl text-porcelain">
          Thanks, {form.fullName.split(' ')[0] || 'there'}.
        </h1>
        <p className="mt-4 text-sm text-slate">
          Here&apos;s a copy of what you submitted. Save it or print it below, then reach out to us.
        </p>

        <dl className="mt-8 border-t border-ink-line">
          <SummaryRow label="Full name" value={form.fullName} />
          <SummaryRow label="Phone" value={form.phone} />
          <SummaryRow label="Email" value={form.email} />
          <SummaryRow label="Visa type" value={form.visaType} />
          <SummaryRow label="Destination" value={form.destination} />
          <SummaryRow label="Travel date" value={form.travelDate} />
          {form.notes && <SummaryRow label="Notes" value={form.notes} />}
        </dl>

        <div className="no-print mt-10 flex flex-wrap gap-4">
          <Button href={CONTACT.phoneHref}>Call us</Button>
          <Button href={CONTACT.whatsappHref} variant="secondary" external>
            WhatsApp us
          </Button>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="no-print mt-4 text-sm text-slate hover:text-gold"
        >
          Print or save as PDF
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 lg:px-10">
      <p className="text-sm text-gold">Visa application</p>
      <h1 className="mt-4 font-display text-3xl text-porcelain">Start your application</h1>
      <p className="mt-4 text-sm text-slate">
        Fill this in, grab a copy of your details, then call or WhatsApp us to continue.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <Field label="Full name">
          <input required name="fullName" type="text" value={form.fullName} onChange={update('fullName')} className={inputClass} />
        </Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Phone number">
            <input required name="phone" type="tel" value={form.phone} onChange={update('phone')} className={inputClass} />
          </Field>
          <Field label="Email">
            <input required name="email" type="email" value={form.email} onChange={update('email')} className={inputClass} />
          </Field>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Visa type">
            <VisaTypeSelect value={form.visaType} onChange={(type) => setForm((f) => ({ ...f, visaType: type }))} />
          </Field>
          <Field label="Destination country">
            <input required name="destination" type="text" value={form.destination} onChange={update('destination')} className={inputClass} />
          </Field>
        </div>
        <Field label="Intended travel date">
          <input name="travelDate" type="date" value={form.travelDate} onChange={update('travelDate')} className={inputClass} />
        </Field>
        <Field label="Anything else we should know?">
          <textarea name="notes" rows={4} value={form.notes} onChange={update('notes')} className={inputClass} />
        </Field>

        {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-sm bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-bright disabled:opacity-60 sm:w-auto"
        >
          {submitting ? 'Sending…' : 'Submit application'}
        </button>
      </form>
    </div>
  );
}