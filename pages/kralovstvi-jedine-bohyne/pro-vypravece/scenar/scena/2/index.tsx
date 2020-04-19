import React from "react";
import Page from "../../../../../../src/components/layout/Page";
import Link from "../../../../../../src/components/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Tip from "../../../../../../src/components/content/Tip";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1)
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: theme.spacing(0.5, -0.5)
  },
  tag: {
    margin: theme.spacing(0.5)
  },
  para: {
    marginBottom: theme.spacing(2)
  },
  listItem: {},
  callToAction: {
    textAlign: "right"
  }
}));

export default function AdventurePapercraftPage() {
  const { pathname } = useRouter();
  const classes = useStyles();
  const adventurePathname = pathname
    .split("/")
    .slice(0, -4)
    .join("/");
  console.log("pathname", pathname);
  console.log("adventurePathname", adventurePathname);
  return (
    <Page>
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="secondary" href={adventurePathname}>
            Království Jediné Bohyně
          </Link>
          <Link color="secondary" href={`${adventurePathname}/pro-vypravece`}>
            Pro vypravěče
          </Link>
          <Link
            color="secondary"
            href={`${adventurePathname}/pro-vypravece/scenar`}
          >
            Scénář
          </Link>
          <Typography color="textPrimary">Scéna 1 - Úvod</Typography>
        </Breadcrumbs>
        <Typography variant="h2" className={classes.title}>
          Scéna 1 - Úvod
        </Typography>

        <Tip className={classes.para}>
          Úvodní scéna slouží k seznámení hráčů s prostředím. Hráči by si měli
          pochopit, že v zemi mají ženy výsadní postavení a že náboženství hraje
          důležitou aktivní roli v životě běžných lidí.
        </Tip>

        <Typography variant="body1" className={classes.para}>
          Kapitola 1 - Dětství
        </Typography>

        {/* <Paper component="ol" >
          <Box p={2} >
            <Typography variant="body1" component="li" className={classes.listItem}>
              <Link href={`${adventurePathname}/scenar/scena/1`} >Úvodní scéna</Link>
            </Typography>
          </Box>
        </Paper> */}
      </Container>
    </Page>
  );
}
