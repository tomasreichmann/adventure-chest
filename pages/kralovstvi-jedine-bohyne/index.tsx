import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Page from "../../src/components/layout/Page";
import Link from "../../src/components/Link";
import FlavorText from "../../src/components/content/FlavorText";
import ImageFrame from "../../src/components/layout/ImageFrame";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  name: {
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
  perex: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.h6.fontSize
  },
  flavor: {
    marginBottom: theme.spacing(2),
    fontStyle: "italic"
  },
  callToAction: {
    textAlign: "right"
  }
}));

const thisUrl = `/kralovstvi-jedine-bohyne`;

export default function AdventurePage() {
  const classes = useStyles();
  const { pathname } = useRouter();
  return (
    <Page>
      <ImageFrame url="https://www.wallpaperup.com/uploads/wallpapers/2013/10/28/166434/4d6aa48d8af7e38d1a966736aa0cf0bd.jpg" />
      <Typography variant="h2" className={classes.name}>
        Království Jediné Bohyně
      </Typography>
      <div className={classes.tags}>
        <Chip color="secondary" className={classes.tag} label="Dungeons &amp; Dragons 5e" />
        <Chip color="secondary" className={classes.tag} label="Úroveň 1-3" />
        <Chip color="secondary" className={classes.tag} label="Počet hráčů: 3-5" />
        <Chip color="secondary" className={classes.tag} label="Délka: 10h" />
      </div>
      <Typography variant="subtitle1" className={classes.perex}>
        Dobrodružství o kradmosti, vynalézavosti, boji proti útlaku a o tom, kam
        až je člověk ochoten zajít, aby se zachránil.
      </Typography>
      <FlavorText className={classes.flavor}>
        Tvoje připlutí do Meridie, hlavního města Království Jediné Bohyně
        nemohlo být hůře načasované. Mladá královna Solida vynesla dekret
        zakazující volný pohyb osob ve městě a uzavřela všechny brány města.
        Jednotky městských milicí korzují ulicemi a hrubě vyslýchají všechny, co
        jim zkříží cestu. Všichni hledají zločince, kteří zavraždili královninu
        matku. Každý je podezřelý a na nikoho nebude brán ohled. Ceny jídla
        závratně stoupají, občané trpí hlady, jen bohatá aristokracie a církev
        si hoví za vysokými zdmi, v honosných sálech, na bohatých hostinách. Ty
        a další cizinci jste nyní odkázáni na milost a nemilost drsné a špinavé
        přístavní čtvrti, nebo spíše na své skryté schopnosti a vynalézavost.
        Zoufalé časy žádají zoufalé činy. Vydejte se na nebezpečnou cestu
        temnými uličkami města mimo zraky všudypřítomných stráží a opatrně
        získejte to, co vám vykořisťující šlechta nedá dopřát.
      </FlavorText>
      <div className={classes.callToAction}>
        <Link underline="none" href={`${thisUrl}/pro-vypravece`}>
          <Button variant="contained" color="secondary">
            Informace pro vypravěče
          </Button>
        </Link>
        &emsp;
        <Link underline="none" href={`${thisUrl}/pro-hrace`}>
          <Button variant="contained" color="primary">
            Informace pro hráče
          </Button>
        </Link>
      </div>
    </Page>
  );
}
