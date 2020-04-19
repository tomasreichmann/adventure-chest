import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IDnDCharacter, abilityList } from "../../dnd";
import DnDHitPoints from "./DnDHitPoints";
import DnDDefense from "./DnDDefense";
import DnDAttribute from "./DnDAttribute";
import DnDSkill from "./DnDSkill";

const useStyles = makeStyles<Theme, Partial<IDnDCharacterBlockProps>>(
  theme => ({
    DnDCharacterBlock: {},
    header: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      margin: theme.spacing(-1)
    },
    mainProperties: {
      flex: "1 0 auto",
      display: "grid",
      gridTemplateColumns: "1fr auto auto",
      gridGap: theme.spacing(1),
      alignItems: "center",
      justifyItems: "end",
    },
    Property: {},
    PropertyHeader: {
      textTransform: "uppercase"
    },
    PropertyValue: {
      lineHeight: 1,
      fontFamily: theme.typography.body2.fontFamily,
      fontWeight: 400
    },
    name: {
      flex: "1 1 auto",
      margin: theme.spacing(1)
    },
    hp: {
      margin: theme.spacing(1)
    },
    defense: {
      margin: theme.spacing(1)
    },
    abilities: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
      gridGap: theme.spacing(1)
    },
    skills: {
      margin: theme.spacing(1, 0),
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(11em, 1fr))",
      gridGap: theme.spacing(1),
    }
  })
);

export interface IDnDCharacterBlockProps extends IDnDCharacter {
  className?: string;
}

const DnDCharacterBlock: React.FC<IDnDCharacterBlockProps> = ({
  className,
  name,
  initiative,
  armorClass,
  abilities,
  skills,
  hp
}) => {
  const classes = useStyles({});

  return (
    <div className={clsx(classes.DnDCharacterBlock, className)}>
      <div className={classes.header}>
        <Typography variant="h1" className={classes.name}>
          {name}
        </Typography>
        <div className={classes.mainProperties}>
          <div className={classes.Property}>
            <Typography variant="h6" className={classes.PropertyHeader}>
              Initiative
            </Typography>
            <Typography variant="h1" className={classes.PropertyValue}>
              {initiative >= 0 && "+"}
              {initiative}
            </Typography>
          </div>
          <DnDDefense className={classes.defense} ac={armorClass} />
          <DnDHitPoints className={classes.hp} {...hp} />
        </div>
      </div>
      <div className={classes.abilities}>
        {abilityList.map(ability => {
          const abilityBonus = abilities[ability];
          return (
            <DnDAttribute
              key={ability}
              attribute={ability}
              bonus={abilityBonus}
            />
          );
        })}
      </div>
      <div className={classes.skills}>
        {skills.map(skill => {
          return (
            <DnDSkill className={classes.skill} key={skill.name} {...skill} />
          );
        })}
      </div>
    </div>
  );
};

export default DnDCharacterBlock;
