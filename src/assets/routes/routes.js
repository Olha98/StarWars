import React, { lazy, Suspense } from 'react';
import Spinner from '../../components/Spinner/Spinner.js';

const LazyHome = lazy(() => import('../../pages/HomePage'));
const LazyPlanets = lazy(() => import('../../pages/PlanetsPage.js'));
const LazyPlanetInfo = lazy(() => import('../../pages/PlanetInfoPage'));

export default [
  {
    path: '/',
    label: 'LazyHome',
    exact: true,

    component: 
      <Suspense fallback={<Spinner/>}>
        <LazyHome />
      </Suspense>
    ,
    private: false,
    restricted: false
  },
 
  {
    path: '/planets',
    label: 'LazyPlanets',
    exact: true,

    component: 
      <Suspense fallback={<Spinner/>}>
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
      <Suspense fallback={<Spinner/>}>
        <LazyPlanetInfo />
      </Suspense>
    ,
    private: false,
    restricted: false
  }
  
];
