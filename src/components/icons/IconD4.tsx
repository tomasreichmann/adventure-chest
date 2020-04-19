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
      <path fill="currentcolor" d="M90.68,68.81,46.28,6.93a2,2,0,0,0-3.4.25L13.16,64.86a2,2,0,0,0,.17,2.1L32.56,93.18a2,2,0,0,0,1.61.82,2.11,2.11,0,0,0,.74-.14l54.89-22a2,2,0,0,0,.88-3ZM17.29,65.59,42.61,16.44l-8.94,71.5ZM35.51,89.31l9.64-77.1L86,69.07Zm30.81-28-2.47.82,2.24,6.41-4.53,1.66L59.51,63.6,50,66.77,48.82,61.6,53,44.51l4.35-1,5,14.45,2.41-.74Zm-8.15-2.08-3.3-10.67L52.44,61Z"></path>
    </Icon>
  );
};

export default IconD10;
