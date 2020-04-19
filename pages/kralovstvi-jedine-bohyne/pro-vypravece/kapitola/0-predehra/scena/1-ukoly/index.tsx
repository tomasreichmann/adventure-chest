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
  const adventurePathname = "/kralovstvi-jedine-bohyne"
  return (
    <Page>
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="secondary" href={adventurePathname}>
            Království Jediné Bohyně
          </Link>
          <Link color="secondary" href="/kralovstvi-jedine-bohyne/pro-vypravece">
            Pro vypravěče
          </Link>
          <Link color="secondary" href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra">
            Kapitola 0 - Předehra
          </Link>
          <Typography color="textPrimary">Scéna 1 - Úkoly</Typography>
        </Breadcrumbs>
        <Columns columns={1}>
          <Typography variant="h2" className={classes.title}>
            Scéna 1 - Úkoly
          </Typography>
          <ImageFrame
            uri="https://i1.wp.com/inews.gtimg.com/newsapp_match/0/4856363886/0"
            backgroundPosition="50% 25%"
          />
          <FlavorText>
            Ancia, vaše starší sestra, vždycky přišla s nápadem na nějakou
            šílenou hru. A starší sestře se neodmlouvá. "Děti ke mě!", volá,
            "Mám pro vás několik úkolů. Až budete mít odpracováno, půjdeme si
            hrát."
            <br />
            Rozeberte si děti, kdo bude dělat co.
          </FlavorText>
          <Tip>
            Každý hráč ať si vybere jeden úkol. Vyzvi hřáče ať zahrají, nebo
            popíšou, jak by si chtěli práci ulehčit. Dobré zahrání a kreativní
            přístup odměň výhodou k hodu.
          </Tip>
          <Challenge
            title="Síla"
            description="Matka potřebuje dřevo na oheň. Nasekej nůši dřeva a odnes ho do světnice."
          >
            <Outcome condition="10+">
              Za odměnu jsi dostal od matky větší kus masa k obědu. Tvoje
              odhodlání zatnout svaly časem přineslo ovoce. Síla +2
            </Outcome>
            <Outcome variant="error">
              Rozbolelo tě celé tělo a příště raději zkusíš něco jiného.
            </Outcome>
          </Challenge>
          <Challenge
            title="Obratnost"
            description="Zlomil se mi klíč ve dveřích. Pomozte mi ho dostat ven."
          >
            <Outcome condition="10+">
              Jemná práce a soustředění se ukázali, jako dobrý přístup. Navíc
              dostáváš od Acie její jojo. Šikovné ruce jsou tvým bohatstvím.
              Obratnost +2
            </Outcome>
            <Outcome variant="error">
              Snahou vystrčit zlomený klíč v zámku skončilo několik dalších
              zlomených klacíků. Vztek tě odvádí od podobných úkolů.
            </Outcome>
          </Challenge>
          <Challenge
            title="Odolnost"
            description="Pod molem v přístavu se ve vodě leskne několik mincí. Potop se tam, vylov je a přines strejdovi Felixovi."
          >
            <Outcome condition="10+">
              Je vidět, že cvičit výdrž se vyplácí. Dostáváš za svoje snažení od
              Felixe koláč. Tvoje tělo tě v nouzi nezklame. Odolnost +2
            </Outcome>
            <Outcome variant="error">
              Padáš vyčerpáním. Dobrá výdrž rozhodně není tvoje silná stránka.
            </Outcome>
          </Challenge>
          <Challenge
            title="Inteligence"
            description="Je potřeba spočítat, kolik se minulý týden prodalo jablek."
          >
            <Outcome condition="10+">
              Po kontrolním součtu máš jistotu, že je výsledek správný. Jdeš na
              to hlavou a dokážeš si odvodit víc, než ostatní. Od Octavie
              dostáváš knížku. Inteligence +2
            </Outcome>
            <Outcome variant="error">
              Z počítání tě rozbolela hlava. Místo dlouhého přemýšlení, radši
              jednáš.
            </Outcome>
          </Challenge>
          <Challenge
            title="Moudrost"
            description="Někde v korunách jabloní má hnízdo špaček, kterého musíme odnést
            pryč. Tady je dalekohled, najdi hnízdo a odnes ho do lesa."
          >
            <Outcome condition="10+">
              Klid a rozvážné sledování sadu konečně přineslo své ovoce. Kdo si
              počká, ten se dočká. Strýc Felix ti dalekohled za odměnu věnoval.
              Moudrost +2
            </Outcome>
            <Outcome variant="error">
              Trpělivost, pečlivost a smysl pro detail prostě nejsou tvoje
              přednosti.
            </Outcome>
          </Challenge>
          <Challenge
            title="Charisma"
            description="Zahraj pěkně na píšťalku a budeš moci doprovodit matku
            ke zpěvu v kostele při příštím Naslouchání"
          >
            <Outcome condition="10+">
              Dokážeš se vcítit do hudby i světa kolem sebe. To se jistě bude
              časem hodit. Píšťalka ti zůstala za odměnu. Charisma +2
            </Outcome>
            <Outcome variant="error">
              Proč se vůbec snažit udělat dojem, na ostatní stejně není spoleh.
            </Outcome>
          </Challenge>

          <Box textAlign="right">
            <Link
              underline="none"
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra/scena/2-hra-na-plizenou"
            >
              <Button variant="contained" color="primary">
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
        </Columns>
      </Container>
    </Page>
  );
}
