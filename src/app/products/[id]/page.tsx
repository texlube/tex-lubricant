"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { 
  ChevronLeft, ChevronRight, FileText, Download, X, 
  CheckCircle, ShieldCheck, Zap, Thermometer,
  User, Phone, Building2, Loader2 
} from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// --- SUB-COMPONENT: RELATED PRODUCTS CAROUSEL ---
function RelatedProductsCarousel({ category, currentId }: { category: string, currentId: string }) {
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRelated() {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .neq('id', currentId)
        .limit(6);
      if (data) setRelated(data);
    }
    if (category) fetchRelated();
  }, [category, currentId]);

  if (related.length === 0) return null;

  return (
    <section className="mt-32 pt-16 border-t border-gray-100">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h4 className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.4em] mb-4">RECOMMENDED SOLUTIONS</h4>
          <h2 className="text-3xl font-black italic text-[#0D243F] uppercase tracking-tighter">TECHNICAL <span className="text-[#2B99D6]">COMPLEMENTS</span></h2>
        </div>
        <Link href="/products" className="text-[10px] font-black text-gray-400 hover:text-[#0D243F] uppercase tracking-widest flex items-center gap-2 transition-all">
          VIEW FULL CATALOGUE <ChevronRight size={14} />
        </Link>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
        {related.map((item) => (
          <Link key={item.id} href={`/products/${item.id}`} className="min-w-[280px] md:min-w-[320px] bg-white border border-gray-50 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative aspect-square bg-[#FBFBFC] flex items-center justify-center p-8 overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                  <span className="text-6xl font-black italic text-[#0D243F]">TEX</span>
               </div>
               <Image src={item.image_url} alt={item.name} width={150} height={150} className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-sm font-black italic text-[#0D243F] uppercase tracking-tighter mb-4 leading-tight">{item.name}</h3>
              <div className="bg-[#F8F9FA] px-3 py-2 flex justify-between items-center border-l-2 border-[#E31E24]">
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{item.viscosity}</span>
                <span className="text-[8px] font-black text-[#E31E24] uppercase tracking-widest">UAE GRADE</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// --- MAIN PRODUCT DETAIL PAGE ---
export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    async function getProduct() {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (error || !data) return notFound();
      setProduct(data);
      setLoading(false);
    }
    getProduct();
  }, [id]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    
    const target = e.target as any;
    const leadData = {
      full_name: target[0].value,
      phone: target[1].value,
      company: target[2].value,
      product_interest: product.name
    };

    try {
      const { error } = await supabase.from('leads').insert([leadData]);
      if (error) throw error;
      setFormSubmitted(true);
      
      // REFINEMENT: Auto-close modal after success
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
      }, 3000);

    } catch (err) {
      alert("Error saving request. Please contact sales.");
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Loader2 className="animate-spin text-[#0D243F]" size={40} />
    </div>
  );

  return (
    <main className="bg-white min-h-screen pt-[140px] pb-24 px-6">
      <div className="max-w-[85%] mx-auto">
        
        <Link href="/products" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#E31E24] transition-colors mb-12 group">
          <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO CATALOGUE
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <div className="bg-[#F8F9FA] aspect-square relative flex items-center justify-center border border-gray-100 group">
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <span className="text-[180px] font-black italic text-[#0D243F]">TEX</span>
             </div>
             {/* REFINEMENT: Added Priority flag */}
             <Image src={product.image_url} alt={product.name} width={450} height={450} className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-700" priority />
          </div>

          <div className="flex flex-col h-full">
            <span className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.4em] mb-4">{product.category}</span>
            <h1 className="text-4xl md:text-6xl font-black italic text-[#0D243F] uppercase tracking-tighter leading-[0.9] mb-8">{product.name}</h1>

            <div className="bg-[#0D243F] text-white px-6 py-4 flex justify-between items-center mb-10 border-l-4 border-[#E31E24]">
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-1">Standard Viscosity</span>
                <span className="text-sm font-black tracking-widest">{product.viscosity}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-1">Certified Origin</span>
                <span className="text-sm font-black tracking-widest text-[#E31E24]">UAE GRADE</span>
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium italic">{product.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-12">
               <div className="flex flex-col gap-2 p-4 bg-[#F8F9FA] border-t-2 border-gray-100">
                  <ShieldCheck size={20} className="text-[#2B99D6]" /><span className="text-[9px] font-black text-[#0D243F] uppercase tracking-wider">Wear Protection</span>
               </div>
               <div className="flex flex-col gap-2 p-4 bg-[#F8F9FA] border-t-2 border-gray-100">
                  <Thermometer size={20} className="text-[#E31E24]" /><span className="text-[9px] font-black text-[#0D243F] uppercase tracking-wider">Thermal Stability</span>
               </div>
               <div className="flex flex-col gap-2 p-4 bg-[#F8F9FA] border-t-2 border-gray-100">
                  <Zap size={20} className="text-yellow-500" /><span className="text-[9px] font-black text-[#0D243F] uppercase tracking-wider">Engine Purity</span>
               </div>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="w-full bg-[#0D243F] text-white py-6 font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-4 hover:bg-[#E31E24] transition-all shadow-xl">
              REQUEST TECHNICAL DATA SHEET (TDS) <FileText size={18} />
            </button>
          </div>
        </div>

        {/* REFINEMENT: Safety check for Specs Table */}
        {product.specs && product.specs.length > 0 && (
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-8">TYPICAL TEST DATA</h2>
            <div className="border-t-2 border-[#0D243F]">
              {product.specs.map((spec: any, index: number) => (
                <div key={index} className="flex justify-between py-5 border-b border-gray-100 hover:bg-gray-50 px-4 transition-colors">
                  <span className="text-xs font-black text-[#0D243F] uppercase tracking-widest">{spec.label}</span>
                  <span className="text-xs font-bold text-gray-500 uppercase">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <RelatedProductsCarousel category={product.category} currentId={id as string} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-[#0b131e]/95 backdrop-blur-md">
          <div className="bg-white w-full max-w-xl relative p-12 rounded-sm animate-in zoom-in duration-300">
            <button onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }} className="absolute top-8 right-8 text-gray-300 hover:text-[#0D243F]"><X size={24}/></button>
            <div className="text-center">
              <h4 className="text-[10px] font-black text-[#E31E24] uppercase tracking-widest mb-4">SECURE DATA ACCESS</h4>
              <h5 className="text-3xl font-black italic uppercase text-[#0D243F] mb-10 leading-none">DOWNLOAD TDS</h5>
              
              <form onSubmit={handleLeadSubmit} className="space-y-4 text-left">
                  <div className="relative">
                    <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input required placeholder="FULL NAME" className="w-full bg-[#F5F5F7] p-4 pl-12 text-[10px] font-bold uppercase outline-none focus:ring-1 focus:ring-[#E31E24]" />
                  </div>
                  <div className="relative">
                    <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input required type="tel" placeholder="BUSINESS PHONE" className="w-full bg-[#F5F5F7] p-4 pl-12 text-[10px] font-bold uppercase outline-none focus:ring-1 focus:ring-[#E31E24]" />
                  </div>
                  <div className="relative">
                    <Building2 size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input required placeholder="COMPANY NAME" className="w-full bg-[#F5F5F7] p-4 pl-12 text-[10px] font-bold uppercase outline-none focus:ring-1 focus:ring-[#E31E24]" />
                  </div>
                  <button disabled={formLoading} className="w-full bg-[#0D243F] text-white py-5 font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-4 hover:bg-[#E31E24] transition-all">
                    {formSubmitted ? <CheckCircle size={18} /> : formLoading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                    {formSubmitted ? "REQUEST LOGGED" : formLoading ? "SYNCING..." : "CONFIRM & DOWNLOAD"}
                  </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}