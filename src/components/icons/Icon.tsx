// (C) 2007-2020 GoodData Corporation
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { getPaletteColor } from "../../theme";


const useStyles = makeStyles<Theme, Partial<IIconProps>>((theme) => ({
  Icon: ({
    height,
    width,
    display = "inline-block",
    verticalAlign = "middle",
    color = "inherit",
    ...restProps
  }) => ({
      color: getPaletteColor(color, theme) || color,
    display,
    verticalAlign,
    height,
    width,
    ...restProps
  })
}));

export interface IIconProps extends Omit<React.CSSProperties, "color"> {
  className?: string;
  x?: string | number;
  y?: string | number;
  viewBox?: string;
  color?: string | React.CSSProperties["color"];
}

const Icon: React.FC<IIconProps> = ({
  className = undefined,
  height = "2em",
  width,
  x = "0",
  y = "0",
  viewBox,
  children,
  ...restProps
}) => {
  const classes = useStyles({
    height,
    width,
    ...restProps
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x={x}
      y={y}
      viewBox={viewBox}
      className={clsx(classes.Icon, className)}
    >
      {children}
    </svg>
  );
};

export default Icon;
