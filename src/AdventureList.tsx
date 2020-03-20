import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AdventureCard from './AdventureCard';

const useStyles = makeStyles(theme => ({
  root: {
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gridGap: theme.spacing(2),
  },
}));

const AdventureList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      {[1, 2, 3, 4, 5, 6, 7].map(index => (<AdventureCard key={index} />))}
    </div>
  );
}

export default AdventureList;