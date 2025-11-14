// import DefaultLayout from '../../layouts/DefaultLayout';
// import Button from '../../components/Button';
// import Card from '../../components/Card';
// import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, X, Loader2 } from 'lucide-react';
// import { FormEvent, useState, useEffect, useRef } from 'react';
// import { classNames } from '../../utils/helpers';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [messageCharCount, setMessageCharCount] = useState(0);
//   const formRef = useRef<HTMLFormElement>(null);

//   const MAX_MESSAGE_LENGTH = 1000;

//   useEffect(() => {
//     setMessageCharCount(formData.message.length);
//   }, [formData.message]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setSubmitStatus('idle');
//     setErrorMessage('');
//   };

//   const validateForm = () => {
//     if (!formData.name.trim()) return 'Please enter your full name';
//     if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
//       return 'Please enter a valid email address';
//     if (!formData.subject.trim()) return 'Subject is required';
//     if (formData.message.trim().length < 20)
//       return 'Message must be at least 20 characters to ensure clarity';
//     return null;
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     const validationError = validateForm();
//     if (validationError) {
//       setErrorMessage(validationError);
//       setSubmitStatus('error');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('idle');
//     setErrorMessage('');

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       console.log('Contact Form Submitted:', formData);

//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setMessageCharCount(0);

//       // Auto-scroll to success message
//       setTimeout(() => {
//         document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }, 100);
//     } catch (err) {
//       setSubmitStatus('error');
//       setErrorMessage('Failed to send message. Please try again or email us directly.');
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setSubmitStatus('idle'), 5000);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email Us',
//       gradient: 'from-pink-500 to-purple-600',
//       details: ['hello@yourcompany.in', 'support@yourcompany.in'],
//       link: 'mailto:hello@yourcompany.in',
//       linkText: 'Send Email',
//     },
//     {
//       icon: Phone,
//       title: 'Call Us',
//       gradient: 'from-green-500 to-teal-600',
//       details: ['+91 98765 43210 (IN)', '+1 (555) 123-4567 (Global)'],
//       extra: 'Mon–Fri: 9:30 AM – 6:30 PM IST',
//     },
//     {
//       icon: MapPin,
//       title: 'Visit Our Office',
//       gradient: 'from-orange-500 to-red-600',
//       details: ['3rd Floor, Innov8 Coworking', 'Sector 62, Noida, UP 201301'],
//       extra: 'By appointment only',
//     },
//   ];

//   return (
//     <DefaultLayout>
//       {/* Hero Section - Dark Gradient */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-28 px-4 text-white">
//         <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
//         <div className="relative z-10 max-w-5xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in">
//             Let's Build Together
//           </h1>
//           <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
//             Whether it's a new idea, partnership, or just a quick question — we're here in <span className="font-semibold text-yellow-300">India</span> and ready to help.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <section className="py-20 px-4 -mt-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <Card className="p-8 md:p-10 shadow-2xl bg-white rounded-3xl border-0 overflow-hidden">
//                 <div className="flex items-center gap-3 mb-8">
//                   <Send className="w-10 h-10 text-indigo-600" />
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Send us a Message</h2>
//                 </div>

//                 <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                         Full Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className={classNames(
//                           'w-full px-5 py-4 bg-gray-50 border rounded-xl focus:outline-none transition-all duration-200',
//                           'focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500',
//                           focusedField === 'name' ? 'ring-4 ring-indigo-300 border-indigo-500' : 'border-gray-200'
//                         )}
//                         placeholder="e.g. Priya Sharma"
//                         required
//                         aria-invalid={submitStatus === 'error' && !formData.name.trim()}
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                         Email Address <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className={classNames(
//                           'w-full px-5 py-4 bg-gray-50 border rounded-xl focus:outline-none transition-all duration-200',
//                           'focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500',
//                           focusedField === 'email' ? 'ring-4 ring-indigo-300 border-indigo-500' : 'border-gray-200'
//                         )}
//                         placeholder="priya@company.com"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Subject <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       id="subject"
//                       name="subject"
//                       type="text"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
//                       placeholder="e.g. Collaboration Opportunity"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Your Message <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows={6}
//                         maxLength={MAX_MESSAGE_LENGTH}
//                         className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition resize-none"
//                         placeholder="Share your thoughts, ideas, or questions... (min 20 characters)"
//                         required
//                       />
//                       <div className="absolute bottom-3 right-4 text-xs text-gray-500">
//                         {messageCharCount}/{MAX_MESSAGE_LENGTH}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Status Messages */}
//                   <div aria-live="polite" className="space-y-3">
//                     {submitStatus === 'success' && (
//                       <div
//                         id="success-message"
//                         className="flex items-center gap-3 text-green-700 bg-green-50 px-5 py-4 rounded-xl border border-green-200 animate-fade-in"
//                       >
//                         <CheckCircle className="w-6 h-6 flex-shrink-0" />
//                         <div>
//                           <p className="font-semibold">Message Sent Successfully!</p>
//                           <p className="text-sm">We'll get back to you within 24 hours (usually faster).</p>
//                         </div>
//                       </div>
//                     )}

//                     {submitStatus === 'error' && (
//                       <div className="flex items-center gap-3 text-red-700 bg-red-50 px-5 py-4 rounded-xl border border-red-200 animate-shake">
//                         <AlertCircle className="w-6 h-6 flex-shrink-0" />
//                         <p className="font-medium">{errorMessage}</p>
//                       </div>
//                     )}
//                   </div>

//                   <Button
//                     type="submit"
//                     size="lg"
//                     disabled={isSubmitting}
//                     className={classNames(
//                       'w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700',
//                       'text-white font-bold py-5 text-lg rounded-xl shadow-lg transform transition-all duration-300',
//                       'disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none',
//                       !isSubmitting && 'hover:scale-105 hover:shadow-xl'
//                     )}
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center justify-center gap-3">
//                         <Loader2 className="animate-spin h-6 w-6" />
//                         Sending Message...
//                       </span>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </Card>
//             </div>

//             {/* Contact Info Sidebar */}
//             <div className="space-y-8">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Other Ways to Connect</h2>

//               <div className="space-y-6">
//                 {contactInfo.map((item, index) => (
//                   <Card
//                     key={item.title}
//                     className={classNames(
//                       'p-8 backdrop-blur-lg bg-white/80 border border-white/30 shadow-xl',
//                       'transition-all duration-400 hover:shadow-2xl hover:-translate-y-2',
//                       'animate-fade-in-up'
//                     )}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <div className="flex items-start gap-5">
//                       <div className={classNames('p-4 rounded-2xl shadow-lg bg-gradient-to-br', item.gradient)}>
//                         <item.icon className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                         {item.details.map((line, i) => (
//                           <p key={i} className="text-gray-600 mt-1 text-sm md:text-base">
//                             {line}
//                           </p>
//                         ))}
//                         {item.extra && <p className="text-xs text-gray-500 mt-2">{item.extra}</p>}
//                         {item.link && (
//                           <a
//                             href={item.link}
//                             className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline mt-2 text-sm"
//                           >
//                             {item.linkText} →
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>

//               {/* Social & Quick CTA */}
//               <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white text-center shadow-xl">
//                 <p className="text-lg font-semibold mb-4">Stay Connected</p>
//                 <div className="flex justify-center gap-5">
//                   {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
//                     <a
//                       key={platform}
//                       href="#"
//                       aria-label={`Follow us on ${platform}`}
//                       className="group w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-125 hover:bg-white/30"
//                     >
//                       {platform[0]}
//                     </a>
//                   ))}
//                 </div>
//                 <p className="mt-5 text-sm opacity-90">
//                   Current time in India: <span className="font-mono">{new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })}</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </DefaultLayout>
//   );
// };

// export default Contact;

import DefaultLayout from '../../layouts/DefaultLayout';
import { useState, useEffect, useRef, FormEvent } from 'react';
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

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover, style }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${
      hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''
    } ${className}`}
    style={style}
  >
    {children}
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}) => {
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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Contact Form Submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setMessageCharCount(0);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
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
        {/* Hero Section */}
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

        {/* Trust Indicators */}
        <section className="py-8 px-4 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900">24h Response</span>
                </div>
                <p className="text-sm text-gray-600">Usually within hours</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900">Global Reach</span>
                </div>
                <p className="text-sm text-gray-600">India & worldwide</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900">100% Secure</span>
                </div>
                <p className="text-sm text-gray-600">Your data is safe</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900">Always Here</span>
                </div>
                <p className="text-sm text-gray-600">Mon-Fri support</p>
              </div>
            </div>
          </div>
        </section>

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

              {/* Contact Info Sidebar */}
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
                            <p key={i} className="text-gray-600 text-sm mb-1">
                              {line}
                            </p>
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

                {/* Social & Info Card */}
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
                    Current time in India: <span className="font-mono">{new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })}</span>
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of founders already building with us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-bold">
                Start Free Trial
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold">
                Book a Demo
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-6">
              No credit card • 14-day trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Contact;