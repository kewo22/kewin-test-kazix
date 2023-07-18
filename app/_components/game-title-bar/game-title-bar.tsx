"use client";

import React from "react";
import { Button } from "../shared/button";
import { GameTitleBarProps } from "@/app/_interfaces/gameTitleBar";

export const GameTitleBar: React.FC<GameTitleBarProps> = ({ ...props }) => {
  const { title } = props;
  const { onViewAllClick, onLeftArrowClick, onRightArrowClick } = props;
  return (
    <div className="flex gap-5 items-center w-full">
      <p className="text-sm lg:text-xl font-bold flex-grow">{title}</p>
      <div className="flex items-center gap-2">
        <Button onClick={onViewAllClick}>View All</Button>
        <Button size="sm" onClick={onLeftArrowClick}>
          <span className="icon-arrow-left"></span>
        </Button>
        <Button size="sm" onClick={onRightArrowClick}>
          <span className="icon-arrow-right"></span>
        </Button>
      </div>
    </div>
  );
};
