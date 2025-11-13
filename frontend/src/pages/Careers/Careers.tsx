import { useState } from 'react';
import { MapPin, Briefcase, Clock, DollarSign, Users, Heart, Zap, Trophy, Code, Palette, TrendingUp, Settings, Search, Filter, X, ArrowRight, CheckCircle, Globe, Coffee, Laptop, Plane } from 'lucide-react';
import DefaultLayout from '../../layouts/DefaultLayout';

const JobCard = ({ job, onClick }) => {
  const departmentIcons = {
    Engineering: Code,
    Product: TrendingUp,
    Design: Palette,
    Operations: Settings,
  };

  const DeptIcon = departmentIcons[job.department] || Briefcase;

  return (
    <div 
      onClick={() => onClick(job)}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <DeptIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-sm font-semibold text-blue-600">{job.department}</span>
            {job.isNew && (
              <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                NEW
              </span>
            )}
          </div>
        </div>
        {job.featured && (
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
            ⭐ Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Briefcase className="w-4 h-4 text-blue-600" />
          <span>{job.type}</span>
        </div>
        {job.salary && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <span>{job.salary}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.slice(0, 3).map((skill, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            {skill}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="text-gray-500 text-xs py-1">+{job.skills.length - 3} more</span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">Posted {job.posted}</span>
        <button className="text-blue-600 font-semibold hover:gap-2 flex items-center gap-1 transition-all">
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build beautiful, responsive user interfaces using modern web technologies.',
      salary: '$120k - $160k',
      posted: '2 days ago',
      isNew: true,
      featured: true,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'GraphQL'],
      requirements: [
        '5+ years of frontend development experience',
        'Expert knowledge of React and modern JavaScript',
        'Strong understanding of responsive design principles',
        'Experience with state management (Redux, Context API)',
        'Excellent problem-solving skills'
      ],
      benefits: ['Health Insurance', 'Remote Work', '401(k)', 'Unlimited PTO'],
      responsibilities: [
        'Develop and maintain web applications',
        'Collaborate with designers and backend engineers',
        'Write clean, maintainable code',
        'Participate in code reviews'
      ]
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Product',
      description: 'Drive product strategy and roadmap for our flagship products.',
      salary: '$130k - $170k',
      posted: '1 week ago',
      isNew: false,
      featured: true,
      skills: ['Product Strategy', 'Agile', 'User Research', 'SQL', 'Analytics'],
      requirements: [
        '3+ years of product management experience',
        'Strong analytical and problem-solving skills',
        'Experience with agile methodologies',
        'Excellent communication skills',
        'Technical background preferred'
      ],
      benefits: ['Health Insurance', 'Equity', '401(k)', 'Gym Membership'],
      responsibilities: [
        'Define product vision and strategy',
        'Prioritize features and roadmap',
        'Work with engineering and design teams',
        'Analyze user feedback and metrics'
      ]
    },
    {
      id: 3,
      title: 'UX Designer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Design',
      description: 'Create delightful user experiences that solve real problems.',
      salary: '$110k - $140k',
      posted: '3 days ago',
      isNew: true,
      featured: false,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'UI Design'],
      requirements: [
        '4+ years of UX design experience',
        'Portfolio demonstrating UX process',
        'Proficiency in Figma or similar tools',
        'Strong understanding of design principles',
        'Experience with user research methods'
      ],
      benefits: ['Health Insurance', 'Relocation Assistance', '401(k)', 'Learning Budget'],
      responsibilities: [
        'Conduct user research and testing',
        'Create wireframes and prototypes',
        'Design intuitive user interfaces',
        'Collaborate with product and engineering'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Contract',
      department: 'Engineering',
      description: 'Build and maintain scalable infrastructure and deployment pipelines.',
      salary: '$100k - $130k',
      posted: '5 days ago',
      isNew: false,
      featured: false,
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      requirements: [
        '3+ years of DevOps experience',
        'Strong knowledge of AWS or GCP',
        'Experience with containerization',
        'Familiarity with IaC tools',
        'Problem-solving mindset'
      ],
      benefits: ['Flexible Hours', 'Remote Work', 'Tech Stipend', 'Health Insurance'],
      responsibilities: [
        'Manage cloud infrastructure',
        'Automate deployment processes',
        'Monitor system performance',
        'Ensure security best practices'
      ]
    },
    {
      id: 5,
      title: 'Marketing Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Operations',
      description: 'Lead marketing initiatives to grow our brand and customer base.',
      salary: '$90k - $120k',
      posted: '1 week ago',
      isNew: false,
      featured: false,
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics', 'Social Media'],
      requirements: [
        '5+ years of marketing experience',
        'Proven track record of growth',
        'Strong analytical skills',
        'Experience with marketing automation',
        'Excellent writing skills'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Equity', 'Professional Development'],
      responsibilities: [
        'Develop marketing strategies',
        'Manage marketing campaigns',
        'Analyze campaign performance',
        'Build brand awareness'
      ]
    },
    {
      id: 6,
      title: 'Data Scientist',
      location: 'Boston, MA',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Turn data into insights that drive business decisions.',
      salary: '$130k - $170k',
      posted: '4 days ago',
      isNew: true,
      featured: true,
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'TensorFlow'],
      requirements: [
        'MS or PhD in related field',
        '3+ years of data science experience',
        'Strong statistical knowledge',
        'Experience with ML frameworks',
        'Excellent communication skills'
      ],
      benefits: ['Health Insurance', 'Relocation Assistance', '401(k)', 'Research Time'],
      responsibilities: [
        'Build predictive models',
        'Analyze large datasets',
        'Present findings to stakeholders',
        'Collaborate with engineering teams'
      ]
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobs.length },
    { id: 'Engineering', name: 'Engineering', count: jobs.filter(j => j.department === 'Engineering').length },
    { id: 'Product', name: 'Product', count: jobs.filter(j => j.department === 'Product').length },
    { id: 'Design', name: 'Design', count: jobs.filter(j => j.department === 'Design').length },
    { id: 'Operations', name: 'Operations', count: jobs.filter(j => j.department === 'Operations').length },
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'Remote', name: 'Remote' },
    { id: 'New York, NY', name: 'New York, NY' },
    { id: 'San Francisco, CA', name: 'San Francisco, CA' },
    { id: 'Boston, MA', name: 'Boston, MA' },
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'Full-time', name: 'Full-time' },
    { id: 'Contract', name: 'Contract' },
    { id: 'Part-time', name: 'Part-time' },
  ];

  const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health, dental, and vision insurance' },
    { icon: Laptop, title: 'Remote First', description: 'Work from anywhere with flexible hours' },
    { icon: Zap, title: 'Growth & Learning', description: '$2,000 annual learning budget' },
    { icon: Coffee, title: 'Work-Life Balance', description: 'Unlimited PTO and paid parental leave' },
    { icon: DollarSign, title: 'Competitive Pay', description: 'Top-of-market salaries and equity' },
    { icon: Plane, title: 'Team Retreats', description: 'Annual company retreats to amazing destinations' },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  const activeFilters = [
    selectedDepartment !== 'all' && { type: 'department', value: selectedDepartment },
    selectedLocation !== 'all' && { type: 'location', value: selectedLocation },
    selectedType !== 'all' && { type: 'type', value: selectedType },
  ].filter(Boolean);

  const clearFilter = (type) => {
    if (type === 'department') setSelectedDepartment('all');
    if (type === 'location') setSelectedLocation('all');
    if (type === 'type') setSelectedType('all');
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">We're Hiring!</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            We're looking for talented individuals to help us build the future. Join a team that values innovation, collaboration, and personal growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{jobs.length}</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
            <p className="text-lg text-gray-600">We invest in our people and their success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-gray-600 py-2">Active filters:</span>
                {activeFilters.map((filter, idx) => (
                  <button
                    key={idx}
                    onClick={() => clearFilter(filter.type)}
                    className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-200"
                  >
                    {filter.value}
                    <X className="w-4 h-4" />
                  </button>
                ))}
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                    setSelectedType('all');
                  }}
                  className="text-sm text-blue-600 hover:underline py-1"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Results Count */}
            <p className="text-gray-600">
              Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
            </p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={setSelectedJob} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                  setSelectedType('all');
                }}
                className="text-blue-600 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
            Submit General Application
          </button>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-blue-600">{selectedJob.department}</span>
                    {selectedJob.isNew && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                        NEW
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {selectedJob.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {selectedJob.salary}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">About the Role</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedJob.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex gap-4 pt-6 mt-6 border-t border-gray-200">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                  Share Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Careers;