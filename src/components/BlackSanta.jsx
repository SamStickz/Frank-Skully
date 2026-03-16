export default function BlackSanta() {
  const santaImages = [
    { src: "/images/santa5.jpg", alt: "Frank as Black Santa on O2 Arena" },
    { src: "/images/santa4.jpg", alt: "Black Santa with film crew" },
    { src: "/images/santa2.jpg", alt: "Santa training classroom" },
    { src: "/images/santa3.jpg", alt: "Santas climbing O2 Arena" },
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            CHANNEL 4 DOCUMENTARY
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
            UK's First Official Black Santa
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto px-4">
            In 2012, Channel 4 followed Frank on his journey to become the UK's
            first official Black Santa
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="aspect-[16/10] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
            <img
              src="/images/santa.jpg"
              alt="Frank Skully as Black Santa"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-30"></div>
          </div>
        </div>

        {/* Gallery Grid - 2x2 on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {santaImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-neutral-900 border border-neutral-800 relative overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
