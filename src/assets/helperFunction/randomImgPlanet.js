import planet1 from '../images/planets/1.gif';
import planet2 from '../images/planets/2.gif';
import planet3 from '../images/planets/3.gif';
import planet4 from '../images/planets/4.gif';
import planet5 from '../images/planets/5.gif';
import planet6 from '../images/planets/6.gif';
import planet7 from '../images/planets/7.gif';
import planet8 from '../images/planets/8.gif';
import planet9 from '../images/planets/9.gif';
import planet10 from '../images/planets/10.gif';
import planet11 from '../images/planets/11.gif';

import staticImgPlanet1 from '../images/staticPlanets/1.png'
import staticImgPlanet2 from '../images/staticPlanets/2.png'
import staticImgPlanet3 from '../images/staticPlanets/3.png'
import staticImgPlanet4 from '../images/staticPlanets/4.png'
import staticImgPlanet5 from '../images/staticPlanets/5.png'
import staticImgPlanet7 from '../images/staticPlanets/7.png'
import staticImgPlanet8 from '../images/staticPlanets/8.png'
import staticImgPlanet9 from '../images/staticPlanets/9.png'
import staticImgPlanet11 from '../images/staticPlanets/11.png'


export const getImagePlanet = () => {
  const arrayPlanets = [
    planet1,
    planet2,
    planet3,
    planet4,
    planet5,
    planet6,
    planet7,
    planet8,
    planet9,
    planet10,
    planet11
  ];

  let rand = arrayPlanets[Math.floor(Math.random() * arrayPlanets.length)];
  return rand;
};

export const getStaticImagePlanet = () => {
  const arrayStaticPlanets = [
    staticImgPlanet1,
    staticImgPlanet2,
    staticImgPlanet3,
    staticImgPlanet4,
    staticImgPlanet5,
    staticImgPlanet7,
    staticImgPlanet8,
    staticImgPlanet9,
    staticImgPlanet11
  ];

  let rand = arrayStaticPlanets[Math.floor(Math.random() * arrayStaticPlanets.length)];
  return rand;
};

