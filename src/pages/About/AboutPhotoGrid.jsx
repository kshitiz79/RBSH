import React from 'react'

import image1 from "./../../../public/about1.png";
import image2 from "./../../../public/about2.png";
import image3 from "./../../../public/about3.png";
import image4 from "./../../../public/about4.png";



const AboutPhotoGrid = () => {


    const campaigns = [
        {
          image: image1,
          title: "We...",
          description:
            " A dynamic advertising agency committed to helping brands succeed in the digital landscape. Our services range from crafting striking logos to executing comprehensive advertising campaigns. We specialize in branding and design, video production, digital marketing, and web development, all grounded in collaboration and communication. By understanding your unique goals and audience, we deliver impactful results through innovative strategies. ",
        },
        {
          image: image2,
          title: "Brainstorm...",
          description:
            "We harness the full power of 360-degree marketing to create impact and drive growth. As a full-service marketing and creative agency, we specialize in connecting brands with their target audiences through innovative strategies and engaging experiences. Whether it’s branding, social media management, video production, or web design, our team of experts is dedicated to delivering results that matter.",
        },
        {
          image: image3,
          title: "Create...",
          description:
            "Our mission is to create transformative marketing experiences that elevate brands and resonate with audiences. We harness the power of creativity, innovative design, and strategic storytelling to craft impactful campaigns that drive change and inspire action. Our commitment is to empower businesses by bringing their visions to life and helping them thrive in the digital landscape. Together, we create meaningful experiences that shape the future of brands",
        },
        {
          image: image4,
          title: "Deliver..",
          description:
            "We deliver comprehensive marketing solutions that drive measurable results and foster brand growth. Our offerings include crafted branding strategies, eye-catching designs, engaging video content, and targeted digital marketing campaigns. We ensure timely execution backed by data-driven insights, exceeding expectations with impactful solutions that enhance your brand's visibility and relevance. Ultimately, we provide a partnership dedicated to your success",
        },
      ];





  return (
   



    <>
    
    <section className="bg-white py-10 px-6">
  <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* Loop for campaign cards */}
    {campaigns.map((campaign, idx) => (
      <div
        key={idx}
        className="
          relative 
          group 
          overflow-hidden 
          bg-gray-200 
          rounded-xl 
          shadow-lg 
          w-full          /* Full width on mobile */
          md:w-[45vw]     /* 45vw width on tablets and up */
          mx-auto         /* Center the card */
      lg:h-auto
          md:h-[23vh]
        "
      >
        {/* Image with rounded corners */}
        <img
          src={campaign.image}
          alt={campaign.title}
          className="
            w-full 
            h-[24rem]           /* Fixed height on mobile */
            md:h-[60vh]       /* 60vh height on tablets and up */
            object-cover 
            rounded-xl

          "
        />

        {/* Initial heading, always visible */}
        <div
          className="
            absolute 
            top-4 
            left-4 
            text-2xl         /* Smaller text on mobile */
            md:text-4xl      /* Larger text on tablets and up */
            font-bold 
            text-black 
            p-2             /* Smaller padding on mobile */
            md:p-3          /* Increased padding on tablets and up */
            rounded-2xl 
            bg-white
        
            md:ml-56       
         
            
          "
        >
          {campaign.title}
        </div>

        {/* Description sliding up from bottom on hover */}
        <div
          className="
            absolute 
            bottom-0 
            left-0 
            w-5/6          /* Full width on mobile */
            md:w-11/12      /* 11/12 width on tablets and up */
            mx-auto         /* Center the description */
            mb-5            /* Reduced bottom margin on mobile */
            md:mb-10        /* Increased bottom margin on tablets and up */
            bg-white 
            rounded-3xl 
            p-3             /* Smaller padding on mobile */
            md:p-4          /* Increased padding on tablets and up */
            transform 
            translate-y-full 
            group-hover:translate-y-0 
            transition-transform 
            duration-300 
            ease-in-out
           lg:ml-5
           ml-7
          "
        >
          <p className="text-black text-center text-sm md:text-base ">
            {campaign.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

    
    
    </>
  )
}

export default AboutPhotoGrid