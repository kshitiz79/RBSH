import { useState } from "react";

const images = [
  "./image2.jpg",
  "./image3.jpg",
  "./image4.jpg",
];

const ImageSwitcher = () => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
    <div className=" md:w-[16rem] w-[13rem] h-[36rem]  overflow-hidden  bg-slate-900 shadow-lg">
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="flex-col">
          {/* Clickable Button */}
          <div
            onClick={handleClick}
            className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center border-2 border-white text-white font-bold"
          >
            <div
              onClick={handleClick}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-white text-white font-bold"
            ></div>
          </div>
          <div className="text-white uppercase font-bold mt-2 text-center">click Me</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageSwitcher;
