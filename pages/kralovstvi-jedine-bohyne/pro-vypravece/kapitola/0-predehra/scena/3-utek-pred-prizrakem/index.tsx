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
import FlowDiagram from "../../../../../../../src/components/content/FlowDiagram/FlowDiagram";
import Flowline from "../../../../../../../src/components/content/FlowDiagram/Flowline";
import FlowProcess from "../../../../../../../src/components/content/FlowDiagram/FlowProcess";

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

          <ImageFrame uri="https://i.pinimg.com/originals/27/a7/ab/27a7abb1447b3ee143ba7132de3ed653.jpg" />

          <FlavorText>
            Hráli jste si celé odpoledne, ani jste si nevšimli, že slunce
            zapalo. Zvoneček se rozezněl a všochni jste se u k němu seběhli,
            abyste se pochlubili, kde se kdo schovával a jak každý málem vyhrál.
            Naskákali jste na Acii a poděkovali, že vám ukázala tak skvělou hru.
            Podlaha náhle zavrzala a Aciina noha se propadla srz. "Áu! Hloupé
            prkno!", nadává Acia, ale hned se zarazila: "Ale co je to tady?" V
            děravé podlaze nahmatala zaprášenou knihu. Nepopsaná obálka knihy
            otevřením zavrzala a vyvalil se z ní oblak zatuchlého prachu. Acie
            si sedla na zem a čte z poslední stránky: "S těžkým srdcem ukládám
            má okultní tajemství k odpočinku do stínů, kam Její paprsky snad
            níkdy nedopadnou. Tak děsivý je můj strach z přízraků, čím jasněji
            je vidím za zády."
            <br />
            (dramatická pauza)
            <br />
            Najednou se půdou rozezněl děsivý hlas: "Úuuu!" Prádlo se najednou
            samo od sebe vzneslo do vzduchu a vzalo podobu ducha. "Cooo je to
            tady zááá hlůůůk. Vyrušili jste měěě z mého odpočinkůůů a za trest
            vás chytííím a snííím."
            <br />
            "Ááá! Zachraň se kdo můžeš! Přízrak je tady!" vykřikla Acia, sbalila
            knihu a vzala nohy na ramena. Její úprk instinktivně zamířil k
            vratům na nakládání, které s rozběhem rozrazila a skočila do hromady
            sena na zahradě.
            <br />
            Všichni jí následujete&hellip;
          </FlavorText>

          <ForGm>
            Přízrak je ve skutečnosti strýc Felix, který má nahnat děti k
            večeři. Pokud někoho chytí, tak ho strašně zlechtá a odnese na
            zádech do světnice.
            <br />
            Cílem scény je ukázat, že útěk je někdy nejen nejlepší taktika, ale
            také zábava.
          </ForGm>

          <Typography variant="h3" className={classes.title}>
            Připomenutí pravidel honičky
          </Typography>

          <ul>
            <Typography component="li">
              Hráči se střídají v tazích podle iniciativy.
            </Typography>
            <Typography component="li">
              Během tahu by se hráč měl pohnout k jedné z navazujících překážek.
            </Typography>
            <Typography component="li">
              Vyzvi hráče, aby řekl, jak chce překážku zdolat. Podle toho ať
              hodí na příslušnou dovednost.
              <br />
              Síla: Atletika
              <br />
              Obratnost: Akrobacie, Čachry, Nenápadnost
              <br />
              Inteligence: Historie, Mystika, Náboženství, Pátrání, Příroda
              <br />
              Moudrost: Lékařství, Ovládání zvířat, Přežití, Vhled, Vnímání
              <br />
              Charisma: Klamání, Přesvědčování, Umění, Zastrašování
            </Typography>
            <Typography component="li">
              Za každý neúspěch dejte hráči nevýhodu na budoucí hody na nějakou
              vlastnost nebo schopnost. Např. Odřená dlaň - nevýhoda na hody na
              Obratnost.
            </Typography>
            <Typography component="li">
              Hráči v jedné lokaci si mohou navzájem pomáhat tak, že jeden
              vymění svůj úspěch za to, aby druhý nedostal nevýhodu.
            </Typography>
            <Typography component="li">
              Kdo doběhne do cíle, je v bezpečí.
            </Typography>
          </ul>

          <Tip>
            U výzvy jsou uvedené příklady schopností ke zdolání nástrahy a
            následků neúspěchu, ty ale ber jen jako příklad. Ať si hráči vymyslí
            své způsoby, jak nástrahy překonat.
          </Tip>

          <ImageFrame uri="https://i.pinimg.com/originals/5f/90/75/5f90756c9b2fe01572a0e8fad78e82be.jpg" />

          <Typography variant="h3" className={classes.title}>
            Honička s přízrakem
          </Typography>

          <FlavorText>
            Překvapilo vás, že venku je už tma. Jak dlouho jste si hráli?
            Najednou se dveře od stáje rozrazili a v nich stojí rozzuřený
            přízrak. Všichni bere nohy na ramena.
          </FlavorText>

          <FlowDiagram columns={2} minWidth="200px">
            <FlowProcess column="1 / 3">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  uri="https://www.primagames.com/media/files/eguide_assets/assassins-creed-iv-black-flag-eguide/AC4_UE_024_HTP_131002_SP-web-resources/image/026XHTP_130814_DS_opt.jpeg"
                />
                <Typography variant="h4">Skok z půdy</Typography>
                <Typography variant="body2">
                  10 sáhů pod nakládacími dveřmi na půdu stojí povoz se senem,
                  nad ním visí provaz z nakládacího ramene.
                </Typography>
                <Columns columns={2} minWidth="80px">
                  <Challenge title="Atletika" description="Sjeď po provaze.">
                    <Outcome condition="6+">Máš náskok</Outcome>
                    <Outcome variant="error">
                      Spálil sis ruce: máš nevýhodu na Obratnost do dlouhého
                      odpočinku
                    </Outcome>
                  </Challenge>
                  <Challenge title="Akrobacie" description="Skoč do sena.">
                    <Outcome condition="6+">Máš náskok</Outcome>
                    <Outcome variant="error">
                      Minuls a narazil si kostrč: máš nevýhodu na Atletiku do
                      dlouhého odpočinku
                    </Outcome>
                  </Challenge>
                </Columns>
              </Columns>
            </FlowProcess>
            <Flowline column="1" top bottomArrow right />
            <Flowline column="2" left bottomArrow />
            <FlowProcess column="1">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  uri="https://cs1.livemaster.ru/storage/c2/e4/081154e27cf01aa5c5e9fcf049hw--oil-oil-painting-sun-in-the-rose-garden-impressionism.jpg"
                />
                <Typography variant="h4">Napříč záhonkem růží</Typography>
                <Challenge
                  title="Záchraný hod na obratnost"
                  description="Snažíš se vyhnout ostnům, které tě chytají za oblečení"
                >
                  <Outcome condition="4+">Máš náskok</Outcome>
                  <Outcome variant="error">
                    Máš poškrábané nohy a nohavice plné ostnů. Tvoje rychlost je
                    snížená o 10 stop (2 sáhy) do dlouhého odpočinku
                  </Outcome>
                </Challenge>
              </Columns>
            </FlowProcess>
            <FlowProcess column="2">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  backgroundPosition="50% 70%"
                  uri="https://www.paintingstar.com/static/gallery/2006/03/19/52a5ea83f07cb.jpg?Pig+Pen+Artwork+by+Levi+Wells+Prentice"
                />
                <Typography variant="h4">
                  Zkratka skrz ohrádku s prasaty
                </Typography>
                <Typography variant="body2">
                  Můžeš si zkrátit cestu a vzít to skrz ohrádku. Prasata ti ale
                  stojí v cestě.
                </Typography>
                <Challenge
                  title="Ovládání zvířat"
                  description="Osedlej si vepříka, jestli máš odvahu."
                >
                  <Outcome condition="10+">Máš náskok</Outcome>
                  <Outcome variant="error">
                    Nakonec ses dostal skrz ale cestou jsi šlápl do něčeho
                    mazlavého a teplého. Smrdíš a máš nevýhodu na Charismu než
                    se vydrhneš.
                  </Outcome>
                </Challenge>
              </Columns>
            </FlowProcess>
            <Flowline column="1" top bottomArrow />
            <Flowline column="2" row="4 / 6" top bottom />
            <FlowProcess column="1">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  uri="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/stacked-fire-wood-in-preparation-for-winter-lanjee-chee.jpg"
                />
                <Typography variant="h4">Kolem dřeva na podpal</Typography>
                <Challenge
                  title="Útok D20 + Síla"
                  description="Kopni dřevo do cesty ať tě přízrak nemůže pronásledovat"
                >
                  <Outcome condition="4+">Máš náskok</Outcome>
                  <Outcome variant="error">
                    Bota se ti zasekla ve dřevě a musíš dál pokračovat bez ní
                  </Outcome>
                </Challenge>
              </Columns>
            </FlowProcess>
            <Flowline column="1" top bottomArrow right />
            <Flowline column="2" top left />
            <FlowProcess column="1 / -1">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  uri="https://i.pinimg.com/originals/54/db/a3/54dba3d89667fc02a1543f612b5923f7.jpg"
                />
                <Typography variant="h4">Oknem do domu</Typography>
                <Typography variant="body2">
                  Zeď pod oknem je porostlá různými popínavými rostlinami
                </Typography>
                <Challenge
                  title="Příroda (Inteligence) nebo Přežití (Moudrost)"
                  description="Některé rostliny, co tu rostou nepříjemně žahají. Které to ale byly?"
                >
                  <Outcome condition="6+">Máš náskok</Outcome>
                  <Outcome variant="error">
                    Požahal tě břečťan. Máš vyrášku a{" "}
                    <Link
                      href="http://dnd5esrd.d20.cz/prirucka-hrace/dodatek-a.html#otraveny"
                      target="_blank"
                    >
                      Otravu
                    </Link>{" "}
                    do krátkého odpočinku.
                  </Outcome>
                </Challenge>
              </Columns>
            </FlowProcess>
            <Flowline column="1" top bottomArrow right />
            <Flowline column="2" left bottomArrow />
            <FlowProcess column="1">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  uri="https://lostartpress.files.wordpress.com/2017/04/blogpost-image7.jpg?w=640&amp;h=533"
                />
                <Typography variant="h4">Dílnou</Typography>
                <Typography variant="body2">
                  Všude jsou opřené hrábě, pily a jiné nástroje.
                </Typography>
                <Challenge
                  title="Záchraný hod na obratnost"
                  description="Nešlápni na pohozené hrábě"
                >
                  <Outcome condition="6+">Máš náskok</Outcome>
                  <Outcome variant="error">
                    Dostal jsi hráběmi do hlavy a máš nevýhodu na Inteligenci do
                    dlouhého odpočinku
                  </Outcome>
                </Challenge>
              </Columns>
            </FlowProcess>
            <FlowProcess column="2">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  uri="https://s-media-cache-ak0.pinimg.com/736x/be/2f/aa/be2faae10225746f7df3152d65c329df--rustic-stairs-wood-staircase.jpg"
                />
                <Typography variant="h4">Po schodech</Typography>
                <Typography variant="body2">
                  Dlouhé dřevěnné schodiště se zábradlím vede dolů do kuchyně
                </Typography>
                <Challenge
                  title="Záchranný hod na odolnost"
                  description="Sjet po zábradlí je nejrychlejší cesta... jak si zadřít třísku do zadku"
                >
                  <Outcome condition="6+">Máš náskok</Outcome>
                  <Outcome variant="error">
                    Máš zezadu vydřenou díru do oblečení a kouká ti zadek.
                  </Outcome>
                </Challenge>
              </Columns>
            </FlowProcess>
            <Flowline column="1" top bottomArrow />
            <Flowline column="2" top bottomArrow />
            <FlowProcess column="1 / -1">
              <Columns columns={1} minWidth="200px">
                <ImageFrame
                  aspectRatio="16:6"
                  uri="https://upload.wikimedia.org/wikipedia/commons/b/b3/Frederick_George_Cotman_-_One_of_the_Family_-_Google_Art_Project.jpg"
                />
                <Typography variant="h4">Dorazili jste do kuchyně</Typography>
                <Typography variant="body2">
                  Místnost je provoněná ovesnou kaší a jablkovým koláčem. Ancie
                  sedí spořádaně na židli a těžce oddechuje. Matka Octavie
                  odhlédla od plotny a zděšeným výrazem sleduje, v jakém stavu
                  jste dorazili ke stolu.
                  <br />
                  "Jediná bohyně, za co mě trestáš? Všichni umýt, utřít boty. Co
                  to máš na sobě? Přepadl tě medvěd?"
                  <br />
                  Po chvíli dorazil do místnosti zadýchaný strýc Felix s
                  prostěradlem v podpaží a potměšilým úsměvem. Vyměnil si s
                  Matkou vše vysvětlující pohled než usedl ke stolu.
                  <br />
                  "A ty čekáš na co? Podívej, jak jsi mi tu našlapal. Koukej to
                  po sobě uklidit, než ti jedna přiletí ty budiž k ničemu!",
                  seřvala Octavie Felixe.
                  <br />
                  <br />
                  Večeře byla výtečná a na jablečném koláči si všichni pochutnali.
                </Typography>
              </Columns>
            </FlowProcess>
          </FlowDiagram>

          <FlavorText>Po večeři jste se začali chystat na kutě, ale před tím ještě zbývá vypořádat se s Felixem za to, jak vás vystrašil.</FlavorText>

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
              href="/kralovstvi-jedine-bohyne/pro-vypravece/kapitola/0-predehra/scena/4-odplata-felixovi"
            >
              <Button variant="contained" color="primary">
                Scéna 4 - Odplata Felixovi
              </Button>
            </Link>
          </Box>
        </Columns>
      </Container>
    </Page>
  );
}
