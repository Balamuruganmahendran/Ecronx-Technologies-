import React from 'react';
import { ShoppingCart, Smartphone, Globe, Code, Database, Zap } from 'lucide-react';

interface Solution {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const SolutionsSection: React.FC = () => {
  const solutions: Solution[] = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment gateways, inventory management, and seamless checkout experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Multi-vendor Support']
    },
    {
      icon: Smartphone,
      title: 'Responsive Websites',
      description: 'Mobile-first websites that look perfect on all devices, ensuring optimal user experience everywhere.',
      features: ['Mobile Optimized', 'Fast Loading', 'SEO Friendly', 'Cross-browser Compatible']
    },
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern technologies to meet your specific business needs.',
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Real-time Features']
    },
    {
      icon: Code,
      title: 'CMS & Blog Platforms',
      description: 'Content management systems and blogging platforms for easy content updates and management.',
      features: ['Easy Content Editing', 'SEO Optimized', 'Social Sharing', 'Analytics Integration']
    },
    {
      icon: Database,
      title: 'Business Management Systems',
      description: 'Comprehensive systems for managing business operations, customers, and data efficiently.',
      features: ['CRM Integration', 'Data Analytics', 'Automation', 'Reporting Tools']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your existing websites and applications for better user experience and SEO rankings.',
      features: ['Load Time Optimization', 'Code Optimization', 'CDN Integration', 'Performance Monitoring']
    }
  ];

  return (
    <section className="py-20 px-4 md:py-28" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F1F5F9] to-[#94A3B8] bg-clip-text text-transparent">
            Performance-Oriented Online Solutions
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{ color: '#94A3B8' }}>
            Cutting-edge digital solutions designed for maximum performance, scalability, and user engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Subtle glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#14B8A6]/20 to-transparent pointer-events-none" />

                <div className="relative p-8 md:p-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: 'linear-gradient(135deg, #14B8A6, #2DD4BF)',
                      boxShadow: '0 10px 30px rgba(20, 184, 166, 0.3)',
                    }}
                  >
                    <Icon className="text-white" size={34} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#F1F5F9' }}>
                    {solution.title}
                  </h3>

                  <p className="leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                    {solution.description}
                  </p>

                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-3 text-sm md:text-base">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                          style={{ backgroundColor: '#14B8A6' }}
                        />
                        <span style={{ color: '#CBD5E1' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-1 w-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #14B8A6, transparent)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;