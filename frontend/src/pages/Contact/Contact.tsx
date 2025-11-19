'use client';

import DefaultLayout from '../../layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  MessageSquare,
  Clock,
  Globe,
} from 'lucide-react';

// Reusable Card & Button (unchanged)
const Card: React.FC<{ children: React.ReactNode; className?: string; hover?: boolean }> = ({
  children,
  className = '',
  hover,
}) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${
      hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''
    } ${className}`}
  >
    {children}
  </div>
);

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}> = ({ children, className = '', type = 'button', disabled = false, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [messageCharCount, setMessageCharCount] = useState(0);

  const MAX_MESSAGE_LENGTH = 1000;

  useEffect(() => {
    setMessageCharCount(formData.message.length);
  }, [formData.message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your full name';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return 'Please enter a valid email address';
    if (!formData.subject.trim()) return 'Subject is required';
    if (formData.message.trim().length < 20)
      return 'Message must be at least 20 characters';
    return null;
  };

  // Updated: Real API call to Django
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.details?.[0] || 'Failed to send message');
      }

      // Success from Django
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setMessageCharCount(0);
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      gradient: 'from-blue-500 to-blue-600',
      details: ['hello@yourcompany.in', 'support@yourcompany.in'],
      link: 'mailto:hello@yourcompany.in',
      linkText: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      gradient: 'from-green-500 to-green-600',
      details: ['+91 98765 43210 (IN)', '+1 (555) 123-4567 (Global)'],
      extra: 'Mon–Fri: 9:30 AM – 6:30 PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      gradient: 'from-purple-500 to-purple-600',
      details: ['3rd Floor, Innov8 Coworking', 'Sector 62, Noida, UP 201301'],
      extra: 'By appointment only',
    },
  ];

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <span className="text-blue-600 font-semibold text-lg">Get in Touch</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's Build Together</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's a new idea, partnership, or just a quick question — we're here and ready to help.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 md:p-10 shadow-xl">
                  <div className="flex items-center gap-3 mb-8">
                    <Send className="w-10 h-10 text-blue-600" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Send us a Message</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-5 py-4 bg-gray-50 border rounded-xl focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-blue-300 focus:border-blue-500 ${
                            focusedField === 'name' ? 'ring-4 ring-blue-300 border-blue-500' : 'border-gray-200'
                          }`}
                          placeholder="e.g. Priya Sharma"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-5 py-4 bg-gray-50 border rounded-xl focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-blue-300 focus:border-blue-500 ${
                            focusedField === 'email' ? 'ring-4 ring-blue-300 border-blue-500' : 'border-gray-200'
                          }`}
                          placeholder="priya@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition"
                        placeholder="e.g. Collaboration Opportunity"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          maxLength={MAX_MESSAGE_LENGTH}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition resize-none"
                          placeholder="Share your thoughts, ideas, or questions... (min 20 characters)"
                          required
                        />
                        <div className="absolute bottom-3 right-4 text-xs text-gray-500">
                          {messageCharCount}/{MAX_MESSAGE_LENGTH}
                        </div>
                      </div>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-3 text-green-700 bg-green-50 px-5 py-4 rounded-xl border border-green-200">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Message Sent Successfully!</p>
                          <p className="text-sm">We'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-3 text-red-700 bg-red-50 px-5 py-4 rounded-xl border border-red-200">
                        <AlertCircle className="w-6 h-6 flex-shrink-0" />
                        <p className="font-medium">{errorMessage}</p>
                      </div>
                    )}

                    <Button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 text-lg rounded-xl shadow-lg transition-all duration-300 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin h-6 w-6" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">Other Ways to Connect</h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <Card key={item.title} hover className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-2xl shadow-lg bg-gradient-to-br ${item.gradient}`}>
                          <item.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          {item.details.map((line, i) => (
                            <p key={i} className="text-gray-600 text-sm mb-1">{line}</p>
                          ))}
                          {item.extra && <p className="text-xs text-gray-500 mt-2">{item.extra}</p>}
                          {item.link && (
                            <a
                              href={item.link}
                              className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline mt-2 text-sm"
                            >
                              {item.linkText} →
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center">
                  <p className="text-lg font-semibold mb-4">Stay Connected</p>
                  <div className="flex justify-center gap-4 mb-5">
                    {['T', 'L', 'G'].map((letter, i) => (
                      <button
                        key={i}
                        className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110 hover:bg-white/30"
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm opacity-90">
                    Current time in India: <span className="font-mono">
                      {new Date().toLocaleTimeString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Contact;