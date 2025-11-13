import { ShoppingCart, Smartphone, Globe, Code, Database, Zap, Star, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
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
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful projects delivered to clients across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <project.icon className="text-white" size={32} />
                </div>
                {project.featured && (
                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <Star size={12} />
                    Featured
                  </div>
                )}
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-indigo-500">{project.category}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-slate-900 font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-indigo-500/20 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105">
                View Project Details
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
