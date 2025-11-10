import Button from '../../components/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Building the Future of Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with cutting-edge solutions designed for tomorrow's challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 inline" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
