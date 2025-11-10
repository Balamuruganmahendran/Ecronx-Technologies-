import DefaultLayout from '../../layouts/DefaultLayout';
import { Target, Eye, Award } from 'lucide-react';
import Card from '../../components/Card';

const About = () => {
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We are a team of passionate innovators committed to transforming industries through technology.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative solutions that drive growth and success.
              </p>
            </Card>

            <Card>
              <Eye className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of transformative technology solutions globally.
              </p>
            </Card>

            <Card>
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, excellence, and customer success drive everything we do.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
