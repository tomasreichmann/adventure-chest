// (C) 2007-2020 GoodData Corporation
import React from "react";
import Icon, { IIconProps } from "../../components/icons/Icon";

const IconDnDGold: React.FC<IIconProps> = ({
  viewBox = "0 0 101 100",
  ...restProps
}) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>

      <path d="M100.091,13.636c-11.605,0 -21.028,13.786 -21.028,36.364c0,22.578 9.423,36.364 21.028,36.364l0,13.636l-100.091,0l0,-13.636c11.605,0 21.028,-13.786 21.028,-36.364c0,-22.578 -9.423,-36.364 -21.028,-36.364l0,-13.636l100.091,0l0,13.636Z" fill="#ffb577"/>
      <path d="M100.091,13.636c-11.605,0 -21.028,13.786 -21.028,36.364c0,22.578 9.423,36.364 21.028,36.364l0,13.636l-100.091,0l0,-13.636c11.605,0 21.028,-13.786 21.028,-36.364c0,-22.578 -9.423,-36.364 -21.028,-36.364l0,-13.636l100.091,0l0,13.636Zm-10.06,-5.636l-79.971,0c3.063,1.519 5.915,3.771 8.449,6.751c6.14,7.219 10.519,19.315 10.519,35.249c0,15.934 -4.379,28.03 -10.519,35.249c-2.534,2.98 -5.386,5.232 -8.449,6.751l79.971,0c-3.063,-1.519 -5.915,-3.771 -8.449,-6.751c-6.14,-7.219 -10.519,-19.315 -10.519,-35.249c0,-15.934 4.379,-28.03 10.519,-35.249c2.534,-2.98 5.386,-5.232 8.449,-6.751Z" fill="#cc8054"/>
    </Icon>
  );
};

export default IconDnDGold;
