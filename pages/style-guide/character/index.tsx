import React from "react";
import Page from "../../../src/components/layout/Page";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyleGuideMenu from "../../../src/components/styleGuide/StyleGuideMenu";
import { mockDnDCharacter } from "../../../src/dnd";
import DnDCharacterBlock from "../../../src/dnd/components/DnDCharacterBlock";
import Container from "@material-ui/core/Container";
import MinorCharacter from "../../../src/components/content/character/MinorCharacter";
import ScriptContent from "../../../src/components/content/ScriptContent";
import InventoryContent from "../../../src/components/content/InventoryContent";
import DnDMoney from "../../../src/dnd/components/DnDMoney";

export default function StyleGuideCharacterPage() {
  return (
    <Page>
      <StyleGuideMenu />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Typography variant="h2">MinorCharacter (minimal)</Typography>
            <br />
            <MinorCharacter name="Octavia Sadařka">
              <Typography>
                Matriarcha sadařské rodiny v Meridii. Sestra Felixe, matka Ancie
                a dobrodruhů.
              </Typography>
            </MinorCharacter>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h2">MinorCharacter (all)</Typography>
            <br />
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
                  Matriarcha sadařské rodiny v Meridii. Sestra Felixe, matka Ancie
                  a dobrodruhů.
                </Typography>
              </ScriptContent>
              <InventoryContent>
                <Typography>
                  <DnDMoney pp={1} gp={2} ep={3} sp={4} cp={5} />
                </Typography>
              </InventoryContent>
            </MinorCharacter>
          </Grid>
          <Grid item>
            <Typography variant="h2">DnDCharacterBlock</Typography>
            <DnDCharacterBlock {...mockDnDCharacter} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
