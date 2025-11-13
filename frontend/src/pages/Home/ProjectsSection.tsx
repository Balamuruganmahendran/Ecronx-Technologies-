import { ShoppingCart, Smartphone, Globe, Code, Database, Zap, Star, ArrowRight } from 'lucide-react';

interface Project {
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A complete e-commerce solution with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true
    },
    {
      icon: Globe,
      title: 'Healthcare Management System',
      category: 'Web Application',
      description: 'Comprehensive healthcare management platform for clinics and hospitals with appointment booking.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      featured: false
    },
    {
      icon: Smartphone,
      title: 'Restaurant Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile app for restaurant ordering with real-time tracking and payment integration.',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
      featured: true
    },
    {
      icon: Code,
      title: 'Learning Management System',
      category: 'Web Application',
      description: 'Online learning platform with course management, video streaming, and progress tracking.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS'],
      featured: false
    },
    {
      icon: Database,
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'Property listing and management platform with advanced search and virtual tours.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      featured: true
    },
    {
      icon: Zap,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description: 'Personal fitness tracking app with workout plans, progress monitoring, and social features.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      featured: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#F1F5F9] to-[#94A3B8] bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#94A3B8' }}>
            Showcasing our expertise through successful projects delivered to clients across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-2xl"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#14B8A6]/20 to-transparent pointer-events-none" />

                <div className="relative p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: 'linear-gradient(135deg, #14B8A6, #2DD4BF)',
                        boxShadow: '0 10px 30px rgba(20, 184, 166, 0.3)',
                      }}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    {project.featured && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
                        <Star size={12} />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <span className="text-xs sm:text-sm font-semibold" style={{ color: '#14B8A6' }}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#F1F5F9' }}>
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6" style={{ color: '#94A3B8' }}>
                    {project.description}
                  </p>

                  <div className="mb-5 sm:mb-6">
                    <h4 className="text-sm font-semibold mb-2.5" style={{ color: '#CBD5E1' }}>
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300"
                          style={{
                            backgroundColor: 'rgba(20, 184, 166, 0.15)',
                            color: '#14B8A6',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-[#14B8A6] active:from-[#0d9488] active:to-[#22d3ee] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/40 active:scale-95 min-h-12 text-sm sm:text-base">
                    View Project Details
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
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

        <div className="text-center mt-12 sm:mt-16">
          <button
            className="group bg-slate-800/70 backdrop-blur-sm border border-slate-700 text-slate-300 px-6 sm:px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-800/90 hover:border-[#14B8A6]/50 transition-all duration-300 active:scale-95 min-h-12 text-sm sm:text-base"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            View All Projects
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;