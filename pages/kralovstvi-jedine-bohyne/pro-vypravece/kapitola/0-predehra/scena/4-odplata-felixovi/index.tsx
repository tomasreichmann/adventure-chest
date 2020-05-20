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
import MinorCharacter from "../../../../../../../src/components/content/character/MinorCharacter";
import ScriptContent from "../../../../../../../src/components/content/ScriptContent";
import ActionContent from "../../../../../../../src/components/content/ActionContent";

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

          <ImageFrame
            uri="https://i.pinimg.com/originals/52/b8/ec/52b8ecd204c631fd629b8d95e54a22b5.jpg"
            backgroundPosition="50% 15%"
          />

          <FlavorText>
            Po večeři Acia svolala tajnou válečnou schůzi. "Musíme se přízraku
            Felixovi pomstít. Já mu ukážu dovolovat si na mě. "
          </FlavorText>

          <ForGm>
            Scéna slouží jako ukázka souboje. Nezapomeňte, že postavy mohou mít
            různé postihy z předchozí scény.
          </ForGm>

          <FlavorText>
            "Vojáci do zbraně!" Rozhodla Acia a rozdala vám deky a kalhoty se
            zauzlovanýma nohavicema po útok na blízko. Smotané špinavé ponožky v
            praku z trenýrek a polštáře pro útok z dálky. "A teď se všichni
            schovejte, až vejde do pokoje, tak na něj naskákáme."
          </FlavorText>

          <FlavorText>
            Čekali jste snad hodiny, než jste zaslechli Felixovy těžké kroky v
            chodbě. Většina z vás už klimbala, ale ostré dloubnutí loktem
            nakonec všechny uvedlo do bojové připravenosti. Dveře se zavrzáním
            otevřely a do místnosti vkročil Felix. "Na něj!" Zavelela Acia.
          </FlavorText>

          <Typography variant="h3">Souboj s opilým Felixem</Typography>

          <MinorCharacter
            name="Opilý Felix Sadař"
            imageUri="https://i.pinimg.com/originals/81/cc/bb/81ccbbc5473dcbfbc16bded5e4b58da4.jpg"
            gender="male"
            race={{
              children: "Člověk",
              href:
                "http://dnd5esrd.d20.cz/prirucka-hrace/2-kapitola.html#clovek",
              target: "_blank",
            }}
            age="ve středních letech"
          >
            <ScriptContent>
              <Typography>10 HP, AC 10, rychlost 15 stop (3 sáhy)</Typography>
            </ScriptContent>
            <ActionContent>
              <Typography>2 útoky za kolo</Typography>
              <Typography>
                Útok na blízko zlechtáním: Záchr. hod na Obratnost nebo 1 psych
                zranění.
              </Typography>
              <Typography>
                Smrtonosný dech: útok na 3 sousední pole - záchr. hod na
                Odolnost, nebo 1 zranění jedem.
              </Typography>
              <Typography>
                Takhle kouše kůň: Útok na blízko s nevýhodou štípnutím do stehna
                - 1 drtivé zranění.
              </Typography>
              <Typography>
                Strašlivý řev: Jako reakce na zásah. Všichni záchr. hod na Vůli
                nebo musí příští kolo utíkat pryč.
              </Typography>
            </ActionContent>
          </MinorCharacter>

          <MinorCharacter
            name="Děti"
            imageUri="https://i.pinimg.com/originals/be/67/17/be6717900eb2bdfe3f368647cadf938a.jpg"
            gender="male"
            race={{
              children: "Člověk",
              href:
                "http://dnd5esrd.d20.cz/prirucka-hrace/2-kapitola.html#clovek",
              target: "_blank",
            }}
            age="dítě"
          >
            <ScriptContent>
              <Typography>4 HP, AC 10, rychlost 30 stop (6 sáhů)</Typography>
            </ScriptContent>
            <ActionContent>
              <Typography>1 útok za kolo</Typography>
              <Typography>
                Útok na blízko zauzlovanými kalhotami: 1 drtivé zranění.
              </Typography>
              <Typography>Útok na blízko dekou: slepota na 1 kolo.</Typography>
              <Typography>
                Útok na dálku polštářem: 1 drtivé zranění.
              </Typography>
              <Typography>
                Útok na dálku prakem s ponožkami: 1 zranění jedem.
              </Typography>
            </ActionContent>
          </MinorCharacter>

          <Typography variant="h4">Připomenutí pravidel</Typography>

          <ul>
            <Typography component="li">
              Postavy se střídají v tazích. Pořadí určuje hod na iniciativu (d20
              + úprava Obratnosti).
            </Typography>
            <Typography component="li">
              Během tahu může hráč provést jednu akci (např. útok) a jeden pohym
              (až do vzdálenosti dle své rychlosti) v libovolném pořadí.
            </Typography>
            <Typography component="li">
              Mimo svůj tah může postava provést 1 reakci za kolo.
            </Typography>
            <Typography component="li">
              Když se postava dostane na 0 bodů zdraví nebo níže, má 0 zdraví a
              nemůže provádět žádné akce, dokud jí někdo neuzdraví. V našem
              případě se ze zranění vzamatuje na konci souboje.
            </Typography>
          </ul>

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
