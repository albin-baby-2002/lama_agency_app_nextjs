import Image from "next/image";

export default function Home() {
  return (
    <main className=" grid grid-cols-[3fr,2.5fr] mt-8  content-center ">
      <div className=" flex flex-col  ">
        <p className=" font-bold text-5xl  leading-[1.3] text">
          Creative and Thought's Agency
        </p>
        <p className=" mt-10 font-semibold  w-[95%] text-gray-200 leading-8">
          Get your marketing running from tommorrow at the trending platforms with long term support and assistance at anytime anywhere in the world.
        </p>

        <div className=" mt-10 flex gap-4">
          <button className=" bg-blue-300 text-black font-bold px-2 py-2 rounded-md">
            Contact Us{" "}
          </button>
          <button className=" text-sm font-bold  px-2 rounded-md py-2 hover:bg-zinc-700 border-2 border-blue-300 outline-none">
            Know More{" "}
          </button>
        </div>
      </div>

      <div className="  flex justify-end  mt-2 h-[300px]">
        <Image
          src={"/home.jpg"}
          alt=""
          width={400}
          height={200}
          className=" bg-white px-2 py-2 rounded-md"
        />
      </div>
    </main>
  );
}
