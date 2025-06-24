import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ToggleBox = () => {
  const [isDown, setIsDown] = useState(false);

  return (
    <div
      className={` h-[36rem] w-52 flex flex-col items-center md:rounded-lg overflow-hidden transition-all duration-500 bottom-1 border-black ${
        isDown
          ? "bg-gradient-to-b from-green-100 via-pink-300 to-orange-600"
          : "bg-white"
      }`}
    >
      {/* Movable Yellow Box */}
      <div
        className={`w-52 h-52 bg-yellow-300 flex items-center justify-center rounded-lg cursor-pointer transition-transform duration-500 ${
          isDown ? "translate-y-96" : "translate-y-0"
        }`}
        onClick={() => setIsDown(!isDown)}
      >
        <ChevronDown
          size={60}
          className={`transition-transform duration-500 ${
            isDown ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleBox;