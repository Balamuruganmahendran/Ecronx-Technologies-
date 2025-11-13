import { useState } from 'react';
import { Code, Smartphone, Cloud, Shield, BarChart, Headphones, Zap, Users, Globe } from 'lucide-react';
import DefaultLayout from '../../layouts/DefaultLayout';

// Mock data for services
const servicesData = [
  {
    id: 1,
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    details: 'We create scalable, high-performance web applications using cutting-edge frameworks and best practices.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible'],
    price: 'Starting at $5,000'
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions',
    details: 'Build engaging mobile experiences for iOS and Android with seamless performance and intuitive interfaces.',
    features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Deployment'],
    price: 'Starting at $8,000'
  },
  {
    id: 3,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    details: 'Leverage cloud technology to improve scalability, reduce costs, and enhance your business operations.',
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'Cost Optimization', '24/7 Monitoring'],
    price: 'Starting at $3,000'
  },
  {
    id: 4,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for your business',
    details: 'Protect your digital assets with enterprise-grade security measures and continuous monitoring.',
    features: ['Threat Detection', 'Data Encryption', 'Security Audits', 'Compliance'],
    price: 'Starting at $4,500'
  },
  {
    id: 5,
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transform data into actionable business insights',
    details: 'Harness the power of your data with advanced analytics and visualization tools.',
    features: ['Custom Dashboards', 'Predictive Analytics', 'Real-time Reports', 'Data Integration'],
    price: 'Starting at $6,000'
  },
  {
    id: 6,
    icon: Headphones,
    title: 'IT Support',
    description: '24/7 technical support and maintenance',
    details: 'Keep your systems running smoothly with our dedicated support team available around the clock.',
    features: ['24/7 Availability', 'Remote Support', 'System Maintenance', 'Quick Response'],
    price: 'Starting at $2,000/mo'
  }
];



interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, hover, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''} ${className}`}>
    {children}
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud },
    { id: 'support', name: 'Support', icon: Headphones }
  ];

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(service => {
        if (activeFilter === 'development') return [1, 2].includes(service.id);
        if (activeFilter === 'infrastructure') return [3, 4, 5].includes(service.id);
        if (activeFilter === 'support') return service.id === 6;
        return true;
      });

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Powering Your Success</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Comprehensive solutions tailored to your business needs. From development to deployment, we've got you covered.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} hover>
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Badge */}
                  <span className="absolute top-0 right-0 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-lg">{service.price}</span>
                </div>

                {/* Features Preview */}
                <div className="mb-6 space-y-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 2 && (
                    <div className="text-sm text-gray-500">+{service.features.length - 2} more</div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                  <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    <Users className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help you achieve your goals
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                    <p className="text-blue-600 font-semibold text-lg">{selectedService.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedService.details}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What's Included</h3>
                  <div className="bg-blue-50 rounded-xl p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Initial consultation & strategy planning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Custom development & implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Dedicated project manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Headphones className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">3 months free support & maintenance</span>
                    </div>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Services;