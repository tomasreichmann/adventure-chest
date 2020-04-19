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
      <path fill="currentcolor" d="M86.08,30.84,49.32,7.32A2,2,0,0,0,47,7.4l-33.24,25A2,2,0,0,0,13,34.1l1,30a2,2,0,0,0,.83,1.55L51.6,92.09a2,2,0,0,0,1.17.38A2,2,0,0,0,54.12,92L85.35,63.48A2,2,0,0,0,86,62.07l1-29.48A2,2,0,0,0,86.08,30.84ZM48.34,11.43l34.21,21.9-29.85,26L17.56,34.61ZM18,63l-.88-26.23L51.77,61.08V87.29Zm35.8,23.9V61L82.89,35.68,82,61.09ZM47.46,28.31a2.69,2.69,0,0,0-1.28-.5,2.46,2.46,0,0,0-2.29.87c-.94,1.05-.94,2.36,0,3.94a17.91,17.91,0,0,0,3,3.29,4.79,4.79,0,0,1,0-2.47,5.89,5.89,0,0,1,1.23-2.19A6.33,6.33,0,0,1,53,29a9.14,9.14,0,0,1,5.75,2.12,10.92,10.92,0,0,1,3.85,5.33c.71,2.14.24,4.28-1.43,6.42a6.79,6.79,0,0,1-7.39,2.47,18.48,18.48,0,0,1-7.55-4.12A42,42,0,0,1,42.7,38a14.83,14.83,0,0,1-3.06-4.57,7.54,7.54,0,0,1-.49-3.69,6.07,6.07,0,0,1,1.65-3.39,7.17,7.17,0,0,1,4.56-2.5,7.28,7.28,0,0,1,4.89,1.3Zm7.76,13a3,3,0,0,0,2.65-1.14,2.67,2.67,0,0,0,.47-2.65,5.76,5.76,0,0,0-2.06-2.71A5.4,5.4,0,0,0,53,33.39a3,3,0,0,0-2.44,1.07,2.92,2.92,0,0,0-.71,2,4.7,4.7,0,0,0,2,3.39A5.57,5.57,0,0,0,55.22,41.28Z"></path>
    </Icon>
  );
};

export default IconD10;
