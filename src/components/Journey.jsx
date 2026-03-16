export default function Journey() {
  return (
    <section
      id="journey"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-neutral-950/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            THE TURNING POINT
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
            A Judge's Gamble
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 font-body text-base sm:text-lg text-neutral-300 leading-relaxed">
          <p>
            In 2006, I was convicted alongside a Securicor employee for the
            theft of £25,000. Standing before Judge Quentin Campbell at Inner
            London Crown Court, I expected prison. Instead, I received an
            extraordinary opportunity.
          </p>
          <p>
            Judge Campbell, having learned about the Synergy Theatre Project,
            made an unprecedented decision: rather than immediate incarceration,
            he deferred sentencing and sent me on a theatre tour. This
            remarkable act of judicial discretion would prove transformative.
          </p>
          <p>
            Twenty years later, I have remained offense-free—a testament to the
            power of second chances and the belief one person showed in the
            possibility of redemption through art.
          </p>
        </div>

        {/* Judge's Letter */}
        <div className="border-t border-neutral-900 mt-16 sm:mt-20 pt-16 sm:pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="max-w-xs sm:max-w-sm mx-auto bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                <img
                  src="/images/frank13.jpeg"
                  alt="Judge Quentin Campbell"
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
              <p className="font-body text-[10px] sm:text-xs text-neutral-500 tracking-wider mt-3 sm:mt-4 text-center">
                Judge Quentin Campbell
              </p>
            </div>
            <div>
              <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
                A LETTER FROM THE JUDGE
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-light mb-6 sm:mb-8">
                Full Circle
              </h3>
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 lg:p-10">
                <div className="space-y-3 sm:space-y-4 font-body text-sm sm:text-base text-neutral-300 leading-relaxed italic">
                  <p>
                    "I am so glad that things have worked out well with you. I
                    do not recollect the details of the case that brought you to
                    court but I do remember deferring things to enable you to
                    continue with the theatre project.
                  </p>
                  <p>
                    I had previously learned about the Synergy productions and
                    indeed went to one of their productions at the small theatre
                    in Southwark.
                  </p>
                  <p>
                    The days at court are now for me a thing of the past as I
                    have been retired for twelve years. Sadly in recent years
                    the independence of judges has been substantially eroded and
                    now sentencing follows rigid guidelines allowing judges much
                    less ability to pass sentences that appear to be fair and
                    just in all the circumstances.
                  </p>
                  <p>
                    I doubt whether I would now be permitted to follow the same
                    course in your case.
                  </p>
                  <p>
                    I wish you all the best in the future and hope your career
                    continues to flourish."
                  </p>
                  <p className="text-right not-italic text-neutral-400 mt-4 sm:mt-6">
                    — Quentin Campbell
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
