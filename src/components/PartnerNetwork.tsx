export default function PartnerNetwork() {
  return (
    <section className="relative h-[650px] flex items-center overflow-hidden">
      <img src="/solution.png" className="absolute inset-0 w-full h-full object-cover" alt="Workshop background" />
      <div className="absolute inset-0 bg-[#0D243F]/10" />
      <div className="max-w-[1300px] mx-auto w-full px-6 relative z-10 flex justify-end">
        <div className="bg-white p-16 max-w-lg shadow-2xl">
          <h3 className="text-4xl font-light text-[#0D243F] mb-8 leading-tight">Discover our international partner network</h3>
          <button className="border-2 border-[#2B99D6] text-[#2B99D6] px-10 py-3 font-black uppercase text-[11px] tracking-widest hover:bg-[#2B99D6] hover:text-white transition-all duration-300">Find Salespoint</button>
        </div>
      </div>
    </section>
  );
}