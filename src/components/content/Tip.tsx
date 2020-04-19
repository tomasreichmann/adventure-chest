import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  root: {
  },
  text: {},
}));

export interface ITipProps {
  className?: string;
}

const Tip: React.FC<ITipProps> = ({children, className}) => {
  const classes = useStyles();

  return (
    <Alert className={clsx(classes.root, className)} severity="info" elevation={1}>
      <Typography variant="body1" className={classes.text} >{children}</Typography>
    </Alert>
  );
};

export default Tip;
