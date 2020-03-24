import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '../Link';

const StyleGuideMenu: React.FC = () => {
  return (
    <Box mb={2}>
      <Link href="/style-guide/state" >State</Link>&emsp;
      <Link href="/style-guide/adventure" >Adventure</Link>
    </Box>
  );
}

export default StyleGuideMenu;