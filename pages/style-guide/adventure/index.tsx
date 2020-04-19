import React from "react";
import Page from "../../../src/components/layout/Page";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StyleGuideMenu from "../../../src/components/styleGuide/StyleGuideMenu";

import FlavorText from "../../../src/components/content/FlavorText";
import Tip from "../../../src/components/content/Tip";
import Danger from "../../../src/components/content/Danger";
import Challenge from "../../../src/components/content/Challenge";
import Outcome from "../../../src/components/content/Outcome";

import IconD20 from "../../../src/components/icons/IconD20";
import IconD12 from "../../../src/components/icons/IconD12";
import IconD10 from "../../../src/components/icons/IconD10";
import IconD8 from "../../../src/components/icons/IconD8";
import IconD6 from "../../../src/components/icons/IconD6";
import IconD4 from "../../../src/components/icons/IconD4";
import Dice from "../../../src/components/content/Dice";
import ForGm from "../../../src/components/content/ForGm";
import DnDAttribute from "../../../src/dnd/components/DnDAttribute";
import DnDDefense from "../../../src/dnd/components/DnDDefense";
import FlowDiagram from "../../../src/components/content/FlowDiagram/FlowDiagram";
import FlowProcess from "../../../src/components/content/FlowDiagram/FlowProcess";
import Columns from "../../../src/components/layout/Columns";
import Flowline from "../../../src/components/content/FlowDiagram/Flowline";
import { Paper } from "@material-ui/core";
import ImageFrame from "../../../src/components/layout/ImageFrame";

export default function StyleGuideAdventurePage() {
  // const error = new Error("Oops! This is a test error. Just ignore me. Now seriously, there is nothing to worry about. This is just a test.")
  return (
    <Page>
      <StyleGuideMenu />
      <Grid container spacing={3}>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Flavor text</Typography>
          <FlavorText>
            Text, který navozuje atmosféru a vypravěč ho často čte slovo od
            slova hráčům jako úvod do scény.
          </FlavorText>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Tip</Typography>
          <Tip>Text, který upozorňuje, nebo radí vypravěči.</Tip>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Hrozba</Typography>
          <Danger>Text, který uvádí hrozbu pro hráče.</Danger>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Pro vypravěče</Typography>
          <ForGm>
            Tento text vysvětluje něco, co by si měl vypravěč nechat pro sebe.
          </ForGm>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Dice icons</Typography>
          <div>
            <IconD20 />
            &emsp;
            <IconD12 />
            &emsp;
            <IconD10 />
            &emsp;
            <IconD8 />
            &emsp;
            <IconD6 />
            &emsp;
            <IconD4 />
          </div>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Dice component</Typography>
          <div>
            <Dice>d20</Dice>&emsp;
            <Dice>d12+3</Dice>&emsp;
            <Dice>2d10</Dice>&emsp;
            <Dice>1d8+3</Dice>&emsp;
            <Dice>3d6</Dice>&emsp;
            <Dice>3d4+1</Dice>
          </div>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">DnDAttribute</Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
              gridGap: 10,
            }}
          >
            <DnDAttribute
              bonus={3}
              attribute="STR"
              savingThrowBonus={5}
              savingThrowProficient
            />
            <DnDAttribute bonus={1} attribute="DEX" savingThrowBonus={1} />
            <DnDAttribute
              bonus={2}
              attribute="CON"
              savingThrowBonus={4}
              savingThrowProficient
            />
            <DnDAttribute bonus={0} attribute="INT" savingThrowBonus={0} />
            <DnDAttribute bonus={1} attribute="WIS" />
            <DnDAttribute bonus={-1} attribute="CHA" />
          </div>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">DnDDefense</Typography>
          <div style={{ maxWidth: 80 }}>
            <DnDDefense ac={10} />
          </div>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          <Typography variant="h6">Výzva</Typography>
          <Challenge
            title="Záchranný hod na Obratnost"
            description="Máš šanci na poslední chvíli uskočit před padající kovadlinou"
          >
            <Outcome condition="10+">
              Podařilo se ti uskočit a kovadlina se s řachnutím zabořila do
              země.
            </Outcome>
            <Outcome variant="error">
              10
              <IconD10 height="1.5em" /> drtivé zranění kovadlinou do hlavy
            </Outcome>
          </Challenge>
        </Grid>
        <Grid item sm={12} md={8} lg={6}>
          <Typography variant="h6">Flow Diagram</Typography>
          <FlowDiagram columns={2} minWidth="200px">
              <Paper>
                <Box p={2}>
                  <Columns columns={1} minWidth="auto">
                    <ImageFrame uri="https://orig00.deviantart.net/158b/f/2012/276/1/e/spider_playmat_by_velinov-d5gneus.jpg" />
                    <Typography variant="h4" >Útěk před pavoukem</Typography>
                    <Typography variant="body2">Obří pavouk se spustil ze stropu.</Typography>
                    <Challenge
                      title="Atletika"
                      description="Bereš nohy na ramena."
                    >
                      <Outcome condition="10+">Máš náskok</Outcome>
                      <Outcome variant="error">
                        Natáhl sis sval: máš nevýhodu na Atletiku do dlouhého odpočinku
                      </Outcome>
                    </Challenge>
                  </Columns>
              </Box>
              </Paper>
            <Flowline column="1" top bottomArrow right />
            <Flowline column="2" left bottomArrow />
            <FlowProcess column="1">2. Překážka A...</FlowProcess>
            <FlowProcess column="2">2. Překážka B...</FlowProcess>
            <Flowline column="1" top bottomArrow />
            <Flowline column="2" row="4 / 7" top bottomArrow />
            <FlowProcess column="1">3. Překážka...</FlowProcess>
            <Flowline column="1" top bottomArrow />
            <FlowProcess column="1 / -1">Konec</FlowProcess>
          </FlowDiagram>
        </Grid>
      </Grid>
    </Page>
  );
}
