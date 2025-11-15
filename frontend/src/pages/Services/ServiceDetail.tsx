import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Code,
  Brain,
  LayoutDashboard,
  Bot,
  Wrench,
  Sparkles,
  ArrowLeft,
  Check,
  Clock,
  Zap,
  Shield,
  Users,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: Code,
    title: 'Web Development',
    description: 'Blazing-fast, modern web apps built for startups',
    details: 'We craft responsive, SEO-optimized web applications using React, Next.js, and modern tooling. Perfect for MVPs and growth-stage products.',
    features: ['Next.js / React', 'Tailwind CSS', 'SEO Ready', 'Fast Load Times'],
    price: 'Starting at $4,500',
    fullDescription: 'Transform your startup idea into a production-ready web application. We specialize in building fast, scalable, and beautiful web apps that help you validate your market and grow your user base. Our development process focuses on rapid iteration, clean code, and best practices.',
    deliverables: [
      'Fully responsive web application',
      'Custom UI/UX design implementation',
      'SEO optimization & meta tags',
      'Performance optimization (90+ Lighthouse score)',
      'Cross-browser compatibility',
      'Mobile-first design approach',
      'Analytics integration',
      'Deployment & hosting setup',
    ],
    techStack: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel/AWS'],
    timeline: '3-4 weeks',
    process: [
      { step: 'Discovery', duration: '2-3 days', description: 'Understanding your vision, users, and goals' },
      { step: 'Design & Prototype', duration: '3-5 days', description: 'Wireframes and interactive mockups' },
      { step: 'Development', duration: '2 weeks', description: 'Building your application with daily updates' },
      { step: 'Testing & Launch', duration: '3-5 days', description: 'QA, fixes, and deployment' },
    ],
  },
  {
    id: 2,
    icon: Brain,
    title: 'LLM Development',
    description: 'Custom AI models & intelligent agents',
    details: 'Build your own AI assistant, chatbot, or content engine using fine-tuned LLMs (Llama 3, Mistral, etc.) hosted securely.',
    features: ['Fine-tuned LLMs', 'RAG Pipelines', 'Custom Prompts', 'Private Deployment'],
    price: 'Starting at $7,000',
    fullDescription: 'Harness the power of large language models to automate tasks, enhance customer experiences, and unlock insights from your data. We build custom AI solutions that understand your domain and deliver real business value.',
    deliverables: [
      'Custom-trained AI model or agent',
      'RAG (Retrieval Augmented Generation) system',
      'API endpoints for integration',
      'Admin dashboard for monitoring',
      'Vector database setup',
      'Prompt engineering & optimization',
      'Usage analytics & logging',
      'Documentation & training',
    ],
    techStack: ['OpenAI/Anthropic APIs', 'LangChain', 'Pinecone/Weaviate', 'Python/FastAPI', 'Docker'],
    timeline: '4-6 weeks',
    process: [
      { step: 'AI Strategy', duration: '3-5 days', description: 'Define use cases and success metrics' },
      { step: 'Data Preparation', duration: '1 week', description: 'Collect and structure training data' },
      { step: 'Model Development', duration: '2 weeks', description: 'Fine-tuning and RAG implementation' },
      { step: 'Integration & Testing', duration: '1 week', description: 'API integration and validation' },
    ],
  },
  {
    id: 3,
    icon: LayoutDashboard,
    title: 'Personalized Dashboard',
    description: 'Your data, your way — in real time',
    details: 'Interactive dashboards with role-based views, live updates, and smart filters. Connect any data source.',
    features: ['Live Data Sync', 'Role-Based Views', 'Export & Share', 'Mobile Ready'],
    price: 'Starting at $5,500',
    fullDescription: 'Turn your data into actionable insights with custom dashboards built for your team. Whether tracking KPIs, monitoring systems, or analyzing trends, we create intuitive interfaces that make complex data simple.',
    deliverables: [
      'Custom dashboard interface',
      'Real-time data visualization',
      'Interactive charts and graphs',
      'Role-based access control',
      'Data export functionality (CSV, PDF)',
      'Mobile-responsive design',
      'API integrations',
      'Automated reporting',
    ],
    techStack: ['React', 'Recharts/D3.js', 'WebSockets', 'REST APIs', 'PostgreSQL', 'Redis'],
    timeline: '3-5 weeks',
    process: [
      { step: 'Data Audit', duration: '2-3 days', description: 'Understanding your data sources and metrics' },
      { step: 'UX Design', duration: '1 week', description: 'Designing intuitive data visualizations' },
      { step: 'Development', duration: '2 weeks', description: 'Building dashboard with real-time features' },
      { step: 'Testing & Handoff', duration: '3-5 days', description: 'User testing and deployment' },
    ],
  },
  {
    id: 4,
    icon: Bot,
    title: 'CRM Development',
    description: 'Sales & customer tools built for your workflow',
    details: 'Stop forcing your team into generic CRMs. Get a lightweight, tailored system with automations that actually work.',
    features: ['Custom Pipelines', 'Email Sequences', 'Task Automation', 'Team Inbox'],
    price: 'Starting at $6,000',
    fullDescription: 'Build a CRM that fits your sales process, not the other way around. We create lightweight, powerful customer management systems that help your team close deals faster and build stronger relationships.',
    deliverables: [
      'Custom CRM application',
      'Lead & deal pipeline management',
      'Contact database with custom fields',
      'Email integration & tracking',
      'Automated workflows & triggers',
      'Activity timeline & notes',
      'Reporting & analytics',
      'Team collaboration features',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'SendGrid/AWS SES', 'Stripe', 'Webhooks'],
    timeline: '4-6 weeks',
    process: [
      { step: 'Workflow Mapping', duration: '3-5 days', description: 'Understanding your sales process' },
      { step: 'System Design', duration: '1 week', description: 'Architecting your custom CRM' },
      { step: 'Development', duration: '2-3 weeks', description: 'Building features and automations' },
      { step: 'Training & Launch', duration: '1 week', description: 'Team onboarding and deployment' },
    ],
  },
  {
    id: 5,
    icon: Wrench,
    title: 'AI Automation',
    description: 'Automate repetitive work with smart bots',
    details: 'From lead enrichment to content drafting — deploy AI agents that run 24/7 and learn from your data.',
    features: ['No-Code Triggers', 'Zapier + API', 'Human Handoff', 'Audit Logs'],
    price: 'Starting at $3,500',
    fullDescription: 'Free your team from repetitive tasks with intelligent automation. We build AI-powered workflows that handle everything from data entry to customer communication, saving hours every week.',
    deliverables: [
      'Custom automation workflows',
      'AI-powered task execution',
      'Integration with existing tools',
      'Trigger-based event handling',
      'Human approval workflows',
      'Activity logs & monitoring',
      'Error handling & alerts',
      'Documentation & runbooks',
    ],
    techStack: ['Python', 'Make/Zapier', 'OpenAI API', 'Webhooks', 'Cloud Functions', 'Postgres'],
    timeline: '2-4 weeks',
    process: [
      { step: 'Process Analysis', duration: '2-3 days', description: 'Identifying automation opportunities' },
      { step: 'Workflow Design', duration: '3-5 days', description: 'Mapping automation logic' },
      { step: 'Development', duration: '1-2 weeks', description: 'Building and testing automations' },
      { step: 'Deployment', duration: '2-3 days', description: 'Launch and monitoring setup' },
    ],
  },
  {
    id: 6,
    icon: Sparkles,
    title: 'Custom SaaS Tools',
    description: 'Your idea, shipped as a product',
    details: 'We turn your internal tool or side project into a polished, subscribable SaaS — fast.',
    features: ['Auth & Billing', 'Multi-tenant', 'Admin Panel', 'Launch in 4 Weeks'],
    price: 'Starting at $8,000',
    fullDescription: 'Transform your idea into a market-ready SaaS product. We handle everything from user authentication to billing, so you can focus on growing your customer base and iterating on features.',
    deliverables: [
      'Full-stack SaaS application',
      'User authentication & authorization',
      'Subscription billing system',
      'Multi-tenant architecture',
      'Admin dashboard',
      'User onboarding flow',
      'Email notifications',
      'Analytics & metrics',
    ],
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'Clerk/Auth0', 'Prisma', 'PostgreSQL', 'Vercel'],
    timeline: '4-6 weeks',
    process: [
      { step: 'Product Definition', duration: '1 week', description: 'Defining features and user flows' },
      { step: 'Architecture Design', duration: '3-5 days', description: 'System design and tech decisions' },
      { step: 'Development', duration: '2-3 weeks', description: 'Building core features' },
      { step: 'Testing & Launch', duration: '1 week', description: 'QA and production deployment' },
    ],
  },
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const serviceId = id ? parseInt(id, 10) : 1;
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) return null;

  const ServiceIcon = service.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
    setShowContactModal(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Service Selector */}
      <div className="bg-blue-600 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto">
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(`/services/${s.id}`)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                  serviceId === s.id
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-700 text-white hover:bg-blue-800'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <ServiceIcon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-lg font-semibold">
                  {service.price}
                </span>
                <span className="flex items-center gap-2 text-blue-100">
                  <Clock className="w-5 h-5" />
                  {service.timeline}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* What You'll Get */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((phase, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      {index < service.process.length - 1 && (
                        <div className="w-0.5 flex-1 bg-blue-200 my-2 min-h-[40px]"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-xl font-bold text-gray-900">{phase.step}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {service.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-blue-100 mb-6">
                  Let's discuss your project and create a custom plan that fits your needs.
                </p>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors mb-3"
                >
                  Start Your Project
                </button>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="w-full bg-transparent border-2 border-white text-white py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                >
                  Schedule a Call
                </button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      <p className="text-sm text-gray-600">Launch in weeks, not months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">1:1 Collaboration</h4>
                      <p className="text-sm text-gray-600">Direct access to your builder</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                      <p className="text-sm text-gray-600">30 days of free fixes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Clean Code</h4>
                      <p className="text-sm text-gray-600">Well-documented & maintainable</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@yourcompany.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">hello@yourcompany.com</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">+1 (234) 567-890</span>
                  </a>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors w-full"
                  >
                    <MessageSquare className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Send a Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Talk</h2>
                  <p className="text-gray-600">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl flex-shrink-0"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="I'm looking to build..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;

// I AM DHILLI prasath