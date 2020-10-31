import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import residentsOperations from '../../../redux/operations/residentsOperations';
import imgPerson from '../../../assets/images/planets/other/alien_PNG35.png'
import css from './Residents.module.css'

const person = {
  'birth_year': '19 BBY',
  'eye_color': 'Blue',
  'films': [
      'https://swapi.dev/api/films/1/'
  ],
  'gender': 'Male',
  'hair_color': 'Blond',
  'height': '172',
  'homeworld': 'https://swapi.dev/api/planets/1/',
  'mass': '77',
  'name': 'Luke Skywalker',
  'skin_color': 'Fair',
  'created': '2014-12-09T13:50:51.644000Z',
  'edited': '2014-12-10T13:52:43.172000Z',
  'species': [
      'https://swapi.dev/api/species/1/'
  ],
  'starships': [
      'https://swapi.dev/api/starships/12/'
  ],
  'url': 'https://swapi.dev/api/people/1/',
  'vehicles': [
      'https://swapi.dev/api/vehicles/14/'
  ]
}


export const Residents = () => {

  const dispatch = useDispatch();
  const currentPlanet = useSelector(state => state.onePlanet);

  dispatch(residentsOperations.getResidents(currentPlanet.residents));

  return (
    <div className={css.wrapper}>
    <ul className={css.listResident}>
    <img src={imgPerson} alt='resident' width='150' height='150'/>
    <li>Name: {person.name}</li>
    <li>Eye color: {person.eye_color}</li>
    <li>Skin color: {person.skin_color}</li>
    <li>Birth year: {person.birth_year}</li>
    <li>Height: {person.height}</li>
    <li>Mass: {person.mass}</li>
   </ul>
   </div>
  )
}
