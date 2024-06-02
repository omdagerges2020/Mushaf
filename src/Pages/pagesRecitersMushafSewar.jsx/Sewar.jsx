import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaShareAltSquare } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";
import { Button } from "@material-tailwind/react";
import { IoArrowBackSharp } from "react-icons/io5";
import { getAllSewar } from "../../ReduxSystem/Slices/suwarListSlice";
import LoadingSewar from "../../Components/loadingPages/LoadingSewar";
import { useDispatch, useSelector } from "react-redux";
import { getRecitersMushaf } from "../../ReduxSystem/Slices/recitersmushafSlice";

const Sewar = ({ handlePlayRecord }) => {
  // useSelector
  const { allSewar, loadingSewar } = useSelector((state) => state.allSurahList);
  const { recitersMushaf, moshafs } = useSelector(
    (state) => state.allRecitersMushaf
  );

  console.log(allSewar); // there is proplem here coming empty threee times
  // console.log(recitersMushaf);
  // console.log(moshafs);

  // useState
  // const [allSewarNames, setAllSewarNames] = useState([]);

  //  useParams
  const { reciterId, mushafName } = useParams();

  // Dispatching
  const dispatch = useDispatch();

  const moshafSewar =
    moshafs &&
    moshafs.filter((mos) => {
      return mos.name === mushafName;
    });

  const mushafSewarNumsArr =
    moshafSewar[0]?.surah_list && moshafSewar[0]?.surah_list.split(",");

  const matchingArr = [];
  if (mushafSewarNumsArr) {
    for (let i = 0; i < allSewar.length; i++) {
      for (let y = 0; y < mushafSewarNumsArr.length; y++) {
        if (allSewar[i].id == mushafSewarNumsArr[y]) {
          matchingArr.push({ name: allSewar[i].name, num: allSewar[i].id });
        }
      }
    }
  }

  useEffect(() => {
    dispatch(getRecitersMushaf(reciterId));
    dispatch(getAllSewar());
  }, []);

  // Loading Component (loading condition)
  if (loadingSewar) {
    return <LoadingSewar />;
  }

  return (
    <div className="flex w-full lg:w-[70%] xs:w-full xl:w-[80%] md-[90%]  flex-col xl:justify-start justify-center  gap-8 mt-6 py-[3em]  px-4 pb-6">
      {recitersMushaf?.reciters.map((rc, index) => (
        <div key={index} className="flex justify-center">
          <h1 className="text-[2.5em] font-bold">الشيخ {rc.name}</h1>
        </div>
      ))}
      <div className="content flex flex-col gap-6 justify-start w-full px-[1em] mt-6">
        {/* العنوان */}
        <div className="content-header font-bold text-xl bg-white px-4 py-4 rounded-md">
          <h1>السور الخاصة بالشيخ :-</h1>
        </div>

        {/* السور الخاصة بمصحف الشسخ */}
        <div className=" rounded-md font-bold grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* Card */}
          {matchingArr && matchingArr.map((surah, index) => (
            <div
              key={index}
              className="card flex justify-between px-5 py-2 bg-[#22c55e] items-center"
            >
              {/* play icon */}
              <div className="play-icon flex justify-center items-center text-[1.8em]">
                <button
                  className="p-0 hover:text-white cursor-pointer duration-75"
                  onClick={() => handlePlayRecord(surah?.num)}
                >
                  <IoIosPlayCircle />
                </button>
              </div>
              {/* اسم السورة */}
              <span>سوره : {surah.name}</span>
              {/* left icons */}
              <div className="left-icons flex gap-2 text-[1.6em]">
                <FaCloudDownloadAlt className="hover:text-[#22c55e] cursor-pointer	duration-75" />
                <FaShareAltSquare className="hover:text-blue-700 cursor-pointer	duration-75" />
                <FaHeartCirclePlus className="hover:text-red-700 cursor-pointer	duration-75" />
              </div>
              {/* {mushafSewarNumsArr.map((num, index) => (
              ))} */}
            </div>
          ))}
        </div>

        {/* return to home button */}
        <div className="mt-4">
          <Link to={`/`}>
            <Button className="flex text-lg items-center py-2 px-4 gap-2 hover:bg-[#26dd69] bg-[#22c55e] duration-[.3s] text-black font-bold">
              الرجوع للصفحه الرئيسية{" "}
              <span>
                <IoArrowBackSharp />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sewar;
