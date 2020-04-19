import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

import IconD20 from "../../../src/components/icons/IconD20";
import IconD12 from "../../../src/components/icons/IconD12";
import IconD10 from "../../../src/components/icons/IconD10";
import IconD8 from "../../../src/components/icons/IconD8";
import IconD6 from "../../../src/components/icons/IconD6";
import IconD4 from "../../../src/components/icons/IconD4";
import { IIconProps } from "../icons/Icon";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles(() => ({
  Dice: {},
  text: {}
}));

export const diceComponentMap = {
  d20: IconD20,
  d12: IconD12,
  d10: IconD10,
  d8: IconD8,
  d6: IconD6,
  d4: IconD4
};

const diceRegex = /d(4|6|8|10|12|20)/i;

export const getDiceType = (
  diceString: string
): keyof typeof diceComponentMap | null => {
  const match = diceRegex.exec(diceString);
  if (match) {
    return match[0] as keyof typeof diceComponentMap;
  }
  return match;
};

export const getDiceMatch = (
  diceString: string
): React.ComponentType<IIconProps> | null => {
  const diceType = getDiceType(diceString);
  console.log("diceType", diceType);
  if (diceType && diceComponentMap[diceType]) {
    return diceComponentMap[diceType];
  }
  return null;
};

export interface IDiceProps {
  className?: string;
  variant?: TypographyProps["variant"];
  children: string;
  DiceComponent?: React.ComponentType<IIconProps>;
}

const Dice: React.FC<IDiceProps> = ({
  children,
  className,
  variant = "body1",
  DiceComponent = getDiceMatch(children)
}) => {
  const classes = useStyles();

  const [beforeContent, diceType, afterContent] = children.split(diceRegex);
  console.log("children.split(diceRegex)", children.split(diceRegex));

  const dice = DiceComponent !== null ? <DiceComponent height="2em" /> : null;

  return (
    <Typography
      variant={variant}
      component="span"
      className={clsx(classes.text, className)}
    >
      {beforeContent}
      {dice}
      {afterContent}
    </Typography>
  );
};

export default Dice;
