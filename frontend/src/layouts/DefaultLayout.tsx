import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingBot from '../components/FloatingBot';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onGetStartedClick={() => {
        // Handle get started click - could navigate to contact or open modal
        window.location.href = '/contact';
      }} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingBot />
    </div>
  );
};

export default DefaultLayout;
