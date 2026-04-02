"use client";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';

export default function BusinessGrowth() {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true });
  return (
    <section className="relative py-32 px-6 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000')` }}>
      <div className="absolute inset-0 bg-[#E31E24]/90 z-0" />
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-8">
          <h2 className="text-5xl font-light text-white uppercase tracking-tight">Grow your business with <span className="font-black italic">TEXLUBE</span></h2>
          <button className="bg-[#0D243F] text-white px-8 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-[#E31E24] transition-all duration-500">Discover More</button>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] bg-white p-12 h-[420px] shadow-2xl flex flex-col justify-between hover:-translate-y-2 transition-transform">
                <div><div className="w-10 h-10 border border-gray-100 mb-8 flex items-center justify-center"><div className="w-4 h-4 bg-[#E31E24] rotate-45" /></div><h4 className="text-[#0D243F] text-2xl font-black mb-4 uppercase tracking-tighter">Technical Excellence</h4><p className="text-gray-500 text-sm italic">Providing complete product portfolios covering all segments globally.</p></div>
                <button className="text-[#E31E24] text-[10px] font-black uppercase border-b-2 border-[#E31E24] self-start py-1">Know More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}