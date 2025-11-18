import DefaultLayout from '../../layouts/DefaultLayout';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp, Globe, Shield, Heart, Zap, BookOpen, Rocket, ArrowRight, CheckCircle, Sparkles, Compass, Mountain, Flame } from 'lucide-react';
import Card from '../../components/Card';

const Mission = () => {
  const missionPillars = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Innovation Leadership',
      description: 'Pioneering cutting-edge solutions that redefine industry standards and push technological boundaries.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Client Partnership',
      description: 'Building lasting relationships through trust, transparency, and mutual success with every client.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Global Impact',
      description: 'Creating positive change worldwide by empowering businesses to achieve their full potential.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Excellence & Integrity',
      description: 'Maintaining the highest standards of quality and ethical practices in everything we do.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const missionObjectives = [
    {
      title: 'Empower Businesses',
      description: 'Provide tools and solutions that enable companies to scale, innovate, and compete effectively in the digital age.',
      icon: <Rocket className="w-8 h-8" />,
      progress: 95
    },
    {
      title: 'Drive Innovation',
      description: 'Continuously develop and implement cutting-edge technologies that solve real-world business challenges.',
      icon: <Lightbulb className="w-8 h-8" />,
      progress: 88
    },
    {
      title: 'Build Trust',
      description: 'Establish ourselves as the most reliable and trusted technology partner for businesses worldwide.',
      icon: <Shield className="w-8 h-8" />,
      progress: 92
    },
    {
      title: 'Create Value',
      description: 'Deliver measurable ROI and tangible benefits that exceed client expectations and drive growth.',
      icon: <TrendingUp className="w-8 h-8" />,
      progress: 96
    }
  ];

  const impactAreas = [
    {
      title: 'Digital Transformation',
      description: 'Helping traditional businesses embrace digital technologies and modernize their operations.',
      stats: '500+ Companies Transformed',
      icon: <Zap className="w-10 h-10" />
    },
    {
      title: 'Technology Adoption',
      description: 'Accelerating technology adoption across industries through accessible and scalable solutions.',
      stats: '50+ Industries Served',
      icon: <Globe className="w-10 h-10" />
    },
    {
      title: 'Economic Growth',
      description: 'Contributing to economic growth by enabling businesses to operate more efficiently and effectively.',
      stats: '$2.5B Economic Impact',
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      title: 'Job Creation',
      description: 'Supporting job creation and skill development through our technology initiatives.',
      stats: '10,000+ Jobs Enabled',
      icon: <Users className="w-10 h-10" />
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Compass className="w-4 h-4" />
            <span className="text-sm font-medium">Our Purpose</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">Our Mission</h1>
          <p className="text-2xl text-blue-100 max-w-3xl leading-relaxed">
            To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and sustainable success.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="px-4 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12 border-t-4 border-blue-600">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                <Target className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission Statement</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">
                "To be the catalyst for digital transformation, empowering businesses of all sizes to harness the power of technology,
                achieve unprecedented growth, and create lasting positive impact in their communities and industries."
              </p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-semibold">
                  <Flame className="w-5 h-5" />
                  Driving Innovation Since 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Mission Pillars
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">The Foundation of Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core pillars that guide our mission and shape everything we do to serve our clients and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-xl flex items-center justify-center mb-6 text-white relative z-10`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Objectives */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Mission Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable goals that drive our mission forward and ensure we're making a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionObjectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {objective.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{objective.title}</h3>
                    <p className="text-gray-600 mb-4">{objective.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-green-600">{objective.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${objective.progress}%` }}
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

      {/* Impact Areas */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The tangible difference we're making in businesses, communities, and industries worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="text-lg font-bold text-blue-600">{area.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mission Timeline</h2>
            <p className="text-xl text-blue-200">Key milestones in our mission journey</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                <span className="text-2xl font-bold text-white">2015</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Foundation</h4>
              <p className="text-blue-200">Mission established with first client partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                <span className="text-2xl font-bold text-white">2018</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Expansion</h4>
              <p className="text-blue-200">Global reach achieved with international clients</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                <span className="text-2xl font-bold text-white">2021</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
              <p className="text-blue-200">Industry recognition for technological excellence</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                <span className="text-2xl font-bold text-white">2024</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Leadership</h4>
              <p className="text-blue-200">Market leadership with 10,000+ satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-8 lg:px-16 flex items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Join Our Mission
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Be part of a mission-driven company that's transforming industries and creating lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  Partner With Us <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-indigo-800 py-20 px-8 lg:px-16 flex items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Mountain className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-purple-200">Companies</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Globe className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-purple-200">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <TrendingUp className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">$2.5B</div>
                  <div className="text-purple-200">Economic Impact</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Users className="w-10 h-10 text-white mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">10K+</div>
                  <div className="text-purple-200">Jobs Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Mission;
