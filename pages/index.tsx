import React, { useState } from "react";
import { TaxonomyGroup } from "@kentico/kontent-delivery";
import Grid from "@material-ui/core/Grid";
import Page from "../src/components/layout/Page";
import FilterMenu from "../src/components/FilterMenu";
import AdventureList from "../src/components/adventure/AdventureList";
import Pre from "../src/components/utility/Pre";
import StateWrapper from "../src/components/utility/StateWrapper";
import { getInitialState, IState } from "../src/hooks/usePromise";
import useKontentItems from "../src/hooks/useKontentItems";
import useKontentTaxonomyGroups from "../src/hooks/useKontentTaxonomyGroups";
import { Adventure } from "../src/types";

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
