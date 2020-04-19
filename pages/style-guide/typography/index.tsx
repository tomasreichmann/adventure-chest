import React from "react";
import Page from "../../../src/components/layout/Page";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyleGuideMenu from "../../../src/components/styleGuide/StyleGuideMenu";

export default function StyleGuideStatePage() {
  return (
    <Page>
      <StyleGuideMenu />
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h1" >h1</Typography>
          <Typography variant="h2" >h2</Typography>
          <Typography variant="h3" >h3</Typography>
          <Typography variant="h4" >h4</Typography>
          <Typography variant="h5" >h5</Typography>
          <Typography variant="h6" >h6</Typography>
          <Typography variant="subtitle1" >subtitle1</Typography>
          <Typography variant="subtitle2" >subtitle2</Typography>
          <Typography variant="body1" >body1</Typography>
          <Typography variant="body2" >body2</Typography>
          <Typography variant="caption" >caption</Typography>
          <Typography variant="button" >button</Typography>
          <Typography variant="overline" >overline</Typography>
        </Grid>
      </Grid>
    </Page>
  );
}
