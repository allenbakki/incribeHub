import React from "react";
import call from "../images/call.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";

export default function Footer() {
  return (
    <div
      id="contact"
      className="pt-10 bg-slate-900 flex flex-col lg:p-20 md:p-10 pl-10 pr-10"
    >
      <div className="font-lora flex md:flex-row flex-col gap-5 sm:flex-col md:justify-between pb-10 border-b border-white">
        <div className="flex flex-col gap-10">
          <div className="text-3xl text-white">inscribeHub</div>
          <div className="w-[200px] text-sm text-white">
            Track your posts with ease.
          </div>
        </div>
        <div className="flex md:flex-row flex-col lg:gap-20 md:gap-5 gap-5 text-white">
          <div className="flex flex-col md:gap-10 gap-3">
            <div className="text-white text-xl">Address</div>
            <div className=" text-sm">
              12345 M/01 Sol <br />
              Avenue, Lima, Peru
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-3">
            <div className="text-white text-xl">Contact</div>
            <div className="text-sm">
              +91 9390 XXX XXX
              <br /> finace@email.com
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-3">
            <div className="text-white text-xl">Office</div>
            <div className=" text-sm">
              Monday - Saturday
              <br /> 9AM - 10PM
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col sm:flex-col gap-5 items-center justify-between mt-10 ">
        <div className="flex gap-5">
          <a href="https://www.instgram.com">
            <img src={instagram} alt="media handles" />
          </a>
          <a href="https://www.facebook.com">
            <img src={facebook} alt="media handles" />
          </a>
          <a href="">
            <img src={call} alt="media handles" />
          </a>
        </div>
        <div className="text-white text-sm font-lora">
          Copyright Bedimcode. All rights reserved
        </div>
      </div>
    </div>
  );
}
