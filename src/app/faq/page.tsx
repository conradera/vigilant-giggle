import { faqs } from "@/data/faqs";
import FaqItem from "@/components/FaqItem";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQ() {
  return (
    <>
      <section className="bg-deep-forest pt-32 pb-20 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-from),transparent)] from-leaf-green"></div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <span className="inline-block bg-flame-gold/90 text-deep-forest px-4 py-1 rounded-sm font-label-md mb-6 uppercase tracking-widest">Support</span>
          <h1 className="font-display-lg text-display-lg text-white mb-6 leading-[1.1]">Frequently Asked<br />Questions</h1>
          <p className="font-body-lg text-surface-variant/80 max-w-xl">Find answers to common questions about our products, warranties, application, and more.</p>
        </div>
      </section>

      <ScrollReveal>
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-gutter">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <section className="py-section-padding bg-deep-forest">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-headline-lg text-white mb-6">Still Have Questions?</h2>
          <p className="font-body-lg text-surface-variant/70 max-w-xl mx-auto mb-10">Our technical support team is ready to help with any inquiry.</p>
          <button className="bg-flame-gold text-deep-forest px-10 py-4 rounded font-label-lg hover:brightness-110 transition-all cursor-pointer">Contact Support</button>
        </div>
      </section>
    </>
  );
}
