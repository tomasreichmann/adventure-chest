import React, { HTMLProps } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, Omit<ISVGProps, "Component">>(() => ({
  SVG: ({
    position = "relative",
    width = "1in",
    height = "1in",
    backgroundSize = "cover",
    ...restProps
  }) => ({
    position,
    width,
    height,
    backgroundSize,
    ...restProps
  })
}));

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  view
}

export const SVG: React.FC<ISVGProps> = ({ xmlns = "http://www.w3.org/2000/svg", viewBox = "0 0 100 100", x = "0", y = "0", children, ...restProps }) => {
  const props = { ...restProps };


  props.view
  const svgProps: HTMLProps<SVGElement> = { xmlns, viewBox, x, y}
  const classes = useStyles(props);
  return <svg  className={classes.SVG}>
    {children}
  </svg>;
};
