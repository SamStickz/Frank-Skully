import React, { useState, useEffect } from "react";
import { Award, Mail, Menu, X, ArrowRight } from "lucide-react";

export default function CreativePortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const awards = [
    { year: "2024", title: "BBTAS Nominated Best Supporting Actor" },
    { year: "2023", title: "BBTAS Co-Producer of the Year" },
    { year: "2022", title: "Award Winning Voice Over Artist" },
    { year: "2021", title: "Award Winning Writer" },
  ];

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

  const portfolio = [
    {
      title: "Urban Justice",
      category: "Lead Performance",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "The Verdict Chronicles",
      category: "Documentary Narration",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Shades of Law",
      category: "Original Screenplay",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Behind Bars",
      category: "Co-Producer",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=800&fit=crop&q=80",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. I will respond within 24 hours.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-neutral-100"
      style={{
        fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Montserrat', -apple-system, sans-serif; }
        
        .fade-in {
          animation: fadeIn 1.2s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="grain" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-neutral-800/50" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            <div className="font-display text-2xl tracking-wider text-[#d4af37] font-light">
              FRANK SKULLY
            </div>

            <div className="hidden md:flex gap-12 font-body text-sm tracking-widest">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-[#d4af37] transition-colors duration-300"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-[#d4af37] transition-colors duration-300"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-[#d4af37] transition-colors duration-300"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="hover:text-[#d4af37] transition-colors duration-300"
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#d4af37] transition-colors duration-300"
              >
                CONTACT
              </button>
            </div>

            <button
              className="md:hidden text-[#d4af37]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pt-8 pb-4 flex flex-col gap-6 font-body text-sm tracking-widest border-t border-neutral-800/50 mt-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-[#d4af37] transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-[#d4af37] transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-[#d4af37] transition-colors"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-left hover:text-[#d4af37] transition-colors"
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-[#d4af37] transition-colors"
              >
                CONTACT
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6 lg:px-12 pt-24"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 fade-in">
              <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-8 stagger-1 fade-in">
                FRANK SKULLY · CREATIVE PROFESSIONAL
              </div>
              <h1 className="font-display text-6xl lg:text-8xl font-light leading-[1.1] mb-8 stagger-2 fade-in">
                Authentic Narratives
                <br />
                in{" "}
                <span className="italic text-[#d4af37]">Criminal Justice</span>
              </h1>
              <p className="font-body text-lg text-neutral-300 leading-relaxed max-w-2xl mb-12 stagger-3 fade-in">
                Bringing depth, authenticity, and compelling storytelling to
                dramas and films that explore the complexities of justice, law,
                and the human condition.
              </p>
              <div className="flex flex-wrap gap-6 stagger-4 fade-in">
                <button
                  onClick={() => scrollToSection("services")}
                  className="group font-body px-10 py-4 bg-[#d4af37] text-[#0a0a0a] text-sm tracking-widest font-medium hover:bg-[#c19d2f] transition-all duration-300 flex items-center gap-3"
                >
                  EXPLORE SERVICES
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="font-body px-10 py-4 border border-neutral-700 hover:border-[#d4af37] text-sm tracking-widest transition-all duration-300"
                >
                  VIEW WORK
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 fade-in stagger-4">
              <div className="aspect-[3/4] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 relative overflow-hidden group">
                {/* REPLACE THIS SECTION WITH YOUR PROFESSIONAL HEADSHOT */}
                {/* Example: <img src="path-to-your-image.jpg" alt="Professional Headshot" className="w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-32 h-32 border border-neutral-700 rounded-full mb-6 flex items-center justify-center">
                    <Award size={48} className="text-[#d4af37]" />
                  </div>
                  <p className="font-body text-sm text-neutral-400 tracking-wider">
                    ADD PROFESSIONAL PORTRAIT HERE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 px-6 lg:px-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
              RECOGNITION
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light">
              Accolades
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-12 hover:bg-neutral-950 transition-colors duration-500 group"
              >
                <div className="font-display text-6xl text-[#d4af37] mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {award.year}
                </div>
                <div className="h-px w-12 bg-[#d4af37] mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="font-body text-sm text-neutral-300 leading-relaxed">
                  {award.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section - A Judge's Gamble */}
      <section className="py-32 px-6 lg:px-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
                THE JOURNEY
              </div>
              <h2 className="font-display text-5xl lg:text-6xl font-light mb-8">
                A Judge's Gamble
              </h2>
              <div className="space-y-6 font-body text-lg text-neutral-300 leading-relaxed">
                <p>
                  After release, I struggled. Within two years I was facing a
                  £25k theft charge from Securicor cash services, but a judge's
                  unconventional decision changed everything.
                </p>
                <p>
                  Theatre director Esther Baker's testimony led to a theatre
                  tour with Synergy Theatre Project instead of prison custody.
                  The opportunity proved pivotal and I remained offence-free for
                  the next 20 years.
                </p>
                <p>
                  This moment transformed my life's trajectory, proving that art
                  and second chances can redirect destinies. It's why I bring
                  unparalleled authenticity to criminal justice narratives—I've
                  lived the complexity of that system and witnessed its capacity
                  for redemption.
                </p>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="aspect-[4/5] max-w-xs sm:max-w-sm lg:max-w-md mx-auto bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                <img
                  src="/images/frank12.jpeg"
                  alt="Judge Quintin Campbell"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
              </div>
              <p className="font-body text-xs text-neutral-500 tracking-wider mt-4 text-center">
                Judge Quintin Campbell
              </p>
            </div>
          </div>

          {/* Archival Photos Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="max-w-md mx-auto w-full">
              <div className="aspect-[4/3] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                <img
                  src="/images/frank7.jpeg"
                  alt="Recreation at Blantyre House"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
              </div>
              <p className="font-body text-xs text-neutral-500 tracking-wider mt-4 text-center">
                Recreation activities at Blantyre House - part of the purposeful
                activity program
              </p>
            </div>
            <div className="max-w-md mx-auto w-full">
              <div className="aspect-[4/3] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                <img
                  src="/images/frank6.jpeg"
                  alt="Building skills through recreation"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
              </div>
              <p className="font-body text-xs text-neutral-500 tracking-wider mt-4 text-center">
                Inmates engaged in recreational activities - building community
                and skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blantyre House Section */}
      <section className="py-32 px-6 lg:px-12 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
              TRANSFORMATION
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light mb-8">
              Blantyre House
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] max-w-md mx-auto bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                <img
                  src="/images/frank8.jpeg"
                  alt="The Blantyre House Prison"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6 font-body text-lg text-neutral-300 leading-relaxed">
                <p>
                  According to a Home Affairs Committee report prepared after a
                  large scale prison inspection in 2000, just 8% of prisoners
                  released from Blantyre House reoffended within two years
                  against a national average of 57%.
                </p>
                <p>
                  The report adds that prisoners spent 43.6 hours a week on
                  "purposeful activity", compared with a target of 36 hours and
                  a prison service average of 23 hours.
                </p>
                <p>
                  A contributing factor to Blantyre's success was perhaps that
                  officials could select their inmates. Blantyre House's
                  criteria for acceptance: no convictions for arson, sex
                  offences or terrorism.
                </p>
                <p className="italic text-neutral-400">
                  "Everyone wanted to go to Blantyre, it became the Eton School
                  of the prison service."
                </p>
              </div>
            </div>
          </div>

          {/* Inside Blantyre House - Theatre Work */}
          <div className="border-t border-neutral-900 pt-20">
            <h3 className="font-display text-4xl font-light mb-12 text-center">
              Inside Blantyre House
            </h3>
            <p className="font-body text-lg text-neutral-300 text-center mb-16 max-w-3xl mx-auto">
              I was part of a team of inmates who performed pantomimes for kids
              from local schools. Theatre became a pathway to redemption and
              self-discovery.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Koestler Award Photo */}
              <div className="lg:col-span-1 max-w-sm mx-auto w-full">
                <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                  <img
                    src="/images/frank10.jpeg"
                    alt="Frank at Blantyre House 1995"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
                </div>
                <p className="font-body text-xs text-neutral-500 tracking-wider mt-4">
                  A Koestler award-winning photo taken at Blantyre House in 1995
                  by photographer Mick Duff
                </p>
              </div>

              {/* Prince Charming Performance */}
              <div className="lg:col-span-2 max-w-2xl mx-auto w-full">
                <div className="aspect-[16/10] bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                  <img
                    src="/images/frank11.jpeg"
                    alt="Frank playing Prince Charming"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
                </div>
                <p className="font-body text-xs text-neutral-500 tracking-wider mt-4">
                  Playing Prince Charming in a prison production for local
                  school children
                </p>
              </div>
            </div>
          </div>

          {/* Judge's Letter */}
          <div className="border-t border-neutral-900 mt-20 pt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="aspect-[3/4] max-w-sm mx-auto bg-neutral-900 border border-neutral-800 relative overflow-hidden group">
                  <img
                    src="/images/frank12.jpeg"
                    alt="Judge Quentin Campbell"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
                </div>
                <p className="font-body text-xs text-neutral-500 tracking-wider mt-4 text-center">
                  Judge Quentin Campbell
                </p>
              </div>
              <div>
                <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
                  A LETTER FROM THE JUDGE
                </div>
                <h3 className="font-display text-3xl font-light mb-8">
                  Full Circle
                </h3>
                <div className="bg-neutral-900/50 border border-neutral-800 p-8 lg:p-10">
                  <div className="space-y-4 font-body text-base text-neutral-300 leading-relaxed italic">
                    <p>
                      "I am so glad that things have worked out well with you. I
                      do not recollect the details of the case that brought you
                      to court but I do remember deferring things to enable you
                      to continue with the theatre project.
                    </p>
                    <p>
                      I had previously learned about the Synergy productions and
                      indeed went to one of their productions at the small
                      theatre in Southwark.
                    </p>
                    <p>
                      The days at court are now for me a thing of the past as I
                      have been retired for twelve years. Sadly in recent years
                      the independence of judges has been substantially eroded
                      and now sentencing follows rigid guidelines allowing
                      judges much less ability to pass sentences that appear to
                      be fair and just in all the circumstances.
                    </p>
                    <p>
                      I doubt whether I would now be permitted to follow the
                      same course in your case.
                    </p>
                    <p>
                      I wish you all the best in the future and hope your career
                      continues to flourish."
                    </p>
                    <p className="text-right not-italic text-neutral-400 mt-6">
                      — Quentin Campbell
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-neutral-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
              BACKGROUND
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light mb-12">
              Philosophy
            </h2>
          </div>
          <div className="space-y-8 font-body text-lg text-neutral-300 leading-relaxed">
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
              I believe great storytelling emerges from the intersection of
              lived experience, rigorous research, and artistic vision. Whether
              consulting on a courtroom drama, performing a complex character,
              lending my voice to documentary narratives, or crafting original
              screenplays, my objective remains constant: to illuminate the
              human stories within our justice system with honesty and depth.
            </p>
            <p>
              From script development through production, I collaborate with
              filmmakers, writers, and production teams to ensure their projects
              achieve both artistic merit and authentic representation of
              criminal justice realities—because I've lived both sides of that
              narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
              EXPERTISE
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light mb-6">
              Services
            </h2>
            <p className="font-body text-neutral-300 max-w-2xl mx-auto">
              Comprehensive creative services for productions exploring criminal
              justice narratives
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-px bg-neutral-900">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-12 lg:p-16 hover:bg-neutral-950 transition-colors duration-500 group"
              >
                <h3 className="font-display text-4xl font-light mb-6 group-hover:text-[#d4af37] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-body text-neutral-300 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.specialties.map((specialty, i) => (
                    <div
                      key={i}
                      className="font-body text-sm text-neutral-400 flex items-center gap-3"
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

      {/* Portfolio Section */}
      <section id="work" className="py-32 px-6 lg:px-12 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
              SELECTED PROJECTS
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light">
              Portfolio
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[16/10] mb-6 bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-2">
                  {item.category} · {item.year}
                </div>
                <h3 className="font-display text-3xl font-light group-hover:text-[#d4af37] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-body text-xs tracking-[0.3em] text-[#d4af37] mb-4">
              GET IN TOUCH
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light mb-6">
              Collaborate
            </h2>
            <p className="font-body text-neutral-300 max-w-2xl mx-auto">
              Interested in bringing authenticity to your criminal justice
              narrative? Let's discuss your project.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-body text-xs tracking-widest text-neutral-500 mb-3">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors font-body"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest text-neutral-500 mb-3">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors font-body"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-xs tracking-widest text-neutral-500 mb-3">
                SERVICE
              </label>
              <select
                required
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full px-0 py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors font-body"
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
                <option value="multiple" className="bg-[#0a0a0a]">
                  Multiple Services
                </option>
              </select>
            </div>
            <div>
              <label className="block font-body text-xs tracking-widest text-neutral-500 mb-3">
                MESSAGE
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-0 py-4 bg-transparent border-b border-neutral-800 focus:border-[#d4af37] focus:outline-none transition-colors resize-none font-body"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group font-body w-full px-10 py-5 bg-[#d4af37] text-[#0a0a0a] text-sm tracking-widest font-medium hover:bg-[#c19d2f] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail size={18} />
              SEND INQUIRY
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-display text-2xl tracking-wider text-[#d4af37] mb-6 font-light">
            FRANK SKULLY
          </div>
          <p className="font-body text-sm text-neutral-600 tracking-wider">
            © 2024 All Rights Reserved · Specializing in Criminal Justice
            Narratives
          </p>
        </div>
      </footer>
    </div>
  );
}
