import { Award } from "lucide-react";

export default function Awards() {
  const awards = [
    {
      year: "2024",
      title: "Nominated Best Supporting Male Actor in a Play",
      subtitle: "Black British Theatre Awards",
      images: ["/images/frank25.jpeg"],
      position: "object-top",
    },
    {
      year: "2023",
      title: "Best Producer of the Year",
      subtitle: "Going For Gold — UK Tour",
      images: ["/images/frank29.jpeg"],
      position: "object-top",
    },
    {
      year: "2022",
      title: "Royal Television Society Award",
      subtitle: "Best Pre-School Children's Programme — JoJo & Gran Gran",
      images: ["/images/frank27.jpeg"],
      position: "object-top",
    },
    {
      year: "2021",
      title: "1st Prize — Synergy Theatre & Soho Theatre",
      subtitle: "Lockdown Drama Writing Competition — Food of Peace",
      images: ["/images/frank24.jpeg"],
      position: "object-left",
    },
  ];

  return (
    <section
      id="awards"
      className="py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12"
    >
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
              className="bg-neutral-900/50 border border-neutral-800 hover:border-[#d4af37] transition-all duration-500 group overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={award.images[0]}
                  alt={award.title}
                  className={`w-full h-full object-cover ${award.position} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`}
                />
              </div>

              <div className="p-6 sm:p-8">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 sm:mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="font-body text-xs sm:text-sm tracking-[0.3em] text-[#d4af37] mb-2">
                  {award.year}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-light leading-tight mb-2">
                  {award.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {award.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Best Producer Video */}
        <div className="border-t border-neutral-900 mt-16 sm:mt-20 pt-16 sm:pt-20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
              BLACK BRITISH THEATRE AWARDS 2023
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-light">
              Best Producer of the Year
            </h3>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-900 border border-neutral-800 overflow-hidden">
              <video
                src="/images/franky.mp4"
                controls
                playsInline
                className="w-full h-auto"
                poster="/images/frank29.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
