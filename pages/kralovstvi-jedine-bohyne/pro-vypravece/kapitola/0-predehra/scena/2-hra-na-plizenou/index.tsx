import React from "react";
import Page from "../../../../../../../src/components/layout/Page";
import Link from "../../../../../../../src/components/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Tip from "../../../../../../../src/components/content/Tip";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import FlavorText from "../../../../../../../src/components/content/FlavorText";
import IconD20 from "../../../../../../../src/components/icons/IconD20";
import Challenge from "../../../../../../../src/components/content/Challenge";
import Outcome from "../../../../../../../src/components/content/Outcome";
import ForGm from "../../../../../../../src/components/content/ForGm";
import ImageBox from "../../../../../../../src/components/content/ImageBox";
import ImageFrame from "../../../../../../../src/components/layout/ImageFrame";
import MinorCharacter from "../../../../../../../src/components/content/character/MinorCharacter";
import ScriptContent from "../../../../../../../src/components/content/ScriptContent";
import ArticleContent from "../../../../../../../src/components/layout/ArticleContent";
import Columns from "../../../../../../../src/components/layout/Columns";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: theme.spacing(0.5, -0.5),
  },
  tag: {
    margin: theme.spacing(0.5),
  },
  para: {
    marginBottom: theme.spacing(2),
  },
  listItem: {},
  callToAction: {
    textAlign: "right",
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
          <Typography color="textPrimary">Scéna 2 - Hra na plíženou</Typography>
        </Breadcrumbs>
        <Columns columns={1}>
          <Typography variant="h2" className={classes.title}>
            Scéna 2 - Hra na plíženou
          </Typography>

          <ImageFrame
            uri="https://img-fotki.yandex.ru/get/1018509/609011898.31/0_22dcd1_e9da427d_orig"
            backgroundPosition="50% 70%"
          />

          <ForGm>
            Cílem hry je naučit hráče pravidla plížení a rozdat hráčům zdatnost
            ve Skrývání. Hráči si pak mohou vybrat povolání, kterým by jinak
            zdatnost v Skrývání chyběla.
          </ForGm>

          <FlavorText>
            Po dokončení úkolů jste se sešli na půdě při hře na plíženou, kterou
            Ancia vymyslela.<br />
            "Teď budeme hrát hru Na plíženou, tak poslouchejte"
            Ancia vás zavedla do stáje a vysvětluje pravidla své nové hry.
            <br />
            "Vašim cílem je proplížit se kolem mě a zazvonit na zvoneček."
            <br />
            "Schovejte se támhle, jak visí prádlo."
            <br />
            "Až cinknu, tak se můžete začít plížit. A já vás budu hledat. Koho
            uvidím, ten se musí vrátit za prádlo a schovat se."
            <br />
            "Kdo zazvoní na zvoneček, aniž bych ho viděla, vyhrál. Vítěz bude v
            dalším kole hledat ostatní."
            <br />
            "Tak jdem na to!"
          </FlavorText>

          <Typography variant="h3" className={classes.title}>
            Připomenutí pravidel
          </Typography>

          <Box component="ul" mt={0} mb={2}>
            <Typography component="li" className={classes.listItem}>
              Postavy se mohou v jednom kole plížit do vzdálenosti své rychlosti
              (6 sáhů) a libovolně se při tom otočit.
            </Typography>
            <Typography component="li" className={classes.listItem}>
              Za zorné pole považujeme 90° kužel ve směru natočení postavy.
            </Typography>
            <Typography component="li" className={classes.listItem}>
              Pokud se postava plíží mimo zorné pole nepřítele, nebo má proti
              nepříteli krytí a nedělá hluk, zůstává skrytá.
            </Typography>
            <Typography component="li" className={classes.listItem}>
              Pokud se postava plíží skrz zorné pole nepřítele a nemá celou dobu
              krytí, nebo udělá hluk, musí si hodit na Skrývání proti pasivnímu
              Vnímání nepřítele. Neúspěch nutně neznamená odhalení, ale nepřítel
              si něčeho všimne.
            </Typography>
            <Typography component="li" className={classes.listItem}>
              Pokud postava skončí pohyb na poli, které je v zorném poli a kde
              nemá proti nepříteli krytí, nebo pokud se nepřítel pohne tak, že
              postava přestane mít proti němu krytí, je automaticky odhalena.
            </Typography>
            <Typography component="li" className={classes.listItem}>
              Plížení po hlíně dělá hluk na vzdálenost jednoho sáhu. Plížení po
              střpech, nebo vrzajícím dřevě dělá hluk na vzdálenost 6 sáhů.
            </Typography>
          </Box>
          <ForGm>
            Ancia se pohybuje do 10 sáhů kolem zvonečku (červené pole) a dívá se
            za překážky. Pokud někoho odhalí zavolá na něj jménem a popíše za
            čím se schovává. Odhalené děti vyzve k tomu, ať se jdou znovu
            schovat za prádlo (zelená oblast).
          </ForGm>
          <ImageBox
            uri="/kralovstvi-jedine-bohyne/mapa-puda.png"
            className="para"
          />

          <Tip>
            Odměň všechny hráče, kterým se podaří proplížit ke zvonečku,
            zdatností ve Skrývání.
            <br />
            Hráče, co odhalil nejvíce skrytých protihráčů odměň zdatností ve
            Vnímání.
            <br />
            <br />
            Po několika kolech, kdy všichni pochopili pravidla plížení rozdej
            odměny a přejdi k následující scéně.
          </Tip>

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
              <Button variant="contained" color="primary">
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
        </Columns>
      </Container>
    </Page>
  );
}
