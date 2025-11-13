import { useState } from 'react';
import { Check, X, Star, TrendingUp, Zap, Shield, Users, Crown, Rocket, Building2, Sparkles, ArrowRight, ChevronDown, Info } from 'lucide-react';
import DefaultLayout from '../../layouts/DefaultLayout';



interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''} ${className}`}>
    {children}
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Products = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [compareMode, setCompareMode] = useState(false);
  const [showFAQ, setShowFAQ] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Product Starter',
      tagline: 'Perfect for Small Teams',
      description: 'Great for small teams getting started with essential features.',
      icon: Rocket,
      monthlyPrice: 19,
      yearlyPrice: 190,
      popular: false,
      color: 'blue',
      features: [
        { name: 'Up to 5 Team Members', included: true },
        { name: 'Basic Analytics', included: true },
        { name: '10 GB Storage', included: true },
        { name: 'Email Support', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Advanced Reporting', included: false },
        { name: 'API Access', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Custom Integrations', included: false },
        { name: 'Dedicated Manager', included: false }
      ],
      highlights: ['Easy Setup', '24h Response', 'Free Updates'],
      cta: 'Start Free Trial'
    },
    {
      id: 2,
      name: 'Product Plus',
      tagline: 'Most Popular Choice',
      description: 'Perfect for growing businesses ready to scale.',
      icon: TrendingUp,
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: true,
      color: 'purple',
      features: [
        { name: 'Up to 20 Team Members', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: '100 GB Storage', included: true },
        { name: 'Priority Email Support', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'API Access', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Custom Integrations', included: false },
        { name: 'Dedicated Manager', included: false }
      ],
      highlights: ['Most Popular', 'Best Value', 'Premium Features'],
      cta: 'Get Started'
    },
    {
      id: 3,
      name: 'Product Pro',
      tagline: 'Enterprise Power',
      description: 'Our flagship product for enterprise solutions.',
      icon: Crown,
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      color: 'gold',
      features: [
        { name: 'Unlimited Team Members', included: true },
        { name: 'Enterprise Analytics', included: true },
        { name: 'Unlimited Storage', included: true },
        { name: '24/7 Phone Support', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'API Access', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Custom Integrations', included: true },
        { name: 'Dedicated Manager', included: true }
      ],
      highlights: ['White Glove Service', 'Custom Solutions', 'SLA Guarantee'],
      cta: 'Contact Sales'
    },
  ];

  const faqs = [
    {
      q: 'Can I switch plans anytime?',
      a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate any billing adjustments.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards, PayPal, and can arrange invoice billing for annual enterprise plans.'
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes! All plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      q: 'What happens when I exceed my limits?',
      a: 'We\'ll notify you before you hit your limits. You can either upgrade your plan or purchase additional resources as needed.'
    }
  ];

  const getPrice = (product: any) => {
    const price = billingCycle === 'monthly' ? product.monthlyPrice : product.yearlyPrice;
    return billingCycle === 'monthly' ? price : Math.round(price / 12);
  };

  const getSavings = (product: any) => {
    const monthlyCost = product.monthlyPrice * 12;
    const yearlyCost = product.yearlyPrice;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect solution for your business needs. All plans include free updates and 24/7 support.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`font-semibold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-blue-600 rounded-full transition-colors"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${billingCycle === 'yearly' ? 'translate-x-8' : ''}`} />
            </button>
            <span className={`font-semibold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Save up to 20%
              </span>
            )}
          </div>

          {/* Compare Toggle */}
          <button
            onClick={() => setCompareMode(!compareMode)}
            className="text-blue-600 font-semibold hover:underline flex items-center gap-2 mx-auto"
          >
            <Info className="w-4 h-4" />
            {compareMode ? 'Hide' : 'Show'} Detailed Comparison
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <section className="py-8 px-4 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">Secure</span>
              </div>
              <p className="text-sm text-gray-600">Bank-level encryption</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">50K+ Users</span>
              </div>
              <p className="text-sm text-gray-600">Trusted worldwide</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-gray-600">From 2,000+ reviews</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">99.9% Uptime</span>
              </div>
              <p className="text-sm text-gray-600">Guaranteed SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className={`text-center relative ${product.popular ? 'ring-4 ring-blue-600 scale-105' : ''}`}
                hover={!product.popular}
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${
                  product.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  product.color === 'purple' ? 'from-purple-500 to-blue-600' :
                  'from-yellow-500 to-orange-600'
                } rounded-2xl flex items-center justify-center shadow-lg`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Product Name & Tagline */}
                <h3 className="text-2xl font-bold mb-1 text-gray-900">{product.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{product.tagline}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-500 text-xl">$</span>
                    <span className="text-5xl font-bold text-gray-900">{getPrice(product)}</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500 line-through">${product.monthlyPrice}/mo</span>
                      <span className="ml-2 text-sm text-green-600 font-semibold">
                        Save {getSavings(product)}%
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    Billed {billingCycle} • ${billingCycle === 'monthly' ? product.monthlyPrice : product.yearlyPrice} {billingCycle === 'yearly' ? 'per year' : 'per month'}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6 flex flex-wrap gap-2 justify-center">
                  {product.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="text-left mb-6 space-y-3">
                  {product.features.slice(0, compareMode ? product.features.length : 5).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                  {!compareMode && product.features.length > 5 && (
                    <li className="text-sm text-gray-500 text-center pt-2">
                      +{product.features.length - 5} more features
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <Button 
                  className="w-full"
                  variant={product.popular ? 'primary' : 'secondary'}
                >
                  {product.cta}
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Button>
                
                {product.id === 1 && (
                  <p className="text-xs text-gray-500 mt-3">14-day free trial • No credit card required</p>
                )}
              </Card>
            ))}
          </div>

          {/* Enterprise Option */}
          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-1">Enterprise Solutions</h3>
                    <p className="text-gray-300">Custom pricing for organizations with 100+ users</p>
                  </div>
                </div>
                <Button variant="secondary" className="flex-shrink-0 bg-white text-gray-900 hover:bg-gray-100">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="cursor-pointer" hover>
                <div 
                  onClick={() => setShowFAQ(showFAQ === idx ? null : idx)}
                  className="flex items-center justify-between"
                >
                  <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showFAQ === idx ? 'rotate-180' : ''}`} />
                </div>
                {showFAQ === idx && (
                  <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="ghost">Contact Our Team →</Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50,000+ teams already using our products to grow their business
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            ✓ No credit card required  ✓ 14-day free trial  ✓ Cancel anytime
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Products;