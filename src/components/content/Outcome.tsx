import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alert, { AlertProps, Color } from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  Outcome: {
    borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
    marginTop: theme.spacing(-0.5),
    zIndex: -1,
    borderTop: "1px dashed currentcolor",
  },
  condition: {
    minWidth: "2em",
    fontSize: theme.typography.body1.fontSize,
    textAlign: "right",
  },
}));

export interface IOutcomeProps {
  className?: string;
  condition?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: AlertProps["severity"];
}

const defaultConditionMap: {
  [key in Color]: string;
} = {
  success: "✓",
  error: "✕",
  info: "?",
  warning: "⚠",
};

const Outcome: React.FC<IOutcomeProps> = ({
  className,
  variant = "success",
  condition = defaultConditionMap[variant] || "",
  children,
}) => {
  const classes = useStyles();

  return (
    <Alert
      className={clsx(classes.Outcome, className)}
      severity={variant}
      icon={
        <Typography variant="body2" className={classes.condition}>
          {condition}
        </Typography>
      }
    >
      {children && <div>{children}</div>}
    </Alert>
  );
};

export default Outcome;
