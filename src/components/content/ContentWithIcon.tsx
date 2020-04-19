import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Linkable, { ILinkableProps } from "./Linkable";
import Link from "../Link";

export interface IContentWithIconProps {
  className?: string;
  iconColumnWidth?: React.CSSProperties["width"];
  icon: React.ReactNode;
}

const useStyles = makeStyles<Theme, Partial<IContentWithIconProps>>((theme) => ({
  ContentWithIcon: ({iconColumnWidth}) => ({
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplateColumns: `${typeof iconColumnWidth === "number" ? `${iconColumnWidth}px` : iconColumnWidth} auto`,
  }),
  iconWrapper: {
    color: theme.palette.text.primary,
    opacity: 0.5,
  }
}));


const ContentWithIcon: React.FC<IContentWithIconProps> = ({
  children,
  icon,
  iconColumnWidth = 20,
  className,
}) => {
  const classes = useStyles({iconColumnWidth});

  return (
    <div className={clsx(classes.ContentWithIcon, className)}>
      <div className={classes.iconWrapper}>{icon}</div>
      {children}
    </div>
  );
};

export default ContentWithIcon;
