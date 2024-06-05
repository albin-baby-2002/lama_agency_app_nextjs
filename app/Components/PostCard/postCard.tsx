import Image from "next/image";
import React from "react";

const PostCard = () => {
  return (
    <div className=" mt-8 h-[400px]">
      <div>
        <Image
          className=" object-cover h-full "
          alt="post"
          src={
            "https://img.freepik.com/free-photo/african-american-trader-writing-crypto-currency-data-notebook_482257-22953.jpg?t=st=1713784744~exp=1713788344~hmac=6326084b4addc5a1c3c4266bcba458d95daefa999c5623146450c1645de6baac&w=1380"
          }
          height={300}
          width={400}
        />
      </div>
      <div className=" mt-4">
        <p className=" font-bold text-xl mt-4 ">Strategy to grow quick</p>
        <p className=" mt-4  text-sm  text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam tempora perspiciatis nihil nobis dolore adipisci necessitatibus consectetur beatae?</p>
        <p className=" mt-4 font-bold underline">Read More</p>
      </div>
    </div>
  );
};

export default PostCard;
