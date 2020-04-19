// (C) 2007-2020 GoodData Corporation
import React from "react";
import Icon, { IIconProps } from "./Icon";

const IconBook: React.FC<IIconProps> = ({
  viewBox = "0 0 100 100",
  ...restProps
}) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <g transform="translate(0,-952.36218)"><path fill="currentcolor" d="M 29 5 C 21.303585 5.0001 15 11.30357 15 19 A 3.0003 3.0003 0 0 0 18 22 L 29.78125 22 C 28.781736 29.414003 25.341231 39.861811 22 50.1875 C 18.328707 61.5332 14.705684 72.5947 15 81 C 15 81.032 14.999786 81.06175 15 81.09375 C 15.05171 88.74685 21.335235 95.0003 29 95 L 71 95 C 78.696403 94.9999 85 88.6964 85 81 A 3.0003 3.0003 0 0 0 82 78 L 70.3125 78 C 71.289207 70.948526 74.396281 61.035289 77.5625 51.21875 C 81.371711 39.40859 85.297165 27.74941 85 19 C 84.999345 18.9807 85.000695 18.9567 85 18.9375 C 84.999905 18.9163 85.00019 18.8961 85 18.875 C 84.93118 11.23629 78.654274 4.99931 71 5 L 29 5 z M 29 11 L 59.6875 11 C 58.640212 12.48851 57.950769 14.18926 57.53125 16 L 21.59375 16 C 22.765001 13.04694 25.604471 11.00004 29 11 z M 69.03125 11 L 71 11 C 75.453654 10.9996 79 14.54623 79 19 A 3.0003 3.0003 0 0 0 79 19.09375 C 79.252006 25.66875 75.695966 37.52845 71.875 49.375 C 68.054034 61.2216 64 73.1001 64 82 C 64 84.539806 64.23535 86.907268 65.15625 89 L 29 89 C 24.546252 89.0001 21 85.4538 21 81 A 3.0003 3.0003 0 0 0 21 80.875 C 20.758281 74.5684 24.049238 63.37155 27.71875 52.03125 C 31.14682 41.437048 34.859661 30.659266 35.84375 22 L 60 22 A 3.0003 3.0003 0 0 0 63 19 C 63 15.73174 65.949576 12.09506 69.03125 11 z M 41.6875 27 A 3.0040663 3.0040663 0 1 0 42 33 L 70 33 A 3.0003 3.0003 0 1 0 70 27 L 42 27 A 3.0003 3.0003 0 0 0 41.6875 27 z M 38.6875 37 A 3.0040663 3.0040663 0 1 0 39 43 L 67 43 A 3.0003 3.0003 0 1 0 67 37 L 39 37 A 3.0003 3.0003 0 0 0 38.6875 37 z M 35.6875 47 A 3.0040663 3.0040663 0 1 0 36 53 L 64 53 A 3.0003 3.0003 0 1 0 64 47 L 36 47 A 3.0003 3.0003 0 0 0 35.6875 47 z M 32.6875 57 A 3.0040663 3.0040663 0 1 0 33 63 L 61 63 A 3.0003 3.0003 0 1 0 61 57 L 33 57 A 3.0003 3.0003 0 0 0 32.6875 57 z M 29.6875 67 A 3.0040663 3.0040663 0 1 0 30 73 L 58 73 A 3.0003 3.0003 0 1 0 58 67 L 30 67 A 3.0003 3.0003 0 0 0 29.6875 67 z M 28.6875 77 A 3.0040663 3.0040663 0 1 0 29 83 L 57 83 A 3.0003 3.0003 0 1 0 57 77 L 29 77 A 3.0003 3.0003 0 0 0 28.6875 77 z M 70.125 84 L 78.40625 84 C 77.604952 85.999319 76.020309 87.591975 74.03125 88.40625 C 74.022432 88.40986 74.008835 88.402671 74 88.40625 C 72.005033 88.40625 71.540976 88.03445 71 87.21875 C 70.611578 86.633003 70.289352 85.53425 70.125 84 z " transform="translate(0,952.36218)"/></g>
    </Icon>
  );
};

export default IconBook;