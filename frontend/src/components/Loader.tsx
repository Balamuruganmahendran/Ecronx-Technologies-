import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-cyan-50/30">
      <div className="text-center">
        {/* Outer glow ring */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
          
          {/* Glass container */}
          <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl">
            {/* Spinning gradient ring */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-full animate-spin" style={{ padding: '3px' }}>
                <div className="bg-white/40 backdrop-blur-xl rounded-full w-full h-full"></div>
              </div>
              
              {/* Center icon */}
              <div className="relative flex items-center justify-center w-20 h-20">
                <Loader2 className="w-10 h-10 text-cyan-600 animate-spin" style={{ animationDuration: '1.5s' }} />
              </div>
            </div>
            
            {/* Loading text with gradient */}
            <p className="mt-6 text-lg font-semibold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
              Loading...
            </p>
            
            {/* Progress dots */}
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;