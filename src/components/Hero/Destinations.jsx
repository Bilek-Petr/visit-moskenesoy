import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const destinationData = [
  {
    name: "reine",
    image: "/images/destinations/reine.jpg",
    description:
      "A beautiful village in Lofoten, Norway, known for its scenic fjords and fishing cabins.",
  },
  {
    name: "reinebringen",
    image: "/images/destinations/reinebringen.jpg",
    description:
      "A popular hiking spot offering breathtaking views over Reine and the surrounding area.",
  },
  {
    name: "kvalvika",
    image: "/images/destinations/kvalvika.jpg",
    description:
      "A remote beach accessible by hiking, located in the Lofoten Islands.",
  },
  {
    name: "fjords",
    image: "/images/destinations/fjords.jpg",
    description:
      "Norway's iconic fjords, with steep cliffs and deep blue waters, offering stunning landscapes.",
  },
  {
    name: "hamnoy",
    image: "/images/destinations/hamnoy.jpg",
    description:
      "A small, picturesque fishing village in the Lofoten archipelago, famous for its red cabins.",
  },
];

export default function Destinations({ isVisible }) {
  return (
    <div
      className={`fixed inset-x-0 top-16 z-20 h-[calc(100svh-4rem)] transition-transform duration-500 lg:h-[50svh] ${
        isVisible
          ? "animate-slideDown"
          : "-translate-y-full transform opacity-0"
      }`}
    >
      <div className="group grid h-full w-full cursor-pointer grid-rows-5 lg:grid-cols-5 lg:grid-rows-none">
        {destinationData.map((item, index) => (
          <Link
            to={`/${item.name}`}
            key={index}
            className={`relative overflow-hidden transition-all ${isVisible ? "animate-slideDown" : ""}`}
          >
            <img
              src={item.image}
              alt={item.description}
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <div className="absolute left-0 top-0">
              <span className="destination__title | bg-mainRed font-oswald text-5xl uppercase text-fontWhite lg:py-4">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
