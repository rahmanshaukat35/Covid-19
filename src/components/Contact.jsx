"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { db } from "@/firebase/connect";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [help, setHelp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      number,
      help,
    };

    try {
      await addDoc(collection(db, "data"), data);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };
  const year = new Date().getFullYear();
  return (
    <>
      <div className=" shadow-2xl p-10  rounded-3xl bg-white mt-20">
        <div className="flex flex-col justify-center items-center space-y-16">
          <h2 className="lg:text-5xl flex flex-col justify-center items-center md:text-4xl text-2xl font-semibold">
            Need Help!
            <div className="border-b-4 border-green-500 w-[80%] py-1"></div>
          </h2>
          <p className=" md:text-xl text-lg font-normal text-gray-500 text-center">
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Floow advice provided by your local
            health authority.
          </p>
          <Image src="/help.png" alt="symptom" width={500} height={500} />
        </div>
        <div className="pt-28 flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between">
          <div className="lg:space-y-10 space-y-5">
            <div className="flex items-center space-x-4">
              <MdOutlinePhoneIphone size={25} color="green" />
              <div className="text-start">
                <h2 className="text-green-600 lg:text-lg lg:font-medium">
                  Danish GOHEL
                </h2>
                <p className="text-green-600 lg:text-lg lg:font-medium">
                  (+91) 9157999875
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdOutlinePhoneIphone size={25} color="green" />
              <div className="text-start">
                <h2 className="text-green-600 lg:text-lg lg:font-medium">
                  Nilesh Sondarva
                </h2>
                <p className="text-green-600 lg:text-lg lg:font-medium">
                  (+91) 8980530888
                </p>
              </div>
            </div>
          </div>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              className="bg-gray-200 text-black p-4 rounded-lg w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-200 text-black p-4 rounded-lg w-full"
              type="text"
              name="number"
              id="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              className="bg-gray-200 text-black rounded-lg p-4 w-full"
              placeholder="How can i help you"
              name="help"
              id=""
              cols="30"
              rows="5"
              value={help}
              onChange={(e) => setHelp(e.target.value)}
            />

            <button type="submit" className="flex items-center relative">
              <Image src="/eclip.png" alt="eclip" width={30} height={30} />
              <span className="text-lg font-medium text-gray-500 absolute top-1 left-3">
                Click to send
              </span>
            </button>
          </form>
        </div>
      </div>
      <p className="text-green-500 text-lg font-medium text-center">
        © {year}, Design & Developed by Rahman Shaukat
      </p>
    </>
  );
};

export default Contact;
