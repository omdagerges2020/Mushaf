import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
// logo image 
import logoImage from "../../images/logo.00b8b9c48a7aa2691542.png"
import { FaRegHeart } from 'react-icons/fa';
import { FcHome } from 'react-icons/fc';
import { PiRadioDuotone } from 'react-icons/pi';
import { RiLiveLine } from 'react-icons/ri';
import { FaBookOpen } from 'react-icons/fa';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { FcBookmark } from 'react-icons/fc';
import { GiWhiteBook } from 'react-icons/gi';
import { FaTelegram } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr';
import { RiRectangleLine } from 'react-icons/ri';
import { FcReadingEbook } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa6';

const Sidemenue = () => {
  return (
    <div className="w-[30%] hidden xl:block lg:block">
      {/* sidebar */}
      <Card className="h-[calc(100vh-5rem)] fixed top-[90px] right-0  overflow-auto  rounded-none w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        {/* sidebar header */}
        <div className="mb-2 p-4 flex gap-3">
          <img
            src={logoImage}
            style={{ width: "30px", height: "30px" }}
            alt=""
          />
          <Typography variant="h5" color="blue-gray">
            مصحف اونلاين
          </Typography>
        </div>
        <hr />
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
      </Card>
    </div>
  );
};

export default Sidemenue;
