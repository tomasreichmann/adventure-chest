import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Linkable, { ILinkableProps } from "../Linkable";
import Link from "../../Link";

const useStyles = makeStyles<Theme, Partial<IMinorCharacterProps>>((theme) => ({
  MinorCharacter: {
    padding: theme.spacing(2),
    "&::after": {
      content: "''",
      display: "table",
      clear: "both",
    },
  },
  imageLink: {
    position: "relative",
    float: "right",
    maxWidth: 80,
    marginLeft: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    display: "block",
  },
  name: {},
  details: {
    margin: theme.spacing(0, -0.5),
  },
  detailItem: {
    display: "inline-block",
    margin: theme.spacing(0, 0.5),
  },
}));

const genderMap = {
  male: "♂",
  female: "♀",
};

export interface IMinorCharacterProps {
  className?: string;
  name: string;
  imageUri?: string;
  gender?: "male" | "female";
  race?: ILinkableProps;
  age?: string;
}

const MinorCharacter: React.FC<IMinorCharacterProps> = ({
  name,
  children,
  age,
  gender,
  race,
  imageUri,
  className,
}) => {
  const classes = useStyles({ imageUri });

  const details = [];
  if (gender) {
    details.push(
      <span key="gender" className={classes.detailItem}>
        {genderMap[gender]}
      </span>
    );
  }
  if (race) {
    details.push(
      <span key="race" className={classes.detailItem}>
        <Linkable {...race} />
      </span>
    );
  }
  if (age) {
    details.push(
      <span key="age" className={classes.detailItem}>
        {age}
      </span>
    );
  }

  return (
    <Paper className={clsx(classes.MinorCharacter, className)}>
      {imageUri && (
        <Link href={imageUri} target="_blank" className={classes.imageLink}>
          <img src={imageUri} className={classes.image} />
        </Link>
      )}
      <Typography variant="h4" className={classes.name}>
        {name}
      </Typography>
      {details.length > 0 && (
        <Typography variant="body1" className={classes.details}>
          {details}
        </Typography>
      )}
      {children}
    </Paper>
  );
};

export default MinorCharacter;
