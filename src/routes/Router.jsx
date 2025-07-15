// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { Suspense, lazy } from 'react';
import AboutPage from "../pages/About/About";
import Home from "../pages/home/Home";
import TermsConditions from "../pages/Terms&Condition/Terms";
import PrivacyPolicy from "../pages/Terms&Condition/Privacy";
import RefundPolicy from "../pages/Terms&Condition/Refund";
import Design from "../pages/Blogs/Design";
import Marketing from "../pages/Blogs/Marketing";
import WebDevelopment from "../pages/Blogs/WebDesign";
import { Service } from "../pages/Services/Services";


// Lazy load the pages


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
        element: <AboutPage />,
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
        path: '/service',
        element: <Service />

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
      {
        path: '/terms&condition',
        element: <TermsConditions />,
      },
       {
        path: '/privacy&policy',
        element: <PrivacyPolicy/>,
      },
      {
        path: '/refund-policy',
        element: <RefundPolicy/>,
      },


 {
        path: '/design',
        element: <Design/>,
      },
 {
        path: '/marketing',
        element: <Marketing/>,
      },
 {
        path: '/web-development',
        element: <WebDevelopment/>,
      },




    ],
  },
]);

export default router;
