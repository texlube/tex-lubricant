"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Full category list from your product catalog
const solutions = [
  {
    title: "OUR SOLUTIONS FOR INDUSTRIAL",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    link: "/products"
  },
  {
    title: "OUR SOLUTIONS FOR PASSENGER CARS",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    link: "/products"
  },
  {
    title: "OUR SOLUTIONS FOR HEAVY-DUTY ON-ROAD",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    link: "/products"
  },
  {
    title: "OUR SOLUTIONS FOR HEAVY-DUTY OFF-ROAD",
    image: "https://images.unsplash.com/photo-1586191582151-f73770706263?auto=format&fit=crop&q=80&w=800",
    link: "/products"
  },
  {
    title: "OUR SOLUTIONS FOR AGRICULTURE",
    image: "https://images.unsplash.com/photo-1592939091400-36224490f0ca?auto=format&fit=crop&q=80&w=800",
    link: "/products"
  }
];

export default function SolutionsCarousel() {
  // Configured to show 3 slides on desktop and 1 on mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Header with Navigation Controls */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E31E24] mb-4">TEXLUBE APPLICATIONS</h2>
            <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-[#0D243F]">ENGINEERED SOLUTIONS</h3>
          </div>
          
          <div className="flex gap-2">
            <button onClick={scrollPrev} className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 flex items-center justify-center text-[#0D243F] hover:bg-[#E31E24] hover:text-white transition-all shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollNext} className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 flex items-center justify-center text-[#0D243F] hover:bg-[#E31E24] hover:text-white transition-all shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {solutions.map((item, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4"
              >
                <div className="bg-white group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D243F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="p-8 md:p-10 text-center flex flex-col items-center flex-grow">
                    <h4 className="font-black italic text-xl text-[#0D243F] mb-8 leading-tight uppercase tracking-tighter min-h-[3rem]">
                      {item.title}
                    </h4>
                    
                    <Link href={item.link} className="mt-auto flex items-center gap-3 text-[#2B99D6] text-[11px] font-black uppercase tracking-[0.2em] group/btn">
                      LEARN MORE
                      <span className="w-8 h-8 rounded-full bg-[#2B99D6] text-white flex items-center justify-center group-hover/btn:bg-[#0D243F] transition-colors shadow-lg">
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}