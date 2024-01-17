import Image from "next/image";
import React from "react";

const Card = ({ src, title, desc }) => {
  return (
    <div className="py-12 relative">
      <div className="p-16 md:h-96 md:w-96 h-80 w-80 items-center shadow-md rounded-2xl flex flex-col space-y-4">
        <Image
          src={src}
          alt="card"
          width={200}
          height={200}
          className="absolute top-0"
        />
        <h2 className="text-xl font-semibold pt-24">{title}</h2>
        <p className="text-sm font-medium text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
