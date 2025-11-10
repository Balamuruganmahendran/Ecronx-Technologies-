import DefaultLayout from '../../layouts/DefaultLayout';
import Card from '../../components/Card';
import { Lightbulb, Rocket, Microscope, Cpu } from 'lucide-react';

const InnovationLab = () => {
  const projects = [
    {
      icon: Lightbulb,
      title: 'AI Research',
      description: 'Exploring the frontiers of artificial intelligence and machine learning.',
      status: 'In Progress',
    },
    {
      icon: Rocket,
      title: 'Space Tech',
      description: 'Developing next-generation solutions for space exploration.',
      status: 'Beta',
    },
    {
      icon: Microscope,
      title: 'Biotech Innovation',
      description: 'Applying technology to solve biological and medical challenges.',
      status: 'Research',
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Pioneering quantum computing applications for real-world problems.',
      status: 'Experimental',
    },
  ];

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Innovation Lab</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Where we experiment with cutting-edge technologies and push the boundaries
            of what's possible.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-600">
              Exploring breakthrough technologies that will shape tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} hover>
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="w-12 h-12 text-blue-600" />
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default InnovationLab;
