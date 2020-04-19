import React from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, Omit<IFaceProps, "Component">>(() => ({
  Face: ({
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

export interface IFaceProps extends React.CSSProperties {
  Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}

export const Face: React.FC<IFaceProps> = ({ Component = "div", ...restProps }) => {
  const props = { ...restProps };
  const classes = useStyles(props);
  return <Component className={classes.Face} />;
};
<svg height='300px' width='300px'  fill="#666666" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" x="0px" y="0px">
<path fill="#cc0000" d="M12.5,20A7.5,7.5,0,1,0,5,12.5,7.5,7.5,0,0,0,12.5,20Zm.5-6H12V9h1Zm-1,1h1v1H12Z"></path></svg>