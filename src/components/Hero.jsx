import Image from "next/image";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="flex justify-between py-20 gap-y-20 lg:gap-y-0  flex-col-reverse lg:flex-row"
      >
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-2 items-center justify-center flex flex-col lg:block">
            <h3 className="text-red-600 md:text-lg text-base font-medium flex items-center gap-2">
              <FiAlertTriangle size={20} />
              COVID-19 ALERT
            </h3>
            <h1 className="md:text-5xl text-4xl font-semibold tracking-wide text-pretty leading-tight ">
              Together we fight COVID-19
            </h1>
          </div>
          <p className="text-gray-500 text-pretty leading-snug md:text-xl text-lg font-normal tracking-widest">
            Seque empowers you to get more done with intense focus and zero
            interruptions.Seque empowers you to get more done with intense focus
            and zero interruptions.
          </p>
          <button className="md:px-14 px-12 md:py-4 p-3 md:text-2xl text-lg font-medium bg-green-500 text-white rounded-full">
            Let us help
          </button>
        </div>
        <div className="w-[548] h-[536]">
          <Image src="/hero.png" alt="hero" width={1700} height={1700} />
        </div>
      </div>
      <div className="shadow-lg p-6 rounded-lg space-y-10">
        <div className="md:flex-row flex flex-col md:items-center justify-around">
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-gray-700">Total Cases</h2>
            <h2 className="text-lg font-semibold text-gray-800">492,667</h2>
            <h2 className="text-xs font-medium text-gray-600">+2,584</h2>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-gray-700">Active Cases</h2>
            <h2 className="text-lg font-semibold text-gray-800">492,667</h2>
            <h2 className="text-xs font-medium text-gray-600">
              18% from total cases
            </h2>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-gray-700">Recovered</h2>
            <h2 className="text-lg font-semibold text-green-500">492,667</h2>
            <h2 className="text-xs font-medium text-gray-600">
              55% from total cases
            </h2>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-gray-700">Deaths</h2>
            <h2 className="text-lg font-semibold text-red-600">492,667</h2>
            <h2 className="text-xs font-medium text-gray-600">
              20% from total Cases
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <Image src="/flag.png" alt="flag" width={30} height={30} />
          <p className="text-sm font-normal text-gray-600">
            India | Last update: April 04, 2020
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
