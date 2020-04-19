import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '../Link';

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
      fontWeight: 800,
      lineHeight: "1em",
    },
    subTitle: {
      // color: theme.palette.primary.dark,
    },
    appBar: {
    },
    footer: {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.background.paper,
    },
    columns: {
      display: "grid",
      gridAutoFlow: "column",
      gridGap: theme.spacing(1),
    },
    footerLinks: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "flex-end",
      margin: theme.spacing(0.5),
    },
    footerLink: {
      margin: theme.spacing(0.5),
    },
  }),
);

const Page: React.FC = ({children}) => {
  const classes = useStyles();
  return (
    <Container maxWidth={false}>
      <AppBar position="static" color="transparent" elevation={0} className={classes.appBar} >
        <Toolbar disableGutters>
          <Link className={classes.home} href="/" color="textPrimary" underline="none">
            <img src="/adventure-chest.svg" className={classes.logo} />
            <Typography variant="h3" className={classes.title}>
              Adventure Chest
            </Typography>
            <Typography variant="body2" className={classes.subTitle}>
              Katalog dobrodružství pro hry na hrdiny
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box pb={2}>
        {children}
      </Box>
      <Box mt={2} p={2} className={classes.footer}>
        <div className={classes.columns}>
          <Typography variant="body2" >Vytvořili Marta Kočmídová, Petr Kohout a Tomáš Reichmann 2020</Typography>
          <div className={classes.footerLinks}>
            <Link className={classes.footerLink} href="/style-guide">Style Guide</Link>
            <Link className={classes.footerLink} href="/kralovstvi-jedine-bohyne">Ukázkové dobrodružství Království Jediné Bohyně</Link>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default Page;