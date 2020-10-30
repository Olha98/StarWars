import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './assets/routes/routes';
import styled from 'styled-components';
// import { Header } from './components/Header/Header';
import { v4 as uuidv4 } from 'uuid';
import { NotFound } from './components/NotFound/NotFound';


export class App extends Component {

  render() {
    return (
      <>
        {/* <Header /> */}
        <Container>
          <Switch>
            {routes.map(route => 
              <Route key={uuidv4()} {...route}>
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
