import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/contact';

export default function HotelsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center lg:px-10">
      <p className="text-sm text-gold">Hotels</p>
      <h1 className="mt-4 font-display text-3xl text-porcelain sm:text-4xl">
        We also help you book hotels.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-sm text-slate">
        Wherever your visa takes you, mention it when you reach out and we&apos;ll help sort
        out where you&apos;re staying too.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Button href={CONTACT.phoneHref}>Call us</Button>
        <Button href={CONTACT.whatsappHref} variant="secondary" external>
          WhatsApp us
        </Button>
      </div>
    </div>
  );
}
