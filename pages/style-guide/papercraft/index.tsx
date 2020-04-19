import React from "react";
import Page from "../../../src/components/layout/Page";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyleGuideMenu from "../../../src/components/styleGuide/StyleGuideMenu";
import { Face } from "../../../src/components/papercraft/Face";

export default function StyleGuideStatePage() {
  return (
    <Page>
      <StyleGuideMenu />
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Face</Typography>
          <Face backgroundImage="url(https://live.staticflickr.com/8396/8640003215_50cc68f8cf_b.jpg)" />
        </Grid>
      </Grid>
    </Page>
  );
}
