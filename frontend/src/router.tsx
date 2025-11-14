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
const Services = lazy(() => import('./pages/Services/Services'));
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
  { path: '/services', element: <Services /> },
  { path: '/products', element: <Products /> },
  { path: '/careers', element: <Careers /> },
  { path: '/contact', element: <Contact /> },
  { path: '/apply', element: <GetInfo /> },
];

export const RouteWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);