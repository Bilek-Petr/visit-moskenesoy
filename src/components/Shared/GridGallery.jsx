import React from "react";

const gridGalleryData = [
  {
    src: "/images/grid_gallery/reinebringen.jpg",
    cols: "md:col-span-2 lg:col-span-2 lg:row-span-3",
    alt: "View from the top of the reinebringen",
  },
  {
    src: "/images/grid_gallery/reine_houses.jpg",
    cols: "lg:col-span-3 lg:row-span-2",
    alt: "Typical red houses in Reine",
  },
  {
    src: "/images/grid_gallery/reine.jpg",
    cols: "lg:col-span-3 lg:row-span-2",
    alt: "Landscape of Reine",
  },
  {
    src: "/images/grid_gallery/house.jpg",
    cols: "lg:col-span-4 lg:row-span-3",
    alt: "Typical orange house with mountain in the back",
  },
  {
    src: "/images/grid_gallery/top.jpg",
    cols: "lg:col-span-2 lg:row-span-3",
    alt: "Top of the mountain during midnight sun",
  },
  {
    src: "/images/grid_gallery/kayak.jpg",
    cols: "md:col-span-3 lg:col-span-4 lg:row-span-3",
    alt: "Kayaking in the reine fjords",
  },
  {
    src: "/images/grid_gallery/narvtinden.jpg",
    cols: "lg:col-span-2 lg:row-span-2",
    alt: "Photo of Narvtinden peak",
  },
  {
    src: "/images/grid_gallery/heningsvaer.jpg",
    cols: "md:col-span-2 lg:col-span-2 lg:row-span-2",
    alt: "Photo of famous football field in heningsvaer",
  },
  {
    src: "/images/grid_gallery/hamnoy.jpg",
    cols: "md:col-span-3 lg:col-span-2 lg:row-span-2",
    alt: "Rorbu red houses in Hamnoy",
  },
];

const GridItem = ({ src, cols, alt }) => (
  <div className={`h-48 w-full ${cols} lg:h-full`}>
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </div>
);

export default function GridGallery() {
  return (
    <div className="m-auto my-32 grid w-full max-w-[2000px] grid-cols-1 gap-2 md:grid-cols-[1fr_0.5fr_1fr] md:grid-rows-[repeat(5,_min-content)] lg:grid-cols-12 lg:grid-rows-[repeat(5,_8rem)]">
      {gridGalleryData.map((image, index) => (
        <GridItem
          key={index}
          src={image.src}
          cols={image.cols}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
