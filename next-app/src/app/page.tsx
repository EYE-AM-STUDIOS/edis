import Link from "next/link";

const aerialServices = [
  { title: "Orthomosaic Mapping", desc: "High-resolution aerial maps for site planning and analysis" },
  { title: "Aerial Inspections", desc: "Comprehensive drone-based infrastructure assessments" },
  { title: "3D / RTK Mapping", desc: "Precision surveying with real-time kinematic accuracy" },
];

const groundServices = [
  { title: "HDR / HD Imaging", desc: "High-quality imaging for sites, assets, equipment, and more" },
  { title: "Technical/Safety Documentation", desc: "Detailed visual documentation for safety and technical processes" },
  { title: "Industrial Portraits", desc: "Professional photography of skilled craftsmen and teams" },
  { title: "360 Imaging, 3D Point Cloud Modeling", desc: "Immersive virtual tours and precise 3D spatial documentation" },
];

const benefits = [
  { title: "Unified Commercial Identity",  desc: "One trusted partner for all your imaging needs" },
  { title: "Stronger B2B Presentation",    desc: "Integrated solutions for construction, engineering, and industrial firms" },
  { title: "Simpler Operations",           desc: "Single point of contact, one proposal system, streamlined workflow" },
  { title: "Contract-Ready Positioning",   desc: "Preferred by government, engineering, and insurance clients" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav role="navigation" className="fixed w-full z-50 transition-all duration-300 bg-slate-950/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold text-cyan-400">EYE AM STUDIOS</div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Enhanced Digital Imaging Solutions
        </h1>
        <p className="mt-6 text-slate-300 text-lg">One partner, complete visual documentation.</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="#client-access" className="text-cyan-300/90 hover:text-cyan-300 flex items-center gap-2">Client Access</a>
          <span className="text-slate-600">•</span>
          <a href="/admin-dashboard" className="text-cyan-300/90 hover:text-cyan-300 flex items-center gap-2">Admin</a>
          <span className="text-slate-600">•</span>
          <a href="/docs" className="text-cyan-300/90 hover:text-cyan-300 flex items-center gap-2">Docs</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Complete Imaging Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Aerial Imaging</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                {aerialServices.map((s, i) => (
                  <li key={i}>• {s.title} — {s.desc}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Ground Imaging</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                {groundServices.map((s, i) => (
                  <li key={i}>• {s.title} — {s.desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section id="system" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">EDIS Client Portal System</h2>
          <p className="text-slate-400 mb-10">Providing client deliverables within an interactive portal.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl">TrueView Portal Info</div>
            <div className="bg-slate-900 p-6 rounded-xl">Client Login</div>
            <div className="bg-slate-900 p-6 rounded-xl">Admin Console</div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose EDIS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-xl">
                <div className="font-bold mb-2">{b.title}</div>
                <p className="text-slate-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Access */}
      <section id="client-access" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Client Portal Access</h2>
          <p className="text-slate-400 mb-6">Clients receive credentials to access dashboards after booking and payment.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-6 rounded-xl">TrueView Portal</div>
            <div className="bg-slate-900 p-6 rounded-xl">Client Login</div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 px-6 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold mb-4">Trusted by Leading Industries</h2>
        <p className="text-slate-400 mb-8">Serving critical sectors with precision imaging.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-slate-800 p-6 rounded-xl">Construction & Engineering</div>
          <div className="bg-slate-800 p-6 rounded-xl">Government & Municipal</div>
          <div className="bg-slate-800 p-6 rounded-xl">Insurance & Industrial</div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-slate-400 mb-8">Portfolio showcasing our imaging capabilities.</p>
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-12">Portfolio content coming soon.</div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-cyan-50">Partner with EYE AM STUDIOS for comprehensive imaging solutions.</p>
          <a href="https://clients.eyeamstudios.com/public/68d5e38d48101600216ca3ad" target="_blank" rel="noopener noreferrer" className="bg-white text-cyan-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-all">Request Quote</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6 text-center text-slate-400 text-sm">
        © 2025 EYE AM STUDIOS - Enhanced Digital Imaging Solutions. All rights reserved.
      </footer>
    </div>
  );
}
