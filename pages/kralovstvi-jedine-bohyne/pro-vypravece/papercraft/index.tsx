import React from "react";
import Page from "../../../src/components/layout/Page";
import Link from "../../../src/components/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Tip from "../../../src/components/content/Tip";
import Container from "@material-ui/core/Container";

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

export interface IFaceProps extends React.CSSProperties {
  Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}

const Face: React.FC<IFaceProps> = (props) => {
  const {Component} = props;
  return <Component className={} />
}
Face.defaultProps = {
  Component: "div"
}

export default function AdventurePapercraftPage() {
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

      <Container maxWidth="md" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href={adventurePathname}>
            Království Jediné Bohyně
          </Link>
          <Typography color="textPrimary">Informace pro vypravěče</Typography>
        </Breadcrumbs>
        <Typography variant="h2" className={classes.title}>
          Informace pro vypravěče
        </Typography>
        <Typography variant="body1" className={classes.para}>
          Dobrodružství Království Jediné Bohyně je o tom, jak se prosadit proti výrazně silnějším oponentům.
          Hrdinové běžně přijdou do kontaktu se strážníky milice, kteří jsou skvěle vycvičení (5. úroveň) a vybavení (kroužková zbroj).
          Královniny dekrety navíc zakazují otevřené nošení zbraní a brnění. To znamená, že postavy budou mít proti nim vždy velkou nevýhodu a bude lepší se boji s nimi vyhnout buď plížením, nebo útěkem.
        </Typography>

        <Tip className={classes.para}>
          Je dobré ukázat předzvěst toho, jak nebezpeční strážníci milice opravdu jsou. Např. scéna, kde na strážníka zaútočí přesila běžných občanů a on je přesto všechny zbije.
        </Tip>

        <Typography variant="h3" className={classes.title}>
          Plížení
        </Typography>

        <Typography variant="body1" className={classes.para}>
          Aby bylo plížení pro hráče zábavné, musí navozovat přiměřené množství dramatu, ale zároveň být dost výhodnou taktikou na překonání nástrah. Počítejte s 60% - 80% úspěšností plížení, aby hráči považovali plížení výhodnou taktiku. Strážníci milice mají poměrně nízké Vnímání, to ale samo o sobě nestačí.
        </Typography>

        <Tip className={classes.para}>
          Pokud je postava dál než 6 sáhů od nepřítele, neupoutává na sebe pozornost (hluk) a nepříteli něco brání ho vidět (tma, částečné krytí, mimo pohled strážníka), řekněme že hráč je skrytý (automaticky uspěl).<br />
          Pokud je postava 6 sáhů od nepřítele, nebo blíže, ale nepříteli stále něco brání ho vidět, ať háže hráč Skrýváním proti pasivnímu Vnímání.<br />
          Pokud je nepřítel rozptýlený, oslňený, nebo mu něco brání slyšet, ať háže hráč s výhodou.<br />
          Počítejme s tím, že nepřátelé vidí v kuželu 90° ve směru, kterým jsou otočeni.
        </Tip>

        <Typography variant="body1" className={classes.para}>
          Strážník nezmusí postavu zpozorovat hned při prvním nezdařeném hodu. Dokud má hráčova postava nějaké krytí, stále je šance, že ho strážník nebude pronásledovat. Pokud strážník postavu přecejen odhalí, ještě není konec. Strážníci reagují různě podle toho v jaké oblasti se vůdči postavě nacházejí.
        </Typography>

        <Tip className={classes.para}>
          Příklad ve veřejném prostoru (např. náměstí v noci):<br />
          Hráč se skrývá v částečném krytí před strážníkem vedle stánku a nepodařil se mu hod na Skrývání.<br />
          Strážník se zastaví, dívá se na stánek a povídá: "Je tam někdo?"<br />
          Hráč se nyní může pokusit stáhnout za stánek, čímž by získal plné krytí a tím pádem by ho strážník neviděl (na to si nemusí házet), <br />
          nebo zde chce zůstat a může si opět hodit na Skrývání, tentokrát ale s nevýhodou, protože ho strážník sleduje.<br />
          Hráčovi se hod opět nesdaří<br />
          Strážník se vydá opatrnou chůzí směrem ke stánku svítí si lucernou.<br />
          Pokud hráčova postava přijde o veškeré krytí (lampa, pozice strážného), nebo pokud strážný přijde na dosah, postava je odhalena.<br />
          V tom případě strážník vytáhne obušek a pohrozí postavě: "Přestaň se tady plížit, jako krysa. Koukej zalézt do díry odkud jsi vylezl, než tě přetáhnu"
        </Tip>

        <Tip className={classes.para}>
          Příklad odhalení v soukromém prostoru (např. cizí dům):<br />
          Pan domácí odhalí hráčovu postavu a zakřičí: "Á, tys mě ale vyděsil. Koukej odsud vypadnout, než zavolám stráže"<br />
          Pokud postava neodejde, pan domácí uteče na ulici a bude volat milice<br />
          Pokud strážník najde postavu v domě, už se s ním nebude vybavovat a ihned ho přetáhne obuškem, nebo se ho pokusí chytit. Následně ho odvede do vězení.
        </Tip>

        <Tip className={classes.para}>
          Příklad odhalení v bojovém prostoru (např. královský palác po odhalení vraždy královny):<br />
          Stráž tasí šavli, zakřičí: "Ha! Teď zemřeš, ty jeden vrahoune." A zaútočí.<br />
        </Tip>

        <Typography variant="body1" className={classes.para}>
          Je důležité uvědomit si, že to zdali je prostor považován za veřejný, soukromý, nebo bojový záleží hodně na tom, kdo koho odhalí. Pokud postavu odhalí služebná, nebude se rozhodně pokoušet postavu zabít. Navíc pokud postava vypadá jako služebná, nemusí vůbec považovat postavu za podezřelou.
        </Typography>

        <Typography variant="h3" className={classes.title}>
          Zákon
        </Typography>

        <Typography variant="body1" className={classes.para}>
          Království Jediné Bohyně prodělalo traumatickou událost, smrt královny matky Aurory. Proto její dcera mladá královna Solida vydala řadu dektretů, které mají pomoct dopadnout vrahy její matky. Kromě toho platí zákony na ochranu občanů a jejich osobního vlastnictví.
        </Typography>
        <ul>
          <Typography variant="body1" component="li" className={classes.listItem}>
            Zákaz volného pohybu osob z a do města a mezi jednotlivými městskými čtvrtěmi. Strážníci městské milice hlídají všechny brány z města i mezi ctvrtěmi a pouští pouze osoby, které mají povolení od královny (někteří aristokraté a členové Církve Jediné Bohyně). Kdo se pokusí o neoprávněný průchod bude vyslýchán a potrestán odnětím svobody na týden.
          </Typography>
          <Typography variant="body1" component="li" className={classes.listItem}>
            Zákaz volného nošení zbraní a brnění. Všechny volně nošené zbraně a brnění budou zabaveny.
          </Typography>

          <Typography variant="body1" component="li" className={classes.listItem}>
            Ublížení na zdraví je trestáno odnětím svobody a veřejným zbičováním dle míry zranění a postavení oběti.
          </Typography>
          <Typography variant="body1" component="li" className={classes.listItem}>
            Zabití, nebo ublížení na zdraví vysoce postavené osoby je trestáno případně mučením a následným oběšením.
          </Typography>
          <Typography variant="body1" component="li" className={classes.listItem}>
            Krádež je trestána náhradou škody a odenětím svobody přiměřené hodnotě předmětu krádeže a postavení oběti.
          </Typography>
          <Typography variant="body1" component="li" className={classes.listItem}>
            Menší přestupky jako porušení zákazu vycházení, urážka vysoce postavené osoby, nebo nemravné chování je trestáno peněžitou pokutou, zbičováním, nebo odnětím svobody na několik dní.
          </Typography>
        </ul>
      </Container>

    </Page>
  );
}
