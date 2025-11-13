// import { ArrowRight, Sparkles, TrendingUp, Users, Check, Zap, Shield, Globe, Code2, Palette, Rocket, HeadphonesIcon } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white py-20 px-4 min-h-screen flex items-center">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 bg-indigo-50 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2 text-sm text-indigo-700">
//                 <Sparkles size={16} className="animate-pulse" />
//                 <span>Trusted by 500+ Businesses Across India</span>
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
//                 Empowering Digital{' '}
//                 <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
//                   Excellence
//                 </span>
//               </h1>

//               <p className="text-xl text-slate-600 leading-relaxed">
//                 Ecronx Technologies — Salem's leading Web Design, Mobile App & Digital Marketing company since 1995. We deliver result-driven digital solutions that grow your business.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4">
//                 <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105">
//                   Start Your Project
//                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                 </button>
//                 <button className="bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300">
//                   View Portfolio
//                 </button>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
//                 <div>
//                   <div className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-1">
//                     <TrendingUp size={20} className="text-green-500" />
//                     28+
//                   </div>
//                   <div className="text-sm text-slate-500">Years Experience</div>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-1">
//                     <Users size={20} className="text-indigo-500" />
//                     1500+
//                   </div>
//                   <div className="text-sm text-slate-500">Happy Clients</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-slate-900 mb-1">5000+</div>
//                   <div className="text-sm text-slate-500">Projects Delivered</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Visual */}
//             <div className="relative">
//               <div className="relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-2xl">
//                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-cyan-50/50 rounded-3xl"></div>

//                 <div className="relative space-y-6">
//                   <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
//                         <Code2 className="text-white" size={24} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-slate-900 font-semibold">Custom Web Development</div>
//                         <div className="text-slate-600 text-sm">Responsive & Modern</div>
//                       </div>
//                       <div className="text-green-500 font-bold">100%</div>
//                     </div>
//                   </div>

//                   <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ml-8">
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
//                         <Rocket className="text-white" size={24} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-slate-900 font-semibold">Mobile Apps (iOS & Android)</div>
//                         <div className="text-slate-600 text-sm">Flutter & Native</div>
//                       </div>
//                       <div className="text-green-500 font-bold">Native Performance</div>
//                     </div>
//                   </div>

//                   <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                         <TrendingUp className="text-white" size={24} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-slate-900 font-semibold">SEO & Digital Marketing</div>
//                         <div className="text-slate-600 text-sm">Google Partner Agency</div>
//                       </div>
//                       <div className="text-green-500 font-bold">Top Rankings</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Our Core Expertise
//             </h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               Full-stack digital solutions trusted by businesses in Salem, Tamil Nadu & across India
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="group bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:scale-105">
//               <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <Palette className="text-white" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-4">Stunning Web Design</h3>
//               <p className="text-slate-600 leading-relaxed">
//                 Pixel-perfect, responsive websites that convert visitors into customers. Built with modern frameworks.
//               </p>
//             </div>

//             <div className="group bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
//               <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <Rocket className="text-white" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile App Development</h3>
//               <p className="text-slate-600 leading-relaxed">
//                 Native & Cross-platform apps (Flutter) for Android & iOS. Published on Play Store & App Store.
//               </p>
//             </div>

//             <div className="group bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:scale-105">
//               <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <TrendingUp className="text-white" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-4">Result-Driven SEO & Ads</h3>
//               <p className="text-slate-600 leading-relaxed">
//                 Rank #1 on Google. Certified Google Ads & SEO experts delivering measurable ROI.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services / Pricing Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Choose Your Growth Plan
//             </h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               Transparent pricing. No hidden charges. Customized packages available.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {/* Basic */}
//             <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic Website</h3>
//               <p className="text-slate-500 mb-6">Perfect for startups & small business</p>
//               <div className="mb-6">
//                 <span className="text-5xl font-bold text-slate-900">₹25,000</span>
//                 <span className="text-slate-500"> onwards</span>
//               </div>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> Responsive Design</li>
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> 5-10 Pages</li>
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> Contact Form</li>
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> 1 Year Hosting</li>
//               </ul>
//               <button className="w-full bg-white/80 border border-slate-200 text-slate-700 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300">
//                 Get Quote
//               </button>
//             </div>

//             {/* Professional - Most Popular */}
//             <div className="bg-white/60 backdrop-blur-sm border-2 border-indigo-500/50 rounded-2xl p-8 transform scale-105 relative">
//               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                 Most Popular
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-2">E-Commerce / App</h3>
//               <p className="text-slate-600 mb-6">For serious businesses</p>
//               <div className="mb-6">
//                 <span className="text-5xl font-bold text-slate-900">₹75,000</span>
//                 <span className="text-slate-600"> onwards</span>
//               </div>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center gap-3 text-slate-900"><Check className="text-green-500" size={20} /> Custom Design & Development</li>
//                 <li className="flex items-center gap-3 text-slate-900"><Check className="text-green-500" size={20} /> Mobile App (Android + iOS)</li>
//                 <li className="flex items-center gap-3 text-slate-900"><Check className="text-green-500" size={20} /> Payment Gateway</li>
//                 <li className="flex items-center gap-3 text-slate-900"><Check className="text-green-500" size={20} /> SEO Optimization</li>
//                 <li className="flex items-center gap-3 text-slate-900"><Check className="text-green-500" size={20} /> 1 Year Free Support</li>
//               </ul>
//               <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40">
//                 Let's Talk
//               </button>
//             </div>

//             {/* Enterprise */}
//             <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-slate-900 mb-2">Digital Marketing</h3>
//               <p className="text-slate-500 mb-6">Complete online dominance</p>
//               <div className="mb-6">
//                 <span className="text-5xl font-bold text-slate-900">Custom</span>
//               </div>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> SEO + Google Ads</li>
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> Social Media Management</li>
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> WhatsApp & Email Marketing</li>
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> Monthly Reports</li>
//                 <li className="flex items-center gap-3 text-slate-600"><Check className="text-green-500" size={20} /> Dedicated Manager</li>
//               </ul>
//               <button className="w-full bg-white/80 border border-slate-200 text-slate-700 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-4 bg-slate-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//               Ready to Grow Your Business Online?
//             </h2>
//             <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
//               Join 1500+ happy clients who trusted Ecronx Technologies (formerly Sigma Computers) since 1995.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105">
//                 Get Free Consultation
//                 <HeadphonesIcon className="group-hover:shake" size={20} />
//               </button>
//               <button className="bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300">
//                 Call +91 98427 24034
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;


import { ArrowRight, Sparkles, TrendingUp, Users, Check, Code2, Palette, Rocket, HeadphonesIcon } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F172A' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 min-h-screen flex items-center">
        {/* Animated background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-4 py-2 text-sm font-medium" style={{ color: '#14B8A6' }}>
                <Sparkles size={16} className="animate-pulse" />
                <span>Trusted by 500+ Businesses Across India</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ color: '#F1F5F9' }}>
                Empowering Digital{' '}
                <span style={{ background: 'linear-gradient(to right, #14B8A6, #2DD4BF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Excellence
                </span>
              </h1>

              <p className="text-xl leading-relaxed" style={{ color: '#94A3B8' }}>
                Ecronx Technologies — Salem's leading Web Design, Mobile App & Digital Marketing company since 1995. We deliver result-driven digital solutions that grow your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group bg-teal-500 hover:bg-[#2DD4BF] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105">
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800/90 transition-all duration-300">
                  View Portfolio
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div>
                  <div className="flex items-center gap-2 text-2xl font-bold mb-1" style={{ color: '#F1F5F9' }}>
                    <TrendingUp size={20} style={{ color: '#14B8A6' }} />
                    28+
                  </div>
                  <div className="text-sm" style={{ color: '#94A3B8' }}>Years Experience</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-2xl font-bold mb-1" style={{ color: '#F1F5F9' }}>
                    <Users size={20} style={{ color: '#14B8A6' }} />
                    1500+
                  </div>
                  <div className="text-sm" style={{ color: '#94A3B8' }}>Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1" style={{ color: '#F1F5F9' }}>5000+</div>
                  <div className="text-sm" style={{ color: '#94A3B8' }}>Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Floating Service Cards */}
            <div className="relative">
              <div 
                className="relative rounded-3xl p-8 shadow-2xl"
                style={{ 
                  background: 'rgba(30, 41, 59, 0.7)', 
                  backdropFilter: 'blur(12px)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-3xl -z-10"></div>

                <div className="relative space-y-6">
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/95 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Code2 className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold" style={{ color: '#F1F5F9' }}>Custom Web Development</div>
                        <div className="text-sm" style={{ color: '#94A3B8' }}>Responsive & Modern</div>
                      </div>
                      <div className="font-bold" style={{ color: '#14B8A6' }}>100%</div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/95 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ml-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Rocket className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold" style={{ color: '#F1F5F9' }}>Mobile Apps (iOS & Android)</div>
                        <div className="text-sm" style={{ color: '#94A3B8' }}>Flutter & Native</div>
                      </div>
                      <div className="font-bold" style={{ color: '#14B8A6' }}>Native Performance</div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/95 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold" style={{ color: '#F1F5F9' }}>SEO & Digital Marketing</div>
                        <div className="text-sm" style={{ color: '#94A3B8' }}>Google Partner Agency</div>
                      </div>
                      <div className="font-bold" style={{ color: '#14B8A6' }}>Top Rankings</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F1F5F9' }}>
              Our Core Expertise
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              Full-stack digital solutions trusted by businesses in Salem, Tamil Nadu & across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { icon: Palette, title: "Stunning Web Design", desc: "Pixel-perfect, responsive websites that convert visitors into customers. Built with modern frameworks." },
              { icon: Rocket, title: "Mobile App Development", desc: "Native & Cross-platform apps (Flutter) for Android & iOS. Published on Play Store & App Store." },
              { icon: TrendingUp, title: "Result-Driven SEO & Ads", desc: "Rank #1 on Google. Certified Google Ads & SEO experts delivering measurable ROI." }
            ].map((item, i) => (
              <div 
                key={i}
                className="group rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                style={{ 
                  background: 'rgba(30, 41, 59, 0.7)', 
                  backdropFilter: 'blur(12px)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)' 
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#F1F5F9' }}>{item.title}</h3>
                <p className="leading-relaxed" style={{ color: '#94A3B8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F1F5F9' }}>
              Choose Your Growth Plan
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              Transparent pricing. No hidden charges. Customized packages available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300" style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#F1F5F9' }}>Basic Website</h3>
              <p className="mb-6" style={{ color: '#94A3B8' }}>Perfect for startups & small business</p>
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#F1F5F9' }}>₹25,000</span>
                <span style={{ color: '#94A3B8' }}> onwards</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["Responsive Design", "5-10 Pages", "Contact Form", "1 Year Hosting"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3" style={{ color: '#94A3B8' }}>
                    <Check className="text-teal-500" size={20} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-800 border border-slate-700 text-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300">
                Get Quote
              </button>
            </div>

            {/* Professional - Most Popular */}
            <div className="relative rounded-2xl p-8 transform scale-105 shadow-2xl" style={{ background: 'rgba(30, 41, 59, 0.9)', backdropFilter: 'blur(12px)', border: '2px solid #14B8A6' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#F1F5F9' }}>E-Commerce / App</h3>
              <p className="mb-6" style={{ color: '#94A3B8' }}>For serious businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#F1F5F9' }}>₹75,000</span>
                <span style={{ color: '#94A3B8' }}> onwards</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["Custom Design & Development", "Mobile App (Android + iOS)", "Payment Gateway", "SEO Optimization", "1 Year Free Support"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3" style={{ color: '#F1F5F9' }}>
                    <Check className="text-teal-400" size={20} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-teal-500 hover:bg-[#2DD4BF] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-teal-500/50">
                Let's Talk
              </button>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300" style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#F1F5F9' }}>Digital Marketing</h3>
              <p className="mb-6" style={{ color: '#94A3B8' }}>Complete online dominance</p>
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#F1F5F9' }}>Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["SEO + Google Ads", "Social Media Management", "WhatsApp & Email Marketing", "Monthly Reports", "Dedicated Manager"].map((feat) => (
                  <li key={feat} className="flex items-center gap-3" style={{ color: '#94A3B8' }}>
                    <Check className="text-teal-500" size={20} /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-800 border border-slate-700 text-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="rounded-3xl p-12 shadow-2xl"
            style={{ 
              background: 'rgba(30, 41, 59, 0.7)', 
              backdropFilter: 'blur(12px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)' 
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F1F5F9' }}>
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              Join 1500+ happy clients who trusted Ecronx Technologies (formerly Sigma Computers) since 1995.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group bg-teal-500 hover:bg-[#2DD4BF] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105">
                Get Free Consultation
                <HeadphonesIcon className="group-hover:animate-pulse" size={20} />
              </button>
              <button className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800/90 transition-all duration-300">
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