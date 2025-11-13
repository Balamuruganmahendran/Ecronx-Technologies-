import DefaultLayout from '../../layouts/DefaultLayout';
import HeroSection from './HeroSection';
import SolutionsSection from './SolutionsSection';
import ProjectsSection from './ProjectsSection';
import CTASection from './CTASection';

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <SolutionsSection />
      <ProjectsSection />
      <CTASection />
    </DefaultLayout>
  );
};

export default Home;
