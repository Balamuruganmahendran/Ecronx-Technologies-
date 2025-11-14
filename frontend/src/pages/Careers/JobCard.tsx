// import { MapPin, Clock, Briefcase, ExternalLink } from 'lucide-react';
// import Card from '../../components/Card';
// import Button from '../../components/Button';
// import { useState } from 'react';
// import { cn } from '@/lib/utils'; // Optional: if you use clsx/tailwind-merge

// interface JobCardProps {
//   title: string;
//   location: string;
//   type: string;
//   department: string;
//   onClick?: () => void;
//   loading?: boolean;
// }

// const JobCard = ({
//   title,
//   location,
//   type,
//   department,
//   onClick,
//   loading = false,
// }: JobCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Card
//       hover
//       className={cn(
//         'relative overflow-hidden transition-all duration-300 cursor-pointer',
//         'group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
//         onClick && 'ring-1 ring-gray-200'
//       )}
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       tabIndex={onClick ? 0 : undefined}
//       role={onClick ? 'button' : undefined}
//       aria-label={`Job: ${title} in ${location}`}
//       onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
//     >
//       {/* Optional: Subtle gradient overlay on hover */}
//       <div
//         className={cn(
//           'absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none',
//           isHovered && 'opacity-100'
//         )}
//       />

//       <div className="relative z-10 p-6">
//         {/* Job Title */}
//         <h3
//           className={cn(
//             'text-xl md:text-2xl font-bold mb-4 text-gray-900 line-clamp-2 transition-colors',
//             isHovered && 'text-blue-600'
//           )}
//           title={title}
//         >
//           {title}
//         </h3>

//         {/* Job Details */}
//         <div className="space-y-3 mb-6">
//           {/* Location */}
//           <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors">
//             <MapPin size={18} className="mr-2 flex-shrink-0 text-gray-500" />
//             <span className="text-sm md:text-base truncate" title={location}>
//               {location}
//             </span>
//           </div>

//           {/* Job Type */}
//           <div className="flex items-center">
//             <Clock size={18} className="mr-2 flex-shrink-0 text-gray-500" />
//             <span
//               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
//               title={type}
//             >
//               {type}
//             </span>
//           </div>

//           {/* Department */}
//           <div className="flex items-center">
//             <Briefcase size={18} className="mr-2 flex-shrink-0 text-gray-500" />
//             <span
//               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
//               title={department}
//             >
//               {department}
//             </span>
//           </div>
//         </div>

//         {/* Apply Button */}
//         <div className="flex justify-between items-center">
//           <Button
//             disabled={loading}
//             className={cn(
//               'transition-all duration-300',
//               isHovered && 'scale-105 shadow-lg'
//             )}
//             onClick={(e) => {
//               e.stopPropagation();
//               // Handle apply logic here if needed
//             }}
//           >
//             {loading ? (
//               <>
//                 <svg
//                   className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   />
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                   />
//                 </svg>
//                 Applying...
//               </>
//             ) : (
//               <>
//                 Apply Now
//                 <ExternalLink size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//               </>
//             )}
//           </Button>

//           {/* Optional: View Details link on hover */}
//           {onClick && isHovered && (
//             <span className="text-xs text-blue-600 font-medium animate-pulse">
//               Press Enter ↵
//             </span>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default JobCard;

import { MapPin, Clock, Briefcase, ExternalLink } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useState } from 'react';
import { cn } from '@/lib/utils'; // Optional: if you use clsx/tailwind-merge
import { useNavigate } from 'react-router-dom'; // Add this import

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  department: string;
  onClick?: () => void;
  loading?: boolean;
}

const JobCard = ({
  title,
  location,
  type,
  department,
  onClick,
  loading = false,
}: JobCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Add this hook

  // Handle Apply Now button click
  const handleApplyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Navigate to GetInfo page with job details as state
    navigate('/apply', {
      state: {
        jobTitle: title,
        jobLocation: location,
        jobType: type,
        jobDepartment: department,
      }
    });
  };

  return (
    <Card
      hover
      className={cn(
        'relative overflow-hidden transition-all duration-300 cursor-pointer',
        'group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
        onClick && 'ring-1 ring-gray-200'
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={`Job: ${title} in ${location}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Optional: Subtle gradient overlay on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none',
          isHovered && 'opacity-100'
        )}
      />

      <div className="relative z-10 p-6">
        {/* Job Title */}
        <h3
          className={cn(
            'text-xl md:text-2xl font-bold mb-4 text-gray-900 line-clamp-2 transition-colors',
            isHovered && 'text-blue-600'
          )}
          title={title}
        >
          {title}
        </h3>

        {/* Job Details */}
        <div className="space-y-3 mb-6">
          {/* Location */}
          <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors">
            <MapPin size={18} className="mr-2 flex-shrink-0 text-gray-500" />
            <span className="text-sm md:text-base truncate" title={location}>
              {location}
            </span>
          </div>

          {/* Job Type */}
          <div className="flex items-center">
            <Clock size={18} className="mr-2 flex-shrink-0 text-gray-500" />
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              title={type}
            >
              {type}
            </span>
          </div>

          {/* Department */}
          <div className="flex items-center">
            <Briefcase size={18} className="mr-2 flex-shrink-0 text-gray-500" />
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
              title={department}
            >
              {department}
            </span>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-between items-center">
          <Button
            disabled={loading}
            className={cn(
              'transition-all duration-300',
              isHovered && 'scale-105 shadow-lg'
            )}
            onClick={handleApplyClick} // Updated to use the new handler
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Applying...
              </>
            ) : (
              <>
                Apply Now
                <ExternalLink size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            )}
          </Button>

          {/* Optional: View Details link on hover */}
          {onClick && isHovered && (
            <span className="text-xs text-blue-600 font-medium animate-pulse">
              Press Enter ↵
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default JobCard;