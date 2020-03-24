import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Chip from "@material-ui/core/Chip";
// import Link from "../Link";
import { Adventure } from "../../types";

const useStyles = makeStyles({
  name: {}
});

export interface IAdventureDetailProps
  extends Omit<Adventure, "getAllElements"> {}

const AdventureDetail: React.FC<IAdventureDetailProps> = props => {
  const classes = useStyles();
  console.log("props", props);

  return (
    <>
      <div>image</div>
      <Typography variant="h3" component="h1" className={classes.name}>
        {props.name.value}
      </Typography>
      <div>tags</div>
      <Typography
        variant="body2"
        color="textSecondary"
        component="div"
        dangerouslySetInnerHTML={{ __html: props.perex.value }}
      />
      <div>description</div>
    </>
  );
};

export default AdventureDetail;
