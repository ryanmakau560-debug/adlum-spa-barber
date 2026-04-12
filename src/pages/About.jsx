const About = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-purple-500 mb-4">
          The Foundation
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
          ADLUM<span className="text-purple-500">.</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column: The Brand Story */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-white uppercase tracking-widest">Our Philosophy</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Adlum Spa & Barber was established in Nairobi with a singular mission: to provide a 
            sanctuary where time slows down and precision takes center stage. We believe that 
            grooming is the ultimate form of self-respect.
          </p>
          <p className="text-gray-400 leading-relaxed">
            By merging the clinical excellence of modern spa therapy with the heritage of 
            master barbering, we create an experience that is as restorative as it is 
            transformative. Every detail, from our glassmorphism interior to our bespoke 
            oils, is curated for the modern gentleman.
          </p>
        </div>

        {/* Right Column: The Founder (Text-Only Executive Look) */}
        <div className="glass p-10 border-t-2 border-purple-500 bg-gradient-to-b from-white/[0.03] to-transparent">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-8">
            Leadership
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-3xl font-bold text-white tracking-tight">Ryan Makau</h4>
              <p className="text-purple-500 font-mono text-sm uppercase tracking-widest mt-1">
                Founder & Chief Executive Officer
              </p>
            </div>
            
            <div className="h-[1px] w-12 bg-purple-500"></div>
            
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "At Adlum, we don't just cut hair or offer massages; we engineer confidence. 
              Our goal was to build a space in Kenya that rivals the best grooming houses 
              in London, Paris, and New York."
            </p>
            
            <div className="pt-6">
              <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-[10px] text-gray-500 uppercase font-bold">
                Executive Desk • Adlum HQ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote Decoration */}
      <div className="mt-32 text-center opacity-20">
        <p className="text-5xl md:text-7xl font-black text-white tracking-[0.2em] uppercase select-none">
          Excellence
        </p>
      </div>
    </div>
  );
};

export default About;