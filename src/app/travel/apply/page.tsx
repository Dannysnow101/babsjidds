'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
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

export default function ApplyPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'visa-application', ...form }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
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

      {/* Hidden static duplicate so Netlify detects this form at build time */}
      <form name="visa-application" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="fullName" />
        <input type="tel" name="phone" />
        <input type="email" name="email" />
        <input type="text" name="visaType" />
        <input type="text" name="destination" />
        <input type="date" name="travelDate" />
        <textarea name="notes" />
        <input type="text" name="bot-field" />
      </form>

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
            <select
              required
              name="visaType"
              value={form.visaType}
              onChange={update('visaType')}
              suppressHydrationWarning
              style={{ colorScheme: 'dark' }}
              className={inputClass}
            >
              <option value="" disabled style={{ backgroundColor: '#0a0908', color: '#f3efe4' }}>Select a visa type</option>
              {VISA_TYPES.map((type) => (
                <option key={type} value={type} style={{ backgroundColor: '#0a0908', color: '#f3efe4' }}>{type}</option>
              ))}
            </select>
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

        {error && (
          <p className="text-sm text-red-400">
            Something went wrong sending this — please try again, or call/WhatsApp us directly.
          </p>
        )}

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