// (C) 2007-2020 GoodData Corporation
import React from "react";
import Icon, { IIconProps } from "./Icon";

const IconD10: React.FC<IIconProps> = ({
  viewBox = "0 0 100 100",
  ...restProps
}) => {
  return (
    <Icon
      viewBox={viewBox}
      {...restProps}
    >
      <path fill="currentcolor" d="M46.37,35.69a4.13,4.13,0,0,1,.54-3.21,8,8,0,0,1-3.75-.81A9,9,0,0,1,40.91,30a5,5,0,0,1-1.49-4.4q.38-2.39,3.48-4.16A9.32,9.32,0,0,1,49,20.11a8.09,8.09,0,0,1,4.89,2.46,7.07,7.07,0,0,1,1.36,2.19A3.54,3.54,0,0,1,55,27.67a9.41,9.41,0,0,1,4.18.71,9.55,9.55,0,0,1,3.39,2.37,5.93,5.93,0,0,1,1.76,5.06q-.42,2.74-3.88,4.72A9.64,9.64,0,0,1,48.2,39,7.12,7.12,0,0,1,46.37,35.69ZM55,38a4,4,0,0,0,2.88-.5,2.56,2.56,0,0,0,1.49-2,3.5,3.5,0,0,0-1.17-2.56,5.21,5.21,0,0,0-2.8-1.69,4.09,4.09,0,0,0-2.86.52,2.61,2.61,0,0,0-1.49,2,3.49,3.49,0,0,0,1.19,2.6A5.16,5.16,0,0,0,55,38Zm-7.56-8.54A3.6,3.6,0,0,0,49.91,29a2.28,2.28,0,0,0,1.33-1.74,2.63,2.63,0,0,0-.85-2,4.13,4.13,0,0,0-2.27-1.33,3.66,3.66,0,0,0-2.5.48,2.36,2.36,0,0,0-1.34,1.72,2.69,2.69,0,0,0,.9,2.11A3.94,3.94,0,0,0,47.39,29.42ZM93,26.72a2,2,0,0,0-1.19-1L27.64,6.69A2,2,0,0,0,25.15,8L6.09,70.24A2,2,0,0,0,7.4,72.73L71.62,92.8a1.8,1.8,0,0,0,.6.1,1.92,1.92,0,0,0,.93-.24,2,2,0,0,0,1-1.19l19-63.22A2,2,0,0,0,93,26.72Zm-5.41,2L37.8,58.2,28.59,11.15ZM27.26,14.82l8.68,44.33-25.2,9.57ZM12.57,70.16l24.31-9.23,29.35,26ZM70.88,88.38,38.78,59.94,88.26,30.59Z"></path>
    </Icon>
  );
};

export default IconD10;
