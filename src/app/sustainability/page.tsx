import ScrollReveal from "@/components/ScrollReveal";

const ecoStats = [
  { value: "90%", label: "Process Water Recycled", icon: "water_drop" },
  { value: "<5g/L", label: "VOC Content (Interior)", icon: "air" },
  { value: "100%", label: "Ugandan Owned", icon: "flag" },
  { value: "Solar", label: "Factory Powered By", icon: "solar_power" },
];

const commitments = [
  { title: "Low-VOC Formulations", desc: "All our interior paints meet strict VOC limits, ensuring safe indoor air quality for homes, schools, and hospitals.", icon: "eco" },
  { title: "Solar-Powered Manufacturing", desc: "Our Kampala facility runs on solar energy during peak production hours, reducing our carbon footprint by 35%.", icon: "solar_power" },
  { title: "Water Recycling System", desc: "We recycle 90% of process water through a closed-loop filtration system, minimizing water waste.", icon: "water_drop" },
  { title: "Sustainable Sourcing", desc: "We source raw materials from ISO-certified suppliers who meet our strict environmental and ethical standards.", icon: "globe" },
  { title: "Eco-Friendly Packaging", desc: "Our paint tins use 30% recycled metal and are fully recyclable. We're transitioning to biodegradable packaging.", icon: "package" },
  { title: "Community Impact", desc: "We partner with local communities on tree-planting initiatives and provide paint for public school refurbishments.", icon: "diversity_3" },
];

export default function Sustainability() {
  return (
    <>
      <section className="bg-deep-forest pt-32 pb-20 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-from),transparent)] from-leaf-green"></div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <span className="inline-block bg-flame-gold/90 text-deep-forest px-4 py-1 rounded-sm font-label-md mb-6 uppercase tracking-widest">Our Commitment</span>
          <h1 className="font-display-lg text-display-lg text-white mb-6 leading-[1.1]">Sustainability at<br />NIM Paints</h1>
          <p className="font-body-lg text-surface-variant/80 max-w-xl">We believe that beautiful spaces should not come at the cost of our planet. From clean manufacturing to eco-friendly products, sustainability is at the core of everything we do.</p>
        </div>
      </section>

      {/* Stats */}
      <ScrollReveal>
      <section className="py-section-padding bg-surface-container">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ecoStats.map((stat) => (
              <div key={stat.label} className="text-center bg-white p-8 rounded-2xl shadow-sm">
                <span className="material-symbols-outlined text-4xl text-leaf-green mb-4 block">{stat.icon}</span>
                <div className="font-display-lg text-headline-lg text-deep-forest mb-2">{stat.value}</div>
                <div className="font-label-md text-on-surface-variant/60 uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Commitments */}
      <ScrollReveal>
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display-lg text-headline-lg text-deep-forest mb-4">Our Environmental Commitments</h2>
            <p className="font-body-lg text-on-surface-variant">Every decision we make is guided by our responsibility to the environment and the communities we serve.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((c) => (
              <div key={c.title} className="p-8 bg-surface-container-lowest rounded-2xl border border-outline/5 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-3xl text-leaf-green mb-4 block">{c.icon}</span>
                <h3 className="font-title-lg text-deep-forest mb-3">{c.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <section className="py-section-padding bg-leaf-green">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-headline-lg text-white mb-8">Join Us in Building a Greener Future</h2>
          <p className="font-body-lg text-white/80 max-w-xl mx-auto mb-10">Choose NIM Paints for your next project and contribute to a more sustainable East Africa.</p>
          <button className="bg-deep-forest text-white px-10 py-4 rounded font-label-lg hover:brightness-110 transition-all cursor-pointer">Request a Sustainable Solution</button>
        </div>
      </section>
    </>
  );
}
