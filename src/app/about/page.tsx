"use client";

import React from 'react';
import Link from 'next/link';
import { Target, Globe, ShieldCheck, Zap, ChevronRight, MapPin } from 'lucide-react';

// FIXED: Custom Component now accepts the 'size' prop to satisfy TypeScript
const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-[105px]">
      
      {/* 1. Cinematic Hero Section */}
      <section className="bg-[#002e5b] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="http://googleusercontent.com/image_collection/image_retrieval/6007697315257420586_0" 
            alt="TEXLUBE Engineering Facility" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002e5b] via-[#002e5b]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white mb-6">
            ENGINEERING <span className="text-[#E31E24]">EXCELLENCE</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed font-medium text-blue-100/80 mb-10">
            Headquartered in the UAE, TEXLUBE is a premier manufacturer of high-performance lubricants, dedicated to pushing the boundaries of friction reduction, engine protection, and industrial efficiency.
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="py-20 px-6 bg-[#0b131e] text-white border-b border-white/10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Mission Block */}
          <div className="p-8 md:p-12 border border-white/10 bg-white/5 hover:border-[#E31E24] transition-colors duration-300">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E31E24] mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#E31E24]"></span> OUR MISSION
            </h2>
            <p className="text-xl leading-relaxed font-medium text-blue-100/90 italic">
              "To engineer and deliver uncompromising, high-performance lubricants that maximize equipment longevity, enhance operational efficiency, and redefine industry standards across the globe."
            </p>
          </div>

          {/* Vision Block */}
          <div className="p-8 md:p-12 border border-white/10 bg-white/5 hover:border-[#2B99D6] transition-colors duration-300">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2B99D6] mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#2B99D6]"></span> OUR VISION
            </h2>
            <p className="text-xl leading-relaxed font-medium text-blue-100/90 italic">
              "To be the world's most trusted vanguard of lubrication technology, driving sustainable industrial growth and powering the future of heavy-duty machinery from our strategic hub in the UAE."
            </p>
          </div>

        </div>
      </section>

      {/* 3. Our Heritage */}
      <section className="py-24 px-6">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E31E24] mb-4">
              OUR HERITAGE
            </h2>
            <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-[#0D243F] mb-8 leading-tight">
              FORMULATED FOR THE WORLD'S <br /> TOUGHEST ENVIRONMENTS
            </h3>

            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
              Born from a vision to create uncompromising lubrication solutions, TEXLUBE operates at the intersection of advanced chemistry and mechanical engineering. We understand that in industries like mining, agriculture, and commercial transport, fluid failure is not an option.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm">
              Our proprietary formulations are rigorously tested to withstand extreme temperatures, heavy loads, and relentless operational cycles, ensuring your machinery operates at peak performance, longer.
            </p>

            <Link href="/contact" className="inline-flex items-center gap-3 text-[#2B99D6] text-[11px] font-black uppercase tracking-[0.15em] hover:text-[#0D243F] transition-colors group">
              CONNECT WITH OUR EXPERTS
              <span className="w-6 h-6 rounded-full bg-[#2B99D6] text-white flex items-center justify-center group-hover:bg-[#0D243F] transition-colors">
                <ChevronRight size={14} strokeWidth={3} />
              </span>
            </Link>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="https://plus.unsplash.com/premium_photo-1677009541467-5a717c4e9dca?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0" 
              alt="Laboratory Oil Testing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#E31E24]"></div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="bg-[#F5F5F7] py-24 px-6 border-y border-gray-200">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2B99D6] mb-4">
              THE TEXLUBE STANDARD
            </h2>
            <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-[#0D243F]">
              OUR CORE PILLARS
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-[#E31E24]">
              <div className="w-12 h-12 bg-[#F5F5F7] flex items-center justify-center text-[#E31E24] mb-6">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-[#0D243F] mb-3 uppercase tracking-wide text-xs">Uncompromised Quality</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">Formulated using premium base oils and advanced additive technologies to exceed OEM specifications.</p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-[#E31E24]">
              <div className="w-12 h-12 bg-[#F5F5F7] flex items-center justify-center text-[#E31E24] mb-6">
                <Target size={24} />
              </div>
              <h4 className="font-bold text-[#0D243F] mb-3 uppercase tracking-wide text-xs">Precision Application</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">Tailored fluid solutions designed specifically for the unique demands of distinct industrial sectors.</p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-[#E31E24]">
              <div className="w-12 h-12 bg-[#F5F5F7] flex items-center justify-center text-[#E31E24] mb-6">
                <Globe size={24} />
              </div>
              <h4 className="font-bold text-[#0D243F] mb-3 uppercase tracking-wide text-xs">Global Reliability</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">A robust export network ensuring rapid, consistent supply to partners across multiple continents.</p>
            </div>

            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-[#E31E24]">
              <div className="w-12 h-12 bg-[#F5F5F7] flex items-center justify-center text-[#E31E24] mb-6">
                <Zap size={24} />
              </div>
              <h4 className="font-bold text-[#0D243F] mb-3 uppercase tracking-wide text-xs">Innovation Driven</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">Continuous R&D investment to develop next-generation lubricants for evolving engine architectures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Executive Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E31E24] mb-4">
              THE MINDS BEHIND THE FLUID
            </h2>
            <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-[#0D243F]">
              EXECUTIVE LEADERSHIP
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            {/* Team Member 1 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Tausif Zaman" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0b131e]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#2B99D6] text-white flex items-center justify-center hover:bg-[#E31E24] transition-colors shadow-lg">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-black italic uppercase text-[#0D243F] mb-1 group-hover:text-[#E31E24] transition-colors">Tausif Zaman</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Co-Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Elena Rostova" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0b131e]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#2B99D6] text-white flex items-center justify-center hover:bg-[#E31E24] transition-colors shadow-lg">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-black italic uppercase text-[#0D243F] mb-1 group-hover:text-[#E31E24] transition-colors">Dr. Elena Rostova</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Head of Chemical Engineering</p>
            </div>

            {/* Team Member 3 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                  alt="Marcus Vance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0b131e]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#2B99D6] text-white flex items-center justify-center hover:bg-[#E31E24] transition-colors shadow-lg">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-black italic uppercase text-[#0D243F] mb-1 group-hover:text-[#E31E24] transition-colors">Marcus Vance</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Global Export Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Facility & Operations Highlight */}
      <section className="py-24 px-6 bg-[#0b131e] text-white">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative aspect-video lg:aspect-square overflow-hidden border border-white/10">
            <img 
              src="https://plus.unsplash.com/premium_photo-1664299488927-4352e3d2a71e?q=80&w=2670&auto=format&fit=crop" 
              alt="Ajman Industrial Facility" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-6 left-6 bg-[#E31E24] px-4 py-2 flex items-center gap-2">
              <MapPin size={14} />
              <span className="text-[10px] font-black tracking-widest uppercase">Ajman Industrial Area, UAE</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2B99D6] mb-4">
              OUR OPERATIONS
            </h2>
            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8 leading-tight">
              A STRATEGIC HUB FOR <br /> GLOBAL EXPORT
            </h3>
            <p className="text-blue-100/70 mb-6 leading-relaxed text-sm">
              Strategically located in Ajman, our state-of-the-art blending and manufacturing facility gives us unparalleled access to major shipping routes. This allows our operations team to seamlessly manage large-scale B2B distribution to our key markets across Africa, South America, and the Middle East.
            </p>
            <p className="text-blue-100/70 mb-10 leading-relaxed text-sm">
              Our dedicated facility houses advanced testing laboratories, high-capacity blending tanks, and automated filling lines. Every batch of TEXLUBE undergoes rigorous quality control to guarantee that what leaves our warehouse performs flawlessly in your engines.
            </p>
            
            <Link href="/products" className="bg-[#E31E24] px-10 py-4 inline-flex items-center gap-3 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-[#0D243F] transition-all duration-300">
              EXPLORE OUR PRODUCTS <ChevronRight size={14} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}