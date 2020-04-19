import React from "react";
import Page from "../../../../src/components/layout/Page";
import Link from "../../../../src/components/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Tip from "../../../../src/components/content/Tip";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ImageFrame from "../../../../src/components/layout/ImageFrame";
import Columns from "../../../../src/components/layout/Columns";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(1),
  },
  listItem: {},
  callToAction: {
    textAlign: "right",
  },
}));

export default function AdventureItemsPage() {
  const { pathname } = useRouter();
  const classes = useStyles();
  const adventurePathname = pathname.split("/").slice(0, -2).join("/");
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
          <Typography color="textPrimary">Předměty</Typography>
        </Breadcrumbs>
        <Columns columns={1}>
          <Typography variant="h1" className={classes.title}>
            Předměty
          </Typography>
          <Typography>
            Protože zákony Meridie zakazují otevřené nošení zbraní a brnění,
            družina může narazit na tyto speciální předměty.
          </Typography>

          <ImageFrame
            uri="https://www.swordcane.com/designimages/mk3/SwordCanes_068.jpg"
            aspectRatio="16:5"
          />

          <Typography variant="h2" className={classes.title}>
            Zbraně
          </Typography>
          <Paper>
            <List>
              <ListItem>
                <ListItemText
                  primary="Hůl s čepelí | Zranění 1d10 sečné/bodné. 50gp"
                  secondary="Vycházková hůl se skrytou čepelí uvnitř. Charakteristiky dlouhého meče."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Obušek"
                  secondary="Zranění 1d10 sečné/bodné. 50gp"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Skládací krátký luk"
                  secondary="Mechanický skládací krátký luk, který lze rozevřít nebo složit, jako bonusovou akci. Zranění 1d6 bodné. 100gp."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Šíp s vodou"
                  secondary="Šíp se koženým měchem na špičce, který dokáže zhasit pochodeň, nebo svíčku. Zranění 0. 5gp."
                />
              </ListItem>
            </List>
          </Paper>

          <ImageFrame
            uri="https://i.pinimg.com/originals/f0/66/4a/f0664a1f336c0512d9acf57618131e27.jpg"
            aspectRatio="16:5"
          />

          <Typography variant="h2" className={classes.title}>
            Brnění
          </Typography>
          <Typography>
            Jakékoliv lehké brnění lze nenápadně nosit pod běžným oblečením.
            <br />
            Kroužková košile je nejlepší střední bnění, které lze nenápadně
            nosit.
            <br />
            Prstencové brnění je jediné těžké brnění, které nedělá hluk a vejde
            se pod oblečení.
            <br />
          </Typography>

          <Paper>
            <List>
              <ListItem>
                <ListItemText
                  primary="Drátem prošívaná vesta"
                  secondary="Vesta vypadá jako běžné oblečení, ale poskytuje AC 12. 100gp"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Vesta s kovovými destičkami"
                  secondary="Vesta vypadá jako běžné oblečení, ale má v sobě zašité kovové destičky. Má charakter středního brnění s AC14. 400gp."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Plášť s kovovými pláty"
                  secondary="Plášť vypadá jako běžné oblečení, ale má v sobě zašité těžké kovové pláty. Má charakter těžkého brnění s AC15. 800gp."
                />
              </ListItem>
            </List>
          </Paper>
        </Columns>
      </Container>
    </Page>
  );
}
