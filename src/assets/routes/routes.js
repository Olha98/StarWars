import React, { lazy, Suspense } from 'react';
import Spinner from '../../components/Spinner/Spinner.js';

const LazyHome = lazy(() => import('../../pages/HomePage'));
const LazyPlanets = lazy(() => import('../../pages/PlanetsPage.js'));
const LazyPlanetInfo = lazy(() => import('../../pages/PlanetInfoPage'));

export default [
  {
    path: '/',
    exact: true,
    component: 
      <Suspense fallback={<Spinner/>}>
        <LazyHome />
      </Suspense>
    
   
  },
 
  {
    path: '/planets',
    exact: true,
    component: 
      <Suspense fallback={<Spinner/>}>
        <LazyPlanets />
      </Suspense>
   
  },
  {
    path: '/planets/:id',
    exact: true,
    component: 
      <Suspense fallback={<Spinner/>}>
        <LazyPlanetInfo />
      </Suspense>
  }
  
];
