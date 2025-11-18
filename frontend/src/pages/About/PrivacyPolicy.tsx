import DefaultLayout from '../../layouts/DefaultLayout';
import { Shield, Eye, Lock, FileText, Users, AlertTriangle, CheckCircle, ArrowRight, Info, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: <Eye className="w-8 h-8" />,
      content: [
        'Personal information you provide directly (name, email, phone, company details)',
        'Usage data and analytics from our website and services',
        'Communication records when you contact us',
        'Technical information about your devices and browsing behavior',
        'Feedback and survey responses'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <FileText className="w-8 h-8" />,
      content: [
        'Provide and improve our services',
        'Communicate with you about our offerings',
        'Process transactions and manage accounts',
        'Send marketing communications (with consent)',
        'Analyze usage patterns to enhance user experience',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: <Users className="w-8 h-8" />,
      content: [
        'Service providers and business partners',
        'Legal authorities when required by law',
        'Professional advisors and auditors',
        'In connection with business transfers',
        'With your explicit consent'
      ]
    },
    {
      title: 'Data Security',
      icon: <Lock className="w-8 h-8" />,
      content: [
        'Industry-standard encryption protocols',
        'Regular security audits and assessments',
        'Access controls and employee training',
        'Secure data centers and infrastructure',
        'Incident response and breach notification procedures'
      ]
    }
  ];

  const rights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of the personal information we hold about you.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Correct Your Data',
      description: 'Request correction of inaccurate or incomplete personal information.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Delete Your Data',
      description: 'Request deletion of your personal information under certain circumstances.',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Data Portability',
      description: 'Request transfer of your data to another service provider.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Opt-out of Marketing',
      description: 'Unsubscribe from marketing communications at any time.',
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: 'Object to Processing',
      description: 'Object to certain types of data processing activities.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const cookies = [
    {
      type: 'Essential Cookies',
      purpose: 'Required for website functionality',
      duration: 'Session',
      required: true
    },
    {
      type: 'Analytics Cookies',
      purpose: 'Help us understand how visitors use our website',
      duration: '2 years',
      required: false
    },
    {
      type: 'Marketing Cookies',
      purpose: 'Used to deliver relevant advertisements',
      duration: '1 year',
      required: false
    },
    {
      type: 'Functional Cookies',
      purpose: 'Remember your preferences and settings',
      duration: '1 year',
      required: false
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Your Privacy Matters</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">Privacy Policy</h1>
          <p className="text-2xl text-blue-100 max-w-3xl leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </div>

      {/* Last Updated */}
      <section className="px-4 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">Last updated: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              At Ecronx, we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
              use our services, or interact with us.
            </p>
            <p className="mb-4">
              By using our services, you agree to the collection and use of information in accordance with this policy.
              We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <p>
              This policy applies to all users of our website, services, and applications, regardless of location.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have several rights regarding your personal information. Here are the key rights you have:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {right.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{right.title}</h3>
                <p className="text-gray-600 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cookies and similar technologies to enhance your browsing experience and provide personalized content.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cookies.map((cookie, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{cookie.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{cookie.duration}</td>
                      <td className="px-6 py-4 text-sm">
                        {cookie.required ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Required
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Optional
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
              <p className="text-blue-100 text-lg">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-100">privacy@ecronx.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-blue-100">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-blue-100 text-sm">
                We typically respond to privacy inquiries within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
              legal, or regulatory reasons. When we make material changes, we will notify you by:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Emailing you at the address associated with your account</li>
              <li>Posting a prominent notice on our website</li>
              <li>Updating the "Last updated" date at the top of this policy</li>
            </ul>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;
