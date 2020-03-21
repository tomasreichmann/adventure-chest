import React, { useState } from "react";
import Page from "../src/components/Page";
import Grid from "@material-ui/core/Grid";
import FilterMenu from "../src/components/FilterMenu";
import AdventureList from "../src/components/Adventure/AdventureList";
import useKontentItems from "../src/hooks/useKontentItems";
import { getInitialState, IState } from "../src/hooks/usePromise";
import { Adventure } from "../src/types";
import Pre from "../src/components/utility/Pre";

export default function Index() {
  const [adventuresState, setAdventuresState] = useState<IState<Adventure[]>>(
    getInitialState<Adventure[]>(null)
  );

  useKontentItems<Adventure>(
    "adventure",
    ["name", "perex", "game_system"],
    setAdventuresState
  );

  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <FilterMenu />
        </Grid>
        {adventuresState.value ? (
          <Grid item sm={8} md={9} lg={10}>
            <AdventureList items={adventuresState.value} />
          </Grid>
        ) : (
          "Loading..."
        )}
      </Grid>
      <Pre>{adventuresState}</Pre>
    </Page>
  );
}
