import React, { lazy, Suspense } from 'react';

const LazyPlanets = lazy(() => import('../../pages/PlanetsPage.js'));
const LazyPlanetInfo = lazy(() => import('../../pages/PlanetInfoPage'));

export default [
  {
    path: '/planets',
    label: 'LazyPlanets',
    exact: true,

    component: 
      <Suspense fallback={<h2>LOSD</h2>}>
        <LazyPlanets />
      </Suspense>
    ,
    private: false,
    restricted: false
  },
  {
    path: '/planets/:name',
    label: 'LazyPlanets',
    exact: true,

    component: 
      <Suspense fallback={<h2>LOSD</h2>}>
        <LazyPlanetInfo />
      </Suspense>
    ,
    private: false,
    restricted: false
  }
  
];
