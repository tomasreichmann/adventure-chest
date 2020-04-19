import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles<Theme, Partial<IFlowProcessProps>>((theme) => ({
  FlowProcess: ({column = "auto"}) => ({
    padding: theme.spacing(2),
    gridColumn: column,
  }),
}));

export interface IFlowProcessProps {
  className?: string;
  column?: React.CSSProperties["gridColumn"];
}

const FlowProcess: React.FC<IFlowProcessProps> = ({
  className,
  column,
  children
}) => {
  const classes = useStyles({column});

  return (
    <Paper className={clsx(classes.FlowProcess, className)}>
      {children}
    </Paper>
  );
};

export default FlowProcess;
