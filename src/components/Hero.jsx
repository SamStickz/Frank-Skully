import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-4 sm:px-6 lg:px-12 pt-32 pb-12">
      {/* Film grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      <div className="max-w-5xl mx-auto w-full relative">
        {/* Top Section - Tagline */}
        <div className="mb-8 opacity-0 animate-[fadeIn_1.5s_ease-out_0.2s_forwards]">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-4">
            FRANK SKULLY · CREATIVE PROFESSIONAL
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Authentic
            <br />
            Narratives
            <br />
            in <span className="text-[#d4af37]">Criminal Justice</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Bringing depth, authenticity, and compelling storytelling to dramas
            and films that explore the complexities of justice, law, and the
            human condition.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 opacity-0 animate-[fadeIn_1.5s_ease-out_0.4s_forwards]">
          <a
            href="#services"
            className="group font-body px-8 sm:px-10 py-4 sm:py-5 bg-[#d4af37] text-[#0a0a0a] text-sm sm:text-base tracking-widest font-medium hover:bg-[#c19d2f] transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            EXPLORE SERVICES
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#work"
            className="group font-body px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#d4af37] text-[#d4af37] text-sm sm:text-base tracking-widest font-medium hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 w-full sm:w-auto justify-center flex items-center"
          >
            VIEW WORK
          </a>
        </div>
        {/* Portrait */}
        <div className="max-w-3xl mx-auto opacity-0 animate-[fadeIn_1.5s_ease-out_0.6s_forwards]">
          <img
            src="/images/portrait.jpg"
            alt="Frank Skully"
            className="w-full h-auto opacity-90"
          />
          {/* Agent Info */}
          <div className="bg-[#0a0a0a] py-6 sm:py-8 px-6 sm:px-8 mt-0 border-t border-neutral-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="font-body text-base sm:text-lg text-white font-medium">
                  Alex Cusack Management
                </p>
              </div>
              <div className="text-center sm:text-right">
                <a
                  href="mailto:jane4acusackmanagement@gmail.com"
                  className="font-body text-sm sm:text-base text-[#d4af37] hover:text-[#c19d2f] transition-colors"
                >
                  jane4acusackmanagement@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
