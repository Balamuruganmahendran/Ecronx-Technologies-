import DefaultLayout from '../../layouts/DefaultLayout';
import Card from '../../components/Card';
import { Calendar, User } from 'lucide-react';

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends and technologies shaping the web.',
      author: 'John Doe',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Building Scalable Applications',
      excerpt: 'Best practices for creating applications that grow with your business.',
      author: 'Jane Smith',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      excerpt: 'Creating beautiful and intuitive user experiences.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Insights, stories, and knowledge from our team.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a key={post.id} href={`/blog/${post.id}`}>
                <Card hover className="h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default BlogList;
