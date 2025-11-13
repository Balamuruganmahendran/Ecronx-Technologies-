import { ArrowRight, Sparkles, TrendingUp, Users, Check, Code2, Palette, Rocket, HeadphonesIcon } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F172A' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:py-20 md:py-24 lg:py-28 min-h-screen flex items-center">
        {/* Animated background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium" style={{ color: '#14B8A6' }}>
                <Sparkles size={14} className="animate-pulse" />
                <span className="hidden xs:inline">Trusted by </span>500+ Businesses
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span style={{ color: '#F1F5F9' }}>Empowering Digital </span>
                <span
                  style={{
                    background: 'linear-gradient(to right, #14B8A6, #2DD4BF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Excellence
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: '#94A3B8' }}>
                Ecronx Technologies — Salem's leading Web Design, Mobile App & Digital Marketing company since 1995. We deliver result-driven digital solutions that grow your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group bg-teal-500 hover:bg-[#2DD4BF] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 text-sm sm:text-base min-h-12">
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 text-slate-300 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-slate-800/90 transition-all duration-300 text-sm sm:text-base min-h-12">
                  View Portfolio
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-slate-700">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xl sm:text-2xl font-bold mb-1" style={{ color: '#F1F5F9' }}>
                    <TrendingUp size={18} style={{ color: '#14B8A6' }} />
                    28+
                  </div>
                  <div className="text-xs sm:text-sm" style={{ color: '#94A3B8' }}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xl sm:text-2xl font-bold mb-1" style={{ color: '#F1F5F9' }}>
                    <Users size={18} style={{ color: '#14B8A6' }} />
                    1500+
                  </div>
                  <div className="text-xs sm:text-sm" style={{ color: '#94A3B8' }}>Happy Clients</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#F1F5F9' }}>5000+</div>
                  <div className="text-xs sm:text-sm" style={{ color: '#94A3B8' }}>Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Floating Service Cards */}
            <div className="relative mt-8 md:mt-0">
              <div 
                className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
                style={{ 
                  background: 'rgba(30, 41, 59, 0.7)', 
                  backdropFilter: 'blur(12px)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-3xl -z-10"></div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    { icon: Code2, title: "Custom Web Development", desc: "Responsive & Modern", badge: "100%" },
                    { icon: Rocket, title: "Mobile Apps (iOS & Android)", desc: "Flutter & Native", badge: "Native Performance" },
                    { icon: TrendingUp, title: "SEO & Digital Marketing", desc: "Google Partner Agency", badge: "Top Rankings" }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className={`bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:bg-slate-800/95 transition-all duration-300 hover:scale-105 ${
                        i === 1 ? 'ml-0 sm:ml-8' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <item.icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm sm:text-base truncate" style={{ color: '#F1F5F9' }}>{item.title}</div>
                          <div className="text-xs sm:text-sm truncate" style={{ color: '#94A3B8' }}>{item.desc}</div>
                        </div>
                        <div className="font-bold text-xs sm:text-sm" style={{ color: '#14B8A6' }}>{item.badge}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 sm:py-20 px-4" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F1F5F9' }}>
              Our Core Expertise
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              Full-stack digital solutions trusted by businesses in Salem, Tamil Nadu & across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Palette, title: "Stunning Web Design", desc: "Pixel-perfect, responsive websites that convert visitors into customers. Built with modern frameworks." },
              { icon: Rocket, title: "Mobile App Development", desc: "Native & Cross-platform apps (Flutter) for Android & iOS. Published on Play Store & App Store." },
              { icon: TrendingUp, title: "Result-Driven SEO & Ads", desc: "Rank #1 on Google. Certified Google Ads & SEO experts delivering measurable ROI." }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i}
                  className="group rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300"
                  style={{ 
                    background: 'rgba(30, 41, 59, 0.7)', 
                    backdropFilter: 'blur(12px)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)' 
                  }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#F1F5F9' }}>{item.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#94A3B8' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 px-4" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F1F5F9' }}>
              Choose Your Growth Plan
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              Transparent pricing. No hidden charges. Customized packages available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="rounded-2xl p-6 sm:p-8 hover:border-teal-500/50 transition-all duration-300" style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#F1F5F9' }}>Basic Website</h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: '#94A3B8' }}>Perfect for startups & small business</p>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-5xl font-bold" style={{ color: '#F1F5F9' }}>₹25,000</span>
                <span className="text-sm sm:text-base" style={{ color: '#94A3B8' }}> onwards</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                {["Responsive Design", "5-10 Pages", "Contact Form", "1 Year Hosting"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3" style={{ color: '#94A3B8' }}>
                    <Check className="text-teal-500 flex-shrink-0" size={18} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-800 border border-slate-700 text-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base min-h-12">
                Get Quote
              </button>
            </div>

            {/* Professional - Most Popular */}
            <div className="relative rounded-2xl p-6 sm:p-8 transform md:scale-105 shadow-2xl" style={{ background: 'rgba(30, 41, 59, 0.9)', backdropFilter: 'blur(12px)', border: '2px solid #14B8A6' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#F1F5F9' }}>E-Commerce / App</h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: '#94A3B8' }}>For serious businesses</p>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-5xl font-bold" style={{ color: '#F1F5F9' }}>₹75,000</span>
                <span className="text-sm sm:text-base" style={{ color: '#94A3B8' }}> onwards</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                {["Custom Design & Development", "Mobile App (Android + iOS)", "Payment Gateway", "SEO Optimization", "1 Year Free Support"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3" style={{ color: '#F1F5F9' }}>
                    <Check className="text-teal-400 flex-shrink-0" size={18} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-teal-500 hover:bg-[#2DD4BF] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-teal-500/50 text-sm sm:text-base min-h-12">
                Let's Talk
              </button>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl p-6 sm:p-8 hover:border-teal-500/50 transition-all duration-300" style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#F1F5F9' }}>Digital Marketing</h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: '#94A3B8' }}>Complete online dominance</p>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-5xl font-bold" style={{ color: '#F1F5F9' }}>Custom</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                {["SEO + Google Ads", "Social Media Management", "WhatsApp & Email Marketing", "Monthly Reports", "Dedicated Manager"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3" style={{ color: '#94A3B8' }}>
                    <Check className="text-teal-500 flex-shrink-0" size={18} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-800 border border-slate-700 text-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base min-h-12">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl"
            style={{ 
              background: 'rgba(30, 41, 59, 0.7)', 
              backdropFilter: 'blur(12px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)' 
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#F1F5F9' }}>
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              Join 1500+ happy clients who trusted Ecronx Technologies (formerly Sigma Computers) since 1995.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="group bg-teal-500 hover:bg-[#2DD4BF] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 text-sm sm:text-base min-h-12">
                Get Free Consultation
                <HeadphonesIcon className="group-hover:animate-pulse" size={18} />
              </button>
              <button className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 text-slate-300 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-slate-800/90 transition-all duration-300 text-sm sm:text-base min-h-12">
                Call +91 98427 24034
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;