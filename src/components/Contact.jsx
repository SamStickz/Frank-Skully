import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgpjgbd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] mb-3 sm:mb-4">
            GET IN TOUCH
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Collaborate
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto px-4">
            Interested in bringing authenticity to your criminal justice
            narrative? Let's discuss your project.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-16 space-y-4">
            <div className="text-[#d4af37] text-5xl mb-4">✓</div>
            <h3 className="font-display text-2xl font-light">Message Sent</h3>
            <p className="font-body text-neutral-400">
              Thank you for your inquiry. I'll respond within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 font-body text-xs tracking-widest text-[#d4af37] underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label className="block font-body text-[10px] sm:text-xs tracking-widest text-neutral-500 mb-2 sm:mb-3">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors font-body text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-body text-[10px] sm:text-xs tracking-widest text-neutral-500 mb-2 sm:mb-3">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors font-body text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-[10px] sm:text-xs tracking-widest text-neutral-500 mb-2 sm:mb-3">
                SERVICE
              </label>
              <select
                required
                name="projectType"
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors font-body text-sm sm:text-base"
              >
                <option value="" className="bg-[#0a0a0a]">
                  Select a service
                </option>
                <option value="advisory" className="bg-[#0a0a0a]">
                  Creative Advisory
                </option>
                <option value="acting" className="bg-[#0a0a0a]">
                  Acting
                </option>
                <option value="voiceover" className="bg-[#0a0a0a]">
                  Voice-Over
                </option>
                <option value="writing" className="bg-[#0a0a0a]">
                  Writing
                </option>
              </select>
            </div>

            <div>
              <label className="block font-body text-[10px] sm:text-xs tracking-widest text-neutral-500 mb-2 sm:mb-3">
                MESSAGE
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors resize-none font-body text-sm sm:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === "error" && (
              <p className="font-body text-sm text-red-400 text-center">
                Something went wrong. Please try again or email directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group font-body w-full px-8 sm:px-10 py-4 sm:py-5 bg-[#d4af37] text-[#0a0a0a] text-xs sm:text-sm tracking-widest font-medium hover:bg-[#c19d2f] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              {status === "submitting" ? "SENDING..." : "SEND INQUIRY"}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]"
              />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
