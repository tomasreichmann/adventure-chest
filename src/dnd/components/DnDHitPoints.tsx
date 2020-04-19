import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IDnDHitPoints } from "../../dnd";

const useStyles = makeStyles<Theme, Partial<IDnDHitPointsProps>>((theme) => ({
  DnDHitPoints: {
  },
  header: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  columns: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: theme.spacing(1),
  },
  current: {
    lineHeight: 1,
    textAlign: "right",
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 400,
  },
  aside: {
  },
  temporary: {
    color: theme.palette.text.secondary,
    lineHeight: 1,
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 400,
  },
  maximum: {
    lineHeight: 1,
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 400,
  },
}));

export interface IDnDHitPointsProps extends IDnDHitPoints {
  className?: string;
}

const DnDHitPoints: React.FC<IDnDHitPointsProps> = ({
  className,
  maximum,
  current = maximum,
  temporary = 0
}) => {
  const classes = useStyles({});

  return (
    <div className={clsx(classes.DnDHitPoints, className)}>
      <Typography variant="h6" className={classes.header}>Hit points</Typography>
      <div className={classes.columns}>
        <Typography variant="h1" component="div" className={classes.current}>{current}</Typography>
        <div className={classes.aside}>
          <Typography variant="body1" component="div" className={classes.maximum}>/{maximum}</Typography>
          <Typography variant="body1" component="div" className={classes.temporary}>+{temporary}</Typography>
        </div>
      </div>
    </div>
  );
};

export default DnDHitPoints;
