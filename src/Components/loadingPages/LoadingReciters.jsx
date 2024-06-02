import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const LoadingReciters = () => {
  const { letters } = useSelector((state) => state.allReciters);

  return (
    <div className="flex w-full lg:w-[70%] xs:w-full xl:w-[80%] md-[90%]  flex-col xl:justify-start justify-center  gap-8 mt-6  px-4 pb-6">
      {/* Inputs */}
      <div className="flex gap-4  xl:justify-start md:w-full md:px-[2em] md:justify-center xs:w-full items-center sm:flex-row flex-col">
        {/* Recieters from  */}
        <div className="form md:w-[50%] sm:w-[50%] w-full lg:w-[40%] xl:w-[40%]">
          <form className="shadow-lg shadow-[#cbd5e1] min-w-[200px]">
            <Input
              label="إبحث فى القراء"
            />
          </form>
        </div>

        {/* Rewayat form */}
        <div className="form md:w-[50%] sm:w-[50%] w-full lg:w-[40%] xl:w-[40%]">
          <form className="min-w-[200px] shadow-lg shadow-[#cbd5e1]">
            <Input label="إبحث فى الروايات" />
          </form>
        </div>
      </div>

      <div className="flex md:items-start  lg:w-full md:w-[85%] sm:w-[87%] w-[90%]  xl:justify-center md:justify-start  sm:items-start  sm:mr-0  md:mr-0 mr-[3em] xl:mr-0 sm:gap-7 gap-5 lg:gap-5 xl:pl-[6em] min-h-screen">
        {/* names */}
        <div className="flex flex-col min-h-screen xl:w-full lg:w-[80%] ">
          {letters.map((letter, index) => (
            <div key={index} className=" p-2 sm:w-full xl:w-full">
              {/* الحرف */}
              <div className="bg-[#00bf63] w-[30px] h-[30px] flex flex-col justify-center items-center font-bold text-white rounded-t-xl rounded-br-xl	">
                <span>...</span>
              </div>

              {/* اسماء الحرف الاول */}
              <div className="max-w-full animate-pulse bg-white py-3 rounded-md mt-3">
                <Typography
                  as="div"
                  variant="h1"
                  className="mb-2 h-4 w-80	 rounded-full bg-green-400"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="h1"
                  className="mb-2 h-4 w-80	 rounded-full bg-green-400"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="h1"
                  className="mb-2 h-4 w-80	 rounded-full bg-green-400"
                >
                  &nbsp;
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* الابجدية  */}
        <div className="flex flex-col gap-2 lg:mr-5 bg-white py-2 px-2 rounded-md">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="w-[35px] h-[10px] rounded-md bg-gray-700 shadow-md shadow-black	"
            >
              <a href=""></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingReciters;
