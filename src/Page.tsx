import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    home: {
      display: "grid",
      gridTemplateColumns: "4em 1fr",
      gridGap: theme.spacing(0, 1),
    },
    logo: {
      gridRow: "1 / 3",
      width: "100%",
      height: "100%",
    },
    title: {

    },
    subTitle: {

    },
    appBar: {
      backgroundColor: theme.palette.grey[200],
    },
  }),
);

const Page: React.FC = ({children}) => {
  const classes = useStyles();
  return (
    <Container maxWidth={false}>
      <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar>
          <div className={classes.home}>
            <img src="/adventure-chest.svg" className={classes.logo} />
            <Typography variant="h5" className={classes.title}>
              Adventure Chest
            </Typography>
            <Typography variant="caption" className={classes.subTitle}>
              Katalog dobrodružství pro hry na hrdiny
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box py={4}>
        {children}
      </Box>
    </Container>
  );
}

export default Page;