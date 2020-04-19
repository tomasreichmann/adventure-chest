// (C) 2007-2020 GoodData Corporation
import React from "react";
import Icon, { IIconProps } from "./Icon";

const IconShieldOutline: React.FC<IIconProps> = ({
  viewBox = "0 0 1.153 1.415",
  ...restProps
}) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path
        fill="currentcolor"
        d="M0.034 0.265l0.519 -0.26c0.015,-0.007 0.032,-0.007 0.047,0l0.519 0.26c0.02,0.008 0.034,0.027 0.034,0.049 0,0.27 -0.036,0.479 -0.122,0.653 -0.087,0.175 -0.224,0.312 -0.426,0.439 -0.017,0.012 -0.04,0.012 -0.057,0 -0.202,-0.127 -0.339,-0.264 -0.426,-0.439 -0.086,-0.174 -0.122,-0.383 -0.122,-0.653 0,-0.022 0.014,-0.041 0.034,-0.049zm0.542 -0.154l-0.471 0.235c0.003,0.239 0.036,0.423 0.111,0.574 0.074,0.149 0.19,0.269 0.36,0.38 0.171,-0.111 0.287,-0.231 0.361,-0.38 0.075,-0.151 0.108,-0.335 0.111,-0.574l-0.472 -0.235z"
      ></path>
    </Icon>
  );
};

export default IconShieldOutline;
