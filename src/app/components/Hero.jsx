import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative w-full h-auto px-44">
      <div className="flex flex-col justify-center items-start pt-28">
        <h1 className="text-6xl text-white uppercase font-oswald">
          where drive meets
        </h1>
        <h1 className="text-[260px] uppercase text-transparent [-webkit-text-stroke:5px_#ffeb00] leading-none font-oswald">
          speed
        </h1>
      </div>

      <div className="pt-13">
        <div className="w-193 flex rounded-xl overflow-hidden border border-white">
          <button className="w-1/2 bg-[#ffeb00] text-[#334d42] py-3 text-xl uppercase cursor-pointer font-interlightLight">
            choose tyre
          </button>
          <button className="w-1/2 bg-[#334d42] text-[#ffeb00] py-3 text-xl uppercase cursor-pointer font-interlightLight">
            find stores
          </button>
        </div>
      </div>

      {/* <div className="pt-13">
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-white text-xl rounded-xl px-4 py-3 w-75">
            <span className="text-[#80849c] flex-1 uppercase font-interlightLight">vehicle type</span>
            <div className="border-l h-7 px-2"></div>
            <FaAngleDown className="text-[#80849c]"/>
          </div>

          <div className="flex items-center bg-white text-xl rounded-xl px-4 py-3 w-75">
            <span className="text-[#80849c] flex-1 uppercase font-interlightLight">make & model</span>
            <div className="border-l h-7 px-2"></div>
            <FaAngleDown className="text-[#80849c]"/>
          </div>

          <button className="bg-[#ffeb00]/60 text-[#80849c] text-xl px-8 py-3 rounded-xl font-interlightLight uppercase">find tyre</button>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
