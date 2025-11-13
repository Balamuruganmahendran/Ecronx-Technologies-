// import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

// const CTASection = () => {
//   return (
//     <section className="py-20 px-4 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
//           <div className="mb-8">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Have a Project in Mind?
//             </h2>
//             <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
//               Let's discuss your ideas and bring them to life. Our team of experts is ready to help you achieve your digital goals.
//             </p>
//           </div>

//           {/* Contact Options */}
//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
//               <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <MessageCircle className="text-white" size={24} />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 mb-2">Chat with Us</h3>
//               <p className="text-slate-600 text-sm mb-3">Quick responses via WhatsApp</p>
//               <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-colors">
//                 Start Chat
//               </button>
//             </div>

//             <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
//               <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Phone className="text-white" size={24} />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
//               <p className="text-slate-600 text-sm mb-3">+91 98427 24034</p>
//               <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-colors">
//                 Call Now
//               </button>
//             </div>

//             <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
//               <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Mail className="text-white" size={24} />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
//               <p className="text-slate-600 text-sm mb-3">info@ecronx.com</p>
//               <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-colors">
//                 Send Email
//               </button>
//             </div>
//           </div>

//           {/* Main CTA Button */}
//           <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 mx-auto transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105">
//             Let's Work Together
//             <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;



import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 md:py-28" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl"
          style={{
            background: 'rgba(15, 23, 42, 0.25)',        // Super light tint
            backdropFilter: 'blur(20px)',                // Stronger blur = more glass
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Extremely soft floating lavender glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/6 via-purple-500/3 to-transparent rounded-3xl blur-3xl opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#A855F7]/4 via-transparent to-pink-400/3 rounded-3xl blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#FFFFFF' }}>
              Have a Project in Mind?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: '#E2E8F0' }}>
              Let's bring your vision to life with pixel-perfect design and cutting-edge development.
            </p>

            {/* Ultra-light glass cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* WhatsApp */}
              <div
                className="group rounded-2xl p-8 transition-all duration-500 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Chat on WhatsApp</h3>
                <p className="text-sm mb-5 opacity-80" style={{ color: '#E2E8F0' }}>Instant reply • 24/7</p>
                <a
                  href="https://wa.me/919842724034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-400 text-white py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Start Chat
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Call – Floating Royal Glass Card */}
              <div
                className="group rounded-2xl p-8 md:p-10 transition-all duration-700 hover:scale-110 shadow-2xl relative overflow-hidden order-first md:order-none"
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
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C084FC] to-[#A855F7] rounded-xl flex items-center justify-center mx-auto mb-5 shadow-2xl shadow-purple-500/40">
                    <Phone className="text-white" size={30} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Call Us Directly</h3>
                  <p className="text-lg font-bold mb-6" style={{ color: '#E0AAFF' }}>+91 98427 24034</p>
                  <a
                    href="tel:+919842724034"
                    className="w-full bg-gradient-to-r from-[#C084FC] to-[#A855F7] hover:from-[#D8B4FE] hover:to-[#C084FC] text-white py-3.5 rounded-lg font-bold text-sm transition-all shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    Call Now
                    <Phone size={16} className="animate-pulse" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="group rounded-2xl p-8 transition-all duration-500 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#C084FC] to-[#A855F7] rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Email Us</h3>
                <p className="text-sm mb-5 opacity-80" style={{ color: '#E2E8F0' }}>Response in 1 hour</p>
                <a
                  href="mailto:info@ecronx.com"
                  className="w-full bg-gradient-to-r from-[#C084FC] to-[#A855F7] hover:from-[#D8B4FE] hover:to-[#C084FC] text-white py-3.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  Send Email
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Floating Glass Main CTA */}
            <button className="group relative bg-gradient-to-r from-[#C084FC]/80 to-[#A855F7]/80 hover:from-[#C084FC] hover:to-[#A855F7] text-white px-12 py-4 rounded-xl font-bold text-lg flex items-center gap-4 mx-auto transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 hover:scale-110 backdrop-blur-xl border border-white/10">
              <span className="relative z-10">Let's Create Something Amazing</span>
              <ArrowRight className="group-hover:translate-x-3 transition-transform duration-400 relative z-10" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;