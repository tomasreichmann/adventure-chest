import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from '../Link';

const StyleGuideMenu: React.FC = () => {
  return (
    <Box mb={2} p={1} component={Paper}>
      <Link href="/style-guide/state" >State</Link>&emsp;
      <Link href="/style-guide/adventure" >Adventure</Link>&emsp;
      <Link href="/style-guide/character" >Character</Link>&emsp;
      <Link href="/style-guide/typography" >Typography</Link>
    </Box>
  );
}

export default StyleGuideMenu;