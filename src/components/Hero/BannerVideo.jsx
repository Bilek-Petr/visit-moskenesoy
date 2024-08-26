import React from "react";

export default function BannerVideo() {
  return (
    <>
      <div className="absolute left-0 top-0 z-[-1] h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero/hero_desktop.jpg" // Fallback image for video
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          {/* Fallback images for browsers that do not support video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* TEXT  */}
      <div className="text-fontWhite drop-shadow-4xl before:bg-mainRed absolute bottom-0 left-0 z-20 -translate-y-3 translate-x-10 text-6xl uppercase tracking-tight before:absolute before:-left-10 before:top-[0.75rem] before:h-full before:w-[0.7rem] before:content-[''] sm:text-8xl xl:text-[10rem]">
        <span>
          Explore<br></br>Moskenesøy<br></br>Now!
        </span>
      </div>
    </>
  );
}
