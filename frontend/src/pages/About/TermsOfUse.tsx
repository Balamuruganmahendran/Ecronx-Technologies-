import DefaultLayout from '../../layouts/DefaultLayout';
import { FileText, AlertTriangle, CheckCircle, ArrowRight, Info, Mail, Phone, Scale, Shield, Users, Clock } from 'lucide-react';

const TermsOfUse = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-8 h-8" />,
      content: [
        'By accessing and using Ecronx services, you accept and agree to be bound by these Terms of Use.',
        'If you do not agree to these terms, please do not use our services.',
        'These terms apply to all users, including visitors, customers, and partners.',
        'We reserve the right to modify these terms at any time with notice.'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <Users className="w-8 h-8" />,
      content: [
        'Provide accurate and complete information when registering or using our services.',
        'Maintain the confidentiality of your account credentials.',
        'Use our services in compliance with applicable laws and regulations.',
        'Respect the intellectual property rights of Ecronx and third parties.',
        'Report any security vulnerabilities or misuse of services.'
      ]
    },
    {
      title: 'Service Availability',
      icon: <Clock className="w-8 h-8" />,
      content: [
        'We strive for high availability but do not guarantee uninterrupted service.',
        'Maintenance windows will be scheduled with advance notice when possible.',
        'Service outages will be communicated through our status page and notifications.',
        'We maintain backup systems to minimize data loss and service disruption.',
        'Priority support is available for critical service issues.'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: <Shield className="w-8 h-8" />,
      content: [
        'All content, features, and functionality are owned by Ecronx or licensed to us.',
        'You may not reproduce, distribute, or create derivative works without permission.',
        'Our trademarks, service marks, and trade dress are protected.',
        'User-generated content remains your property but grants us usage rights.',
        'Open source components are subject to their respective licenses.'
      ]
    }
  ];

  const prohibited = [
    'Violating any applicable laws or regulations',
    'Attempting to gain unauthorized access to our systems',
    'Distributing malware, viruses, or harmful code',
    'Interfering with or disrupting our services',
    'Using our services for fraudulent or illegal activities',
    'Impersonating others or providing false information',
    'Scraping or automated data collection without permission',
    'Circumventing security measures or access restrictions'
  ];

  const limitations = [
    {
      title: 'Service Warranty',
      description: 'Services are provided "as is" without warranties of any kind.',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Liability Limits',
      description: 'Our liability is limited to the amount paid for services in the past 12 months.',
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: 'Indirect Damages',
      description: 'We are not liable for indirect, incidental, or consequential damages.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Third-Party Services',
      description: 'We are not responsible for third-party services or integrations.',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Legal Agreement</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">Terms of Use</h1>
          <p className="text-2xl text-green-100 max-w-3xl leading-relaxed">
            Please read these terms carefully before using our services. By using Ecronx, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Last Updated */}
      <section className="px-4 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-green-600" />
              <span className="text-gray-600">Last updated: December 2024 | Effective: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              These Terms of Use ("Terms") constitute a legally binding agreement between you and Ecronx Technologies
              ("Ecronx," "we," "us," or "our") governing your access to and use of our website, services, applications,
              and any related content or materials (collectively, the "Services").
            </p>
            <p className="mb-4">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms. If you do not agree to these Terms, you must not access or use our Services.
            </p>
            <p>
              These Terms apply to all users of our Services, including but not limited to individuals, businesses,
              and organizations accessing our Services for any purpose.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
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

      {/* Prohibited Activities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The following activities are strictly prohibited when using our Services:
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-900">Activities Not Permitted</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {prohibited.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-red-800">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Limitations & Disclaimers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important limitations on our liability and service warranties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {limitations.map((limit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {limit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{limit.title}</h3>
                <p className="text-gray-600 text-sm">{limit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              We reserve the right to terminate or suspend your account and access to our Services immediately,
              without prior notice or liability, for any reason, including but not limited to breach of these Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use our Services will cease immediately. All provisions of these Terms
              which by their nature should survive termination shall survive, including ownership provisions,
              warranty disclaimers, and limitations of liability.
            </p>
            <p>
              You may terminate your account at any time by contacting us or using the account deletion feature
              in your account settings.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States,
              without regard to its conflict of law provisions. Any disputes arising from these Terms or your
              use of our Services shall be subject to the exclusive jurisdiction of the courts in the United States.
            </p>
            <p>
              We encourage users to resolve disputes through negotiation and mediation before pursuing legal action.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-green-100 text-lg">
                If you have any questions about these Terms of Use, please contact us:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-green-100">legal@ecronx.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-green-100">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-green-100 text-sm">
                Our legal team typically responds within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to These Terms</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. When we make changes, we will update the
              "Last updated" date at the top of this page and notify users through our website or email.
            </p>
            <p className="mb-4">
              Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
              If you do not agree to the modified Terms, you must stop using our Services.
            </p>
            <p>
              We encourage you to review these Terms periodically to stay informed about any updates.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default TermsOfUse;
