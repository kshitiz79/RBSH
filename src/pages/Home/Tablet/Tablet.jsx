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
  className="relative w-full h-[50vh] sm:h-screen bg-yellow-50 flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url('./tabbg.png')` }}
>

<div
  className="relative bg-contain h-[50%] w-[90%] sm:h-[50%] sm:w-[90%] md:h-[70%] md:w-[80%] lg:h-[60%] lg:w-[70%] flex items-center justify-center bg-no-repeat bg-center"
  style={{ 
    backgroundImage: `url('./tab.png')`, 
    aspectRatio: '16/9' 
  }} 
>

          <div className="absolute inset-0 flex items-center justify-center">
            <video
              id="videoPlayer"
              className="w-[81%] h-[89%] object-cover rounded-xl"
              controls={false}
              onClick={handlePlayPause}
              src="./video.mp4"
              type="video/mp4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
