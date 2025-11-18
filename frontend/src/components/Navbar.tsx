import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ onGetStartedClick }: { onGetStartedClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Ecronx', path: '/about-ecronx' },
        { name: 'Value Proposition', path: '/value-proposition' },
        { name: 'Mission', path: '/mission' },
        { name: 'Vision', path: '/vision' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Use', path: '/terms-of-use' },
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleGetStarted = () => {
    onGetStartedClick?.();
    setIsOpen(false);
  };

  const handleAboutClick = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const handleDropdownItemClick = (path: string) => {
    setIsAboutDropdownOpen(false);
    setIsOpen(false);
    // Navigate to the path
    window.location.href = path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Logo
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <div className="relative px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 group cursor-pointer">
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-cyan-50/0 to-teal-50/0 group-hover:from-blue-50 group-hover:via-cyan-50 group-hover:to-teal-50 rounded-lg transition-all duration-300"></span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                    </div>
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {link.dropdownItems?.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => handleDropdownItemClick(item.path)}
                            className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-cyan-50 hover:to-teal-50 hover:text-gray-900 font-medium transition-all duration-200"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.path}
                    className="relative px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-cyan-50/0 to-teal-50/0 group-hover:from-blue-50 group-hover:via-cyan-50 group-hover:to-teal-50 rounded-lg transition-all duration-300"></span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={handleGetStarted}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 font-medium"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-200">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLinks.map((link, index) => (
              <div key={link.path}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={handleAboutClick}
                      className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-cyan-50 hover:to-teal-50 hover:text-gray-900 font-medium transition-all duration-200"
                      style={{
                        animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                      }}
                    >
                      {link.name}
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {link.dropdownItems?.map((item, itemIndex) => (
                          <button
                            key={item.path}
                            onClick={() => handleDropdownItemClick(item.path)}
                            className="w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:via-cyan-50 hover:to-teal-50 hover:text-gray-900 font-medium transition-all duration-200 text-sm"
                            style={{
                              animation: isOpen ? `slideIn 0.3s ease-out ${(index + itemIndex + 1) * 0.05}s both` : 'none'
                            }}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.path}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-cyan-50 hover:to-teal-50 hover:text-gray-900 font-medium transition-all duration-200"
                    style={{
                      animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                    }}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-200 mt-3">
              <button 
                onClick={handleGetStarted}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;