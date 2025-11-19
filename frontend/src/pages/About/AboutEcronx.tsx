import DefaultLayout from '../../layouts/DefaultLayout';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp, Globe, Shield, Heart, Zap, BookOpen, Rocket, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Card from '../../components/Card';

const AboutEcronx = () => {
  const milestones = [
    { year: '2015', title: 'Founded', description: 'Started with a vision to revolutionize technology solutions', achievement: 'First 100 clients' },
    { year: '2018', title: 'Global Expansion', description: 'Expanded operations to 15 countries worldwide', achievement: '1,000+ clients milestone' },
    { year: '2021', title: 'Industry Recognition', description: 'Awarded Best Tech Innovator of the Year', achievement: '5,000+ clients served' },
    { year: '2024', title: 'Continued Growth', description: 'Serving 10,000+ satisfied clients globally', achievement: 'Market leader status' }
  ];

  const teamValues = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace new ideas to stay ahead of the curve.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We conduct business with transparency, honesty, and ethical practices at our core.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer Centricity',
      description: 'Our clients success is our success. We go above and beyond to deliver value.',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve excellence.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'We invest in our teams growth and stay updated with the latest technologies.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-8 h-8" /> },
    { number: '500+', label: 'Team Members', icon: <Heart className="w-8 h-8" /> },
    { number: '15+', label: 'Industry Awards', icon: <Award className="w-8 h-8" /> }
  ];

  const differentiators = [
    {
      title: 'Customer-Centric Approach',
      points: ['24/7 dedicated support', 'Personalized solutions', 'Regular feedback loops', 'Success-driven partnerships']
    },
    {
      title: 'Technical Excellence',
      points: ['Cutting-edge technology stack', 'Industry best practices', 'Rigorous quality assurance', 'Scalable architecture']
    },
    {
      title: 'Proven Methodology',
      points: ['Agile development process', 'Transparent communication', 'Iterative improvements', 'Data-driven decisions']
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section - Enhanced with overlay pattern */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Transforming businesses since 2015</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">About Ecronx</h1>
          <p className="text-2xl text-blue-100 max-w-3xl leading-relaxed">
            We are a team of passionate innovators committed to transforming industries through technology and creative solutions.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values - Card Overlap Design */}
      <section className="px-4 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-blue-600 hover:shadow-3xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative solutions that drive growth and success in the digital age.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-purple-600 hover:shadow-3xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of transformative technology solutions globally, setting new standards.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-green-600 hover:shadow-3xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, excellence, and customer success drive everything we do every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Side by Side with Visual Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Journey
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Building the Future, One Solution at a Time</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2015, we started with a simple yet powerful vision: to make cutting-edge technology
                accessible to businesses of all sizes. What began as a small startup has grown into a global
                leader in technology solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering
                commitment to our clients. Today, we serve thousands of businesses across 50+ countries.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View Timeline →
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 rounded-full"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="text-sm text-blue-600 font-semibold mb-1">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 mb-2">{milestone.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1 rounded-full">
                        <CheckCircle className="w-4 h-4" />
                        {milestone.achievement}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Bento Grid Style */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-200">Delivering measurable results that matter</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-blue-300 mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Grid with Gradient Cards */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              What Drives Us
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define who we are as an organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamValues.map((value, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`}></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 text-white relative z-10`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Feature List Style */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines innovation, expertise, and dedication to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{item.title}</h3>
                <ul className="space-y-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default AboutEcronx;
