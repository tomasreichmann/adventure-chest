import React, { useState } from "react";
import Page from "../src/components/Page";
import Grid from "@material-ui/core/Grid";
import FilterMenu from "../src/components/FilterMenu";
import AdventureList from "../src/components/Adventure/AdventureList";
import useKontentItems from "../src/hooks/useKontentItems";
import { getInitialState, IState } from "../src/hooks/usePromise";
import { Adventure } from "../src/types";
import Pre from "../src/components/utility/Pre";
import { TaxonomyGroup } from "@kentico/kontent-delivery";
import useKontentTaxonomyGroups from "../src/hooks/useKontentTaxonomyGroups";
import StateWrapper from "../src/components/utility/StateWrapper";

export interface IFilter {
  taxonomyGroup: string;
  values: string[];
}

export default function Index() {
  const [taxonomyGroupsState, setTaxonomyGroupsState] = useState(
    getInitialState<TaxonomyGroup[]>(null)
  );
  useKontentTaxonomyGroups(setTaxonomyGroupsState);
  const taxonomyGroups = taxonomyGroupsState.value;

  const [filters, setFilters] = useState<TaxonomyGroup[]>([]);

  const [adventuresState, setAdventuresState] = useState(
    getInitialState<Adventure[]>(null)
  );
  useKontentItems<Adventure>(
    {
      type: "adventure",
      elements: ["name", "perex", "game_system"],
      filters
    },
    setAdventuresState
  );
  const adventures = adventuresState.value;

  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <StateWrapper {...taxonomyGroupsState}>
            {taxonomyGroups && (
              <FilterMenu
                taxonomyGroups={taxonomyGroups}
                filters={filters}
                setFilters={setFilters}
              />
            )}
          </StateWrapper>
        </Grid>
        <Grid item sm={8} md={9} lg={10}>
          <StateWrapper {...taxonomyGroupsState}>
            {adventures && <AdventureList items={adventures} />}
          </StateWrapper>
        </Grid>
      </Grid>
      taxonomyGroupsState
      <Pre>{taxonomyGroupsState}</Pre>
      AdventureState
      <Pre>{adventuresState}</Pre>
    </Page>
  );
}
