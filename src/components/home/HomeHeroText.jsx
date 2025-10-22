import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] uppercase  text-center pt-2.5 text-white ">
      <div className="text-[9.5vw] leading-[9vw] flex items-center justify-center">
        L'étincelle
      </div>
      <div className="text-[9.5vw] leading-[9vw] flex items-center justify-center">
        qui
        <div className="flex justify-center ">
          <div className="overflow-hidden h-[8vw] w-[16vw] rounded-full ">
            <video
              className="h-full w-full object-cover rounded-full"
              autoPlay
              muted
              loop
              playsInline
              src="/video/video_back.mp4"
            ></video>
          </div>
        </div>
        génère
      </div>
      <div className="text-[9.5vw] leading-[9vw] flex items-center justify-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
