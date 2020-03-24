import React from "react";
import Page from "../../../src/components/layout/Page";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ErrorMessage from "../../../src/components/utility/ErrorMessage";
import Pending from "../../../src/components/utility/Pending";
import NoDataErrorMessage from "../../../src/components/utility/NoDataErrorMessage";
import StyleGuideMenu from "../../../src/components/styleGuide/StyleGuideMenu";

export default function StyleGuideStatePage() {
  return (
    <Page>
      <StyleGuideMenu />
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">ErrorMessage</Typography>
          <ErrorMessage message="Oops! This is a test error. Just ignore me. Now seriously, there is nothing to worry about. Everything is under control. I mean, there is nothing we can do anyway." />
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">NoDataErrorMessage</Typography>
          <NoDataErrorMessage />
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Pending</Typography>
          <Pending>Just waiting around. No reason.</Pending>
        </Grid>
      </Grid>
    </Page>
  );
}
