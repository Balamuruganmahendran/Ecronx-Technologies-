import { useState } from 'react';
import {
  Code,
  Brain,
  LayoutDashboard,
  Bot,
  Zap,
  Globe,
  Users,
  MessageSquare,
  Wrench,
  Sparkles,
} from 'lucide-react';
import DefaultLayout from '../../layouts/DefaultLayout';

const servicesData = [
  {
    id: 1,
    icon: Code,
    title: 'Web Development',
    description: 'Blazing-fast, modern web apps built for startups',
    details: 'We craft responsive, SEO-optimized web applications using React, Next.js, and modern tooling. Perfect for MVPs and growth-stage products.',
    features: ['Next.js / React', 'Tailwind CSS', 'SEO Ready', 'Fast Load Times'],
    price: 'Starting at $4,500',
  },
  {
    id: 2,
    icon: Brain,
    title: 'LLM Development',
    description: 'Custom AI models & intelligent agents',
    details: 'Build your own AI assistant, chatbot, or content engine using fine-tuned LLMs (Llama 3, Mistral, etc.) hosted securely.',
    features: ['Fine-tuned LLMs', 'RAG Pipelines', 'Custom Prompts', 'Private Deployment'],
    price: 'Starting at $7,000',
  },
  {
    id: 3,
    icon: LayoutDashboard,
    title: 'Personalized Dashboard',
    description: 'Your data, your way — in real time',
    details: 'Interactive dashboards with role-based views, live updates, and smart filters. Connect any data source.',
    features: ['Live Data Sync', 'Role-Based Views', 'Export & Share', 'Mobile Ready'],
    price: 'Starting at $5,500',
  },
  {
    id: 4,
    icon: Bot,
    title: 'CRM Development',
    description: 'Sales & customer tools built for your workflow',
    details: 'Stop forcing your team into generic CRMs. Get a lightweight, tailored system with automations that actually work.',
    features: ['Custom Pipelines', 'Email Sequences', 'Task Automation', 'Team Inbox'],
    price: 'Starting at $6,000',
  },
  {
    id: 5,
    icon: Wrench,
    title: 'AI Automation',
    description: 'Automate repetitive work with smart bots',
    details: 'From lead enrichment to content drafting — deploy AI agents that run 24/7 and learn from your data.',
    features: ['No-Code Triggers', 'Zapier + API', 'Human Handoff', 'Audit Logs'],
    price: 'Starting at $3,500',
  },
  {
    id: 6,
    icon: Sparkles,
    title: 'Custom SaaS Tools',
    description: 'Your idea, shipped as a product',
    details: 'We turn your internal tool or side project into a polished, subscribable SaaS — fast.',
    features: ['Auth & Billing', 'Multi-tenant', 'Admin Panel', 'Launch in 4 Weeks'],
    price: 'Starting at $8,000',
  },
];

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, hover, className = '' }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${
      hover
        ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
        : ''
    } ${className}`}
  >
    {children}
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI & LLMs', icon: Brain },
    { id: 'build', name: 'Build', icon: Code },
    { id: 'tools', name: 'Tools', icon: Wrench },
  ];

  const filteredServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => {
        if (activeFilter === 'ai') return [2, 5].includes(s.id);
        if (activeFilter === 'build') return [1, 3, 4].includes(s.id);
        if (activeFilter === 'tools') return s.id === 6;
        return true;
      });

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">
              AI-Powered Startup Studio
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            We Build What You Need
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Custom web apps, AI agents, CRMs, and dashboards — shipped in weeks, not months.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
              <div className="text-gray-600">Tools Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Founder Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">14 Days</div>
              <div className="text-gray-600">Avg. MVP Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1:1</div>
              <div className="text-gray-600">Dedicated Builder</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.name}
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
              <Card key={service.id} hover onClick={() => setSelectedService(service)}>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {service.id === 2 && (
                    <span className="absolute top-0 right-0 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                      HOT
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {service.price}
                  </span>
                </div>

                <div className="mb-6 space-y-2">
                  {service.features.slice(0, 2).map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {f}
                    </div>
                  ))}
                  {service.features.length > 2 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 2} more
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Ship Your Idea?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s turn your vision into a working product — in weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Book a Free Call
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              See Live Demos
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
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedService.title}
                    </h2>
                    <p className="text-blue-600 font-semibold text-lg">
                      {selectedService.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    What You Get
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedService.details}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Core Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((f: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Delivery & Support
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        2-week sprint kickoff
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        Clean, documented code
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        1:1 founder syncs
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wrench className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        30 days free fixes
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Start Project
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Ask a Question
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