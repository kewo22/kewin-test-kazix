"use client";
import React, { useEffect, useState } from "react";

export const Button: React.FC<ButtonProps> = ({ children, ...attributes }) => {
  const {
    size = "md",
    bg = "bg-secondary-dark-50",
    text = "text-white",
    customclass = "",
    isselectable = false,
    selected = false,
    onClick,
  } = attributes;

  const [sizeClass, setSizeClass] = useState("h-[42px] px-3");
  const [css, setCss] = useState(
    "min-w-fit rounded-lg font-bold text-xs hover:bg-primary hover:text-secondary-dark-950 transition-all"
  );
  const [isSelected, setIsSelected] = useState(false);
  const [bgColor, setBgColor] = useState(bg);
  const [textColor, setTextColor] = useState(text);

  useEffect(() => {
    if (size === "xs") {
      setSizeClass("h-[30px] lg:h-[35px] px-2 lg:px-3");
    }
    if (size === "sm") {
      setSizeClass("h-[35px] lg:h-[40px] px-3 lg:px-4");
    }
    if (size === "md") {
      setSizeClass("h-[40px] lg:h-[45px] px-3 lg:px-4");
    }
    if (size === "lg") {
      setSizeClass("h-[45px] lg:h-[50px] px-3 lg:px-4");
    }
  }, [size]);

  useEffect(() => {
    if (!isselectable) return;
    if (isSelected) {
      setBgColor("bg-primary");
      setTextColor("text-secondary-dark-950");
    } else {
      setBgColor(bg);
      setTextColor("text-white");
    }
  }, [isSelected, bg, isselectable]);

  useEffect(() => {
    if (!isselectable) return;
    setIsSelected(selected);
    if (isselectable && selected) {
      setBgColor("bg-primary");
      setTextColor("text-secondary-dark-950");
    } else {
      setBgColor(bg);
      setTextColor("text-white");
    }
  }, [selected, bg, isselectable]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // if (isselectable) setIsSelected((e) => !e);
    onClick && onClick(e);
  };

  return (
    <button
      {...attributes}
      onClick={handleClick}
      className={`${css} ${sizeClass} ${bgColor} ${textColor} ${customclass}`}
    >
      {children}
    </button>
  );
};
