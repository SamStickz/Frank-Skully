export default function ActingWork() {
  const actingCredits = [
    {
      title: "The Gentlemen",
      platform: "Netflix",
      image: "/images/gentlemen-netflix.jpg",
      position: "object-center",
    },
    {
      title: "Bridgerton",
      platform: "Netflix",
      image: "/images/bridgerton-costume.jpg",
      position: "object-top",
    },
    {
      title: "Sound Clash",
      platform: "Edinburgh Fringe Festival",
      image: "/images/stage-production.jpg",
      position: "object-top",
    },
    {
      title: "The Beautiful Game",
      platform: "Netflix",
      image: "/images/security-guard.jpg",
      position: "object-top",
    },
  ];

  const standInWork = [
    {
      actor: "Michael Beach",
      production: "Perfect Couple",
      platform: "Netflix",
    },
    {
      actor: "Paterson Joseph",
      production: "Roots Manoeuvre",
      platform: "Amazon MGM",
    },
    { actor: "Will.I.Am", production: "Music Video", platform: "" },
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Acting Credits */}
        <div className="mb-20 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
              FILM & TELEVISION
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
              Acting Credits
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {actingCredits.map((credit, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-neutral-900 border border-neutral-800 relative overflow-hidden group"
              >
                <img
                  src={credit.image}
                  alt={credit.title}
                  className={w-full h-full object-cover ${credit.position} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stand-In Work */}
        <div className="border-t border-neutral-900 pt-20 sm:pt-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
              PROFESSIONAL EXPERIENCE
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
              Stand-In Work
            </h2>
            <p className="font-body text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto px-4">
              Frank Skully has stood in for lead actors in various productions
              over the years
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="aspect-[4/3] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
              <img
                src="/images/stand-in.jpg"
                alt="Stand-in work - Period costume"
                className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <div className="aspect-[4/3] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
              <img
                src="/images/william.jpg"
                alt="Stand-in work - Will.I.Am music video"
                className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 lg:p-10">
              <div className="space-y-3 sm:space-y-4">
                {standInWork.map((work, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 font-body text-sm sm:text-base text-neutral-300"
                  >
                    <div className="w-1.5 h-1.5 bg-[#d4af37] opacity-50"></div>
                    <span className="text-[#d4af37]">{work.actor}</span>
                    <span className="text-neutral-500">—</span>
                    <span>{work.production}</span>
                    {work.platform && (
                      <>
                        <span className="text-neutral-500">·</span>
                        <span className="text-neutral-400">
                          {work.platform}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}