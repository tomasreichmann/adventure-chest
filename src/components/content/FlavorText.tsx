import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {},
  text: {
    fontFamily: "Kalam, cursive",
  },
});

export interface IFlavorTextProps {
  className?: string;
}

const FlavorText: React.FC<IFlavorTextProps> = ({children, className}) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, className)} >
      <Box p={2}>
        <Typography variant="body1" className={classes.text} >{children}</Typography>
      </Box>
    </Paper>
  );
};

export default FlavorText;
