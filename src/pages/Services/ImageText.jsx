import React from "react";

const ImageText = () => {
  return (
    <div className="">
    <h1
      className="
        lg:text-[8rem]
        text-[2rem]
        font-extrabold 
        uppercase 
        bg-clip-text 
        text-transparent 
        bg-center 
        bg-cover
        text-center
      "
      style={{
        backgroundImage: "url('/cmere.gif')",
      }}
    >
      choose your service
    </h1>
    </div>
  );
};

export default ImageText;
