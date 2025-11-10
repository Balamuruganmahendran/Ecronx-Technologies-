import DefaultLayout from '../../layouts/DefaultLayout';
import JobCard from './JobCard';

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Product',
    },
    {
      id: 3,
      title: 'UX Designer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Design',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Contract',
      department: 'Engineering',
    },
  ];

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We're looking for talented individuals to help us build the future.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Careers;
