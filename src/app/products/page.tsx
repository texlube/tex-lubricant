"use client";

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import { FileText, X, Download, CheckCircle, User, Phone, ArrowUpRight, Building2, Loader2 } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const categories = [
  { id: 'all-products', name: 'ALL PRODUCTS' },
  { id: 'passenger-car', name: 'PASSENGER CAR' },
  { id: 'trucks-busses', name: 'TRUCKS & BUSSES' },
  { id: 'motor-cycle', name: 'MOTOR CYCLE' },
  { id: 'atf-gear', name: 'ATF & GEAR' },
  { id: 'industrial', name: 'INDUSTRIAL' },
  { id: 'hydraulic', name: 'HYDRAULIC' },
  { id: 'specialty-oil', name: 'SPECIALTY OIL' },
  { id: 'greases', name: 'GREASES' },
];

function ProductsList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category') || 'all-products';
  
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState("Connecting...");

  useEffect(() => {
    async function fetchLiveProducts() {
      setLoading(true);
      const { data, error } = await supabase.from('products').select('*');
      
      if (error) {
        setDbStatus(`ERROR: ${error.message}`);
      } else if (data && data.length === 0) {
        setDbStatus("CONNECTED BUT DATABASE IS EMPTY");
      } else {
        setDbStatus(`SUCCESS: FOUND ${data?.length} PRODUCTS`);
        setProducts(data || []);
      }
      setLoading(false);
    }
    fetchLiveProducts();
  }, []);

  const filteredProducts = categoryParam === 'all-products' 
    ? products 
    : products.filter(p => {
        const slug = p.category.toLowerCase().replace(/[\s&()]+/g, '-');
        return slug === categoryParam || categoryParam.includes(slug);
      });

  if (loading) return <div className="text-center py-40"><Loader2 className="animate-spin mx-auto text-[#0D243F]" /></div>;

  return (
    <>
      {/* DEBUG BAR: We will remove this once it's fixed */}
      <div className="bg-gray-100 p-2 mb-10 text-[8px] font-black uppercase text-center tracking-widest text-[#0D243F]">
        System Status: {dbStatus}
      </div>

      <div className="border-b border-gray-100 mb-16 overflow-x-auto no-scrollbar">
        <div className="max-w-full flex justify-center gap-10 whitespace-nowrap px-6">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => router.push(`/products?category=${cat.id}`)} className={`pb-5 text-[10px] font-black tracking-[0.2em] relative ${categoryParam === cat.id ? 'text-[#0D243F]' : 'text-gray-400'}`}>
              {cat.name}
              {categoryParam === cat.id && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E31E24]" />}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-24">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white border border-gray-50 shadow-sm flex flex-col group">
            <div className="relative aspect-square bg-[#FBFBFC] flex items-center justify-center">
               <Image src={product.image_url} alt={product.name} width={200} height={200} className="object-contain p-8" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[15px] font-black italic text-[#0D243F] uppercase mb-4">{product.name}</h3>
              <div className="bg-[#F8F9FA] px-3 py-2 flex justify-between items-center mb-6 border-l-2 border-[#E31E24]">
                <span className="text-[8px] font-bold text-gray-500">{product.viscosity}</span>
                <span className="text-[8px] font-black text-[#E31E24]">UAE GRADE</span>
              </div>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-[9px] font-black text-[#2B99D6] uppercase tracking-widest">DETAILS</span>
                <FileText size={18} className="text-gray-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen pt-[100px]">
      <section className="bg-[#0D243F] py-20 px-6 text-center">
        <div className="max-w-[85%] mx-auto">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter">TECHNICAL <span className="text-[#E31E24]">CATALOGUE</span></h1>
        </div>
      </section>
      <div className="max-w-[85%] mx-auto pt-16">
        <Suspense fallback={<div>Loading...</div>}><ProductsList /></Suspense>
      </div>
    </main>
  );
}