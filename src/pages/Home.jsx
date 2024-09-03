import React from "react";
import BannerVideo from "../components/Hero/BannerVideo";
import TextBanner from "../components/Shared/TextBanner";
import GridGallery from "../components/Shared/GridGallery";
import { ScrollProvider } from "../context/ScrollContext";
import Card from "../components/Shared/Card";

export default function Home() {
  return (
    <>
      <ScrollProvider>
        <BannerVideo />
        <TextBanner />
      </ScrollProvider>

      <Card></Card>
      <GridGallery />
    </>
  );
}
