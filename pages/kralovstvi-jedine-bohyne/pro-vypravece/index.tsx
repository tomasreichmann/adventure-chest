import React from "react";
import Page from "../../../src/components/layout/Page";
import Link from "../../../src/components/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

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

export default function AdventureForGmsPage() {
  const { pathname } = useRouter();
  const classes = useStyles();
  const adventurePathname = pathname
    .split("/")
    .slice(0, -1)
    .join("/");
  console.log("pathname", pathname);
  console.log("adventurePathname", adventurePathname);
  return (
    <Page>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href={adventurePathname}>
          Království Jediné Bohyně
        </Link>
        <Typography color="textPrimary">Informace pro vypravěče</Typography>
      </Breadcrumbs>
      <Typography variant="h2" className={classes.title}>
        Informace pro vypravěče
      </Typography>

      <ul>
        <Typography variant="body1" component="li" className={classes.listItem}>
          Připravte si postavy na 1. úrovni. Můžete použít i jakákoliv běžně
          rozšířená pravidla, kromě základní příručky.
        </Typography>
        <Typography variant="body1" component="li" className={classes.listItem}>
          Bude se hrát bez omezení na přetížení, ale s realistickým omezením na
          množství a viditelnost nošeného vybavení.
        </Typography>
        <Typography variant="body1" component="li" className={classes.listItem}>
          Body do Síly, Obratnosti, Odolnosti, Inteligence, Moudrosti a Charisma
          si rozdělte buď standartním rozdělením, nebo tzv. nákupem pomocí 27
          bodů.
        </Typography>
        <Typography variant="body1" component="li" className={classes.listItem}>
          Přidejte si základní vybavení kromě peněz. Všichni budete mít do
          začátku 10 stříbrných mincí.
        </Typography>
        <Typography variant="body1" component="li" className={classes.listItem}>
          Doporučená rasa je člověk, nebo rasy, které se mohou za lidi vydávat.
          Dobrodružství se odehrává v lidském městě a ačkoliv můžete hrát za
          jiné rasy, budete v nevýhodě, když budete jediní svého druhu široko
          daleko a stráže vás lehce vyhmátnou.
        </Typography>
      </ul>
    </Page>
  );
}
