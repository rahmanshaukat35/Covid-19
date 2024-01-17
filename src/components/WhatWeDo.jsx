import Image from "next/image";
import React from "react";

const Prevention = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row py-44 items-center justify-between">
        <div>
          <Image src="/amico.png" alt="prevention" width={800} height={800} />
        </div>
        <div className="lg:w-[40%] py-10 lg:py-0 space-y-6">
          <h2 className="md:text-4xl text-2xl font-semibold ">
            What we do?
            <div className="border-b-4 border-green-500 w-1/4 lg:w-1/6"></div>
          </h2>
          <p className="md:text-xl text-base font-medium ">
            Covid 19 positive or Pneumonitis patient will be treated at home as
            per doctor order by GNC certified nursing staff.
          </p>
          <div className="text-gray-500 space-y-3">
            <p className="space-x-4 flex items-center">
              <Image src="/virus.png" alt="virus" width={20} height={20} />
              <span className="text-xl font-medium">
                Facilities of blood sugar
              </span>
            </p>
            <p className="space-x-4 flex items-center">
              <Image src="/virus.png" alt="virus" width={20} height={20} />
              <span className="text-xl font-medium">B.P. Measurement</span>
            </p>
            <p className="space-x-4 flex items-center">
              <Image src="/virus.png" alt="virus" width={20} height={20} />
              <span className="text-xl font-medium">Spo2 Measurement</span>
            </p>
            <p className="space-x-4 flex items-center">
              <Image src="/virus.png" alt="virus" width={20} height={20} />
              <span className="text-xl font-medium">Ryle's tube insertion</span>
            </p>
            <p className="space-x-4 flex items-center">
              <Image src="/virus.png" alt="virus" width={20} height={20} />
              <span className="text-xl font-medium">Catheterisation</span>
            </p>
            <p className="space-x-4 flex items-center">
              <Image src="/virus.png" alt="virus" width={20} height={20} />
              <span className="text-xl font-medium">
                Dressing facilities are available 24*7
              </span>
            </p>
          </div>

          <h2 className="flex items-center relative">
            <Image src="/eclip.png" alt="eclip" width={30} height={30} />
            <span className="text-lg font-medium text-gray-500 absolute top-1 left-3">
              Contact Us
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Prevention;
