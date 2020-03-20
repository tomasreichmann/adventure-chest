import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Page from '../src/Page';
import Grid from '@material-ui/core/Grid';
import FilterMenu from '../src/FilterMenu';
import AdventureList from '../src/AdventureList';
import useKontentItems from '../src/hooks/useKontentItems';
import { getInitialState } from '../src/hooks/usePromise';
import { ContentItem } from '@kentico/kontent-delivery';

export interface AdventureContent extends ContentItem {};
export interface Adventure {
  system: ContentItem["system"];
};

export default function Index() {
  const [adventuresState, setAdventuresState] = useState(getInitialState<AdventureContent[]>(null));

  useKontentItems<AdventureContent>("adventure", setAdventuresState);

  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <FilterMenu />
        </Grid>
        { adventuresState.value ? <Grid item sm={8} md={9} lg={10}>
          <AdventureList items={adventuresState.value}/>
        </Grid> : "Loading..." }
      </Grid>
      <pre style={{ maxHeight: 300, overflow: "auto"}}>{JSON.stringify(adventuresState, null, 2)}</pre>
    </Page>
  );
}
