import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {},
  text: {},
});

export interface IDangerProps {
  className?: string;
}

const Danger: React.FC<IDangerProps> = ({children, className}) => {
  const classes = useStyles();

  return (
    <Alert className={clsx(classes.root, className)} severity="error">
      <Typography variant="body1" className={classes.text} >{children}</Typography>
    </Alert>
  );
};

export default Danger;
