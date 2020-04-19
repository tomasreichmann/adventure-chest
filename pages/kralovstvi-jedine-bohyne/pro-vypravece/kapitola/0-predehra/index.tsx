import React from "react";
import Page from "../../../../../src/components/layout/Page";
import Link from "../../../../../src/components/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Tip from "../../../../../src/components/content/Tip";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import FlavorText from "../../../../../src/components/content/FlavorText";
import ImageFrame from "../../../../../src/components/layout/ImageFrame";
import MinorCharacter from "../../../../../src/components/content/character/MinorCharacter";
import ScriptContent from "../../../../../src/components/content/ScriptContent";
import Columns from "../../../../../src/components/layout/Columns";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function AdventurePage() {
  const { pathname } = useRouter();
  const classes = useStyles();
  const adventurePathname = pathname.split("/").slice(0, -4).join("/");
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
          <Typography color="textPrimary">Kapitola 0 - Předehra</Typography>
        </Breadcrumbs>
        <Columns columns={1}>
          <Typography variant="h1" className={classes.title}>
            Kapitola 0 - Předehra
          </Typography>
          <ImageFrame uri="https://cdnb.artstation.com/p/assets/images/images/012/627/521/large/robert-luszczki-highresscreenshot00016.jpg?1535707020" />
          <Tip>
            Než začneš hrát kampaň, můžeš s hráči projít krátkou předehru, na
            kterou nepotřebují připravené postavy. Během předehry si hráči mohou
            vyzkoušet hlavní mechaniku hry - plížení a předvedou hraní rolí, za
            které získají nějaké výhody pro tvorbu svojí postavy.
          </Tip>

          <FlavorText>
            Občas si vzpomenete na své dětství na rodinné farmě. Kolik zábavy
            jste si užili: jak jste pomáhali matce Octavii, dělali neplechu se
            strýcem Felixem a hráli si od rána do večera. Vaše soutěživost a
            vynalézavost vám pomohou čelit těžkým zkouškám Jediné Bohyně, které
            vás nevyhnutelně čekají.
          </FlavorText>

          <ImageFrame uri="https://i.pinimg.com/originals/b1/cd/42/b1cd42438e664628e64899cd725f8aa6.jpg" />

          <Typography variant="h2" className={classes.title}>
            Postavy
          </Typography>
          <Columns>
            <MinorCharacter
              name="Octavia Sadařka"
              imageUri="https://i.pinimg.com/474x/93/90/77/93907713eaf950b74756794a0e34d589--fantasy-characters-female-characters.jpg"
              gender="female"
              race={{
                children: "Člověk",
                href:
                  "http://dnd5esrd.d20.cz/prirucka-hrace/2-kapitola.html#clovek",
                target: "_blank",
              }}
              age="ve středních letech"
            >
              <ScriptContent>
                <Typography>
                  Matriarcha sadařské rodiny v Meridii. Sestra Felixe, matka
                  Ancie a dobrodruhů.
                </Typography>
              </ScriptContent>
            </MinorCharacter>

            <MinorCharacter
              name="Felix Sadař"
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
                <Typography>
                  Bratr Octavie. Stará se o rodinný sad. Rád si hraje s dětmi,
                  sám by rád měl jednou rodinu. Má tendenci propadat depresím a
                  alkoholismu.
                </Typography>
              </ScriptContent>
            </MinorCharacter>

            <MinorCharacter
              name="Acia Sadařka"
              imageUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e59d8391-afa9-4072-806a-9fa3323efa01/d4yg4qy-dde11687-6c4c-4a96-ab8b-1d57dec67e11.jpg/v1/fill/w_900,h_1247,q_75,strp/tusen_by_w176_d4yg4qy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI0NyIsInBhdGgiOiJcL2ZcL2U1OWQ4MzkxLWFmYTktNDA3Mi04MDZhLTlmYTMzMjNlZmEwMVwvZDR5ZzRxeS1kZGUxMTY4Ny02YzRjLTRhOTYtYWI4Yi0xZDU3ZGVjNjdlMTEuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TfsszNkhQCOSkxfQ1NDPwkmWMOj0Jlgs6_lEngisj1g"
              gender="female"
              race={{
                children: "Člověk",
                href:
                  "http://dnd5esrd.d20.cz/prirucka-hrace/2-kapitola.html#clovek",
                target: "_blank",
              }}
              age="teenager"
            >
              <ScriptContent>
                <Typography>
                  Nejstarší dcera Octavie Sadařky. Odvážná, vynalézavá,
                  tvrdohlavá a ambiciózní.
                </Typography>
              </ScriptContent>
            </MinorCharacter>
          </Columns>

          <Box textAlign="right">
            <Link
              underline="none"
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra/scena/1-ukoly"
            >
              <Button variant="contained" color="primary">
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
        </Columns>
      </Container>
    </Page>
  );
}
