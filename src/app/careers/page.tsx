"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const positions = [
  {
    title: "Chemical Process Engineer",
    location: "Kampala",
    type: "Full-Time",
    dept: "Manufacturing",
    desc: "Lead process optimization and quality control in our paint manufacturing facility. 5+ years experience in chemical manufacturing required.",
  },
  {
    title: "Color Technologist",
    location: "Kampala",
    type: "Full-Time",
    dept: "R&D",
    desc: "Develop and maintain color formulations using spectrophotometer technology. Strong background in color science and pigment chemistry.",
  },
  {
    title: "Regional Sales Manager",
    location: "Kampala (with travel)",
    type: "Full-Time",
    dept: "Sales",
    desc: "Expand our distributor network across East Africa. Ideal candidate has 3+ years in B2B sales within the construction or coatings industry.",
  },
  {
    title: "Technical Support Specialist",
    location: "Kampala",
    type: "Full-Time",
    dept: "Customer Support",
    desc: "Provide technical guidance to customers and distributors on product selection, application, and troubleshooting.",
  },
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState("All");

  const depts = ["All", ...new Set(positions.map((p) => p.dept))];
  const filtered = selectedDept === "All" ? positions : positions.filter((p) => p.dept === selectedDept);

  return (
    <>
      <section className="bg-deep-forest pt-32 pb-20 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-from),transparent)] from-leaf-green"></div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="inline-block bg-flame-gold/90 text-deep-forest px-4 py-1 rounded-sm font-label-md mb-6 uppercase tracking-widest"
          >
            Join Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-display-lg text-display-lg text-white mb-6 leading-[1.1]"
          >
            Careers at<br />NIM Paints
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="font-body-lg text-surface-variant/80 max-w-xl"
          >
            Build your career with Uganda's most innovative paint manufacturer. We are always looking for talented individuals passionate about color, chemistry, and quality.
          </motion.p>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-wrap gap-3 mb-12">
            {depts.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-6 py-2.5 rounded-full font-label-md text-sm transition-all cursor-pointer ${
                  selectedDept === dept
                    ? "bg-leaf-green text-white shadow-md"
                    : "bg-white border border-outline/20 text-on-surface-variant hover:border-leaf-green"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.length > 0 ? (
              filtered.map((pos) => (
                <div key={pos.title} className="bg-white p-8 rounded-2xl border border-outline/5 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-leaf-green/10 text-leaf-green px-3 py-1 rounded-full">{pos.dept}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-flame-gold/10 text-flame-gold px-3 py-1 rounded-full">{pos.type}</span>
                    </div>
                    <h3 className="font-display-lg text-title-lg text-deep-forest">{pos.title}</h3>
                    <p className="text-on-surface-variant/60 text-sm mt-1 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {pos.location}
                    </p>
                    <p className="text-on-surface-variant mt-3 text-sm leading-relaxed">{pos.desc}</p>
                  </div>
                  <button className="shrink-0 bg-deep-forest text-white px-8 py-3 rounded-lg font-label-md hover:bg-leaf-green transition-all cursor-pointer whitespace-nowrap">Apply Now</button>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl">
                <span className="material-symbols-outlined text-5xl text-on-surface-variant/20 mb-4">work_off</span>
                <p className="text-on-surface-variant/60">No open positions in this department right now. Check back later or send us your CV.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ScrollReveal>
      <section className="py-section-padding bg-deep-forest">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-headline-lg text-white mb-6">Don't See the Right Role?</h2>
          <p className="font-body-lg text-surface-variant/70 max-w-xl mx-auto mb-10">We are always interested in hearing from talented individuals. Send us your CV and we'll keep you in mind for future opportunities.</p>
          <button className="bg-flame-gold text-deep-forest px-10 py-4 rounded font-label-lg hover:brightness-110 transition-all cursor-pointer">Send Your CV</button>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
