import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { newsArticles } from '@/data/news'; // Pulling from our central database

export default function NewsPage() {
  return (
    <main className="bg-[#F5F5F7] min-h-screen pt-[105px]">
      {/* ... (Hero Section and Search Bar remain exactly the same as before) ... */}

      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {newsArticles.map((article, index) => (
              <Link 
                href={`/news/${article.slug}`} // Dynamically routes to the article
                key={index} 
                className="bg-white flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full aspect-video overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[9px] font-black tracking-widest uppercase text-gray-400 mb-3">{article.category}</span>
                  <h3 className="font-bold italic text-xl text-[#0D243F] mb-4 leading-tight group-hover:text-[#E31E24] transition-colors">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{article.date}</span>
                    <div className="flex items-center gap-2 text-[#E31E24] text-[10px] font-black uppercase tracking-widest">
                      READ MORE
                      <span className="w-4 h-4 rounded-full bg-[#E31E24] text-white flex items-center justify-center"><ChevronRight size={10} strokeWidth={4} /></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}