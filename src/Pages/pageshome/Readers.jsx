import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import "./readers.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReciters } from "../../ReduxSystem/Slices/recitersSlice";
import LoadingReciters from "../../Components/loadingPages/LoadingReciters";


const Readers = () => {
  const [inputSearch, setInput] = useState("");
  const { letters, loadingReciters, reciters, editLetters} = useSelector((state) => state.allReciters);

  // console.log(reciters);


  // console.log(letters);

  // first letter from input search
  const fisrtLetter = inputSearch.split("").slice(0, 1).join();
  // console.log(fisrtLetter);

  // Dispatch
  const dispatch = useDispatch();


  // UseEffect
  useEffect(() => {
    dispatch(getReciters());
  }, []);
  // const theInput = inputSearch.startsWith

 

  // Loading condition
  if(loadingReciters){
    return <LoadingReciters/>
  }

  return (
    <div className="flex w-full lg:w-[70%] xs:w-full xl:w-[80%] md-[90%]  flex-col xl:justify-start justify-center  gap-8 mt-6  px-4 pb-6">
      {/* Inputs */}
      <div className="flex gap-4  xl:justify-start md:w-full md:px-[2em] md:justify-center xs:w-full items-center sm:flex-row flex-col">
        {/* Recieters from  */}
        <div className="form md:w-[50%] sm:w-[50%] w-full lg:w-[40%] xl:w-[40%]">
          <form className="shadow-lg shadow-[#cbd5e1] min-w-[200px]">
            <Input
              value={inputSearch}
              onChange={(e) => setInput(e.target.value)}
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

      {/* readers */}
      <div className="readers flex flex-col gap-8 justify-center  items-center md:items-start md:pr-4">
        {/* العنوان */}
        <div className="xl:pl-[10em] flex justify-center items-center w-full">
          <h1 className="text-3xl font-bold">جميع القرآء</h1>
        </div>

        {/* القرآء */}
        <div className="flex md:items-start  lg:w-full md:w-[85%] sm:w-[87%] w-[90%] mr-0  xl:justify-center md:justify-start  sm:items-start  sm:mr-0  md:mr-0 mr-[3em] xl:mr-0 sm:gap-7 gap-5 lg:gap-5 xl:pl-[6em] min-h-screen">
          {/* names */}
          <div className="flex flex-col min-h-screen xl:w-full lg:w-[80%] ">
            {inputSearch == "" ? (
              letters.map((letter, index) => (
                <div
                  id={letter}
                  key={index}
                  className="border-b-[1px]	border-black p-2 sm:w-full"
                >
                  {/* الحرف */}
                  <div className="bg-[#334155] w-[30px] h-[30px] flex flex-col justify-center items-center font-bold text-white rounded-t-xl rounded-br-xl	">
                    <span> {letter} </span>
                  </div>
                  {/* اسماء الحرف الاول */}
                  <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-x-6 gap-y-4  mt-5">
                    {reciters?.map((reciter, index) =>
                      reciter.letter === letter ? (
  
                          <Button
                            key={index}
                            className=" py-2 xl:px-2 lg:px-2 md:px-2 sm:px-4 px-10  text-md  bg-[#166534] text-white cursor-pointer	 hover:bg-[#84cc16] hover:text-black rounded-xl"
                          >
                            <Link to={`/recitermushaf/${reciter.id}`}>{reciter.name}</Link>
                          </Button>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div id={inputSearch} className="border-b-[1px]	border-black p-2">
                {/* الحرف */}
                <div className="bg-[#334155] w-[30px] h-[30px] flex flex-col justify-center items-center font-bold text-white rounded-t-xl rounded-br-xl	">
                  <span> {fisrtLetter} </span>
                </div>

                {/* اسماء الحرف الاول */}
                <div className="grid grid-cols-4 gap-4  mt-5">
                  {editLetters?.map((reciter, index) =>
                    reciter.name.startsWith(fisrtLetter) ? (
                      <Link key={index} to={"/reciter"}>
                        <button className="py-2 px-4 text-md bg-[#166534] text-white cursor-pointer	 hover:bg-[#84cc16] hover:text-black rounded-xl">
                          {reciter.name}
                        </button>
                      </Link>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* الابجدية  */}
          <div className="flex flex-col gap-4 lg:mr-5">
            {inputSearch == "" ? (
              letters.map((letter, index) => (
                <div
                  key={index}
                  className="bg-[#334155] alpha hover:bg-[#84cc16] duration-[.3s] hover:text-black   w-[30px] h-[30px] flex justify-center items-center  text-white rounded-full "
                >
                  <a href={`#${letter}`}>
                    {" "}
                    <span>{letter}</span>
                  </a>
                </div>
              ))
            ) : (
              <div className="bg-[#334155] alpha hover:bg-[#84cc16] duration-[.3s] hover:text-black   w-[30px] h-[30px] flex justify-center items-center  text-white rounded-full ">
                <a href={`#${fisrtLetter}`}>
                  {" "}
                  <span>{fisrtLetter}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readers;
