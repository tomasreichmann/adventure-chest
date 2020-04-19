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
      <path fill="currentcolor" d="M34.89,32.13l-2-2.19a21.09,21.09,0,0,0,2.51-1.85,3.42,3.42,0,0,0,1.18-2,2.54,2.54,0,0,0-.29-1.52,2.67,2.67,0,0,0-.43-.67L39,22,55.92,38.11l-4.17,3.06-12-12.12Zm20.33.31c-.68-1.49-.7-3.49-.07-6a21.7,21.7,0,0,0,.76-4.13,3.38,3.38,0,0,0-1.34-2.66,4.63,4.63,0,0,0-2.32-1,3.64,3.64,0,0,0-2.43.53c-1.07.65-1.45,1.4-1.13,2.25a6.11,6.11,0,0,0,1.58,2L46.69,25.7a8.49,8.49,0,0,1-2.38-3.52c-.54-1.95.4-3.62,2.79-5a10.07,10.07,0,0,1,5.69-1.5,9.19,9.19,0,0,1,5.33,2A5.61,5.61,0,0,1,60.37,21a8.86,8.86,0,0,1-.22,3.47l-.38,1.79a21.92,21.92,0,0,0-.44,2.44,3.57,3.57,0,0,0,.17,1.47l7.77-5.48,3.4,2.63-12.6,9.25A11.58,11.58,0,0,1,55.22,32.44ZM92.85,47.33l-8.59-21a2,2,0,0,0-.65-.85L60.72,8.33A2,2,0,0,0,59.22,8L27.73,12.72a2,2,0,0,0-1.18.64L17,23.85a2.15,2.15,0,0,0-.38.61L6.14,51.18a2,2,0,0,0,0,1.36l3.34,10a2.18,2.18,0,0,0,.4.69l21,23.85a2,2,0,0,0,.47.39l7.15,4.29a2,2,0,0,0,1,.29,2.31,2.31,0,0,0,.37,0l25.76-4.77a2.42,2.42,0,0,0,.57-.2L82.4,78.48a2.06,2.06,0,0,0,1-1.13L92.9,48.72A2,2,0,0,0,92.85,47.33ZM80,27.79,56.47,47,25.39,35.07l4.26-18.59L59,12ZM20.22,26.27l6.87-7.55L23.26,35.37,12.14,58l-2-6.06ZM13.11,60.91,13,60.72,24.71,37,55.76,48.82,60.3,76.94,33.8,84.33l-.18-.11ZM64.58,83.39,39.86,88l-3.7-2.22,25.45-7.09,14.6-1.42ZM80,74.86l-17.7,1.77L57.73,48.5,81.19,29.39l7.68,18.77Z"></path>
    </Icon>
  );
};

export default IconD10;