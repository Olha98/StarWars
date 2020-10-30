import React from 'react';
// import styled from './NotFound.module.css'
import css from './NotFound.module.css';
import './NotFound.module.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let body = document.body;
    setInterval(createStar, 100);
    function createStar() {
      let right = Math.random() * 500;
      let top = Math.random() * screen.height;
      let star = document.createElement('div');
      star.classList.add('star');
      body.appendChild(star);
      setInterval(runStar, 10);
      star.style.top = top + 'px';
      function runStar() {
        if (right >= screen.width) {
          star.remove();
        }
        right += 3;
        star.style.right = right + 'px';
      }
    }
  });
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
      <div className={css.text}>
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div>Page Not Found</div>
      </div>

      <div className={css.astronaut}>
        <img
          // eslint-disable-next-line max-len
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt="space"
          width="300"
          height="300"
          className={css.src}
        />
      </div>
      <Link to="/" className={css.btnNotFound}>Go Back</Link>
      </div>
    </section>
  );
};
