import React from "react";
import { GoArrowDown } from "react-icons/go";
import { useScroll } from "../../context/ScrollContext";

export default function BannerVideo() {
  const { bannerTextRef } = useScroll();

  const scrollToBanner = () => {
    if (bannerTextRef.current) {
      window.scrollTo({
        top: bannerTextRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.error("Ref is null or undefined");
    }
  };

  return (
    <>
      <div className="relative h-[calc(100svh)] w-full overflow-hidden">
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

      <div className="group absolute bottom-0 right-0 -translate-x-3 -translate-y-3 transform sm:block">
        <GoArrowDown
          className="hidden size-12 transform animate-pulse cursor-pointer rounded-full bg-mainRed text-white duration-200 hover:scale-110 hover:ring-2 hover:ring-white group-hover:animate-none sm:block lg:size-14"
          onClick={scrollToBanner}
        />
      </div>
    </>
  );
}
