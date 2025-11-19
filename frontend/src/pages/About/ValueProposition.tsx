import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp, Globe, Shield, Heart, Zap, BookOpen, Rocket, ArrowRight, CheckCircle, Sparkles, Star, Crown, Diamond } from 'lucide-react';
import Card from '../../components/Card';

const ValueProposition = () => {
  const valueProps = [
    {
      icon: <Diamond className="w-12 h-12" />,
      title: 'Premium Quality',
      description: 'We deliver exceptional quality that exceeds expectations and drives measurable results.',
      gradient: 'from-blue-500 to-blue-600',
      stats: '98% Client Satisfaction'
    },
    {
      icon: <Rocket className="w-12 h-12" />, 
      title: 'Rapid Delivery',
      description: 'Fast-track your projects with our efficient processes and agile methodology.',
      gradient: 'from-purple-500 to-purple-600',
      stats: '40% Faster Delivery'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Reliable Support',
      description: '24/7 technical support and maintenance to ensure your systems run smoothly.',
      gradient: 'from-green-500 to-green-600',
      stats: '99.9% Uptime'
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: 'Expert Team',
      description: 'Work with industry-leading experts who bring decades of combined experience.',
      gradient: 'from-orange-500 to-orange-600',
      stats: '50+ Certified Experts'
    }
  ];

  const benefits = [
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs by up to 60% with our optimized solutions',
      icon: <TrendingUp className="w-8 h-8" />,
      percentage: '60%'
    },
    {
      title: 'Scalability',
      description: 'Grow your business seamlessly with solutions that scale with your needs',
      icon: <Zap className="w-8 h-8" />,
      percentage: 'Unlimited'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead of the competition with cutting-edge technology implementations',
      icon: <Lightbulb className="w-8 h-8" />,
      percentage: '100%'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security to protect your data and operations',
      icon: <Shield className="w-8 h-8" />,
      percentage: 'Bank-Level'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Ecronx transformed our entire digital infrastructure. The value proposition was clear from day one.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Solutions',
      role: 'CEO',
      content: 'The ROI we achieved with Ecronx exceeded our wildest expectations. Truly exceptional value.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'VP of Operations',
      content: 'Their value proposition is unmatched. Quality, speed, and support all in one package.',
      rating: 5
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">Why Choose Ecronx</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">Our Value Proposition</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            Discover why thousands of businesses choose Ecronx for their technology needs. We deliver unmatched value through quality, innovation, and results.
          </p>
        </div>
      </div>

      {/* Value Props Grid */}
      <section className="px-4 -mt-8 sm:-mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-t-4 border-blue-600 hover:shadow-3xl transition-all touch-manipulation">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${prop.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white transform -rotate-3`}>
                  <div className="w-8 h-8 sm:w-12 sm:h-12">
                    {React.cloneElement(prop.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">{prop.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">{prop.description}</p>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-sm">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  {prop.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Key Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Measurable Business Impact</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions don't just look good on paper—they deliver real, quantifiable results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all text-center touch-manipulation">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white">
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(benefit.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{benefit.description}</p>
                <div className="text-xl sm:text-2xl font-bold text-green-600">{benefit.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ValueProposition;
