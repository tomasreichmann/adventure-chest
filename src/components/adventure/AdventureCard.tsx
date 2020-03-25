import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import Link from "../Link";
import { Adventure } from "../../types";
import { Elements } from "@kentico/kontent-delivery";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 140,
    backgroundPosition: "top center"
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    alignItems: "stretch"
  },
  cardActionAreaLink: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  tags: {
    margin: theme.spacing(-0.5)
  },
  tag: {
    margin: theme.spacing(0.5)
  },
  cardContent: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  },
  perex: {
    flex: "1 1 auto",
    maxHeight: 200,
    overflow: "auto",
  },
}));

export interface ITaxonomyChipsProps extends ChipProps {
  taxonomyGroup: Elements.TaxonomyElement;
}

const TaxonomyChips: React.FC<ITaxonomyChipsProps> = ({
  taxonomyGroup: {
    name: groupName,
    taxonomyGroup: groupCodename,
    value = []
  } = { value: [] },
  color = "secondary",
  size = "small"
}) => {
  const classes = useStyles();

  if (value.length === 0) {
    return null;
  }

  return (
    <>
      {value.map(({ name, codename }) => {
        return (
          <Chip
            key={codename}
            className={classes.tag}
            color={color as any}
            underline="none"
            size={size}
            label={name}
            component={Link}
            href={`?${groupCodename}=${codename}`}
            title={`${groupName}: ${name}`}
            clickable
          />
        );
      })}
    </>
  );
};

export interface IAdventureCardProps
  extends Omit<Adventure, "getAllElements"> {}

const AdventureCard: React.FC<IAdventureCardProps> = props => {
  const classes = useStyles();

  console.log("props", props);

  const detailUri = `/dobrodruzstvi/${props.system.codename}`;

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <Link className={classes.cardActionAreaLink} href={detailUri} underline="none" color="inherit">
          <CardMedia
            className={classes.media}
            image="http://www.d20.cz/data/C/5259/cover.png"
            title={props.name.value}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name.value}
            </Typography>
            <Typography
              className={classes.perex}
              variant="body2"
              color="textSecondary"
              component="div"
              dangerouslySetInnerHTML={{ __html: props.perex.value }}
            />
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.tags}>
          <TaxonomyChips taxonomyGroup={props.game_system} />
          <TaxonomyChips taxonomyGroup={props.genre} />
        </Box>
        <Link href={detailUri} underline="none">
          <Button variant="contained" color="primary" disableElevation>
            Prohlédnout&nbsp;si
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AdventureCard;
