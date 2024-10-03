// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Suspense, lazy } from 'react';

// Lazy load the pages
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Career = lazy(() => import("../pages/Career/Career"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const VideoEditing = lazy(() => import("../pages/Services/VideoEditing"));
const Branding = lazy(() => import("../pages/Services/Branding"));
const SocialMedia = lazy(() => import("../pages/Services/SocialMedia"));
const LeadGeneration = lazy(() => import("../pages/Services/LeadGeneration"));
const PhotoGraphy = lazy(() => import("../pages/Services/PhotoGraphy"));
const WebDesign = lazy(() => import("../pages/Services/WebDesign"));

const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: '/blog',
        element: <Blogs />,
      },
      {
        path: '/video-editing',
        element: <VideoEditing />,
      },
      {
        path: '/branding-design',
        element: <Branding />,
      },
      {
        path: '/social-media-strategy',
        element: <SocialMedia />,
      },
      {
        path: '/lead-generation-seo',
        element: <LeadGeneration />,
      },
      {
        path: '/content-marketing-photography',
        element: <PhotoGraphy />,
      },
      {
        path: '/web-design-development',
        element: <WebDesign />,
      },
     
      {
        path: '/contactus',
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
