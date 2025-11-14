import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl"
          style={{
            background: 'rgba(15, 23, 42, 0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Soft floating glows */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/6 via-purple-500/3 to-transparent rounded-3xl blur-3xl opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#A855F7]/4 via-transparent to-pink-400/3 rounded-3xl blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight" style={{ color: '#FFFFFF' }}>
              Have a Project in Mind?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: '#E2E8F0' }}>
              Let's bring your vision to life with pixel-perfect design and cutting-edge development.
            </p>

            {/* Contact Cards - Stack on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {/* WhatsApp */}
              <div
                className="group rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2" style={{ color: '#FFFFFF' }}>Chat on WhatsApp</h3>
                <p className="text-xs sm:text-sm mb-4 sm:mb-5 opacity-80" style={{ color: '#E2E8F0' }}>Instant reply • 24/7</p>
                <a
                  href="https://wa.me/919842724034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-400 active:bg-green-600 text-white py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 min-h-12"
                >
                  Start Chat
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Call – Hero Card (Centered on mobile) */}
              <div
                className="group rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-700 hover:scale-110 active:scale-105 shadow-2xl relative overflow-hidden order-first md:order-none"
                style={{
                  background: 'rgba(192, 132, 252, 0.12)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(192, 132, 252, 0.25)',
                  boxShadow: '0 30px 80px rgba(192, 132, 252, 0.25)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/15 to-[#A855F7]/8 blur-xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C084FC] to-[#A855F7] opacity-70"></div>

                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#C084FC] to-[#A855F7] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-2xl shadow-purple-500/40">
                    <Phone className="text-white" size={26} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2" style={{ color: '#FFFFFF' }}>Call Us Directly</h3>
                  <p className="text-base sm:text-lg font-bold mb-5 sm:mb-6" style={{ color: '#E0AAFF' }}>+91 8438829844</p>
                  <a
                    href="tel:+91 8438829844"
                    className="w-full bg-gradient-to-r from-[#C084FC] to-[#A855F7] hover:from-[#D8B4FE] hover:to-[#C084FC] active:from-[#B197FC] active:to-[#A855F7] text-white py-3.5 rounded-lg font-bold text-sm transition-all shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 backdrop-blur-sm min-h-12"
                  >
                    Call Now
                    <Phone size={16} className="animate-pulse" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="group rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#C084FC] to-[#A855F7] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2" style={{ color: '#FFFFFF' }}>Email Us</h3>
                <p className="text-xs sm:text-sm mb-4 sm:mb-5 opacity-80" style={{ color: '#E2E8F0' }}>Response in 1 hour</p>
                <a
                  href="mailto:info@ecronx.com"
                  className="w-full bg-gradient-to-r from-[#C084FC] to-[#A855F7] hover:from-[#D8B4FE] hover:to-[#C084FC] active:from-[#B197FC] active:to-[#A855F7] text-white py-3.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 backdrop-blur-sm min-h-12"
                >
                  Send Email
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Main CTA Button - Full width on mobile */}
            <button className="group relative w-full sm:w-auto bg-gradient-to-r from-[#C084FC]/80 to-[#A855F7]/80 hover:from-[#C084FC] hover:to-[#A855F7] active:from-[#B197FC] active:to-[#A855F7] text-white px-8 sm:px-12 py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 sm:gap-4 mx-auto transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 active:scale-95 backdrop-blur-xl border border-white/10 min-h-14">
              <span className="relative z-10">Let's Create Something Amazing</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-400 relative z-10" size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;