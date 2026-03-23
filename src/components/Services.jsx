export default function Services() {
  const services = [
    {
      title: "Creative Advisory",
      description:
        "Expert guidance for dramas and films with criminal justice themes. From script development to production, I provide insights that ensure authenticity, narrative depth, and compelling storytelling that resonates with audiences.",
      specialties: [
        "Script Consultation",
        "Story Development",
        "Character Authenticity",
        "Production Insight",
      ],
    },
    {
      title: "Acting",
      description:
        "Award-nominated performances that bring nuance and depth to complex characters. Specialized in dramatic roles that demand emotional range and authentic portrayal of individuals within the justice system.",
      specialties: [
        "Supporting Roles",
        "Lead Characters",
        "Dramatic Performance",
        "Character Study",
      ],
    },
    {
      title: "Voice-Over Artistry",
      description:
        "Distinguished voice work for documentaries, narrations, and character performances. An award-winning approach that delivers clarity, emotion, and authoritative presence across diverse projects.",
      specialties: [
        "Documentary Narration",
        "Character Voices",
        "Commercial Work",
        "Audio Drama",
      ],
    },
    {
      title: "Writing",
      description:
        "Compelling narratives with a focus on criminal justice themes. From original screenplays to script consultation, I craft stories that balance authenticity with dramatic tension and meaningful social commentary.",
      specialties: [
        "Screenwriting",
        "Script Development",
        "Story Consulting",
        "Dialogue Refinement",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            EXPERTISE
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Services
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto px-4">
            Comprehensive creative services for productions exploring criminal
            justice narratives
          </p>
        </div>

        {/* Consultant Services Intro */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <p className="font-body text-lg sm:text-xl text-[#d4af37] text-center mb-8 sm:mb-12 px-4 leading-relaxed">
            Frank Skully consultant services provides authenticity, realism, and
            specialized knowledge to crime dramas and documentaries.
          </p>

          {/* Art Imitates Life Video */}
          <div className="aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden mb-4 sm:mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BL-SlKVoGro"
              title="Art Imitates Life by Frank Skully"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-light mb-2 text-[#d4af37]">
              Art Imitates Life
            </h3>
            <p className="font-body text-sm sm:text-base text-neutral-400">
              by Frank Skully
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-neutral-900">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] p-8 sm:p-12 lg:p-16 hover:bg-neutral-950 transition-colors duration-500 group"
            >
              <h3 className="font-display text-3xl sm:text-4xl font-light mb-4 sm:mb-6 group-hover:text-[#d4af37] transition-colors duration-500">
                {service.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 sm:mb-8">
                {service.description}
              </p>
              <div className="space-y-2 sm:space-y-3">
                {service.specialties.map((specialty, i) => (
                  <div
                    key={i}
                    className="font-body text-xs sm:text-sm text-neutral-400 flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-1 h-1 bg-[#d4af37] opacity-50"></div>
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
