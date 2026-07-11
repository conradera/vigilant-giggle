import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f3] pt-16 pb-10">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Newsletter card */}
        <div className="bg-deep-forest rounded-3xl p-8 md:p-12 lg:p-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Left: title + description */}
            <div className="max-w-md">
              <h3 className="font-display-lg text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Subscribe our newsletter
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Subscribe to receive technical guides, architectural color trends, and exclusive industrial offers from NIM Paints.
              </p>
            </div>

            {/* Right: email form */}
            <div>
              <p className="text-white/50 text-xs mb-3">Stay up to date</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-leaf-green outline-none w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-leaf-green text-deep-forest font-bold text-sm hover:bg-leaf-green/90 transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/30 text-xs mt-3">
                By subscribing you agree to our <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 pb-10">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Image
              src="/nim-logo-site-600x135.png"
              alt="NIM Paints"
              width={160}
              height={36}
              className="h-10 w-auto mb-4"
            />
            <p className="text-on-surface-variant/70 text-sm leading-relaxed">
              Excellence in every layer. Pioneering tropical coating solutions since 2016.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/products" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Products</Link></li>
                <li><Link href="/projects" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Gallery</Link></li>
                <li><Link href="/about" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Tools</h4>
              <ul className="space-y-3">
                <li><Link href="/color-visualizer" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Visualizer</Link></li>
                <li><Link href="/paint-calculator" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Calculator</Link></li>
                <li><Link href="/faq" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/sustainability" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Sustainability</Link></li>
                <li><Link href="/careers" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Careers</Link></li>
                <li><a href="mailto:sales@nimpaints.com" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Email Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Contact</h4>
              <ul className="space-y-3 text-on-surface-variant/60 text-sm">
                <li>+256 393 249 654</li>
                <li>+256 784 523 877</li>
                <li>Plot 3789 Kinawataka Rd, Kampala</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-deep-forest/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/40 text-xs">
            &copy; {new Date().getFullYear()} NIM Paints (U) Ltd. All Rights Reserved.
          </p>
          <p className="text-on-surface-variant/40 text-xs italic">
            Coloring Beyond Expectations
          </p>
        </div>
      </div>
    </footer>
  );
}
