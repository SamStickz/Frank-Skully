export default function Portfolio() {
  const videos = [
    { id: "HPVEdIN9hSI", title: "Showreel", type: "Featured Work" },
    { id: "ZWzzfjMJW-Q", title: "Performance", type: "Film & TV" },
    { id: "jgZsihJRpnQ", title: "Behind Scenes", type: "Short" },
    { id: "PC9bUZf1G8U", title: "Acting Sample", type: "Short" },
  ];
  const portfolio = [
    {
      title: "Every Sinner Has a Future",
      category: "Documentary",
      year: "2024",
      image: "/images/frank1.jpeg",
    },
    {
      title: "Hard Talking Ex Cons",
      category: "Education",
      year: "2011",
      image: "/images/frank2.jpeg",
    },
  ];
  return (
    <section
      id="work"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-neutral-950/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            SELECTED PROJECTS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
            Portfolio
          </h2>
        </div>
        {/* Video Grid - 2 per row even on mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {videos.map((video, index) => (
            <div key={index}>
              <div className="aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden mb-2 sm:mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="text-center">
                <div className="font-body text-[8px] sm:text-[10px] lg:text-xs tracking-[0.3em] text-[#d4af37] mb-1">
                  {video.type}
                </div>
                <h3 className="font-display text-xs sm:text-sm lg:text-base font-light text-neutral-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* Project Grid - Text Only */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 hover:border-[#d4af37] transition-colors duration-300"
            >
              <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
                {item.category} · {item.year}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-light group-hover:text-[#d4af37] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
