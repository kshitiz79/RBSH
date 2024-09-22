import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "../Mac/MacContainer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(ScrollTrigger, Draggable);

const FeaturedSection = () => {

  // GSAP animations


  return (
    <section className="bg-black  text-white  px-8 flex flex-col lg:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2  className="text-5xl lg:text-6xl font-bold leading-tight">
          Stop settling for a website that's just{" "}
          <span className="italic text-gray-300">"ok"</span>
        </h2>
        <p     className="text-lg lg:text-xl text-gray-100">
          You shouldn't feel embarrassed when someone asks for your website. In
          fact, we believe that you should love your website.
        </p>
        <p   className="text-lg lg:text-xl text-gray-100">
          Let's get rid of "website shame" altogether and build a website
          exactly how you envision it.
        </p>
        <div
        
          className="mt-8 p-4 bg-white text-green-900 rounded-lg shadow-lg w-fit"
        >
          <p className="italic">
            "I get so many compliments on my site, and to be honest, I still
            can't believe I made it myself!"
          </p>
          <p className="mt-2 font-semibold">Hayley Holmes</p>
          <p className="text-sm">Hair Stylist</p>
        </div>
      </div>




      <div className="relative lg:w-1/2 mt-10 lg:mt-0 h-full">
        <Canvas
         
          style={{ height: "100vh", width: "100%" }} // Ensuring full height view
          camera={{ fov: 14, position: [0, -9, 140] }} // Adjust FOV and position to fit the model better
        >
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_08_2k.exr",
            ]}
          />

          <ScrollControls pages={3}>
           <MacContainer/>
          </ScrollControls>
        </Canvas> 
        {/* SVG Overlay */}
      </div>

    
    </section>
  );
};

export default FeaturedSection;
