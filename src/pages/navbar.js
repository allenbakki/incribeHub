/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from "../images/twitterLogo.svg";
import React, { useState } from "react";
import list from "../images/list.png";

export default function Navbar({ setActiveList }) {
  const contact = document.getElementById("contact");
  const navItems = ["Posts", "Users", "Contact"];
  const [open, setOpen] = useState(false);

  const handleItemClick = (item) => {
    switch (item) {
      case "Posts":
        setActiveList("post");
        break;
      case "Users":
        setActiveList("user");
        break;
      case "Contact":
        contact?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="pt-4 pb-4 pl-5 pr-5 sm:pt-8 sm:pb-8 sm:pl-10 sm:pr-10 xl:pl-20 xl:pr-20 border-b">
      <div className="flex justify-between items-center ">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="w-8" />
          <div className="text-xl text-slate-900 font-semibold lg:text-2xl">
            inscribeHub
          </div>
        </div>
        <div className="block sm:hidden">
          <img
            src={list}
            alt="Picture of the author"
            className={`cursor-pointer w-5 h-5`}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        </div>
        <div
          className={`block sm:hidden absolute right-8 bg-white shadow-md rounded-xl w-28 pl-5 py-4 top-10 z-10  ${
            open ? "block" : "hidden"
          } `}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`text-[#4D4D4D] cursor-pointer translate-x-1 hover:scale-105 delay-200`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="gap-5 hidden sm:flex xl:gap-20 lg:gap-10 lg:text-[20px] ">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`${
                item === "Home" ? "text-[#FF450D]" : "text-[#4D4D4D]"
              } cursor-pointer`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
