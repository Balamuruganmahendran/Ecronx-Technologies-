// import { lazy, Suspense } from 'react';
// import Loader from './components/Loader';

// const Home = lazy(() => import('./pages/Home/Home'));
// const About = lazy(() => import('./pages/About/About'));
// const Services = lazy(() => import('./pages/Services/Services'));
// const Products = lazy(() => import('./pages/Products/Products'));
// const Careers = lazy(() => import('./pages/Careers/Careers'));
// const Contact = lazy(() => import('./pages/Contact/Contact'));


// interface Route {
//   path: string;
//   element: JSX.Element;
// }

// export const routes: Route[] = [
//   { path: '/', element: <Home /> },
//   { path: '/about', element: <About /> },
//   { path: '/services', element: <Services /> },
//   { path: '/products', element: <Products /> },
//   { path: '/careers', element: <Careers /> },
//   { path: '/contact', element: <Contact /> },
// ];

// export const RouteWrapper = ({ children }: { children: React.ReactNode }) => (
//   <Suspense fallback={<Loader />}>{children}</Suspense>
// );


import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const AboutEcronx = lazy(() => import('./pages/About/AboutEcronx'));
const ValueProposition = lazy(() => import('./pages/About/ValueProposition'));
const Mission = lazy(() => import('./pages/About/Mission'));
const Vision = lazy(() => import('./pages/About/Vision'));
const PrivacyPolicy = lazy(() => import('./pages/About/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/About/TermsOfUse'));
const Services = lazy(() => import('./pages/Services/Services'));
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'));
const Products = lazy(() => import('./pages/Products/Products'));
const Careers = lazy(() => import('./pages/Careers/Careers'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const GetInfo = lazy(() => import('./pages/Careers/GetInfo'));

interface Route {
  path: string;
  element: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/about-ecronx', element: <AboutEcronx /> },
  { path: '/value-proposition', element: <ValueProposition /> },
  { path: '/mission', element: <Mission /> },
  { path: '/vision', element: <Vision /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-of-use', element: <TermsOfUse /> },
  { path: '/services', element: <Services /> },
  { path: '/services/:id', element: <ServiceDetail /> },
  { path: '/products', element: <Products /> },
  { path: '/careers', element: <Careers /> },
  { path: '/contact', element: <Contact /> },
  { path: '/getinfo', element: <GetInfo /> },
];

export const RouteWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);