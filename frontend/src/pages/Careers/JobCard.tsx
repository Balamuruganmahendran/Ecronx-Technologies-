import { MapPin, Clock, Briefcase } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  department: string;
}

const JobCard = ({ title, location, type, department }: JobCardProps) => {
  return (
    <Card hover>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-gray-600">
          <MapPin size={18} className="mr-2" />
          {location}
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={18} className="mr-2" />
          {type}
        </div>
        <div className="flex items-center text-gray-600">
          <Briefcase size={18} className="mr-2" />
          {department}
        </div>
      </div>

      <Button>Apply Now</Button>
    </Card>
  );
};

export default JobCard;
