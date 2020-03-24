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
import Chip from "@material-ui/core/Chip";
import Link from "../Link";
import { Adventure } from "../../types";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
    backgroundPosition: "top center"
  },
  cardActions: {
    justifyContent: "space-between"
  },
  tags: {},
  cardContent: {
    position: "relative",
    maxHeight: 200,
    overflow: "auto"
  }
});

export interface IAdventureCardProps
  extends Omit<Adventure, "getAllElements"> {}

const AdventureCard: React.FC<IAdventureCardProps> = props => {
  const classes = useStyles();

  const detailUri = `/dobrodruzstvi/${props.system.codename}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={detailUri} underline="none" color="inherit">
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
          <Chip
            color="secondary"
            size="small"
            label="DnD5e"
            component="a"
            href="#dnd5e"
            clickable
          />
          &ensp;
          <Chip
            color="secondary"
            size="small"
            label="Horror"
            component="a"
            href="#horror"
            clickable
          />
        </Box>
        <Link href={detailUri} underline="none">
          <Button variant="contained" color="primary" disableElevation>
            Prohlédnout si
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AdventureCard;
