import React, { useState, useEffect } from "react";
import { TaxonomyGroup, ContentItem } from "@kentico/kontent-delivery";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Page from "../src/components/layout/Page";
import FilterMenu from "../src/components/FilterMenu";
import AdventureList from "../src/components/adventure/AdventureList";
import Pre from "../src/components/utility/Pre";
import StateWrapper from "../src/components/utility/StateWrapper";
import { getInitialState } from "../src/hooks/usePromise";
import useKontentItems from "../src/hooks/useKontentItems";
import useKontentTaxonomyGroups from "../src/hooks/useKontentTaxonomyGroups";
import { Adventure } from "../src/types";
import { useRouter } from "next/router";

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
      elements: ["name", "perex", "game_system", "genre"],
      filters
    },
    setAdventuresState
  );
  const adventures = adventuresState.value;

  const { query } = useRouter();

  // handle query filtering like ?genre=horror&genre=scifi&game_system=fate
  useEffect(() => {
    setFilters(() => {
      if (!query) {
        return [];
      }
      return Object.keys(query)
        .map(groupCodename => {
          const termCodenames = Array.isArray(query[groupCodename])
            ? query[groupCodename]
            : [query[groupCodename]];

          const groupMatch =
            (taxonomyGroups &&
              taxonomyGroups.find(
                taxonomyGroup => taxonomyGroup.system.codename === groupCodename
              )) ||
            null;
          if (groupMatch) {
            const termMatches: TaxonomyGroup["terms"] = groupMatch.terms.filter(
              term => {
                return termCodenames.includes(term.codename);
              }
            );
            return {
              ...groupMatch,
              terms: termMatches
            };
          }
          return null;
        })
        .filter((taxonomyGroup: TaxonomyGroup | null) => {
          return taxonomyGroup !== null && taxonomyGroup.terms.length > 0;
        }) as TaxonomyGroup[];
    });
  }, [query, taxonomyGroups]);

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
