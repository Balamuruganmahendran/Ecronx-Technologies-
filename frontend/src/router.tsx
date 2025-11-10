import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const Products = lazy(() => import('./pages/Products/Products'));
const Careers = lazy(() => import('./pages/Careers/Careers'));
const BlogList = lazy(() => import('./pages/Blog/BlogList'));
const BlogDetail = lazy(() => import('./pages/Blog/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const InnovationLab = lazy(() => import('./pages/InnovationLab/InnovationLab'));

interface Route {
  path: string;
  element: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/products', element: <Products /> },
  { path: '/careers', element: <Careers /> },
  { path: '/blog', element: <BlogList /> },
  { path: '/blog/:id', element: <BlogDetail /> },
  { path: '/contact', element: <Contact /> },
  { path: '/innovation-lab', element: <InnovationLab /> },
];

export const RouteWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);
