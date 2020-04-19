import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ISkill, formatBonus } from "../../dnd";

const useStyles = makeStyles<Theme, Partial<IDnDSkillProps>>(theme => ({
  DnDSkill: {},
  proficiency: {
    display: "inline-flex",
    width: 10,
    height: 10,
    borderRadius: "50%",
    border: `1px dotted ${theme.palette.text.primary}`
  },
  proficient: {
    backgroundColor: theme.palette.text.primary,
    borderStyle: "solid"
  },
  expert: {
    boxSizing: "content-box",
    width: 0,
    height: 0,
    border: `6px double ${theme.palette.text.primary}`
  },
  mod: {
    fontWeight: 700,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(0.5)
  },
  name: {
    marginLeft: theme.spacing(0.5)
  },
  bonus: {
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 400,
    marginLeft: theme.spacing(0.5)
  }
}));

export interface IDnDSkillProps extends ISkill {
  className?: string;
  Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}

const DnDSkill: React.FC<IDnDSkillProps> = ({
  className,
  name,
  bonus,
  mod,
  proficiency,
  Component = "span"
}) => {
  const classes = useStyles({});

  return (
    <Component className={clsx(classes.DnDSkill, className)}>
      <span
        className={clsx(
          classes.proficiency,
          proficiency && classes[proficiency]
        )}
      />
      <Typography variant="body1" component="span" className={classes.mod}>
        {mod}
      </Typography>
      <Typography variant="body1" component="span" className={classes.name}>
        {name}
      </Typography>
      <Typography variant="h5" component="span" className={classes.bonus}>
        {formatBonus(bonus)}
      </Typography>
    </Component>
  );
};

export default DnDSkill;
