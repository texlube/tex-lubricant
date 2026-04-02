import Link from 'next/link';
import { notFound } from 'next/navigation';
import { newsArticles } from '@/data/news';
import { ChevronLeft, Share2 } from 'lucide-react';

// FIXED: Added prop support to custom brand icons
const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Twitter = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

// 1. Handling modern Next.js async routing
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params to get the slug from the URL
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  // 3. Find the matching article
  const article = newsArticles.find((p) => p.slug === currentSlug);

  if (!article) {
    notFound();
  }
  
  return (
    <main className="bg-white min-h-screen pt-[140px] pb-24">
      {/* 1. Article Header & Navigation */}
      <div className="max-w-[1000px] mx-auto px-6 mb-12">
        <Link 
          href="/news" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#E31E24] transition-colors mb-10 group"
        >
          <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO ALL NEWS
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-black tracking-widest uppercase text-[#E31E24]">
            {article.category}
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
            {article.date}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black italic text-[#0D243F] mb-8 leading-tight uppercase tracking-tighter">
          {article.title}
        </h1>
        
        <div className="flex items-center justify-between border-t border-b border-gray-100 py-4">
          <span className="text-[10px] font-black tracking-widest uppercase text-gray-500">
            BY {article.author}
          </span>
          
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 hidden md:block">
              SHARE ARTICLE
            </span>
            <button className="text-gray-400 hover:text-[#2B99D6] transition-colors"><Linkedin size={16} /></button>
            <button className="text-gray-400 hover:text-[#2B99D6] transition-colors"><Facebook size={16} /></button>
            <button className="text-gray-400 hover:text-[#2B99D6] transition-colors"><Twitter size={16} /></button>
            <button className="text-gray-400 hover:text-[#E31E24] transition-colors"><Share2 size={16} /></button>
          </div>
        </div>
      </div>

      {/* 2. Hero Image */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden bg-[#F8F9FA] border border-gray-50 relative group">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
          />
          {/* Subtle TEX watermark for branding */}
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none select-none">
             <span className="text-2xl font-black italic text-[#0D243F]">TEXLUBE</span>
          </div>
        </div>
      </div>

      {/* 3. Article Content */}
      <div className="max-w-[800px] mx-auto px-6">
        <article 
          className="prose prose-lg max-w-none text-gray-600 
            prose-headings:font-black prose-headings:italic prose-headings:text-[#0D243F] prose-headings:uppercase prose-headings:tracking-tighter
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 
            prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[15px]
            prose-blockquote:border-l-4 prose-blockquote:border-[#E31E24] prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-10 prose-blockquote:italic prose-blockquote:font-bold prose-blockquote:text-xl prose-blockquote:text-[#0D243F] prose-blockquote:bg-gray-50 
            prose-li:mb-2 prose-li:text-[15px]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* 4. Bottom Navigation */}
      <div className="max-w-[800px] mx-auto px-6 mt-20 pt-10 border-t border-gray-100 flex justify-between">
         <Link href="/news" className="text-[10px] font-black text-[#2B99D6] uppercase tracking-widest hover:text-[#0D243F] transition-colors">
            ← PREVIOUS STORY
         </Link>
         <Link href="/news" className="text-[10px] font-black text-[#2B99D6] uppercase tracking-widest hover:text-[#0D243F] transition-colors">
            NEXT STORY →
         </Link>
      </div>

    </main>
  );
}