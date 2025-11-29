import React from "react";

const Video = () => {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      src="/video/video_back.mp4"
    ></video>    
  );
};

export default Video;
