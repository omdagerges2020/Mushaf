import React from "react";
import { Typography } from "@material-tailwind/react";

const LoadingRecitersMushaf = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex w-full lg:w-[70%] xs:w-full xl:w-[80%] md-[90%]  flex-col xl:justify-start justify-center  gap-8 mt-6  px-4 pb-6">
      <div className="flex flex-col gap-3 justify-center items-center w-full">
        <h1 className="font-bold text-[2em] mb-[2em]">مصاحف الشيخ ...</h1>
        {nums.map((num, index) => (
          <div key={index} className="w-full flex justify-center animate-pulse items-center">
            <Typography
              as="div"
              variant="paragraph"
              className="mb-1 h-4 w-[80%] rounded-md bg-green-400"
            >
              &nbsp;
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingRecitersMushaf;
