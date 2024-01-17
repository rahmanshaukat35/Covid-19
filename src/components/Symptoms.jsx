import Image from "next/image";
import React from "react";

const Symptoms = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-16">
      <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
        Symptoms
        <div className="border-b-4 border-green-500 w-full py-1"></div>
      </h2>
      <p className=" md:text-xl text-lg font-normal text-gray-500 text-center">
        COVID-19 affects different people in different ways. Most infected
        people will develop mild to moderate illness and recover without
        hospitalization.
      </p>
      <Image src="/symptom.png" alt="symptom" width={600} height={600} />
    </div>
  );
};

export default Symptoms;
