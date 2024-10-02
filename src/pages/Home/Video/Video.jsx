


const VideoSection = () => {
  return (
    <>

    <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-screen overflow-hidden position-center justify-between bg-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./video.mp4" // Ensure this path is correct
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
    </>
  );
};

export default VideoSection;
