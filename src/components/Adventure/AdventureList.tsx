import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import AdventureCard from './AdventureCard';
import { Adventure } from '../../types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gridGap: theme.spacing(2),
  },
}));

const AdventureList: React.FC<{
  items: Adventure[],
}> = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      {items.map((item) => (<AdventureCard key={item.system.codename} {...item} />))}
    </div>
  );
}

export default AdventureList;