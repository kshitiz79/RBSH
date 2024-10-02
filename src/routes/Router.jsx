
import { createBrowserRouter,  } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";

import Blogs from "../pages/Blogs/Blogs";
import VideoEditing from "../pages/Services/VideoEditing";
import Branding from "../pages/Services/Branding";
import SocialMedia from "../pages/Services/SocialMedia";
import LeadGeneration from "../pages/Services/LeadGeneration";
import PhotoGraphy from "../pages/Services/PhotoGraphy";
import WebDesign from "../pages/Services/WebDesign";
import Test from "../pages/Test/Test";
import ContactUs from "../pages/ContactUs/ContactUs";






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
          element: <About/>
        },
        {
          path: '/career',
          element: <Career/>
        },
        {
          path: '/blog',
          element: <Blogs/>

        },
        {
          path: '/video-editing',
          element:<VideoEditing/>
        },

        {
          path: "/branding-design" ,
          element:<Branding/>
        },
        {
          path: "/social-media-strategy",
          element:<SocialMedia/>
        },
      {
        path: "/lead-generation-seo",
        element:<LeadGeneration/>
      },
      {
        path: "/content-marketing-photography",
        element:<PhotoGraphy/>
      },
      {
        path: "/web-design-development",
        element:<WebDesign/>
      },
      
      {
        path: "/Test",
        element:<Test/>
      },
      {
        path: "/contactus",
        element:<ContactUs/>
      }
      ],
    },
  ]);
  
  export default router;