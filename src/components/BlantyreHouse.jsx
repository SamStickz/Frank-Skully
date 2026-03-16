export default function BlantyreHouse() {
  const pantomimeImages = [
    {
      src: "/images/panto1.jpeg",
      alt: "Prince Charming pantomime - Blantyre House 1995",
    },
    {
      src: "/images/panto2.jpeg",
      alt: "Pantomime performance - Blantyre House 1995",
    },
    {
      src: "/images/panto3.jpeg",
      alt: "Snow White and the 7 Prisoners - Blantyre House 1995",
    },
    {
      src: "/images/panto4.jpeg",
      alt: "Stage performance - Blantyre House 1995",
    },
    {
      src: "/images/panto5.jpeg",
      alt: "Blantyre House pantomime 1995",
    },
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            TRANSFORMATION
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
            Blantyre House
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto px-4">
            A resettlement prison where art became the catalyst for change
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="space-y-6 sm:space-y-8 font-body text-base sm:text-lg text-neutral-300 leading-relaxed">
            <p>
              Blantyre House holds a remarkable distinction: while the national
              reoffending rate stands at 57%, only 8% of prisoners released from
              Blantyre House return to custody. This extraordinary success stems
              from its unique resettlement approach—and theatre played a vital
              role in my transformation there.
            </p>
            <p>
              During my time at Blantyre House, I immersed myself in theatrical
              productions, performing in pantomimes for local schoolchildren.
              These weren't merely performances—they were bridges back to
              society, opportunities to contribute meaningfully, and reminders
              of our shared humanity.
            </p>
            <p>
              My role as Prince Charming became symbolic of a larger
              transformation. Through theatre, I discovered purpose beyond
              survival, connection beyond isolation, and a future beyond my
              past.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
            <img
              src="/images/frank11.jpeg"
              alt="Prince Charming pantomime performance"
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </div>
        {/* Pantomime Gallery - 2 + 1 + 2 layout */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
              SNOW WHITE AND THE 7 PRISONERS — 1995
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-light">
              Theatre Behind Bars
            </h3>
          </div>

          {/* Row 1 - 2 images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {pantomimeImages.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-neutral-900 border border-neutral-800 relative overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - 1 image centered */}
          <div className="max-w-xs mx-auto mb-4 sm:mb-6">
            <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
              <img
                src={pantomimeImages[2].src}
                alt={pantomimeImages[2].alt}
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>

          {/* Row 3 - 2 images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {pantomimeImages.slice(3).map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-neutral-900 border border-neutral-800 relative overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Frank6 and Frank7 side by side */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
            <img
              src="/images/frank6.jpeg"
              alt="Recreation at Blantyre House"
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
            <img
              src="/images/frank7.jpeg"
              alt="Blantyre House recreation room"
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </div>

        {/* Koestler Award */}
        <div className="border-t border-neutral-900 pt-16 sm:pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
                KOESTLER AWARD 1995
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-light mb-6 sm:mb-8">
                Recognition Through Art
              </h3>
              <p className="font-body text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 sm:mb-8">
                In 1995, I received a Koestler Award for photography—a
                prestigious recognition of creative work by prisoners and
                ex-offenders. This achievement marked an early validation that
                creativity could be a pathway forward.
              </p>
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8">
                <p className="font-body text-sm sm:text-base text-neutral-400 italic">
                  "The camera doesn't lie, but it can reveal truth in ways words
                  cannot."
                </p>
                <p className="font-body text-xs sm:text-sm text-neutral-500 mt-3 sm:mt-4">
                  — Mick Duff, Photography Mentor
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                <img
                  src="/images/frank10.jpeg"
                  alt="Koestler Award winning photograph 1995"
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
              <p className="font-body text-[10px] sm:text-xs text-neutral-500 tracking-wider mt-3 sm:mt-4 text-center">
                Koestler Award Winning Photo - 1995
              </p>
            </div>
          </div>
        </div>

        {/* Building Image */}
        <div className="border-t border-neutral-900 mt-16 sm:mt-20 pt-16 sm:pt-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden">
              <img
                src="/images/frank8.jpeg"
                alt="Blantyre House prison building"
                className="w-full h-auto opacity-90"
              />
            </div>
            <p className="font-body text-[10px] sm:text-xs text-neutral-500 tracking-wider mt-3 sm:mt-4 text-center">
              HMP Blantyre House
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
