export default function Philosophy() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-neutral-900 pt-16 sm:pt-20">
          <h3 className="font-display text-3xl sm:text-4xl font-light mb-8 sm:mb-12 text-center">
            Philosophy
          </h3>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 font-body text-base sm:text-lg text-neutral-300 leading-relaxed">
            {/* Police Van Story */}
            <div className="bg-neutral-900/30 border border-neutral-800 p-6 sm:p-8 lg:p-10">
              <p className="italic text-neutral-400 mb-4 sm:mb-6">
                My mum fell over in the snow when I was a baby and a police van
                came to her rescue. They put her in the back of the van with me
                and took her to the hospital. My mum said that was the curse—I
                never stopped riding in the back of police vans after that.
              </p>
            </div>

            <p>
              My journey from defendant to award-winning creative professional
              is not just a personal story—it's the foundation of my unique
              perspective on criminal justice narratives. Having experienced the
              system firsthand and witnessed the transformative power of art, I
              bring authenticity that cannot be taught or researched alone.
            </p>

            <p>
              As a multidisciplinary creative professional with recognition
              across acting, producing, voice-over, and writing, I approach
              every project with a commitment to truth and narrative excellence.
              My work centers on criminal justice themes—stories that require
              nuanced understanding, emotional depth, and unwavering dedication
              to authentic representation.
            </p>

            <p>
              <strong className="text-[#d4af37]">
                Frank Skully consultant services provides authenticity, realism,
                and specialized knowledge to crime dramas and documentaries.
              </strong>
            </p>

            <p>
              I believe great storytelling emerges from the intersection of
              lived experience, rigorous research, and artistic vision. Whether
              consulting on a courtroom drama, performing a complex character,
              lending my voice to documentary narratives, or crafting original
              screenplays, my objective remains constant: to illuminate the
              human stories within our justice system with honesty and depth.
            </p>
          </div>

          {/* Video Section */}
          <div className="border-t border-neutral-900 mt-16 sm:mt-20 pt-16 sm:pt-20">
            <div className="max-w-4xl mx-auto">
              <div className="font-body text-xs sm:text-sm tracking-[0.3em] text-[#d4af37] mb-4 sm:mb-6 text-center">
                FEATURED VIDEO
              </div>
              <div className="aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/7n0LyVpLQkY"
                  title="Frank Skully - Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
