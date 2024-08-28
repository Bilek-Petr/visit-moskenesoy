import React from "react";
import BannerVideo from "../components/Hero/BannerVideo";
import TextBanner from "../components/Shared/TextBanner";
import GridGallery from "../components/Shared/GridGallery";

export default function Home() {
  return (
    <>
      <div className="pt-[4rem]">
        <BannerVideo />
      </div>

      <TextBanner />
      <GridGallery />
    </>
  );
}
