// (C) 2007-2020 GoodData Corporation
import React from "react";
import Icon, { IIconProps } from "./Icon";

const IconNotVisible: React.FC<IIconProps> = ({
  viewBox = "0 0 100 100",
  ...restProps
}) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path fill="currentcolor" d="M17.2,25.7l-4.3-4.3C8.6,24.3,4.6,28.2,1,33C12,48,27.3,53.6,41.5,49.9l-5.1-5.1C35.2,45,34.1,45,33,45   c-8.9,0-17.3-4.2-24.3-12C11.4,30.1,14.2,27.6,17.2,25.7z"></path><path d="M21,29.5c0.3,6.2,5.3,11.2,11.5,11.5L21,29.5z"></path><path d="M65,33c-8.8-12-20.4-18-32-18c-2.8,0-5.7,0.4-8.5,1.1c-1.4,0.4-2.8,0.8-4.2,1.4L3.8,1L1,3.8l20.8,20.8l15.5,15.5h0l3.6,3.6   l4.7,4.7h0L62.2,65l2.8-2.8L49.6,46.8c1.2-0.6,2.4-1.3,3.5-2.1C57.4,41.8,61.4,37.9,65,33z M48.8,40.3c-1.2,0.7-2.4,1.4-3.7,2   l-4.2-4.2c1-0.9,1.9-1.9,2.5-3.1c0.8-1.3,1.3-2.9,1.5-4.5C44.4,30.8,43.7,31,43,31v0c-0.4,0-0.8-0.1-1.2-0.2   c-0.4-0.1-0.7-0.3-1.1-0.5c-0.2-0.1-0.4-0.3-0.6-0.5C39.5,29.1,39,28.1,39,27c0-1.8,1.2-3.3,2.8-3.8c0.4-0.1,0.8-0.2,1.2-0.2v0   c0.1,0,0.3,0,0.4,0c0,0,0,0,0-0.1c0.1,0,0.1,0.1,0.2,0.1c0.7,0.3,1.3,0.5,2,0.9c4.2,2,8.2,5.1,11.8,9.1   C54.7,36,51.8,38.4,48.8,40.3z" />
    </Icon>
  );
};

export default IconNotVisible;
