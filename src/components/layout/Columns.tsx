import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

export interface IColumnsProps {
  className?: string;
  columns?: number | "auto-fill" | "auto-fit";
  spacing?: number;
  minWidth?: string;
  maxWidth?: string;
}

const useStyles = makeStyles<Theme, Partial<IColumnsProps>>((theme) =>
  createStyles({
    Columns: ({
      spacing = 2,
      columns = "auto-fill",
      minWidth = "400px",
      maxWidth = "1fr",
    }) => ({
      display: "grid",
      gridGap: theme.spacing(spacing),
      gridTemplateColumns: `repeat(${columns}, minmax(${minWidth}, ${maxWidth}))`,
    }),
  })
);

const Columns: React.FC<IColumnsProps> = ({
  className,
  spacing,
  columns,
  minWidth,
  maxWidth,
  children,
}) => {
  const classes = useStyles({ spacing, columns, minWidth, maxWidth });
  return <div className={clsx(classes.Columns, className)}>{children}</div>;
};

export default Columns;
