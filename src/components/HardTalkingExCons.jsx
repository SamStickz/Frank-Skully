export default function HardTalkingExCons() {
  return (
    <section
      id="hard-talking"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-neutral-950/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            GIVING BACK
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
            Hard Talking Ex Cons
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto px-4">
            In 2011, I started my journey to give back to society by founding
            Hard Talking Ex Cons, an organization that provided talks to at-risk
            youth in various settings. By 2012, the Liberal Party had partnered
            with Hard Talking Ex Cons for their London mayoral campaign.
          </p>
        </div>

        {/* Brian Paddick Testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 lg:p-10">
              <div className="space-y-3 sm:space-y-4 font-body text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p className="italic">
                  "The best people to convince youngsters that crime is a waste
                  of time are those who have learnt that lesson the hard way.
                  Young people need to hear from people who they can identify
                  with, not police officers or surgeons but people who come from
                  the same sort of places they are now.
                </p>
                <p className="italic">
                  Hardtalkingexcons are real people with a powerful message that
                  young people hear, not just listen to."
                </p>
                <p className="text-right not-italic text-neutral-400 mt-4 sm:mt-6">
                  — <strong>Brian Paddick</strong>
                  <br />
                  <span className="text-xs sm:text-sm">
                    Liberal Mayor Candidate & Ex Police Deputy Assistant
                    Commissioner
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="max-w-xs sm:max-w-sm mx-auto bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
              <img
                src="/images/frank13.jpeg"
                alt="Brian Paddick x Frank Skully"
                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <p className="font-body text-[10px] sm:text-xs text-neutral-500 tracking-wider mt-3 sm:mt-4 text-center">
              Brian Paddick x Frank Skully
            </p>
          </div>
        </div>

        {/* HMP Brixton Testimonial */}
        <div className="border-t border-neutral-900 mt-16 sm:mt-20 pt-16 sm:pt-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 lg:p-10">
              <div className="space-y-3 sm:space-y-4 font-body text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p className="italic">
                  "Thank you so much for coming in to give a great presentation
                  and inspirational speech. The motivational speech is still
                  being talked about by the men at HMP Brixton.
                </p>
                <p className="italic">
                  As promised please find feedback written by the men about the
                  presentation you delivered. We hope to hold such an event
                  again and hope you will again be interested in inspiring the
                  men at HMP Brixton like you did at the event."
                </p>
                <p className="text-right not-italic text-neutral-400 mt-4 sm:mt-6">
                  — <strong>Tim Fahm</strong>
                  <br />
                  <span className="text-xs sm:text-sm">HMP Brixton</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}