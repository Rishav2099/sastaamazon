import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { json } from "stream/consumers";

const Rating = ({ ratings }: { ratings: any }) => {
  ratings = JSON.parse(ratings);
  return (
    <div className="flex items-center">
      {Array(4)
        .fill(1)
        .map((item) => (
          <IoStarSharp width={20} height={20} className="text-orange-500" />
        ))}

      <div>
        <h1 className="text-blue-500 ml-2 font-medium">{ratings.count} rating </h1>
      </div>
    </div>
  );
};

export default Rating;
