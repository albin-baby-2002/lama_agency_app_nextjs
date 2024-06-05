import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <main className=" grid grid-cols-[2.5fr,3fr] mt-8   content-center ">
      <div className="  flex   rounded-md  mt-2 ">
        <Image
          src={"/contact.jpg"}
          alt=""
          width={430}
          height={240}
          className=" max-h-full   rounded-md"
        />
      </div>
      <div className=" flex  justify-center    pr-10 flex-col gap-5  ">
        <input
          className=" px-3 py-1.5 mt-2.5 rounded-sm bg-black/65 border-white border  font-mono"
          type="text"
          placeholder="Name and Surname"
        />
        <input
          className=" px-3 py-1.5 rounded-sm bg-black/65 border-white border  font-mono"
          type="text"
          placeholder="Email Address"
        />
        <input
          className=" px-3 py-1.5 rounded-sm bg-black/65 border-white border  font-mono"
          type="text"
          placeholder="Phone"
        />
        <textarea
          className=" px-3 py-1.5 rounded-sm min-h-[100px] bg-black/65 border-white border  font-mono"
          name=""
          id=""
          placeholder="Message"
        ></textarea>

        <button className=" border-2   bg-white  text-sky-900   font-bold  px-3 py-1.5 rounded-sm">
          Send Your Message 
        </button>
      </div>
    </main>
  );
};

export default ContactPage;
