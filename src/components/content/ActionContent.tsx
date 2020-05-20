import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconMove from "../icons/IconMove";
import ContentWithIcon from "./ContentWithIcon";

export interface IActionContentProps {
  className?: string;
}

const scriptIcon = <IconMove width="100%" />

const useStyles = makeStyles<Theme, Partial<IActionContentProps>>(() => ({
  ActionContent: {},
}));


const ActionContent: React.FC<IActionContentProps> = ({
  children,
  className,
}) => {
  const classes = useStyles({});

  return (
    <ContentWithIcon className={clsx(classes.ActionContent, className)} icon={scriptIcon}>
      {children}
    </ContentWithIcon>
  );
};

export default ActionContent;
