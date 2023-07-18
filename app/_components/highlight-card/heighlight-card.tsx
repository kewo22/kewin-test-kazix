import React from "react";

export default function HeighLightCard() {
  return (
    <div className="w-full h-[240px] max-h-[240px] relative rounded-32 bg-highlight-bg">
      <div className="backdrop-blur-[2px] bg-white/30 h-full w-full rounded-32"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[92%] h-[85%] rounded-32 flex flex-col">
        <div className="flex items-center">
          <span className="icon-ball-1 mr-2"></span>
          <p className="text-sm lg:text-base leading-normal flex items-center">
            England <span className="icon-arrow-right mx-1"></span> Premier League
          </p>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <p className="text-sm lg:text-lg font-bold leading-normal mb-2">
            Tottenham - Leicester City
          </p>
          <div className="flex gap-3">
            <div className="h-[42px] w-[42px] bg-secondary-dark-800 grid place-items-center rounded-lg font-bold text-sm lg:text-2xl">
              4
            </div>
            <div className="h-[42px] w-[42px] bg-secondary-dark-800 grid place-items-center rounded-lg font-bold text-sm lg:text-2xl">
              2
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div className="text-sm lg:text-base flex-grow h-[35px] flex items-center justify-between bg-secondary-dark-800/[0.6] rounded-lg px-4">
            <span>1</span>
            <span>1.05</span>
          </div>
          <div className="text-sm lg:text-base flex-grow h-[35px] flex items-center justify-between bg-secondary-dark-800/[0.6] rounded-lg px-4">
            <span>1</span>
            <span>1.05</span>
          </div>
          <div className="text-sm lg:text-base flex-grow h-[35px] flex items-center justify-between bg-secondary-dark-800/[0.6] rounded-lg px-4">
            <span>1</span>
            <span>1.05</span>
          </div>
        </div>
      </div>
    </div>
  );
}
