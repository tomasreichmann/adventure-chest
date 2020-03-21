import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// import SettingsIcon from "@material-ui/icons/Settings";
// import MenuBookIcon from "@material-ui/icons/MenuBook";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { TaxonomyGroup, TaxonomyTerms } from "@kentico/kontent-delivery";
import { IFilter } from "../../pages";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[200]
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  filterName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filterTerms: {
    margin: theme.spacing(-0.5, -0.5, 0.5, -0.5),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  filterTerm: {
    margin: theme.spacing(0.5),
  },
}));

type Menu = string | null;

export interface IFilterMenuProps {
  taxonomyGroups: TaxonomyGroup[];
  filters: TaxonomyGroup[];
  setFilters: React.Dispatch<React.SetStateAction<TaxonomyGroup[]>>;
}

const relevantTaxonomyGroupCodenames = [
  "game_system",
  "genre",
  "length",
  "number_of_players"
];

// getAddFilterTerm adds the selected term in the selected taxonomy group
const getAddFilterTerm = (
  setFilters: IFilterMenuProps["setFilters"],
  selectedTaxonomyGroup: TaxonomyGroup,
  selectedTerms: TaxonomyGroup["terms"]
) => () => {
  setFilters(taxonomyGroups => {
    const taxonomyGroupAlreadyPresent = taxonomyGroups.some(taxonomyGroup => {
      return (
        taxonomyGroup.system.codename === selectedTaxonomyGroup.system.codename
      );
    });

    const updatedTaxonomyGroups: TaxonomyGroup[] = taxonomyGroupAlreadyPresent
      ? taxonomyGroups.map(taxonomyGroup => {
          return taxonomyGroup.system.codename ===
            selectedTaxonomyGroup.system.codename
            ? {
                ...taxonomyGroup,
                terms: taxonomyGroup.terms
                  // filter out existing terms
                  .filter(term =>
                    selectedTerms.some(
                      selectedTerm => term.codename !== selectedTerm.codename
                    )
                  )
                  // add rest of terms
                  .concat(
                    selectedTerms.filter(selectedTerm =>
                      taxonomyGroup.terms.some(
                        term => term.codename !== selectedTerm.codename
                      )
                    )
                  )
              }
            : taxonomyGroup;
        })
      : [
          ...taxonomyGroups,
          {
            ...selectedTaxonomyGroup,
            terms: selectedTerms
          }
        ];
    return updatedTaxonomyGroups.filter(taxonomyGroup => {
      // filter out empty taxonomyGroups
      return taxonomyGroup.terms.length > 0;
    });
  });
};

const getOnDelete = (
  setFilters: IFilterMenuProps["setFilters"],
  taxonomyGroupCodename: string,
  termCodename?: string
) => () => {
  setFilters(taxonomyGroups => {
    const filteredTaxonomyGroups = termCodename
      ? taxonomyGroups
      : taxonomyGroups.filter(taxonomyGroup => {
          return taxonomyGroup.system.codename !== taxonomyGroupCodename;
        });
    const filteredTaxonomyGroupsAndTerms = termCodename
      ? filteredTaxonomyGroups.map(taxonomyGroup => {
          if (taxonomyGroup.system.codename === taxonomyGroupCodename) {
            const filteredTerms = taxonomyGroup.terms.filter(term => {
              return term.codename !== termCodename;
            });
            return {
              ...taxonomyGroup,
              terms: filteredTerms
            };
          }
          return taxonomyGroup;
        })
      : filteredTaxonomyGroups;
    return filteredTaxonomyGroupsAndTerms.filter(taxonomyGroup => {
      // filter out empty taxonomyGroups
      return taxonomyGroup.terms.length > 0;
    });
  });
};

const FilterMenu: React.FC<IFilterMenuProps> = ({
  taxonomyGroups,
  filters,
  setFilters
}) => {
  const classes = useStyles();
  const [expandedMenu, setExpandedMenu] = React.useState<Menu>(null);

  const getExpandMenu = (menu: Menu) => () => {
    setExpandedMenu(expandedMenu => {
      if (menu === expandedMenu) {
        return null;
      }
      return menu;
    });
  };

  const relevantTaxonomyGroups = taxonomyGroups.filter(taxonomyGroup => {
    return relevantTaxonomyGroupCodenames.includes(
      taxonomyGroup.system.codename
    );
  });

  console.log("filters", filters);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filtry
        </ListSubheader>
      }
      className={classes.root}
    >
      {filters.length > 0 && (
        <Box mx={2} my={1}>
          {filters.map(taxonomyGroup => {
            return (
              <Box key={taxonomyGroup.system.codename} color="secondary">
                <Typography variant="button" component="div" className={classes.filterName}>
                  {taxonomyGroup.system.name}&ensp;
                  <IconButton
                    size="small"
                    aria-label="delete"
                    onClick={getOnDelete(
                      setFilters,
                      taxonomyGroup.system.codename
                    )}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Typography>
                <div className={classes.filterTerms}>
                  {taxonomyGroup.terms.map(term => (
                    <Chip
                      className={classes.filterTerm}
                      key={term.codename}
                      label={term.name}
                      size="small"
                      onDelete={getOnDelete(
                        setFilters,
                        taxonomyGroup.system.codename,
                        term.codename
                      )}
                    />
                  ))}
                </div>
              </Box>
            );
          })}
        </Box>
      )}
      {relevantTaxonomyGroups.map(taxonomyGroup => {
        return (
          <React.Fragment key={taxonomyGroup.system.codename}>
            <ListItem
              button
              onClick={getExpandMenu(taxonomyGroup.system.codename)}
            >
              {/* <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon> */}
              <ListItemText primary={taxonomyGroup.system.name} />
              {expandedMenu === taxonomyGroup.system.codename ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItem>
            <Collapse
              in={expandedMenu === taxonomyGroup.system.codename}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {taxonomyGroup.terms.map(term => {
                  return (
                    <ListItem
                      key={term.codename}
                      button
                      className={classes.nested}
                      onClick={getAddFilterTerm(setFilters, taxonomyGroup, [
                        term
                      ])}
                    >
                      <ListItemText primary={term.name} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default FilterMenu;
