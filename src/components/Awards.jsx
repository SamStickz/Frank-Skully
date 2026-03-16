import { Award } from "lucide-react";

export default function Awards() {
  const awards = [
    { year: "2024", title: "BBTAS Nominated Best Supporting Actor" },
    { year: "2023", title: "BBTAS Co-Producer of the Year" },
    { year: "2022", title: "Award Winning Voice Over Artist" },
    { year: "2021", title: "Award Winning Writer" },
  ];

  return (
    <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            RECOGNITION
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
            Awards & Nominations
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 hover:border-[#d4af37] transition-all duration-500 group"
            >
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4af37] mb-4 sm:mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="font-body text-xs sm:text-sm tracking-[0.3em] text-[#d4af37] mb-2 sm:mb-3">
                {award.year}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-light leading-tight">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
