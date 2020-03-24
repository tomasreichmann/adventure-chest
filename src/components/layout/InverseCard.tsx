import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Card, { CardProps } from "@material-ui/core/Card";

export interface IInverseCardProps extends CardProps {
  className?: string;
  Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  color?: "primary" | "secondary";
}

const useStyles = makeStyles<Theme, Partial<IInverseCardProps>>(theme => 
  createStyles({
    root: ({ color = "secondary"}) => ({
      background: theme.palette[color].main,
      color: theme.palette[color].contrastText,
    }),
  })
);

const InverseCard: React.FC<IInverseCardProps> = ({
  children,
  Component = Card,
  className,
  color = "secondary"
}) => {
  const classes = useStyles({ color });
  return <Component className={clsx(classes.root, className)} >{children}</Component>;
};

export default InverseCard;
