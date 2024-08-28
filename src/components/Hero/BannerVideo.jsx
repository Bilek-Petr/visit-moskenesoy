import React from "react";
import { GoArrowDown } from "react-icons/go";

window.addEventListener("scroll", (e) => {
  console.log(e);
});

export default function BannerVideo() {
  return (
    <>
      <div className="relative h-[calc(100svh-4rem)] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero/hero_desktop.jpg"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* TEXT  */}
      <div className="red-line-before | absolute bottom-0 left-0 z-10 -translate-y-3 translate-x-10 text-6xl uppercase tracking-tight text-fontWhite drop-shadow-4xl before:-left-10 before:top-3 sm:text-8xl xl:text-[10rem]">
        <h1>
          Explore<br></br>Moskenesøy<br></br>
          <span className="font-bold text-mainRed">Now!</span>
        </h1>
      </div>

      <div className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 transform sm:block">
        <GoArrowDown className="size-10 animate-pulse cursor-pointer text-white" />
      </div>
    </>
  );
}
