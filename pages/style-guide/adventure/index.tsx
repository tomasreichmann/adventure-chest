import React from "react";
import Page from "../../../src/components/layout/Page";
import FlavorText from "../../../src/components/content/FlavorText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import StyleGuideMenu from "../../../src/components/styleGuide/StyleGuideMenu";
export default function StyleGuideAdventurePage() {
  // const error = new Error("Oops! This is a test error. Just ignore me. Now seriously, there is nothing to worry about. This is just a test.")
  return (
    <Page>
      <StyleGuideMenu />
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Flavor text</Typography>
          <FlavorText>Text, který navozuje atmosféru a vypravěč ho často čte slovo od slova hráčům jako úvod do scény.</FlavorText>
        </Grid>
      </Grid>
    </Page>
  );
}
