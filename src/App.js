import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './assets/routes/routes';
import services from './services/services';

export class App extends Component {
  componentDidMount() {
    this.getFilm();
  }

  getFilm() {
    services.getAllPlanets().then(data => console.log(data));
  }

  render() {
    return (
      <Suspense fallback={<h2>Load.....</h2>}>
        <div>
          <Switch>
            {routes.map(route => <Route key={route.label} {...route} />)}
          </Switch>
        </div>
      </Suspense>
    );
  }
}

export default App;
