export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Davis',
    company: 'Tech Innovators Inc.',
    role: 'CEO',
    content: 'Working with this team has been transformative for our business. Their expertise and dedication are unmatched.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'David Brown',
    company: 'Digital Solutions Ltd.',
    role: 'CTO',
    content: 'The quality of work and attention to detail exceeded our expectations. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'Lisa Anderson',
    company: 'Creative Agency Co.',
    role: 'Design Director',
    content: 'Their innovative approach and technical skills helped us achieve results beyond what we imagined.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];
