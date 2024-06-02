import React from "react";
import Sidemenue from "./pageshome/Sidemenue";
import Mushaf from './pagesRecitersMushaf/Mushaf';
import { RiArrowLeftDoubleFill, RiLiveLine, RiRectangleLine } from "react-icons/ri";
import { Button, Drawer, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { FcBookmark, FcHome, FcReadingEbook } from "react-icons/fc";
import { FaBookOpen, FaCloudDownloadAlt, FaRegHeart, FaStar, FaTelegram } from "react-icons/fa";
import { PiRadioDuotone } from "react-icons/pi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { GiWhiteBook } from "react-icons/gi";
import { GrAppsRounded } from "react-icons/gr";





const ReciterMushaf = () => {


  // state and function for sidemenue
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);


  return (
    <div className="w-full h-full flex gap-4 bg-homeBackground">


      {/* Sidemenue responsive */}
      <React.Fragment>
        <div dir="ltr" className="w-fit block lg:hidden fixed top-1/2 z-1500 ">
          <button
            onClick={openDrawerRight}
            className="bg-gray-900 px-[2px] py-[10px] text-xl rounded-lg pointer"
          >
            <RiArrowLeftDoubleFill className="text-white" />
          </button>
        </div>

        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4 overflow-auto"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              مصحف اونلاين
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          {/* List */}
          <List>
            <ListItem>
              <ListItemPrefix className="ml-2">
                <FcHome className="h-5 w-5" />
              </ListItemPrefix>
              الرئيسية
            </ListItem>
            <ListItem>
              <ListItemPrefix className="ml-2">
                <FaRegHeart className="h-5 w-5" />
              </ListItemPrefix>
              المفضلة
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PiRadioDuotone className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              الاذاعة
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <RiLiveLine className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              البث المرئى المباشر
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaBookOpen className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              تصفح القرآن
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <BsFillCameraVideoFill className="h-5 w-5 text-green-500 ml-2" />
              </ListItemPrefix>
              التلاوات المرئية
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaCloudDownloadAlt className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              تحميل المصحف كاملا
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FcBookmark className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              سورة الكهف
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <GiWhiteBook className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              حصن المسلم
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaTelegram className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              منصة القرآن الكريم على التيليجرام
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <GrAppsRounded className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              التطبيقات
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <RiRectangleLine className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              تلاوات الحرمين
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FcReadingEbook className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              تفسير القرآن
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaStar className="h-5 w-5 ml-2" />
              </ListItemPrefix>
              القراءات العشر
            </ListItem>
          </List>
          <div className="flex gap-5 uppercase justify-center">
            <Button size="sm" variant="outlined">
              login
            </Button>
            <Button size="sm">sign up</Button>
          </div>
        </Drawer>
      </React.Fragment>

      <Sidemenue/>
      <Mushaf/>
    </div>
  );
};

export default ReciterMushaf;
