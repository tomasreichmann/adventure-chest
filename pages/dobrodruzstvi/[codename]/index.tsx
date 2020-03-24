import React, {useState} from 'react';
import Page from '../../../src/components/layout/Page';
import { useRouter } from 'next/router';
import useKontentItem from '../../../src/hooks/useKontentItem';
import { getInitialState } from '../../../src/hooks/usePromise';
import { Adventure } from '../../../src/types';
import StateWrapper from '../../../src/components/utility/StateWrapper';
import AdventureDetail from '../../../src/components/xxx/AdventureDetail';

export default function AdventurePage() {
  const router = useRouter();
  const [adventureState, setAdventureState] = useState(getInitialState<Adventure>());
  const codename = router.query.codename as string;

  useKontentItem<Adventure>(codename, ["name", "perex", "game_system"], setAdventureState);

  const adventure = adventureState.value;

  return (
    <Page>
      <StateWrapper {...adventureState}>
        {adventure ? <AdventureDetail {...adventure} /> : null}
      </StateWrapper>
    </Page>
  );
}
