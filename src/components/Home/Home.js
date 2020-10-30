/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import './HomePage.module.css';

const Home = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css" />
      <h1>
        <em>S</em>
        <em class="planet left">T</em>
        <em>A</em>
        <em>R</em>
        <em class="planet right">&#9885;</em>
        <em>W</em>
        <em>A</em>
        <em>R</em>
        <em>S</em>
      </h1>
        <Link to="/planets" className={css.btnHome}>Go to catalog of planets</Link>
    </div>
  );
};

export default Home;

