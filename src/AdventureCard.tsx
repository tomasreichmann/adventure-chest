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
import { Adventure } from "../pages";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
    backgroundPosition: "top center",
  },
  cardActions: {
    justifyContent: "space-between"
  },
  tags: {
  },
  cardContent: {
    position: "relative",
    maxHeight: 200,
    overflow: "auto",
  },
});

export interface IAdventureCardProps extends Adventure {}

const AdventureCard: React.FC<IAdventureCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.d20.cz/data/C/5259/cover.png"
          title={props.system.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.system.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pod tmavými bouřkovými oblaky stojí osamělá postava, jejíž silueta
            vrhá stín na starověké zdi hradu Ravenloft. Upír, hrabě Strád von
            Zarovič, hledí přes strmý útes na vesnici hluboko dole. Ostrý
            studený vítr kolem něj roztáčí mrtvé listí a tahá ho za cípy pláště.
            Mraky nahoře rozrazí paprsek světla, vrhající na něj své chladné
            bílé světlo. Strád se otočí k obloze a odhalí tak obličej s ostře
            řezanými rysy. V jeho obličeji se zračí síla – a také šílenství.
            Kdysi krásná tvář je nyní pokřivena neštěstím temnějším, než je noc
            sama.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.tags}   >
          <Chip size="small" label="DnD5e" component="a" href="#dnd5e" clickable />&ensp;
          <Chip size="small" label="Horror" component="a" href="#horror" clickable />
        </Box>
        <Button size="small" color="primary" variant="contained">
          Prohlédnout si
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdventureCard;
