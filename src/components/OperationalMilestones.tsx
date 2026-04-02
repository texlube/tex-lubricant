"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsRight 
} from 'lucide-react';
import { operationsData } from '@/data/operations'; 

export default function OperationalMilestones() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const albumMedia = [
  // We check if videoSrc exists, otherwise fall back to src
  { 
    src: operationsData.featuredVideo.videoSrc || operationsData.featuredVideo.src, 
    type: 'video' 
  },
  ...operationsData.homepageImages.map(img => ({ src: img.src, type: 'image' })),
  ...operationsData.extraImages.map(img => ({ src: img.src, type: 'image' }))
];

  // --- ESCAPE KEY & SCROLL LOCK ---
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-white max-w-[1300px] mx-auto shadow-2xl rounded-sm overflow-hidden border-b-4 border-[#E31E24] relative z-20">
      
      {/* 1. HEADER */}
      <div className="px-8 py-4 md:px-12 md:py-6 bg-white border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-[8px] font-black text-[#E31E24] uppercase tracking-[0.4em] mb-1">CORPORATE NEWSFEED</h2>
          <h3 className="text-xl md:text-2xl font-black italic uppercase text-[#0D243F] leading-none tracking-tighter">
            LATEST UPDATES & <span className="text-[#2B99D6]">ACTIVITIES</span>
          </h3>
        </div>
        <button 
          onClick={() => openModal(4)} 
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0D243F] hover:text-[#E31E24] transition-all"
        >
          SEE MORE <ChevronsRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 2. MASONRY GRID */}
      <div className="bg-[#0D243F] p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Video Section */}
          <div className="md:col-span-5 relative aspect-video md:aspect-auto overflow-hidden group cursor-pointer" onClick={() => openModal(0)}>
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none">
              <source src={operationsData.featuredVideo.videoSrc} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Middle Stack */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="relative h-1/2 overflow-hidden cursor-pointer bg-gray-900" onClick={() => openModal(1)}>
              <Image src={operationsData.homepageImages[0].src} alt="" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <div className="relative overflow-hidden cursor-pointer bg-gray-900" onClick={() => openModal(2)}>
                <Image src={operationsData.homepageImages[1].src} alt="" fill className="object-cover" />
              </div>
              <div className="relative overflow-hidden cursor-pointer bg-gray-900" onClick={() => openModal(3)}>
                <Image src={operationsData.homepageImages[2].src} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Tall Right (Fixed Syntax) */}
          <div className="md:col-span-2 relative min-h-[300px] overflow-hidden cursor-pointer group bg-gray-900" onClick={() => openModal(4)}>
            <Image src={operationsData.extraImages[0].src} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black text-2xl tracking-tighter">{" >>> "}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LIGHTBOX POPUP - THE FIX */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 w-screen h-screen bg-[#0b131e]/98 backdrop-blur-2xl z-[9999] flex items-center justify-center overflow-hidden"
          onClick={closeModal} // Closes when clicking the backdrop
        >
          {/* Close Button - Extremely high priority */}
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); closeModal(); }} 
            className="absolute top-8 right-8 md:top-12 md:right-12 text-white/40 hover:text-[#E31E24] z-[10000] p-4 transition-all"
            aria-label="Close Gallery"
          >
            <X size={48} strokeWidth={2.5} />
          </button>
          
          <div className="relative w-full h-full max-w-7xl flex items-center justify-center px-6 md:px-24">
            
            {/* Prev Arrow */}
            <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + albumMedia.length) % albumMedia.length); }} 
                className="absolute left-4 md:left-8 text-white/20 hover:text-white transition-all z-[10000] p-4"
            >
                <ChevronLeft size={64} strokeWidth={1} />
            </button>

            {/* Next Arrow */}
            <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % albumMedia.length); }} 
                className="absolute right-4 md:right-8 text-white/20 hover:text-white transition-all z-[10000] p-4"
            >
                <ChevronRight size={64} strokeWidth={1} />
            </button>

            {/* Content Container (No text/content gating) */}
            <div 
              className="relative w-full h-[80vh] flex items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()} 
            >
              {albumMedia[currentIndex].type === 'video' ? (
                <video controls autoPlay className="max-w-full max-h-full pointer-events-auto shadow-2xl border border-white/5">
                  <source src={albumMedia[currentIndex].src} type="video/mp4" />
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image 
                    src={albumMedia[currentIndex].src} 
                    alt="Operation Gallery" 
                    fill 
                    className="object-contain" 
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}