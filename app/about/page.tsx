import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main className=" grid grid-cols-[3fr,2.5fr] mt-8  content-center ">
      <div className=" flex flex-col  ">
        <p className=" font-bold text-xl mb-5 text-blue-300">About Agency</p>

        <p className=" font-bold text-4xl  leading-[1.3] text">
          We create digital ideas that are bigger, bolder, brave and better
        </p>
        <p className=" mt-10 text-sm font-semibold   text-gray-200 ">
          We are focused on providing better products and services for our
          clients which matches the international standards and also at a very
          attractive and affrodable pricing
        </p>

        <div className=" mt-10 flex gap-8">
          <div className=" flex flex-col">
            <p className=" font-bold text-blue-300 ">10 k+</p>
            <p className=" text-sm font-semibold">Years of experience</p>
          </div>
          <div className=" flex flex-col">
            <p className=" font-bold text-blue-300 text-center">230 k+</p>
            <p className=" text-sm font-semibold">Projects Reached</p>
          </div>
          <div className=" flex flex-col">
            <p className=" font-bold text-blue-300 text-center">140 k+</p>
            <p className=" text-sm font-semibold">Services and Plugins</p>
          </div>
        </div>
      </div>

      <div className="  flex justify-end   mt-2 ">
        <Image
          src={"/about.jpg"}
          alt=""
          width={450}
          height={230}
          className="  px-2  rounded-md"
        />
      </div>
    </main>
  );
};

export default AboutPage;
