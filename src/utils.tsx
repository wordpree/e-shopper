import React, { forwardRef } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { activeStyle } from "./data";

export const linkRef = (to: string) => {
  return forwardRef<any, Omit<LinkProps, "to">>((props, ref) => (
    <NavLink exact activeStyle={activeStyle} {...props} ref={ref} to={to} />
  ));
};

export const indexRanger = (min: number, max: number, currentIndex: number) => {
  const OFFSET = 1; //0 index started
  if (currentIndex < min || currentIndex > max - OFFSET) {
    return Math.abs(currentIndex % max);
  }
  return currentIndex;
};

export const getCountdown = (seconds: number) => {
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);
  return [
    {
      name: "Day",
      count: d > 3650 ? 0 : d, //set all initial date to 0
    },
    {
      name: "Hour",
      count: d > 3650 ? 0 : h,
    },
    {
      name: "Minute",
      count: d > 3650 ? 0 : m,
    },
    {
      name: "Second",
      count: d > 3650 ? 0 : s,
    },
  ];
};

export const largeThanOne = (figure: number) => {
  return figure > 1;
};
