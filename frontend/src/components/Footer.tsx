// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Company</h3>
//             <p className="text-gray-400">
//               Building innovative solutions for the future.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
//               <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
//               <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
//               <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Resources</h4>
//             <ul className="space-y-2">
//               <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
//               <li><a href="/innovation-lab" className="text-gray-400 hover:text-white">Innovation Lab</a></li>
//               <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
//               <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
//               <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
//               <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-cyan-50/30 backdrop-blur-xl border-t border-white/50 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Company
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Building innovative solutions for the future.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/40 transition-all duration-300">
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Services
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Products
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/40 transition-all duration-300">
            <h4 className="font-semibold mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="/innovation-lab" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Innovation Lab
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1 hover:font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/40 transition-all duration-300">
            <h4 className="font-semibold mb-4 text-gray-900">Follow Us</h4>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2.5 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-xl text-gray-700 hover:text-white bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/50 mt-8 pt-8 text-center">
          <p className="text-gray-700 bg-white/30 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-white/50">
            &copy; {new Date().getFullYear()} Ecronx Technology Pvt Ltd  All rights reserved.  Designed by Balamurugan Mahendran.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;