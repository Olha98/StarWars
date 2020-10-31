import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import routes from '../../assets/routes/routes';
import { NotFound } from '../NotFound/NotFound';


export class App extends Component {

  render() {
    return (
      <>
        <Container>
          <Switch>
            {routes.map(route => 
              <Route key={uuidv4()} {...route} >
                {route.component}
              </Route>
            )}
            <Route component={NotFound} />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;

const Container = styled.div`
  margin: 0 auto; 
`;
