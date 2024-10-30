import { useRef } from 'react';
import ScrollText from '../../../components/Infobar/Infobar';

export default function Tablet() {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <div>
        <ScrollText />
      </div>
      <div
        className="relative w-full h-[50vh] md:h-[50vh] lg:h-[100vh] bg-yellow-50 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('./tabbg.png')` }}
      >
        {/* Tablet Frame */}
        <div
          className="relative h-[45%] w-[80%]  md:h-[40%] md:w-[70%] lg:h-[66%] lg:w-[62%] flex items-center justify-center bg-white rounded-[2rem] shadow-lg"
          style={{ aspectRatio: '6/4', backgroundColor: '#C0C0C0' }}
        >
          <div className="h-[99.5%] w-[99.5%] flex items-center justify-center bg-black rounded-[1.8rem]">
            {/* Screen (Video Container) */}
            <div className="relative h-[85%] w-[90%] bg-black rounded-[1.5rem] overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={false}
                onClick={handlePlayPause}
                src="./video2.mp4"
                type="video/mp4"
                preload="metadata" // Preload only metadata to improve load time
              />
            </div>
            {/* Home Button */}
          </div>
        </div>
      </div>
    </>
  );
}
