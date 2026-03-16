export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            MY STORY
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
            Every Saint Has a Past,
            <br />
            Every Sinner Has a Future
          </h2>
        </div>

        {/* Criminal History Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          <div>
            <div className="space-y-6 sm:space-y-8 font-body text-base sm:text-lg text-neutral-300 leading-relaxed">
              <div>
                <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-2 sm:mb-3">
                  MID 1980s
                </div>
                <p>
                  After a high profile cash and jewelry heist in Mayfair,
                  London, I ended up in maximum security HM Parkhurst as the
                  prison's youngest prisoner, alongside notorious inmates Reggie
                  Kray and the Yorkshire Ripper.
                </p>
              </div>
              <div>
                <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-2 sm:mb-3">
                  1990s
                </div>
                <p>
                  Arrested for conspiracy to rob cash in transit vans, I was
                  convicted with London gangster Peter Blake (currently the only
                  UK prisoner to be convicted without a jury) and given 9 years.
                </p>
              </div>
              <div>
                <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-2 sm:mb-3">
                  1997
                </div>
                <p>
                  After fleeing prison, I was dubbed "the most wanted in the
                  country" by the Daily Mirror.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6 sm:space-y-8 font-body text-base sm:text-lg text-neutral-300 leading-relaxed">
              <div>
                <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-2 sm:mb-3">
                  1998
                </div>
                <p>
                  After being rearrested, I was given an 8-year consecutive
                  sentence for another cash-in-transit conspiracy plot.
                </p>
              </div>
              <div>
                <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-2 sm:mb-3">
                  2006
                </div>
                <p>
                  After a "last hurrah," I was convicted with a Securicor
                  employee for the theft of £25k from the security company.
                  Instead of being sent to prison, Judge Quentin Campbell sent
                  me on a theatre tour—a decision that changed my life forever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newspaper Clipping */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto">
          <div className="bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
            <img
              src="/images/frank14.jpeg"
              alt="Newspaper clipping - Moment police got their man"
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          <p className="font-body text-[10px] sm:text-xs text-neutral-500 tracking-wider mt-3 sm:mt-4 text-center italic">
            Historical newspaper coverage of the Securicor van raid arrest
          </p>
        </div>
      </div>
    </section>
  );
}
