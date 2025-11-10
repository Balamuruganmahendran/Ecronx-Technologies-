import DefaultLayout from '../../layouts/DefaultLayout';
import HeroSection from './HeroSection';
import Features from './Features';

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <Features />
    </DefaultLayout>
  );
};

export default Home;
