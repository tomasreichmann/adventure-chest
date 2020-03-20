import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SettingsIcon from '@material-ui/icons/Settings';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[200],
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

type Menu = string | null;

const FilterMenu: React.FC = () => {
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

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filtr
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={getExpandMenu("system")}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Systém" />
        {expandedMenu === "system" ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expandedMenu === "system"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="DnD5e" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Fate Core 4e" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Apocalypse World" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={getExpandMenu("genre")}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Žánr" />
        {expandedMenu === "genre" ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expandedMenu === "genre"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Dungeon crawl" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Komedie" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Horror" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default FilterMenu;
