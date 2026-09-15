'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/contact';

const inputClass =
  'w-full border border-ink-line bg-transparent px-4 py-3 text-sm text-porcelain placeholder:text-slate focus:border-gold focus:outline-none';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', country: '', message: '' });

  const update =
    (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-10">
      <div className="lg:col-span-5">
        <p className="text-sm text-gold">Contact</p>
        <h1 className="mt-4 font-display text-3xl text-porcelain sm:text-4xl">
          Talk to us directly.
        </h1>
        <p className="mt-4 text-sm text-slate">
          Fastest way to reach us is by phone or WhatsApp. Or send a message and we&apos;ll get back to you.
        </p>

        <ul className="mt-10 space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <a href={CONTACT.phoneHref} className="text-porcelain hover:text-gold">{CONTACT.phoneDisplay}</a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <a href={CONTACT.emailHref} className="text-porcelain hover:text-gold">{CONTACT.emailDisplay}</a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="text-porcelain">{CONTACT.address}</span>
          </li>
        </ul>

        <div className="mt-8">
          <Button href={CONTACT.whatsappHref} external>WhatsApp us</Button>
        </div>
      </div>

      <div className="mt-16 border-t border-ink-line pt-10 lg:col-span-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
        {submitted ? (
          <div>
            <p className="font-display text-2xl text-porcelain">Message sent.</p>
            <p className="mt-3 text-sm text-slate">
              Thanks — we&apos;ll be in touch. If it&apos;s urgent, call or WhatsApp us directly.
            </p>
          </div>
        ) : (
          <>
            <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="country" />
              <textarea name="message" />
              <input type="text" name="bot-field" />
            </form>

            <form onSubmit={handleSubmit} className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-sm text-porcelain">Full name</span>
                <input required name="name" type="text" value={form.name} onChange={update('name')} className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-porcelain">Email</span>
                <input required name="email" type="email" value={form.email} onChange={update('email')} className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-porcelain">Destination country (optional)</span>
                <input name="country" type="text" value={form.country} onChange={update('country')} className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-porcelain">Message</span>
                <textarea required name="message" rows={5} value={form.message} onChange={update('message')} className={inputClass} />
              </label>

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
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
