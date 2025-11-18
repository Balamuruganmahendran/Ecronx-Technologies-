
'use client';
import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Check,
  Code2,
  Palette,
  Rocket,
  HeadphonesIcon,
  X,
  Mail,
  Phone,
  MessageSquare,
  Building,
  Calendar,
  DollarSign,
} from 'lucide-react';


/* --------------------------------------------------------------
   1. QUOTE MODAL – RESPONSIVE & NO LINES
   -------------------------------------------------------------- */
const QuoteModal = ({
  isOpen,
  onClose,
  plan,
}: {
  isOpen: boolean;
  onClose: () => void;
  plan: string;
}) => {
  if (!isOpen) return null;

  const planDetails: Record<
    string,
    { price: string; features: string[] }
  > = {
    'Basic Website': {
      price: '₹25,000 onwards',
      features: [
        '5–10 Pages',
        'Responsive Design',
        'Contact Form',
        '1 Year Hosting',
      ],
    },
    'Custom Software Development': {
      price: '₹75,000 onwards',
      features: [
        'Full-Stack',
        'API Integrations',
        'Scalable',
        '1 Year Support',
      ],
    },
    'SaaS Product Development': {
      price: 'Custom Quote',
      features: [
        'Multi-Tenant',
        'Payments',
        'Cloud Deploy',
        'High Security',
      ],
    },
  };
  const currentPlan = planDetails[plan] ?? planDetails['Basic Website'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      plan,
      full_name: fd.get('full_name') as string,
      company: (fd.get('company') as string) || '',
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      brief: (fd.get('brief') as string) || '',
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/api/home/quote/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert('Quote request sent successfully!');
        onClose();
      } else {
        const err = await res.json();
        alert('Error: ' + (err.detail ?? 'Something went wrong'));
      }
    } catch {
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[95vw] sm:max-w-2xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-scaleIn max-h-screen overflow-y-auto">
        <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-500" />
        <div className="p-5 sm:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-slate-100">
                Get Your Free Quote
              </h3>
              <p className="text-xs sm:text-base mt-1 text-slate-400">
                For:{' '}
                <span className="font-semibold text-teal-400">{plan}</span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X size={20} className="text-slate-400" />
            </button>
          </div>

          {/* Plan Card */}
          <div className="mb-5 p-3 sm:p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="flex justify-between items-center mb-2">
              <span className="text-base sm:text-lg font-semibold text-slate-100">
                Starting at
              </span>
              <span className="text-lg sm:text-xl font-bold text-teal-500">
                {currentPlan.price}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              {currentPlan.features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-xs bg-teal-500/10 text-teal-400 px-2 py-1 rounded-full"
                >
                  <Check size={10} /> {f}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Full Name *
                </label>
                <input
                  name="full_name"
                  type="text"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Company
                </label>
                <div className="relative">
                  <Building
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <input
                    name="company"
                    type="text"
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Email *
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Phone *
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                Project Brief
              </label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-3 pointer-events-none"
                  size={16}
                  style={{ color: '#64748B' }}
                />
                <textarea
                  name="brief"
                  rows={3}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none resize-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Send Request <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-slate-800 border border-slate-700 text-slate-300 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   2. START PROJECT MODAL – RESPONSIVE & NO LINES
   -------------------------------------------------------------- */
const StartProjectModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: fd.get('full_name') as string,
      company: (fd.get('company') as string) || '',
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      project_type: fd.get('projectType') as string,
      timeline: fd.get('timeline') as string,
      budget: fd.get('budget') as string,
      brief: fd.get('brief') as string,
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/api/home/project/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert(
          'Project details submitted! You will receive a confirmation email shortly.'
        );
        onClose();
      } else {
        const err = await res.json();
        alert('Error: ' + (err.detail ?? 'Submission failed'));
      }
    } catch {
      alert('Network error. Please check your connection.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[95vw] sm:max-w-4xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-scaleIn max-h-screen overflow-y-auto">
        <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-500" />
        <div className="p-5 sm:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-slate-100">
                Start Your Project
              </h3>
              <p className="text-xs sm:text-base mt-1 text-slate-400">
                Tell us everything we need to get started
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X size={20} className="text-slate-400" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Personal / Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Full Name *
                </label>
                <input
                  name="full_name"
                  type="text"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <input
                    name="company"
                    type="text"
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Email *
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Phone *
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-slate-300">
                Project Type *
              </label>
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-3">
                {[
                  { icon: Palette, label: 'Website Design', value: 'Website Design' },
                  { icon: Code2, label: 'Web App', value: 'Web App' },
                  { icon: Rocket, label: 'Mobile App', value: 'Mobile App' },
                ].map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2 sm:gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={opt.value}
                        required
                        className="w-4 h-4 text-teal-500 focus:ring-teal-500"
                      />
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Icon size={18} className="text-teal-500" />
                        <span className="text-xs sm:text-base text-slate-100">
                          {opt.label}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Timeline & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Desired Timeline *
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <select
                    name="timeline"
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none appearance-none text-sm sm:text-base text-slate-100"
                  >
                    <option value="">Select timeline</option>
                    <option>1–2 weeks</option>
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>2–3 months</option>
                    <option>3+ months</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                  Approximate Budget *
                </label>
                <div className="relative">
                  <DollarSign
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                    style={{ color: '#64748B' }}
                  />
                  <select
                    name="budget"
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none appearance-none text-sm sm:text-base text-slate-100"
                  >
                    <option value="">Select budget</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹3,00,000</option>
                    <option>₹3,00,000 +</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1.5 text-slate-300">
                Project Brief / Requirements *
              </label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-3 pointer-events-none"
                  size={16}
                  style={{ color: '#64748B' }}
                />
                <textarea
                  name="brief"
                  rows={4}
                  required
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none resize-none text-sm sm:text-base text-slate-100 placeholder-slate-500"
                  placeholder="Describe your project, key features, target audience..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Submit Project Details <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-slate-800 border border-slate-700 text-slate-300 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   3. MAIN LANDING PAGE – NOW WITH NAVBAR & UNIFIED MODAL STATE
   -------------------------------------------------------------- */
export default function LandingPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePlan, setQuotePlan] = useState('');
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false); // Unified state

  const openQuote = (plan: string) => {
    setQuotePlan(plan);
    setQuoteOpen(true);
  };
  const closeQuote = () => setQuoteOpen(false);

  return (
    <>
      <div className="min-h-screen bg-[#0F172A]">


        {/* HERO */}
        <section className="relative overflow-hidden py-16 px-4 sm:py-20 md:py-24 lg:py-28 min-h-screen flex items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* LEFT */}
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-teal-400">
                  <Sparkles size={14} className="animate-pulse" />
                  <span className="hidden xs:inline">Trusted by </span>500+ Businesses
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-slate-100">Empowering Digital </span>
                  <span
                    style={{
                      background:
                        'linear-gradient(to right, #14B8A6, #2DD4BF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Excellence
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-400">
                  Ecronx Technologies — a next-generation IT services company
                  delivering end-to-end Software Development, Web Engineering,
                  and AI-powered digital solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => setIsStartProjectOpen(true)}
                    className="group bg-teal-500 hover:bg-[#2DD4BF] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 text-sm sm:text-base min-h-12"
                  >
                    Start Your Project
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-slate-700">
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xl sm:text-2xl font-bold mb-1 text-slate-100">
                      <TrendingUp size={18} className="text-teal-500" />
                      4+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xl sm:text-2xl font-bold mb-1 text-slate-100">
                      <Users size={18} className="text-teal-500" />
                      15+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold mb-1 text-slate-100">
                      20+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative mt-8 md:mt-0">
                <div
                  className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
                  style={{
                    background: 'rgba(30, 41, 59, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-3xl -z-10"></div>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      {
                        icon: Code2,
                        title: 'Custom Web Development',
                        desc: 'Responsive & Modern',
                        badge: '100%',
                      },
                      {
                        icon: Rocket,
                        title: 'Mobile Apps (iOS & Android)',
                        desc: 'Flutter & Native',
                        badge: 'Native Performance',
                      },
                      {
                        icon: TrendingUp,
                        title: 'SEO & Digital Marketing',
                        desc: 'Google Partner Agency',
                        badge: 'Top Rankings',
                      },
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
                            <div className="font-semibold text-sm sm:text-base truncate text-slate-100">
                              {item.title}
                            </div>
                            <div className="text-xs sm:text-sm truncate text-slate-400">
                              {item.desc}
                            </div>
                          </div>
                          <div className="font-bold text-xs sm:text-sm text-teal-400">
                            {item.badge}
                          </div>
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

        {/* CORE EXPERTISE */}
        <section className="py-16 sm:py-20 px-4 bg-[#1E293B]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
                Our Core Expertise
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-slate-400">
                Full-stack digital solutions trusted by businesses in Salem,
                Tamil Nadu & across India
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Palette,
                  title: 'Stunning Web Design',
                  desc: 'Pixel-perfect, responsive websites that convert visitors into customers.',
                },
                {
                  icon: Rocket,
                  title: 'Mobile App Development',
                  desc: 'Native & Cross-platform apps (Flutter) for Android & iOS.',
                },
                {
                  icon: TrendingUp,
                  title: 'Result-Driven SEO & Ads',
                  desc: 'Rank #1 on Google. Certified Google Ads & SEO experts.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300"
                    style={{
                      background: 'rgba(30, 41, 59, 0.7)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 sm:py-20 px-4 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
                Choose Your Growth Plan
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-slate-400">
                Transparent pricing. No hidden charges. Customized packages
                available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Basic */}
              <div
                className="rounded-2xl p-6 sm:p-8 hover:border-teal-500/50 transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-100">
                  Basic Website
                </h3>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-400">
                  Perfect for startups & small businesses
                </p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-5xl font-bold text-slate-100">
                    ₹25,000
                  </span>
                  <span className="text-sm sm:text-base text-slate-400">
                    {' '}
                    onwards
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                  {[
                    'Responsive Design',
                    '5–10 Pages',
                    'Contact Form',
                    '1 Year Hosting',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-slate-400"
                    >
                      <Check className="text-teal-500 flex-shrink-0" size={18} />{' '}
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openQuote('Basic Website')}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base min-h-12"
                >
                  Get Quote
                </button>
              </div>

              {/* Popular */}
              <div
                className="relative rounded-2xl p-6 sm:p-8 transform md:scale-105 shadow-2xl"
                style={{
                  background: 'rgba(30, 41, 59, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '2px solid #14B8A6',
                }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  Most Popular
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-100">
                  Custom Software Development
                </h3>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-400">
                  Tailored solutions for scaling businesses
                </p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-5xl font-bold text-slate-100">
                    ₹75,000
                  </span>
                  <span className="text-sm sm:text-base text-slate-400">
                    {' '}
                    onwards
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                  {[
                    'Custom System Architecture',
                    'Full-Stack Development',
                    'API Integrations',
                    'Scalable Infrastructure',
                    '1 Year Free Support',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-slate-100"
                    >
                      <Check className="text-teal-400 flex-shrink-0" size={18} />{' '}
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openQuote('Custom Software Development')}
                  className="w-full bg-teal-500 hover:bg-[#2DD4BF] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-teal-500/50 text-sm sm:text-base min-h-12"
                >
                  Get Quote
                </button>
              </div>

              {/* SaaS */}
              <div
                className="rounded-2xl p-6 sm:p-8 hover:border-teal-500/50 transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-100">
                  SaaS Product Development
                </h3>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-400">
                  Build scalable cloud-based software products
                </p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-5xl font-bold text-slate-100">
                    Custom
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                  {[
                    'Multi-Tenant Architecture',
                    'Subscription & Payment System',
                    'User Management & Admin Panel',
                    'Cloud Hosting & Deployment',
                    'High Scalability & Security',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-slate-400"
                    >
                      <Check className="text-teal-500 flex-shrink-0" size={18} />{' '}
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openQuote('SaaS Product Development')}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-300 text-sm sm:text-base min-h-12"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-20 px-4 bg-[#1E293B]">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl"
              style={{
                background: 'rgba(30, 41, 59, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-100">
                Ready to Grow Your Business Online?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-slate-400">
                Join 1500+ happy clients who trusted Ecronx Technologies
                (formerly Sigma Computers) since 1995.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="group bg-teal-500 hover:bg-[#2DD4BF] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 text-sm sm:text-base min-h-12">
                  Get Free Consultation
                  <HeadphonesIcon
                    className="group-hover:animate-pulse"
                    size={18}
                  />
                </button>
                <button className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 text-slate-300 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-slate-800/90 transition-all duration-300 text-sm sm:text-base min-h-12">
                  Call +91 8438829844
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MODALS */}
      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} plan={quotePlan} />
      <StartProjectModal
        isOpen={isStartProjectOpen}
        onClose={() => setIsStartProjectOpen(false)}
      />

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }

        /* Hide native scrollbars on mobile */
        .max-h-screen::-webkit-scrollbar { display: none; }
        .max-h-screen { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}


