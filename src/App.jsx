import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ReciterMushaf from "./Pages/ReciterMushaf";
import PageNotFound from "./Components/PageNotFound";
import ReciterMushafSewar from "./Pages/ReciterMushafSewar";
import { useSelector } from "react-redux";
import "./index.css";

const App = () => {
  // useSelector
  const { moshafs } = useSelector((state) => state.allRecitersMushaf);
  // useState
  const [surahAudion, setSurahAudio] = useState("");


  // PlayAudio Function
  const handlePlayRecord = (surahid) => {
    // console.log(surahid);
    const surahAud =
      moshafs[0]?.server + "" + `${surahid.toString().padStart(3, "0")}.mp3`;
    // console.log(surahAud);
    localStorage.localAud = surahAud;
    setSurahAudio(localStorage.localAud);
  };

  return (
    <div dir="rtl">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recitermushaf/:reciterId" element={<ReciterMushaf />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route
          path="/recitermushaf/:reciterId/:mushafName"
          element={
            <ReciterMushafSewar
              surahAudion={surahAudion}
              handlePlayRecord={handlePlayRecord}
            />
          }
        />
      </Routes>

      {localStorage.localAud && (
        <div className="main-aud fixed right-0 bottom-3 lg:right-80 w-full lg:w-[50%] xl:w-[75%] z-[2000] border-none">
          <div className="flex items-center justify-center text-blue-gray-900">
            <audio
              src={surahAudion}
              controls
              autoPlay
              id="aud"
              className="audio w-full sm:w-[90%]"
            ></audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
