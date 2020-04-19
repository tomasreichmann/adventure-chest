import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconShield from "../../components/icons/IconShield";
import IconShieldOutline from "../../components/icons/IconShieldOutline";
import { Ability, calculateAttributeValue, formatBonus } from "../../dnd";

const useStyles = makeStyles<Theme, Partial<IDnDAttributeProps>>((theme) => ({
  DnDAttribute: {
    textAlign: "center",
  },
  heading: {
    padding: theme.spacing(0, 0.5),
    borderBottom: `1px dashed ${theme.palette.text.disabled}`,
  },
  attribute: {
  },
  attributeBonus: {
    padding: theme.spacing(0.5, 0.5, 0, 0.5),
    ineHeight: 1,
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 400,
  },
  attributeValue: {
    padding: theme.spacing(0, 0.5),
    ineHeight: 1,
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 400,
  },
  savingThrow: {
    borderTop: `1px dashed ${theme.palette.text.disabled}`,
    paddingBottom: theme.spacing(0.5),
  },
}));

export interface IDnDAttributeProps {
  className?: string;
  attribute?: Ability;
  bonus: number;
  savingThrowBonus?: number;
  savingThrowProficient?: boolean;
  elevation?: PaperProps["elevation"];
}

const DnDAttribute: React.FC<IDnDAttributeProps> = ({
  className,
  attribute,
  bonus,
  savingThrowBonus,
  savingThrowProficient = false,
  elevation = 1
}) => {
  const classes = useStyles({
    attribute,
    bonus,
    savingThrowBonus,
    elevation
  });

  return (
    <Paper
      className={clsx(classes.DnDAttribute, className)}
      elevation={elevation}
    >
      <Typography variant="h6" className={classes.heading}>{attribute}</Typography>
      <div className={classes.attribute} >
        <Typography variant="h1" className={classes.attributeBonus}>{formatBonus(bonus)}</Typography>
        <Typography variant="body1" className={classes.attributeValue}>
          {calculateAttributeValue(bonus)}
        </Typography>
      </div>
      {savingThrowBonus !== undefined && (
        <Typography variant="body1" className={classes.savingThrow}>
            {savingThrowProficient ? <IconShield height="1em" /> : <IconShieldOutline height="1em" />}&ensp;
            {formatBonus(savingThrowBonus)}
        </Typography>
      )}
    </Paper>
  );
};

export default DnDAttribute;
