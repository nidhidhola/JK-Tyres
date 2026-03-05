"use client";

import React from "react";
import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { IoSearchSharp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="pl-44">
          <Image
            src="/Images/Jk-logo.svg"
            alt="logo"
            height={185}
            width={205}
          />
        </div>
        <div>
          <div className="h-22 w-370 bg-black/50 rounded-l-3xl text-white flex items-center justify-between px-17 text-lg font-semibold">
            <p className="group cursor-context-menu flex gap-2 items-center hover:text-gray-300">
              CORPORATE{" "}
              <span className="text-amber-300">
                <FaAngleDown className="group-hover:hidden block"/>
                <FaAngleUp className="hidden group-hover:block" />
              </span>
            </p>
            <p className="group cursor-context-menu flex gap-2 items-center hover:text-gray-300">
              TYRES{" "}
              <span className="text-amber-300">
                <FaAngleDown className="group-hover:hidden block"/>
                <FaAngleUp className="hidden group-hover:block" />
              </span>
            </p>
            <p className="group cursor-context-menu flex gap-2 items-center hover:text-gray-300">
              INVESTORS{" "}
              <span className="text-amber-300">
                <FaAngleDown className="group-hover:hidden block"/>
                <FaAngleUp className="hidden group-hover:block" />
              </span>
            </p>
            <p className="group cursor-context-menu flex gap-2 items-center hover:text-gray-300">
              MEDIA{" "}
              <span className="text-amber-300">
                <FaAngleDown className="group-hover:hidden block"/>
                <FaAngleUp className="hidden group-hover:block" />
              </span>
            </p>
            <p className="cursor-pointer hover:text-gray-300">CAREERS</p>
            <p className="group cursor-context-menu flex gap-2 items-center hover:text-gray-300">
              CONTACT US{" "}
              <span className="text-amber-300">
                <FaAngleDown className="group-hover:hidden block"/>
                <FaAngleUp className="hidden group-hover:block" />
              </span>
            </p>
            <p className="cursor-pointer hover:text-gray-300">JK TORNEL</p>
            <TfiLocationPin className="text-3xl cursor-pointer" />
            <IoSearchSharp className="text-3xl cursor-pointer" />
            <IoCallOutline className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
