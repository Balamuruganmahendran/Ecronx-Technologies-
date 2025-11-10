import DefaultLayout from '../../layouts/DefaultLayout';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Button from '../../components/Button';

const BlogDetail = () => {
  return (
    <DefaultLayout>
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Button>

          <img
            src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Blog post"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Future of Web Development
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              John Doe
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              January 15, 2024
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              The world of web development is constantly evolving, with new technologies
              and frameworks emerging at a rapid pace. In this article, we explore the
              trends that are shaping the future of how we build for the web.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Modern Frameworks</h2>
            <p className="text-gray-700 mb-6">
              React, Vue, and other modern frameworks have revolutionized how we think
              about building user interfaces. Component-based architecture has become
              the standard for creating maintainable and scalable applications.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Performance Matters</h2>
            <p className="text-gray-700 mb-6">
              With users expecting instant load times, performance optimization has
              never been more critical. Techniques like code splitting, lazy loading,
              and efficient caching strategies are essential for modern web applications.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">The Future is Bright</h2>
            <p className="text-gray-700 mb-6">
              As we look ahead, technologies like WebAssembly, Progressive Web Apps,
              and AI-powered development tools promise to make web development even
              more powerful and accessible.
            </p>
          </div>
        </div>
      </article>
    </DefaultLayout>
  );
};

export default BlogDetail;
