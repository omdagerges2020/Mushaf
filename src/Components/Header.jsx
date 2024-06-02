import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import "./header.css";
import navLogo from "../images/logo.00b8b9c48a7aa2691542.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MdOutlineComputer } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const navListMenuItems = [
    {
      title: "Light",
      icon: <IoSunnyOutline />,
    },
    {
      title: "Dark",
      icon: <FaRegMoon />,
    },
    {
      title: "System",
      icon: <MdOutlineComputer />,
    },
  ];

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, icon }) => (
      <a
        href="#"
        key={title}
        className="border-b-[1px] border-black rounded text-xl"
      >
        <MenuItem className="lg:flex flex items-center gap-2">
          <div className="text-black font-bold">{icon}</div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {title}
          </Typography>
        </MenuItem>
      </a>
    ));

    return (
      <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-medium">
              <MenuItem className="flex items-center text-black text-lg gap-2 lg:flex lg:rounded-full">
                <MdOutlineComputer className="h-[25px] w-[25px] text-black" />{" "}
                <span className="hidden lg:block text-md font-normal">
                  System
                </span>
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 text-black hidden lg:block font-bold transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="flex w-[10rem] bg-green-500 hover:border-none hover:outline-none lg:grid">
            <ul className="hover:border-none border-none outline-none  hover:outline-none flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
      </React.Fragment>
    );
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="xl:hidden md:hidden lg:hidden block">
        <NavListMenu />
      </div>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Link to="/" className="flex items-center">
          الرئيسية
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a href="#" className="flex items-center">
          عنا
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a href="#" className="flex items-center">
          تواصل معنا
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-full sticky top-0 z-10">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between  text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
              src={navLogo}
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
          </Typography>

          <div className="flex items-center gap-4">
            <NavListMenu />
            <div className="mr-4 hidden lg:block">{navList}</div>

            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>تسجيل الدخول</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>تسجيل</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <div>
          <Collapse open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>تسجيل لدخول</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>تسجيل</span>
              </Button>
            </div>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
