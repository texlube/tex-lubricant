import Link from 'next/link';
import Image from 'next/image';
import OperationalMilestones from "@/components/OperationalMilestones"; // Renamed Component for clarity
import SolutionsCarousel from '@/components/SolutionsCarousel';
import BusinessGrowth from "@/components/BusinessGrowth";
import PartnerNetwork from "@/components/PartnerNetwork";
import LatestMedia from "@/components/LatestMedia";
import GlobalReach from "@/components/GlobalReach";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-white">
     {/* HERO SECTION */}
      <section className="relative bg-[#002e5b] pt-[140px] pb-56 px-6 overflow-hidden text-white z-10">
        
        {/* TWO-COLUMN GRID CONTAINER */}
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-16 items-center z-10 relative">
          
          {/* LEFT COLUMN: Text Description & Action Buttons */}
          <div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              THE WINNING FORMULA <br /> 
              <span className="text">FOR YOUR VEHICLE</span>
            </h1>

            <div className="flex items-start gap-4 mb-12 max-w-xl">
              <div className="border-l-[6px] border-[#E31E24] pl-5 mb-12 max-w-xl">
                <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-blue-100">
                  DESIGNED TO RAISE ENGINE PERFORMANCE.
                </h3>
                <p className="text-sm leading-relaxed font-medium text-blue-100/80 italic">
                  Precision development vital to improving the life force of engines. We 
                  engineer success through technical excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-center justify-start">
              <Link 
                href="/products?category=all-products"
                className="bg-[#E31E24] px-10 py-4 font-black uppercase text-[10px] tracking-widest text-white hover:bg-white hover:text-[#0D243F] transition-all duration-300 shadow-lg text-center"
              >
                EXPLORE SOLUTIONS
              </Link>

              <Link 
                href="/technology" 
                className="text-white text-[10px] font-black uppercase tracking-widest border-b border-white/30 hover:border-[#E31E24] hover:text-[#E31E24] transition-all py-1"
              >
                OUR TECHNOLOGY
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Static Image Placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-[#002e5b]/40 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <Image 
                src="/hero.png" 
                alt="High-impact engine lubricant product shot Placeholder" 
                fill
                className="object-cover object-center opacity-80 mix-blend-overlay"
                priority
              />
          </div>

        </div>
      </section>

      {/* NEW SECTION WRAPPER FOR OVERLAP */}
      <div className="relative z-20 -mt-56 px-6">
  <OperationalMilestones />
</div>

      {/* REMAINDER OF PAGE */}
      <SolutionsCarousel />
      <BusinessGrowth />
      <PartnerNetwork />
      <LatestMedia />
      <GlobalReach />
      <NewsSection />
      <ContactSection />
    </main>
  );
}