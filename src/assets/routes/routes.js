import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Planets',
    exact: true,
    component: lazy(() => import('../../pages/PlanetsPage.js')),
    private: false,
    restricted: false
  },
  {
    path: '/residents',
    label: 'Residents',
    exact: true,
    component: lazy(() => import('../../pages/ResidentsPage')),
    private: false,
    restricted: false
  }
  // {
  //   path: '/profile/avatar',
  //   label: 'Avatar',
  //   exact: true,
  //   component: lazy(() => import('./views/AvatarPage')),
  //   private: false,
  //   restricted: false
  // },
  // {
  //   path: '/checklist',
  //   label: 'CheckList',
  //   exact: true,
  //   component: lazy(() => import('./views/CheckListPage')),
  //   private: false,
  //   restricted: false
  // }
];





// import React, {Suspense, lazy } from 'react'


// const LazyStartGame = lazy(() => import('../../pages/StartGamePage'));
// const LazyGame = lazy(() => import('../../pages/GamePage'));
// const LazyGameOver = lazy(() => import('../../pages/GameOverPage'));



// export default [
//   {
//     path: '/planets',
//     label: 'Planets',
//     exact: true,
//     component: (
//       <Suspense fallback={null}>
//         <LazyStartGame/>
//       </Suspense>
//     ),
//     private: false,
//     restricted: false
//   },

//   {
//     path: '/planets/:name',
//     label: 'PlanetName',
//     exact: true,
//     component: (
//       <Suspense fallback={null}>
//         <LazyGame/>
//       </Suspense>
//     ),
//     private: false,
//     restricted: false
//   },
//   {
//     path: '/game_over',
//     label: 'Game_over',
//     exact: true,
//     component: (
//       <Suspense fallback={null}>
//         <LazyGameOver/>
//       </Suspense>
//     ),
//     private: false,
//     restricted: false
//   }
// ]