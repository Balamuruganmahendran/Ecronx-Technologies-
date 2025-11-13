import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const Card = ({ children, className = '', hover = false, style }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        hover ? 'transition-transform duration-200 hover:scale-105 hover:shadow-xl' : ''
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
