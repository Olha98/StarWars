import React from 'react';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const Home = () => {
  return (
    <div className={css.homeWrapper}>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css" />
      <h1 className={css.homeTitle}>
        <em>S</em>
        <em className={css.planetLeft}>T</em>
        <em>A</em>
        <em>R</em>
        <em className={css.planetLight}>&#9885;</em>
        <em>W</em>
        <em>A</em>
        <em>R</em>
        <em>S</em>
      </h1>
      <Link to="/planets" className='button'>
        Go to catalog of planets
      </Link>
    </div>
  );
};

export default Home;
