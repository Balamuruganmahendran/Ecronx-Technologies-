import DefaultLayout from '../../layouts/DefaultLayout';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp, Globe, Shield, Heart, Zap, BookOpen, Rocket, ArrowRight, CheckCircle, Sparkles, Telescope, Star, Crown, Mountain } from 'lucide-react';
import Card from '../../components/Card';

const Vision = () => {
  const visionElements = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Global Leadership',
      description: 'Become the worldwide leader in transformative technology solutions, setting industry standards and driving innovation across borders.',
      gradient: 'from-blue-500 to-blue-600',
      timeframe: '2025'
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Innovation Hub',
      description: 'Establish ourselves as the premier destination for cutting-edge technology development and implementation.',
      gradient: 'from-purple-500 to-purple-600',
      timeframe: '2026'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Trusted Partner',
      description: 'Be the most trusted technology partner for businesses worldwide, known for reliability and excellence.',
      gradient: 'from-green-500 to-green-600',
      timeframe: '2027'
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: 'Industry Pioneer',
      description: 'Lead the industry in adopting emerging technologies and creating solutions for tomorrow challenges.',
      gradient: 'from-orange-500 to-orange-600',
      timeframe: '2028'
    }
  ];

  const futureGoals = [
    {
      title: 'AI-First Company',
      description: 'Integrate artificial intelligence into every aspect of our operations and client solutions.',
      icon: <Lightbulb className="w-8 h-8" />,
      progress: 75,
      target: '2025'
    },
    {
      title: 'Sustainable Tech',
      description: 'Develop eco-friendly technology solutions that contribute to environmental sustainability.',
      icon: <Globe className="w-8 h-8" />,
      progress: 60,
      target: '2026'
    },
    {
      title: 'Universal Access',
      description: 'Make advanced technology accessible to businesses of all sizes in every corner of the world.',
      icon: <Users className="w-8 h-8" />,
      progress: 85,
      target: '2027'
    },
    {
      title: 'Innovation Ecosystem',
      description: 'Build a comprehensive ecosystem that fosters collaboration and accelerates technological advancement.',
      icon: <Zap className="w-8 h-8" />,
      progress: 70,
      target: '2028'
    }
  ];

  const visionMetrics = [
    {
      title: 'Market Leadership',
      current: 'Top 5',
      target: '#1 Global Leader',
      icon: <Crown className="w-10 h-10" />
    },
    {
      title: 'Client Base',
      current: '10,000+',
      target: '100,000+ Clients',
      icon: <Users className="w-10 h-10" />
    },
    {
      title: 'Global Presence',
      current: '50+ Countries',
      target: '100+ Countries',
      icon: <Globe className="w-10 h-10" />
    },
    {
      title: 'Innovation Index',
      current: 'Industry Average',
      target: 'Market Leader',
      icon: <TrendingUp className="w-10 h-10" />
    }
  ];

  const roadmap = [
    {
      phase: 'Phase 1: Foundation (2024)',
      title: 'Establish Leadership',
      description: 'Solidify our position as a market leader with expanded global presence and enhanced capabilities.',
      milestones: ['Expand to 75 countries', 'Launch AI initiatives', 'Achieve 50,000 clients', 'Industry recognition awards']
    },
    {
      phase: 'Phase 2: Innovation (2025-2026)',
      title: 'Drive Technological Advancement',
      description: 'Lead the industry in adopting and implementing emerging technologies.',
      milestones: ['AI-first operations', 'Sustainable tech solutions', 'Innovation hub establishment', 'Research partnerships']
    },
    {
      phase: 'Phase 3: Expansion (2027-2028)',
      title: 'Global Domination',
      description: 'Achieve worldwide leadership and create lasting impact across all industries.',
      milestones: ['100+ countries presence', '100,000+ clients', 'Industry standard setting', 'Sustainability leadership']
    },
    {
      phase: 'Phase 4: Legacy (2029+)',
      title: 'Build Lasting Legacy',
      description: 'Create a sustainable, innovative ecosystem that continues to evolve and serve future generations.',
      milestones: ['Innovation foundation', 'Global impact measurement', 'Knowledge transfer', 'Continuous evolution']
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Telescope className="w-4 h-4" />
            <span className="text-sm font-medium">Looking Ahead</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">Our Vision</h1>
          <p className="text-2xl text-purple-100 max-w-3xl leading-relaxed">
            To be the global leader in transformative technology solutions, shaping the future of business through innovation and excellence.
          </p>
        </div>
      </div>

      {/* Vision Statement */}
      <section className="px-4 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12 border-t-4 border-purple-600">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                <Eye className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision Statement</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">
                "To become the world's most trusted and innovative technology partner, empowering businesses to achieve unprecedented growth
                and success through cutting-edge solutions that anticipate future needs and create lasting value."
              </p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-6 py-3 rounded-full font-semibold">
                  <Star className="w-5 h-5" />
                  Vision 2030: Global Technology Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Elements */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Vision Components
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Building Our Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four interconnected elements that form the foundation of our ambitious vision for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionElements.map((element, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${element.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${element.gradient} rounded-xl flex items-center justify-center mb-6 text-white relative z-10`}>
                  {element.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 relative z-10">{element.title}</h3>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">By {element.timeframe}</span>
                </div>
                <p className="text-gray-600 leading-relaxed relative z-10">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Future Goals & Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specific, measurable objectives that will guide our journey toward achieving our vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {goal.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Target: {goal.target}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{goal.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-purple-600">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Metrics */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Vision Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators that measure our progress toward achieving our vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{metric.title}</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Current</div>
                  <div className="text-lg font-semibold text-gray-900">{metric.current}</div>
                  <div className="text-sm text-purple-600 font-medium">Target: {metric.target}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Roadmap to Vision 2030</h2>
            <p className="text-xl text-purple-200">Strategic phases to achieve our ambitious vision</p>
          </div>

          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-1/4">
                    <div className="text-purple-300 font-semibold mb-2">{phase.phase}</div>
                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="lg:w-1/2">
                    <p className="text-purple-100 leading-relaxed">{phase.description}</p>
                  </div>
                  <div className="lg:w-1/4">
                    <h4 className="text-white font-semibold mb-3">Key Milestones:</h4>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-purple-200 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 py-20 px-8 lg:px-16 flex items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Shape the Future With Us
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Join our vision to transform industries and create a better future through innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                  Join Our Vision <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-blue-800 py-20 px-8 lg:px-16 flex items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Mountain className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">#1</div>
                  <div className="text-indigo-200">Global Leader</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Globe className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-indigo-200">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <TrendingUp className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">100K+</div>
                  <div className="text-indigo-200">Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Star className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">Vision</div>
                  <div className="text-indigo-200">2030</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

