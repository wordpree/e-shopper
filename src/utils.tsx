import React, { forwardRef } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { activeStyle } from "./data";

export const a = () => {};

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
