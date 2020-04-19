import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles<Theme, Partial<IFlavorTextProps>>((theme) => ({
  FlavorText: {},
  text: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
  },
}));

export interface IFlavorTextProps {
  className?: string;
}

const FlavorText: React.FC<IFlavorTextProps> = ({children, className}) => {
  const classes = useStyles({});

  return (
    <Paper className={clsx(classes.FlavorText, className)} >
      <Box p={2}>
        <Typography variant="body2" className={classes.text} >{children}</Typography>
      </Box>
    </Paper>
  );
};

export default FlavorText;
