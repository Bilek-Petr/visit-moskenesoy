import React, { useEffect, useRef } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useScroll } from "../../context/ScrollContext";

export default function TextBanner() {
  const { bannerTextRef } = useScroll();

  return (
    <div
      id="bannerText"
      ref={bannerTextRef}
      className="relative m-auto w-11/12 max-w-3xl space-y-4 px-8 py-40"
    >
      <RiDoubleQuotesL className="absolute left-0 top-0 size-20 translate-y-[9rem] transform text-mainRed opacity-30" />
      <p className="relative z-10 text-5xl sm:text-7xl">
        Welcome to Moskonesøy
      </p>
      <p className="font-raleway font-medium italic text-fontGrey">
        a small paradise in Norway’s Lofoten
      </p>
      <hr />
      <p className="font-raleway font-medium leading-7 text-fontGrey">
        Experience breathtaking landscapes where rugged peaks meet
        crystal-fjords waters. Explore scenic trails, enjoy tranquil kayaking,
        and savor fresh seafood in a charming setting. Embrace the warmth of
        local hospitality and the island’s serene beauty. Discover your perfect
        escape on Moskonesøy!
      </p>
    </div>
  );
}
