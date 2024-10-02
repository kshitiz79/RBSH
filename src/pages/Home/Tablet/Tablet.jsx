import { useState } from 'react';
import ScrollText from '../../../components/Infobar/Infobar';

export default function Tablet() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const videoElement = document.getElementById('videoPlayer');
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div>
        <ScrollText />
      </div>
      <div
        className="relative w-full h-[50vh]  md:h-[65vh]  lg:h-[100vh] sm:h-screen   bg-yellow-50 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('./tabbg.png')` }} // You can remove this if you don't need the background image
      >
        {/* Tablet Frame */}
        <div
          className="relative h-[50%] w-[90%] sm:h-[50%] sm:w-[90%] md:h-[60%] md:w-[90%] lg:h-[66%] lg:w-[62%] flex items-center justify-center bg-white  rounded-[2rem] shadow-lg"
          style={{ aspectRatio: '6/4',  backgroundColor: '#C0C0C0' }}
        >

<div
            className="h-[99.5%] w-[99.5%] flex items-center justify-center bg-black rounded-[1.8rem]"
          >
          {/* Screen (Video Container) */}
          <div className="relative h-[85%] w-[90%]  bg-black rounded-[1.5rem] overflow-hidden">
            <video
              id="videoPlayer"
              className="w-full h-full  object-cover"
              controls={false}
              onClick={handlePlayPause}
              src="./video2.mp4"
              type="video/mp4"
            />
          </div>
          {/* Home Button */}
      </div>
        </div>
      </div>
    </>
  );
}
