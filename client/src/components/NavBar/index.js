import React from 'react';
import {
   Button,
   Grid,
   IconButton,
   Toolbar,
   Typography
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';
import useCurrentUser from '../commons/useCurrentUser';
import Logout from '../Auth/Logout';
import ButtonLink from '../commons/ButtonLink';

const Spacing = styled.span`
  padding: 2rem;
`;
const Container = styled.div`
  grid-row: nav-start / nav-end;
  grid-column: popular-start / -1;
  width: 100%;
  height: 100%;
`;

const NavBar = () => {
   const currentUser = useCurrentUser();
   return (
       <Container>
          <Toolbar>
             <Grid direction='row' container justify='space-between'>
                <Button color='primary' variant='text'>Write an article</Button>
                <Typography variant='h4'>Devium</Typography>
                <Grid item>
                   <Spacing>
                      <IconButton>
                         <Search/>
                      </IconButton>
                   </Spacing>
                   {currentUser ?
                       <Logout/>
                       : <React.Fragment>
                          <ButtonLink text='Login' url='/login'
                                      color='primary'
                                      variant='text'/>
                          <ButtonLink text='Register' url='/register'
                                      color='primary' variant='contained'/>
                       </React.Fragment>
                   }
                </Grid>
             </Grid>
          </Toolbar>
       </Container>
   );
};


export default NavBar;
