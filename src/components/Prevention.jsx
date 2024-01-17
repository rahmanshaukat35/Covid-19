import React from "react";
import Card from "./Card";

const Prevention = () => {
  const cardData = [
    {
      src: "/card1.png",
      title: "Wear a mask",
      descr:
        "Masks can help prevent the spread of the virus from the person wearing the mask to others.",
    },
    {
      src: "/card2.png",
      title: "Wash your hands often",
      descr:
        "Clean your hands with soop and water, or alcohol-based hand sanitizer.",
    },
    {
      src: "/card3.png",
      title: "Physical distancing",
      descr:
        "Maintain a safe distance especially from anyone who is coughinf or sneezing.",
    },
  ];
  return (
    <div className="lg:py-6">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
          Prevention
          <div className="border-b-4 border-green-500 w-full py-1"></div>
        </h2>
        <p className="text-center text-lg md:text-xl font-medium text-gray-600 py-8 lg:w-[60%]">
          Protect yourself and others around you by knowing the facts and taking
          appropriate precautions. Floow advice provided by your local health
          authority.
        </p>
        <div className="grid gap-x-7 grid-cols-1 lg:grid-cols-3 py-12">
          {cardData.map((item) => (
            <Card src={item.src} title={item.title} desc={item.descr} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prevention;
