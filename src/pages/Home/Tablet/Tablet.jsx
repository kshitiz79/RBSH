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
        className="relative  h-screen w-screen bg-yellow-50 flex items-center justify-center"
        style={{ backgroundImage: `url('./tabbg.png')` }}
      >
        <div
          className="bg-contain h-4/5 w-4/5 flex items-center bg-no-repeat justify-center"
          style={{ backgroundImage: `url('./tab.png')` }}
        >
          <video
            id="videoPlayer"
            className="md:w-[93%] md:h-[88%] object-cover rounded-2xl"
            controls={false}
            onClick={handlePlayPause}
            src="./video.mp4"
            type="video/mp4"
          />
        </div>
      </div>
    </>
  );
}
