import DefaultLayout from '../../layouts/DefaultLayout';
import Card from '../../components/Card';
import { servicesData } from '../../data/servicesData';

const Services = () => {
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Card key={service.id} hover>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Services;
