import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import Page from "../../../src/components/layout/Page";
import Link from "../../../src/components/Link";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Tip from "../../../src/components/content/Tip";
import ImageFrame from "../../../src/components/layout/ImageFrame";
import ArticleContent from "../../../src/components/layout/ArticleContent";
import IconBook from "../../../src/components/icons/IconBook";
import IconChest from "../../../src/components/icons/IconChest";
import FlavorText from "../../../src/components/content/FlavorText";
import IconD20 from "../../../src/components/icons/IconD20";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "block",
    marginTop: theme.spacing(2),
    marginBottom: 0,
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
  image: {
    marginBottom: theme.spacing(1),
  },
  callToAction: {
    textAlign: "right",
  },
  nested: {
    marginLeft: theme.spacing(2),
  },
  blockLink: {
    display: "block",
  },
}));

export default function AdventureForGmsPage() {
  const { pathname } = useRouter();
  const classes = useStyles();
  const adventurePathname = pathname.split("/").slice(0, -1).join("/");
  return (
    <Page>
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="secondary" href={adventurePathname}>
            Království Jediné Bohyně
          </Link>
          <Typography color="textPrimary">Informace pro vypravěče</Typography>
        </Breadcrumbs>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography variant="h4" className={classes.title}>
              <IconBook width="20px" />
              &ensp;Scénář
            </Typography>
            <Paper>
              <Box p={2}>
                <Typography
                  component={Link}
                  color="secondary"
                  href={`${adventurePathname}/pro-vypravece/kapitola/0-predehra`}
                  underline="none"
                  className={classes.blockLink}
                >
                  Kapitola 0 - Předehra
                </Typography>
                <div className={classes.nested}>
                  <Typography
                    component={Link}
                    color="secondary"
                    href={`${adventurePathname}/pro-vypravece/kapitola/0-predehra/scena/1-ukoly`}
                    underline="none"
                    className={classes.blockLink}
                  >
                    Scéna 1 - Úkoly
                  </Typography>
                  <Typography
                    component={Link}
                    color="secondary"
                    href={`${adventurePathname}/pro-vypravece/kapitola/0-predehra/scena/2-hra-na-plizenou`}
                    underline="none"
                    className={classes.blockLink}
                  >
                    Scéna 2 - Hra na plíženou
                  </Typography>
                  <Typography
                    component={Link}
                    color="secondary"
                    href={`${adventurePathname}/pro-vypravece/kapitola/0-predehra/scena/3-utek-pred-prizrakem`}
                    underline="none"
                    className={classes.blockLink}
                  >
                    Scéna 3 - Útěk před přízrakem
                  </Typography>
                </div>
              </Box>
            </Paper>

            <Typography
              className={classes.title}
              component={Link}
              variant="h4"
              color="secondary"
              href={`${adventurePathname}/pro-vypravece/predmety`}
              underline="none"
            >
              <IconChest width="20px" />
              &ensp; Předměty
            </Typography>
          </Grid>
          <Grid item md={8}>
            <ArticleContent>
              <Typography variant="h1" className={classes.title}>
                Pro vypravěče
              </Typography>
              <Typography>
                Dobrodružství Království Jediné Bohyně je o tom, jak se prosadit
                proti výrazně silnějším oponentům, o propasti mezi chudými a
                urozenými a boji proti útlaku.
              </Typography>

              <Typography variant="h2" className={classes.title}>
                Shrnutí příběhu
              </Typography>

              <Typography>Příběh se odehrává v několika kapitolách:</Typography>

              <ol>
                <Typography component="li" className={classes.listItem}>
                  <strong>Dětství</strong> - Děti vyrůstají na farmě a tráví čas
                  hrami na schovávanou. Kapitola slouží jako ukázka, jak funguje
                  plížení ve hře a propojení osudů jednotlivých postav. Aby
                  kapitola splnila účel, mela by si družina vyzkoušet pravidla
                  skrývání bez rizika pro odhalení, užít si spolu zážitky, které
                  je spojí přátelstvím.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  <strong>Přežití v ulicích Meridie</strong> - Rodina přijde o
                  farmu a družina si musí najít obživu v ulicích Meridie. Život
                  se zkomplikuje, když dojde k zákazu pohybu mezi čtvrtěmi.
                  Hrdinové se snaží přežít na ulici plněním čím dál více
                  riskantních úkolů. Účel kapitoly je naučit družinu získávat
                  prostředky navzdory místním bezohledným zákonům a postavit je
                  do opozice milice, církve a samotné královny.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  <strong>Převrat</strong> - Královna stále více omezuje práva
                  cizinců ve městě. Je evidentní, že jediná šance na záchranu je
                  královnu svrhnout. Aby se hrdinové zachránili, musí
                  se zbavit královny. Je na hráčích, jestli na to půjdou
                  politicky, nebo se pokusí královnu odstranit násilím.
                </Typography>
              </ol>

              <Typography variant="h2" className={classes.title}>
                Speciální pravidla
              </Typography>
              <Typography>
                Hrdinové běžně přijdou do kontaktu se strážníky milice, kteří
                jsou skvěle vycvičení (5. úroveň) a vybavení (kroužková zbroj).
                Královniny dekrety navíc zakazují otevřené nošení zbraní a
                brnění. To znamená, že postavy budou mít proti nim vždy velkou
                nevýhodu a bude lepší se boji s nimi vyhnout buď plížením, nebo
                útěkem. Proto je potřeba rozvést pravidla plížení a udělat útěk
                zábavnější.
              </Typography>

              <ImageFrame
                className={classes.image}
                uri="https://www.xboxachievements.com/images/achievements/3613/125587-hi.jpg"
              />

              <Tip>
                Je dobré ukázat předzvěst toho, jak nebezpeční strážníci milice
                opravdu jsou. Např. scéna, kde na strážníka zaútočí přesila
                běžných občanů a on je přesto všechny zbije. Pouze pokud budou
                hráči věřit, že jsou stráže mnohem silnější než oni, budou se
                snažit hledat kreativní způsoby, jak je obejít, nebo před nimi
                utéct.
              </Tip>

              <ImageFrame
                className={classes.image}
                uri="https://i.pinimg.com/originals/c9/3c/ee/c93ceec3abb1f141f76baf56dac40e57.jpg"
                backgroundPosition="center 40%"
              />
              <Typography variant="h2" className={classes.title}>
                Plížení
              </Typography>

              <Typography>
                Aby bylo plížení pro hráče zábavné, musí navozovat přiměřené
                množství dramatu, ale zároveň být dost výhodnou taktikou na
                překonání nástrah. Počítejte s 60% - 80% úspěšností plížení, aby
                hráči považovali plížení výhodnou taktiku. Strážníci milice mají
                poměrně nízké Vnímání, to ale samo o sobě nestačí. Pro
                ilustraci, předpokládejme, že Stráž hlídá oblast, kde se Zloděj
                před Stráží skrývá.
              </Typography>

              <ul>
                <Typography component="li" className={classes.listItem}>
                  Postavy běžně vidí v 90° kuželu ve směru natočení do
                  vzdálenosti 120 stop ((24 sáhů)).
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  Postavy se mohou pokusit skrýt, pokud jsou na poli, které není
                  nepřítelem jasně viditelné (úplná tma, mlha, krytí) a pokud je
                  nepřítel nemá jak jinak vnímat (sluch, čich, cit pro vibrace).
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  Postavy přestanou být skryté, pokud skončí pohyb na poli,
                  které je přímo viditelné nepřítelem, nebo pokud se nepřítel
                  pohne tak, že pole se stane přímo viditelným.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  Postavy riskují odhalení (musí potvrdit skrytí hodem na
                  Skrývání), pokud se pohnou skrz pole, které je přímo viditelné
                  nepřítelem, nebo pokud je nepřítel začne být schopen nějak
                  vnímat (např. udělají hluk). Když se hod nezdaří, nepřítele to
                  zalarmuje a může se vydat oblast prohledat. Pokud nepřítel již
                  zalarmovaný byl, nepřítel ji může odhalit.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  Plížení po běžném povrchu (dřevěnná podlaha, hlína, dlažba, ve
                  vodě) je slyšet na vzdálenost 1 sáhu. Plížení po štěrku,
                  střepech, apod. je slyšet na 6 sáhů. Plížení po trávě, koberci
                  není slyšet vůbec.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  Útok na osobu, před kterou je útočník skrytý má výhodu.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  Útočník beze zbraní může chytit oběť pod krkem a pokusit se jí
                  dostat do bezvědomí ve dvou kolech pomocí 2 po sobě jdoucích
                  hodů na chycení (Atletika útočníka vs Atletika/Akrobacie
                  oběti).
                </Typography>
              </ul>

              <Typography>
                Postavy mohou reagovat různě na odhalení nepřítele. <br />
                Pokud se jedná o veřejný prostor, mohou postavu pouze
                napomenout.
                <br />
                V soukromém prostoru mohou vyzvat postavu k opuštění prostoru,
                vyvést ji násilím, nebo volat stráže.
                <br />
                Některé prostory mohou být považované za extra nebezpečné. Např.
                pokud stráže hledají ozbrojeného útočníka, mohou na odhalenou
                postavu rovnou zaútočit.
                <br />
              </Typography>

              <ImageFrame
                className={classes.image}
                uri="https://i.postimg.cc/CLWjNCdg/124347-games-news-hands-on-thief-gameplay-preview-we-steal-shoot.jpg"
              />
              <Typography variant="h3" className={classes.title}>
                Příklad ve veřejném prostoru - náměstí v noci osvícené lampami
              </Typography>
              <Tip>
                Zloděj stojí v úplném krytí stánkem a je automaticky považován
                za skrytého.
                <br />
                Zloděj se pohnul do částečného krytí za bednu 3 sáhy od
                strážníka, ale neprošel skrz pole, kde by byl úplně viditelný.
                <br />
                Zloděj se pohnul do úplného krytí za sousední stánek, ale pohnul
                se během toho přes pole, kde neměl přes strážníkem žádné krytí a
                musí tím pádem hodit na Skrývání.
                <br />
                Hod na skrývání se nezdařil.
                <br />
                Strážník se zastaví, dívá se na stánek a povídá: "Je tam někdo?"
                <br />
                Zloděj stojí bez hnutí za stánkem.
                <br />
                Strážník se chvíli kouká kolem a pak mávne rukou a pokračuje v
                obchůzce.
                <br />
                Zloděj vytáhne šperháky a snaží se otevřít zámek u stánku.
                <br />
                Hod na skrývání se nezdařil. Šperhák zloději vypadl z ruky a s
                zacinkáním dopadl na dlažbu.
                <br />
                Strážník se ohlédl, tasil obušek a povídá: "Teď jsem ale něco
                slyšel. Ukaž se!". Strážník se opatrně vydá směrem ke stánku.
                <br />
                Zloděj se opět snaží otevřít zámek a nyní se mu hod podařil.
                <br />
                Mezi tím, ale strážný obešel stánek a vidí nyní přímo na
                zloděje. "Tady seš, ty lapko!"
                <br />
                Zloděj se snaží přesvědčit strážníka, že se jen prochází po
                náměstí. Hod na Přesvědčení se podaří.
                <br />
                Strážný uklidí obušek za pásek a povídá: "Dobrá tedy, ale ať už
                tě tady nevidim. V tuhle hodinu se tu pohybují jen lapkové a
                chuligání.".
                <br />
                Strážný nechá zloděje jít.
                <br />
              </Tip>

              <ImageFrame
                className={classes.image}
                uri="https://i.pinimg.com/originals/b2/9c/48/b29c48842ec99c5f5e3e6e68c2685631.jpg"
              />
              <Typography variant="h3" className={classes.title}>
                Příklad odhalení v soukromém prostoru (např. cizí dům)
              </Typography>
              <Tip>
                Pan domácí odhalí hráčovu postavu a zakřičí: "Á, tys mě ale
                vyděsil. Koukej odsud vypadnout, než zavolám stráže"
                <br />
                Pokud postava neodejde, pan domácí uteče na ulici a bude volat
                milice
                <br />
                Pokud strážník najde postavu v domě, už se s ním nebude
                vybavovat a ihned ho přetáhne obuškem, nebo se ho pokusí chytit.
                Následně ho odvede do vězení.
              </Tip>

              <ImageFrame
                className={classes.image}
                uri="https://i.pinimg.com/originals/4f/91/bb/4f91bbf9fe20faadbc2074b12b9f7b3b.png"
              />
              <Typography variant="h3" className={classes.title}>
                Příklad odhalení v bojovém prostoru (např. královský palác po
                odhalení vraždy královny)
              </Typography>
              <Tip>
                Stráž tasí šavli, zakřičí: "Ha! Teď zemřeš, ty jeden vrahoune."
                A rovnou zaútočí.
                <br />
              </Tip>

              <Typography>
                Je důležité uvědomit si, že to zdali je prostor považován za
                veřejný, soukromý, nebo bojový záleží na tom, kdo koho odhalí.
                Pokud postavu odhalí paní domácí, nebude se rozhodně pokoušet
                postavu zpacifikovat sama a místo toho poběží pro stáže. Navíc
                pokud je postava převlečená za služebnou, nemusí jí vůbec za
                podezřelou.
              </Typography>

              <ImageFrame uri="https://i.pinimg.com/originals/73/c7/56/73c7562d5d4ba2c7930aba770acaa063.jpg" />

              <Typography variant="h2" className={classes.title}>
                Odhalení strážemi
              </Typography>

              <Typography>
                Hráči mají tendenci řešit konflikt nejprve soubojem a až pokud
                je jasné, že nemohou vyhrát, zvažují ústup. Pokud je družina
                odhalena, naznačte, že přímý souboj se strážnými je téměř jistá
                porážka. Stráže jsou lépe ozbrojeni a vycvičeni a to by mělo být
                vidět na první pohled. Naopak ukažte několik možných ústupových
                cest.
              </Typography>

              <FlavorText>
                Příklad popisu konfliktu se strážnými:
                <br />
                Stojíš tváří v tvář strážníkovi, který tě převyšuje o hlavu a
                jeho svalnatá postava tě halí do stínu. Jeho kroužková košile
                výhružně chrastí každým krokem, kterým se k tobě strážný
                přibližuje. Rozhlédl ses kolem sebe. Po pravé straně vidíš, jak
                přibíhají další tři strážníci. Za tebou se suší několik mokrých
                prostěradel. Vlevo ze střechy visí provaz kladky kamennou
                protiváhou privázaný k zábradlí. A proti se blíží kočár s koňmi,
                který vás brzo mine. Co děláš?
              </FlavorText>

              <Tip>
                Pokud je družina odhalena tváří v tvář strážným, nebo jiným
                příliš nebezpečným oponentům, zkus situaci vyřešit pomocí
                dovednostní výzvy nebo honičky.
              </Tip>

              <ImageFrame uri="https://cdnb.artstation.com/p/assets/images/images/007/983/349/large/gabriele-gabba-export-05.jpg?1509718165" />

              <Typography variant="h2" className={classes.title}>
                Dovednostní výzvy
              </Typography>

              <Typography>
                Je to druh překážky, kdy se hráči pokouší společně dosáhnout
                nějakého komplikovaného cíle. Např. zrenovovat opuštěný dům,
                zařídit, aby jim někdo donášel informace z církve, nebo vyhrát
                závod kočárů.
              </Typography>

              <ol>
                <Typography component="li">
                  Urči průměrnou obtížnost hodu.
                </Typography>
                <Typography component="li">
                  Urči počet úspěchů potřebných na splnění cíle (např. 3).
                </Typography>
                <Typography component="li">
                  Urči počet neúspěchů ke zmaření cíle (např. 3).
                </Typography>

                <ol type="a">
                  <Typography component="li">
                    Ptej se hráčů, jak by chtěli přispět ke společnému cíli a
                    vyzvi je k hodu na dovednost, která tomu odpovídá.
                    <br />
                    Dovednosti by se neměly opakovat a měl by pokaždé házet
                    někdo jiný. Dej k hodu výhodu, pokud chceš odměnit
                    kreativitu, nebo pokud např. použijí na pomoc nějaké kouzlo.
                  </Typography>
                  <Typography component="li">
                    Počítej úspěchy, pokud dosáhnou potřebného množství, vyhlaš,
                    že se jim cíl podařilo splnit.
                  </Typography>
                  <Typography component="li">
                    S každým neúspěchem popiš, jakou komplikaci jim způsobil,
                    nebo nech hráče, aby si komplikaci vymysleli sami.
                    <br />
                    Počítej neúspěchy. Pokud dosáhnout daného množství neúspěchů
                    dříve, než úspěchů, popiš, co se stalo, že se jim cíl splnit
                    nepodařilo.
                  </Typography>
                </ol>
              </ol>

              <Tip>
                Určení obtížnosti hodu:
                <br />
                Pro středně těžkou obtížnost počítej se 75% úspěšností, tedy
                pokud hráč hodí 6 a víc na
                <IconD20 />, měl by uspět. Počítej s tím, že hráči budou
                používat dovednosti, ve kterých jsou zdatní a budou mít průměrně
                +2 za schopnost a navíc bonus za zdatnost (+2 na první úrovni a
                +1 každé 4 další úrovně).
                <br />
                Pro lehkou obtížnost s 90% úspěšností odečti 3.
                <br />
                Pro těžkou obtížnost s 40% úspěšností přičti 6.
                <br />
                Příklad lehké obtížnosti: DC8 na 1. úrovni.
                <br />
                Příklad sřední obtížnosti: DC11 na 5. úrovni.
                <br />
                Příklad těžké obtížnosti: DC16 na 10. úrovni.
              </Tip>

              <ImageFrame
                className={classes.image}
                backgroundPosition="50% 20%"
                uri="https://i.pinimg.com/originals/ba/f3/48/baf348ac8ec42ccd0b26208b5ef7f85c.jpg"
              />

              <Typography variant="h2" className={classes.title}>
                Honička
              </Typography>

              <Typography>
                Honička je druh scény, kde družina buď utíká před nebezpečím,
                nebo naopak něco pronásleduje. Jde o síť navzájem propojených
                lokací s překážkami, které se postavy snaží překonat, a
                získávají při tom náskok, nebo ztrátu. V případě útěku musí
                každá postava získat určitý počet úspěchů dle složitosti scény,
                aby se dostala do bezpečí. V případě pronásledování musí družina
                získat určitý počet úspěchů, dokud se nedostanou k poslední
                překážce. Pokud se dvě postavy vyskytují ve stejné lokaci, mohou
                si postavy pomoct tak, že jedna vymění svůj náskok za negaci
                efektů ztráty druhé postavy.
              </Typography>

              <Tip>
                Někdy je vhodné pro příběh, aby se družině utéct podařilo za
                všech okolností. V tom případě je lepší mít pevný počet překážek
                a za ztrátu udělit postavě nějaký déle trvající <Link href="http://dnd5esrd.d20.cz/prirucka-hrace/dodatek-a.html" target="_blank">nežádoucí stav</Link>.
                Např. "Natažený sval" - do dlouhého odpočinku má hráč nevýhodu
                na hody na Sílu, nebo přímo stupeň únavy. Pozor ale, každý
                nežádoucí stav zvyšuje pravděpodobnost další ztráty. Proto je
                důležité, aby si hráči navzájem pomáhali.
              </Tip>

              <Typography variant="h2" className={classes.title}>
                Tabulka náhodných příležitostí pro útěk
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>20</TableCell>
                      <TableCell>
                        Ozvala se rána a víko nedalekého kanálu vyletělo do
                        vzduchu. Z kanálu se vyvalil oblak teplé páry, který
                        všechno zahalil do mlhy.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>19</TableCell>
                      <TableCell>
                        "Pojď se mnou, jestli chceš žít", mává na tebe osoba
                        zpoza pootevřených dveří.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>18</TableCell>
                      <TableCell>
                        Ozval se ženský křik a na chvíli se všichni otočili. Máš
                        moment se schovat.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>17</TableCell>
                      <TableCell>
                        Náhle mezi vás spadlo něco keramického a s rachnutím se
                        rozsypalo na kusy. Když hned vyrazíš, získáš chvíli
                        náskok, než si ostatní všimnou, že jsi pryč.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>16</TableCell>
                      <TableCell>
                        Blíží se rychle jedoucí povoz. Můžeš se pokusit se ho
                        zachytit a získat tak náskok.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>15</TableCell>
                      <TableCell>
                        Kousek od tebe je skulina ve stěně, tak tak velká na
                        protažení skrz.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>14</TableCell>
                      <TableCell>
                        Pod chodidly ti křupe písek. Můžeš si hrst nabrat a
                        hodit jí někomu do obličeje.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>13</TableCell>
                      <TableCell>
                        Blíží se dav lidí. Neberou na vás ohledy a chystají se
                        projít skrz vás.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>12</TableCell>
                      <TableCell>
                        Na dosah ruky máš napnuté lano. Vypadá to, že by tě
                        mohlo vynést nahoru, pokud se ti podaří ho rychle
                        přeseknout.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>11</TableCell>
                      <TableCell>
                        Cosi se s prásknutím zabouchlo a najednou je všude tma.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10</TableCell>
                      <TableCell>
                        Vrávoravá postava vrazila mezi vás, strašně falešně
                        zpívá a cloumáním s vámi vás nutí, abyste se přidali.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>9</TableCell>
                      <TableCell>
                        S křachnutím mezi tebe a tvé pronásledovatele spadla
                        lampa. Olej se rozlil a začal hořet.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell>
                        Něco je ve vzduchu. Všichni jste začali nekontrolovaně
                        kýchat.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell>
                        Splašené zvíře vtrhlo mezi vás a všechny porazilo na
                        zem.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell>
                        Ozvala se rána a z kanálu se začala řinout záplava vody,
                        která vás srazila na zem.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>
                        Podlaha skřípe pod tvými kroky. Jedna rána a mohla by se
                        propadnout.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>
                        Lektvar s třísknutím dopadl na zem a podlahu pokryla
                        vrstva extrémě kluzkého a hořlavého tuku.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>
                        Se závanem vzduchu všechni okolo ucítili strašný smrad.
                        Štiplavý vzduch všem zalil oči slzami. Každý si mne oči
                        a nedává na tebe pozor. Ani tvoje oči ovšem nezůstaly
                        bez úhony.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>
                        Zem se zachvěla a ze shora se na vás začala sypat suť a
                        kusy zdiva. Hodili jste všechno na zem a kryjete si
                        hlavu. Prach ze suti zahalil okolí a dráždí vás v hrdle.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>
                        Udkudsi se přihnalo obrovské hejno krys a všechny
                        vyděsilo. Ostatní rychle vylezli co nejvýš nad zem, aby
                        na ně krysy nevlezly. Jsi stále vidět, ale každý si
                        dvakrát rozmysli, zdali tě bude pronásledovat a riskovat
                        pokousání od krys.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="h2" className={classes.title}>
                Svět Království Jediné Bohyně
              </Typography>

              <Typography variant="h2" className={classes.title}>
                Náboženství
              </Typography>
              <Typography>
                Náboženství hraje velkou roli ve světě Království Jediné Bohyně.
                Sama Jediná Bohyně totiž propůjčuje svou moc pouze ženám.
                Historicky se tedy její nejoddanější kněžky dostali do
                významných pozic jak v armádě, tak v politice. A proto
                království je plně provázané s církví Jediné Bohyně.
              </Typography>

              <Typography variant="h3" className={classes.title}>
                Monopol na nadpřirozeno
              </Typography>
              <Typography>
                Církev Jediné Bohyně je prakticky jediným organisovaným
                náboženstvím v zemi. Ačkoliv stoupenkyně Jediné Bohyně všude
                hlásají, že žádní další bohové ani magie neexistují, absence
                ostatních bohů a magie je dílem aktivního potírání "kacířství" a
                "čarodejnictví" inkvizicí církve Jediné Bohyně. Veřejné
                praktikování magie, nebo náboženství kromě církve Jediné Bohyně,
                je okamžitě označeno jako "kacířství" a všichni obvinění jsou
                zajati kněžkami inkvizice, zbičováni, zbaveni jazyku, nebo
                rovnou upáleni. Veškeré studium a vlastní praktikování magie,
                okultismus a uctívání ostatních bohů občané města provozují
                pouze v tajnosti.
              </Typography>

              <Typography variant="h3" className={classes.title}>
                Církev Jediné Bohyně
              </Typography>
              <Typography>
                Samotná královna je zároveň nejváženější matkou představenou
                církve Jediné Bohyně a působí, jako nejvyšší zákonodárná moc.
                Královniny dcery jsou vždy vychovávány jako kněžky, aby jí mohly
                nahradit v případě náhlé smrti. Nejvyšší vážená inkvizitorka,
                druhorozená dcera královny, Luxia velí ozbrojeným, exekutivním a
                soudním složkám církve. Pod svým velením má strážníky milice,
                kteří udržují pořádek a vynucují dodržování zákonů v zemi,
                armádu a samotné kněžky inkvizice, které působí jako velitelé
                milice i armády.
              </Typography>
              <Typography>
                Církev má po městě mnoho menších kostelů a katedrálu, která
                působí zároveň, jako královské sídlo. Každý kostel obsluhuje
                několik kněžek, které provádějí církevní obřady, vybírají daně a
                soudí porušení zákona.
              </Typography>
              <Typography>
                Nejdůležitějším církevním obřadem je tzv. Naslouchání. Obřad
                probíhá pravidelně jednou týdně tak, aby se obřady v
                jednotlivých kostelech nepřekrývaly. Během obřadu přicházejí
                ženy do kostela, kde odevzdají bohyni před ostatními oběť ve
                formě peněz, uměleckých děl, nebo tanečních a pěveckých
                představení. Po dokončení obětí jsou věřící, co odevzdali
                dostatečně hodnotný dar pozváni k soukromé modlitbě. Jediná
                Bohyně skutečně naslouchá modlitbám a odměňuje věřící léčením,
                částí svojí moci, nebo jim prostřednictvím kněžek pomáhá řešit,
                co je trápí.
              </Typography>

              <Typography variant="h3" className={classes.title}>
                Jediná Bohyně
              </Typography>
              <Typography>
                Jediná Bohyně je nadpřirozená bytost obrovské moci, která vidí
                vše, na co dopadá sluneční světlo, mluví ke svým kněžkám a
                věřícím skrz modlitby a propůjčuje jim část své moci ve formě
                kouzel. Jediná Bohyně je závistivá, žárlivá a pyšná bytost,
                které jde pouze o to mít co nejvíce oddaných věřících, kteří jí
                neustále pějí slávu. Jediná Bohyně dostává svojí moc
                prostřednictvím víry žen. Ačkoliv někteří muži také Jedinou
                Bohyni uctívají, ta z nich nemá žádný užitek, nepromlouvá k nim
                a nepropůjčuje jim žádnou moc. Proto je její uctívání výsadou
                žen.
              </Typography>

              <Typography variant="h2" className={classes.title}>
                Společnost
              </Typography>
              <Typography>
                Vlivu Jediné Bohyně dělá společnost silně matriarchální. Ženy
                jsou vždy v rozhodovací pozici a od muží se očekává, že je budou
                chránit a sloužit jim. Muži dělají většinu manuálních prací a
                jsou vždy připraveni jakoukoliv ženu chránit před nebezpečím.
              </Typography>
              <Typography>
                Ženy proto nepotřebují udržovat stálé partnery, proto
                neuzavírají manželství a rodiny jsou místo toho složeny ze
                sourozenců. Rodinu tvoří nejčastěji jedna starší žena, její
                bratři a její děti. Kdo je otec dětí není podstatné a veškeré
                dědičné tituly se nabývají pouze po ženské linii.
              </Typography>

              <ImageFrame
                className={classes.image}
                uri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7b8ca04-766d-42fc-b77f-e9c0c84dd24d/d2tc74-f4698ea5-67c2-4c53-aad9-47cbe02c8acd.jpg/v1/fill/w_800,h_450,q_75,strp/medieval_gallows_by_svenart_d2tc74-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDUwIiwicGF0aCI6IlwvZlwvYzdiOGNhMDQtNzY2ZC00MmZjLWI3N2YtZTljMGM4NGRkMjRkXC9kMnRjNzQtZjQ2OThlYTUtNjdjMi00YzUzLWFhZDktNDdjYmUwMmM4YWNkLmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fdou91suBU11Ksh8rAPGNyy9gTb32foFnUfOQa4_Q1s"
              />
              <Typography variant="h2" className={classes.title}>
                Zákon a trest
              </Typography>

              <Typography variant="h3" className={classes.title}>
                Milice
              </Typography>

              <Typography>
                Na dodržování zákona a jeho vynucení dohlíží městské milice.
                Strážníci milice mají autoritu podezřelé zadržet, vyslechnout a
                zavřít do vazby. Posouzení vážnějších přestupků provádí kněžky
                inkvizice v kostele.
              </Typography>

              <Typography>
                Království Jediné Bohyně prodělalo traumatickou událost, smrt
                královny matky Aurory. Proto její dcera mladá královna Solida
                vydala řadu dektretů, které mají pomoct dopadnout vrahy její
                matky. Kromě toho platí zákony na ochranu občanů a jejich
                osobního vlastnictví. Na dodržování zákonů dbá milice a jejich
                porušení soudí kněžky Jediné Bohyně.
              </Typography>
              <ul>
                <Typography component="li" className={classes.listItem}>
                  <strong>Zákaz volného pohybu osob</strong> z a do města a mezi
                  jednotlivými městskými čtvrtěmi. Strážníci městské milice
                  hlídají všechny brány z města i mezi ctvrtěmi a pouští pouze
                  osoby, které mají povolení od královny (někteří aristokraté a
                  členové Církve Jediné Bohyně). Kdo se pokusí o neoprávněný
                  průchod bude vyslýchán a potrestán odnětím svobody na týden.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  <strong>Zákaz volného nošení zbraní a brnění</strong>. Všechny
                  volně nošené zbraně a brnění budou zabaveny.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  <strong>Ublížení na zdraví</strong> je trestáno odnětím
                  svobody a veřejným zbičováním dle míry zranění a postavení
                  oběti.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  <strong>
                    Zabití, nebo ublížení na zdraví vysoce postavené osoby
                  </strong>{" "}
                  je trestáno případně mučením a následným oběšením.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  <strong>Krádež</strong> je trestána náhradou škody a odenětím
                  svobody přiměřené hodnotě předmětu krádeže a postavení oběti.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  Za <strong>kacířství a čarodejnictví</strong> je považována
                  jakákoliv aktivita při které obviněný praktikuje arkánovou
                  magii, nebo spirituální magii propůjčenou jinou bytostí než
                  Jedinou Bohyní. Trestem je zbičováni, případně zbaveni jazyku,
                  nebo rovnou upálení.
                </Typography>
                <Typography component="li" className={classes.listItem}>
                  <strong>Menší přestupky</strong> jako porušení zákazu
                  vycházení, urážka vysoce postavené osoby, nebo nemravné
                  chování je trestáno peněžitou pokutou, zbičováním, nebo
                  odnětím svobody na několik dní.
                </Typography>
              </ul>
            </ArticleContent>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.callToAction}>
        <Link
          href={`${adventurePathname}/pro-vypravece/scenar`}
          underline="none"
        >
          <Button variant="contained" color="primary">
            Scénář
          </Button>
        </Link>
        &emsp;
        <Link
          href={`${adventurePathname}/pro-vypravece/predmety`}
          underline="none"
        >
          <Button variant="contained" color="primary">
            Předměty
          </Button>
        </Link>
      </div>
    </Page>
  );
}
