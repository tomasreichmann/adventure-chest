import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Alert, { AlertProps } from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import IconD20 from "../icons/IconD20";

const useStyles = makeStyles<Theme, IChallengeProps>(theme => ({
  Challenge: ({elevation = 1, column, row}) => ({
    boxShadow: theme.shadows[elevation],
    gridColumn: column,
    gridRow: row,
  }),
  alert: ({ children }) => ({
    borderRadius: children
      ? `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`
      : theme.shape.borderRadius
  }),
  title: {
    fontWeight: 700
  }
}));

const defaultIconMapping: AlertProps["iconMapping"] = {
  warning: <IconD20 height="1.1em" lineHeight={1} color="secondary.dark" />
}

export interface IChallengeProps {
  className?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  title: React.ReactNode;
  icon?: React.ReactNode;
  elevation?: number;
  iconMapping?: AlertProps["iconMapping"];
  column?: React.CSSProperties["gridColumn"];
  row?: React.CSSProperties["gridRow"];
}

const Challenge: React.FC<IChallengeProps> = ({
  className,
  title,
  description,
  icon,
  elevation = 1,
  iconMapping = defaultIconMapping,
  column,
  row,
  children
}) => {
  const classes = useStyles({ column, row, title, description, icon, children, elevation });

  return (
    <div className={clsx(classes.Challenge, className)}>
      <Alert iconMapping={iconMapping} severity="warning" icon={icon} className={classes.alert}>
        <AlertTitle className={classes.title}>{title}</AlertTitle>
        {description}
      </Alert>
      {children}
    </div>
  );
};

export default Challenge;
