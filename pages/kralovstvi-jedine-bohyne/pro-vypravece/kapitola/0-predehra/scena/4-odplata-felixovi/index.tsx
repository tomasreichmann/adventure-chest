import React from "react";
import Page from "../../../../../../../src/components/layout/Page";
import Link from "../../../../../../../src/components/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";
import Tip from "../../../../../../../src/components/content/Tip";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import FlavorText from "../../../../../../../src/components/content/FlavorText";
import Challenge from "../../../../../../../src/components/content/Challenge";
import Outcome from "../../../../../../../src/components/content/Outcome";
import ForGm from "../../../../../../../src/components/content/ForGm";
import ImageFrame from "../../../../../../../src/components/layout/ImageFrame";
import Columns from "../../../../../../../src/components/layout/Columns";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function AdventurePage() {
  const classes = useStyles();
  const adventurePathname = "/kralovstvi-jedine-bohyne";
  return (
    <Page>
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="secondary" href={adventurePathname}>
            Království Jediné Bohyně
          </Link>
          <Link
            color="secondary"
            href="/kralovstvi-jedine-bohyne/pro-vypravece"
          >
            Pro vypravěče
          </Link>
          <Link
            color="secondary"
            href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra"
          >
            Kapitola 0 - Předehra
          </Link>
          <Typography color="textPrimary">
            Scéna 4 - Odplata Felixovi
          </Typography>
        </Breadcrumbs>
        <Columns columns={1}>
          <Typography variant="h2" className={classes.title}>
            Scéna 4 - Odplata Felixovi
          </Typography>

          <ImageFrame uri="https://i.pinimg.com/originals/52/b8/ec/52b8ecd204c631fd629b8d95e54a22b5.jpg" backgroundPosition="50% 15%" />

          <FlavorText>
            Po večeři Acia svolala tajnou válečnou schůzi. "Musíme se přízraku Felixovi pomstít. Já mu ukážu dovolovat si na mě. "
          </FlavorText>



          <Box textAlign="right">
            <Link
              underline="none"
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra/scena/1-ukoly"
            >
              <Button variant="contained" color="secondary">
                Scéna 1 - Úkoly
              </Button>
            </Link>
            &emsp;
            <Link
              underline="none"
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra/scena/2-hra-na-plizenou"
            >
              <Button variant="contained" color="secondary">
                Scéna 2 - Hra na plíženou
              </Button>
            </Link>
            &emsp;
            <Link
              underline="none"
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra/scena/3-utek-pred-prizrakem"
            >
              <Button variant="contained" color="secondary">
                Scéna 3 - Útěk před přízrakem
              </Button>
            </Link>
            &emsp;
            <Link
              underline="none"
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra/scena/4-odplata-felixovi"
            >
              <Button variant="contained" color="secondary">
                Scéna 4 - Odplata Felixovi
              </Button>
            </Link>
          </Box>
          <Box textAlign="right">
            <Link
              underline="none"
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/1-na-ulici"
            >
              <Button variant="contained" color="primary">
                Kapitola 1 - Na ulici
              </Button>
            </Link>
          </Box>
        </Columns>
      </Container>
    </Page>
  );
}
