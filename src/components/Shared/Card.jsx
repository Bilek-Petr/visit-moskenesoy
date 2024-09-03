import React from "react";

export const cardData = [
  {
    id: 1,
    title: "What level of hiker are you?",
    subtitle: "get started",
    description:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    image: "/images/cards/hikers_reine.jpg",
    number: "01",
  },
  {
    id: 2,
    title: "Hiking Essentials",
    subtitle: "picking the right gear!",
    description:
      "One of the great things about starting out with hiking is that you don't need any specialized gear—you can usually make do with what you already own. However, be cautious when hiking in Lofoten, as conditions can become hazardous in no time. Slippery rocks, steep cliffs, and relentless winds make the terrain challenging. Ensure you have all the necessary equipment for emergencies.",
    image: "/images/cards/climb.jpg",
    number: "02",
  },
  {
    id: 3,
    title: "Where you go is the key",
    subtitle: "understand your map & timing",
    description:
      "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction. Always plan in an advance and get to know the weather conditions.",
    image: "/images/cards/compass.jpg",
    number: "03",
  },
];

export default function Card() {
  return (
    <div className="m-auto max-w-[2000px] space-y-10">
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`flex max-h-[70rem] flex-col md:max-h-[50rem] ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="px-18 relative m-auto flex w-11/12 flex-col space-y-4 py-24 sm:px-20 md:w-3/5 xl:px-40">
            <p className="relative flex items-center pl-8 text-xs font-medium uppercase tracking-wider text-mainRed before:absolute before:left-0 before:h-[2px] before:w-[1.7rem] before:-translate-y-1/2 before:bg-mainRed sm:text-lg">
              {card.subtitle}
            </p>
            <h3 className="text-5xl sm:text-7xl">{card.title}</h3>
            <p className="font-raleway font-medium leading-7 text-fontGrey">
              {card.description}
            </p>

            <a href="#" className="text-mainRed">
              read more
            </a>

            <span className="absolute -left-6 top-8 text-9xl font-bold opacity-15 sm:left-0 xl:left-24">
              {card.number}
            </span>
          </div>

          <div className="flex-grow overflow-hidden md:w-2/5">
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
