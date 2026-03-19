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
    },
    {
      title: "Hard Talking Ex Cons",
      category: "Education",
      year: "2011",
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

        {/* Video Grid */}
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

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 sm:mb-20">
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

        {/* The Frontline Book */}
<div className="border-t border-neutral-900 pt-16 sm:pt-20">
  <div className="text-center mb-12 sm:mb-16">
    <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
      PUBLICATIONS
    </div>
    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
      The Frontline
    </h2>
    <p className="font-body text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto px-4">
      Frank Skully served as Editorial Board Member for this landmark
      publication — a story of struggle, resistance and Black identity
      in Notting Hill, available at Waterstones.
    </p>
  </div>

  {/* 3 images side by side */}
  <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
    <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
      <img
        src="/images/frontline-cover.jpeg"
        alt="The Frontline book cover"
        className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
      />
    </div>
    <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
      <img
        src="/images/frontline-waterstones.jpeg"
        alt="The Frontline on Waterstones"
        className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
      />
    </div>
    <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
      <img
        src="/images/frontline-pressrelease.jpeg"
        alt="The Frontline press release"
        className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
      />
    </div>
  </div>

  {/* Details */}
  <div className="max-w-3xl mx-auto">
    <div className="bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8">
      <div className="space-y-3 font-body text-sm sm:text-base text-neutral-300">
        <div className="flex gap-4">
          <span className="text-[#d4af37] min-w-[80px]">Role</span>
          <span>Editorial Board Member</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#d4af37] min-w-[80px]">Publisher</span>
          <span>Rice N Peas Publishing</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#d4af37] min-w-[80px]">Released</span>
          <span>24 June 2022</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#d4af37] min-w-[80px]">Available</span>
          <span>Waterstones</span>
        </div>
      </div>
    </div>
  </div>
</div>