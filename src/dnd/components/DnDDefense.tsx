import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconShield from "../../components/icons/IconShield";

const useStyles = makeStyles<Theme, IDnDDefenseProps>((theme) => ({
  DnDDefense: {
    textAlign: "center",
    display: "grid",
    maxWidth: 80,
  },
  content: {
    position: "relative",
    gridColumn: "1",
    gridRow: "1",
    color: theme.palette.text.primary,
    zIndex: 1,
  },
  icon: {
    gridColumn: "1",
    gridRow: "1",
    color: theme.palette.background.paper,
    filter: `drop-shadow(0px 2px 1px rgba(0,0,0,0.2))`,
  },

  heading: {
    paddingTop: "27%",
  },
  acValue: {
    lineHeight: 1,
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 400,
  },
}));

export interface IDnDDefenseProps {
  className?: string;
  ac: number;
}

const DnDDefense: React.FC<IDnDDefenseProps> = ({
  className,
  ac,
}) => {
  const classes = useStyles({
    ac,
  });

  return (
    <div
      className={clsx(classes.DnDDefense, className)}
    >
      <IconShield className={classes.icon} height="auto" width="100%" />
      <div className={classes.content} >
        <Typography variant="h5" className={classes.heading}>AC</Typography>
        <Typography variant="h1" className={classes.acValue}>{ac}</Typography>
      </div>
    </div>
  );
};

export default DnDDefense;
