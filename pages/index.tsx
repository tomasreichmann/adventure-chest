import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Page from '../src/Page';
import Grid from '@material-ui/core/Grid';
import FilterMenu from '../src/FilterMenu';
import AdventureList from '../src/AdventureList';

export default function Index() {
  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <FilterMenu />
        </Grid>
        <Grid item sm={8} md={9} lg={10}>
          <AdventureList />
        </Grid>
      </Grid>
    </Page>
  );
}
