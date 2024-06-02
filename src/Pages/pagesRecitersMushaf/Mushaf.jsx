import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRecitersMushaf } from "../../ReduxSystem/Slices/recitersmushafSlice";
import LoadingRecitersMushaf from "./../../Components/loadingPages/LoadingRecitersMushaf";


const Mushaf = () => {
  const { recitersMushaf, loadingReciterMushaf } = useSelector(
    (state) => state.allRecitersMushaf
  );

  // console.log(recitersMushaf);
  // console.log(recitersMushaf?.moshaf);

  // Dispatching
  const dispatch = useDispatch();

  // Use Params
  const {reciterId} = useParams();
  // console.log(test);

  // useEffect
  useEffect(() => {
    dispatch(getRecitersMushaf(reciterId));
  }, []);

  // Loading condition
  if(loadingReciterMushaf){
    return <LoadingRecitersMushaf/>
  }

  return (
    <div className="flex w-full h-screen lg:w-[70%] xs:w-full xl:w-[80%] md-[90%]  flex-col xl:justify-start justify-center  gap-8 mt-6 py-[3em]  px-4 pb-6">
      <div className="header flex justify-center items-center font-bold text-[2.5em]">
        <h1>الشيخ {recitersMushaf.reciters[0]?.name}</h1>
      </div>
      <div className="content flex flex-col gap-6 justify-start w-full px-[1em] mt-6">
        {/* العنوان */}
        <div className="content-header font-bold text-xl bg-white px-4 py-4 rounded-md">
          <h1>المصاحف الخاصة بالشيخ :-</h1>
        </div>

        {/* المصاحف */}
        {recitersMushaf.reciters[0].moshaf.map((mosName, index) => (
          <div key={index} className="mushafname bg-white px-4 py-3 rounded-md font-bold flex gap-5 items-center">
            <span>{index + 1}-</span>
            <Button className="text-xl bg-[#bbf7d0] py-2 px-4 text-black">
              <Link to={`/recitermushaf/${recitersMushaf.reciters[0]?.id}/${mosName.name}`}>{mosName.name}</Link>
            </Button>
          </div>
        ))}

        {/* return to home button */}
        <div className="mt-6">
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

export default Mushaf;
