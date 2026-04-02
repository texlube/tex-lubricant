"use client";

import Link from 'next/link';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  Globe,
  ChevronRight
} from 'lucide-react';

const productCategories = [
  { name: "Passenger Car", slug: "passenger-car" },
  { name: "Trucks & Busses", slug: "trucks-busses" },
  { name: "Motor Cycle", slug: "motor-cycle" },
  { name: "ATF & Gear", slug: "atf-gear" },
  { name: "Industrial", slug: "industrial" },
  { name: "Hydraulic", slug: "hydraulic" },
  { 
    name: "Specialty Oil", 
    slug: "specialty-oil",
    hasSub: true,
    subItems: [
      { name: "Coolant", slug: "coolant" },
      { name: "Brake Fluid", slug: "brake-fluid" }
    ]
  },
  { name: "Greases", slug: "greases" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      
      {/* 1. TOP UTILITY BAR */}
      <div className="w-full bg-[#12223b] text-white py-3 px-6 border-b border-white/5">
        <div className="max-w-[1300px] mx-auto flex justify-end items-center gap-8">
          <Link 
            href="/products" 
            className="bg-[#4a90e2] hover:bg-[#357abd] text-white px-6 py-2 rounded-sm text-[11px] font-black uppercase tracking-wider transition-all shadow-md"
          >
            Find your lubricant
          </Link>
          <div className="flex items-center gap-2 border-l border-white/20 pl-8">
            <Globe size={14} className="text-white" />
            <span className="text-[11px] font-black uppercase tracking-widest text-white">ENGLISH</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className="w-full bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between">
          
          {/* Enhanced Logo Presence */}
          <Link href="/" className="py-4">
            <img 
              src="/logo.png" 
              alt="TEXLUBE" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
            />
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-12 h-full">
            
            {/* A. PRODUCTS DROPDOWN */}
            <div className="relative group flex items-center h-full">
              <Link 
                href="/products" 
                className="flex items-center gap-1 text-[13px] font-black uppercase tracking-widest text-[#0D243F] hover:text-[#E31E24] transition-colors py-8"
              >
                PRODUCTS
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              <div className="absolute top-full left-0 w-72 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-[#E31E24]">
                <div className="flex flex-col py-1">
                  {productCategories.map((cat) => (
                    <div key={cat.slug} className="relative group/specialty">
                      <Link 
                        href={`/products?category=${cat.slug}`}
                        className="flex items-center justify-between px-8 py-4 text-[11px] font-black text-[#0D243F] hover:bg-[#F5F5F7] hover:text-[#E31E24] transition-all uppercase tracking-wider border-b border-gray-50 last:border-0"
                      >
                        {cat.name}
                        {cat.hasSub && <ChevronRight size={12} className="text-gray-300 group-hover/specialty:text-[#E31E24]" />}
                      </Link>

                      {cat.hasSub && (
                        <div className="absolute top-0 left-full w-64 bg-white shadow-2xl opacity-0 invisible group-hover/specialty:opacity-100 group-hover/specialty:visible transition-all duration-300 border-l border-gray-100">
                          <div className="flex flex-col py-1">
                            {cat.subItems?.map((sub) => (
                              <Link 
                                key={sub.slug}
                                href={`/products?category=${sub.slug}`}
                                className="px-8 py-4 text-[10px] font-black text-gray-400 hover:bg-[#F5F5F7] hover:text-[#E31E24] transition-all uppercase tracking-widest border-b border-gray-50 last:border-0"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* B. WHY TEXLUBE DROPDOWN */}
            <div className="relative group flex items-center h-full">
              <Link 
                href="/technology" 
                className="flex items-center gap-1 text-[13px] font-black uppercase tracking-widest text-[#0D243F] hover:text-[#E31E24] transition-colors py-8"
              >
                WHY TEXLUBE
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-[#E31E24]">
                <div className="flex flex-col py-1">
                  <Link href="/about" className="px-8 py-4 text-[11px] font-black text-[#0D243F] hover:bg-[#F5F5F7] hover:text-[#E31E24] transition-all uppercase tracking-wider border-b border-gray-50">ABOUT US</Link>
                  <Link href="/contact" className="px-8 py-4 text-[11px] font-black text-[#0D243F] hover:bg-[#F5F5F7] hover:text-[#E31E24] transition-all uppercase tracking-wider">CONTACT</Link>
                </div>
              </div>
            </div>

            <Link href="/news" className="text-[13px] font-black uppercase tracking-widest text-[#0D243F] hover:text-[#E31E24] transition-colors">
              NEWS
            </Link>
          </div>

          {/* C. MINIMALIST CONTACT ICONS */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+97161234567" 
              className="text-[#0D243F] hover:text-[#E31E24] transition-all duration-300"
              title="Call Texlube"
            >
              <Phone size={20} strokeWidth={2.5} />
            </a>
            
            <a 
              href="mailto:info@texlubricant.com" 
              className="text-[#0D243F] hover:text-[#E31E24] transition-all duration-300"
              title="Email Texlube"
            >
              <Mail size={20} strokeWidth={2.5} />
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
}