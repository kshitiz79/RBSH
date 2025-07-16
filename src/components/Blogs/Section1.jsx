"use client";
import React from "react";

const Section1 = () => {
  return (
    <section className="h-[90vh] bg-[#e5e8ea] flex border-t border-b border-black mt-2" >
      {/* Left 60% */}
      <div className="w-[70%] h-full flex flex-col justify-start py-10 relative">
  {/* Image Wrapper */}
  <div className="relative w-full">
    <img
      src="/blog.png"
      alt="Blog Image"
      className="w-full max-w-full h-auto object-cover rounded "
    />

    {/* Bottom paragraph inside the image wrapper */}
  
  </div>
  <div className="absolute bottom-4 left-4 ml-4 max-w-md">
      <p className="text-black text-[2.7rem] leading-none">Maximalist graphic design is back: How to make chaos look cool</p>
    </div>
</div>



      {/* Right 30% */}
      <div className="w-[35%]  border-l border-black">
        <img
          src="https://atolldigital.com/wp-content/uploads/2025/02/blog_preview.webp" // Replace with your image path
          alt="Side Visual"
          className="w-full h-full object-cover p-8 "
        />
      </div>
    </section>
  );
};

export default Section1;
