import DefaultLayout from '../../layouts/DefaultLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product Pro',
      description: 'Our flagship product for enterprise solutions.',
      price: '$99/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Priority Support'],
    },
    {
      id: 2,
      name: 'Product Plus',
      description: 'Perfect for growing businesses.',
      price: '$49/mo',
      features: ['Feature 1', 'Feature 2', 'Email Support'],
    },
    {
      id: 3,
      name: 'Product Starter',
      description: 'Great for small teams getting started.',
      price: '$19/mo',
      features: ['Feature 1', 'Basic Support'],
    },
  ];

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution for your business needs.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="text-center">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  {product.price}
                </div>
                <ul className="text-left mb-6 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Products;
