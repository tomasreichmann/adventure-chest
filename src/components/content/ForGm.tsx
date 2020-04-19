import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alert, { AlertProps } from "@material-ui/lab/Alert";
import IconNotVisible from "../icons/IconNotVisible";

const useStyles = makeStyles({
  root: {},
  text: {},
});

export interface IForGmProps {
  className?: string;
  icon?: AlertProps["icon"];
  elevation?: number;
}

const ForGm: React.FC<IForGmProps> = ({children, className, elevation = 1, icon = <IconNotVisible color="text.secondary" />}) => {
  const classes = useStyles();

  return (
    <Alert className={clsx(classes.root, className)} icon={icon} elevation={elevation} >
      <Typography variant="body1" className={classes.text} >{children}</Typography>
    </Alert>
  );
};

export default ForGm;
