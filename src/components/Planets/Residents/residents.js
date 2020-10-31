import React, { useEffect, useState } from 'react';
import CustomScrollbars from '../../Scroll/Scroll';
import imgPerson from '../../../assets/images/planets/other/alien_PNG35.png';
import css from './Residents.module.css';
import axios from "axios";
import Spinner from '../../Spinner/Spinner';
import { useSelector } from 'react-redux';


// eslint-disable-next-line react/prop-types
export const Residents = ({apiResidents}) => {

 const [residents, setResidents] = useState([]);
const isLoading = useSelector(state => state.loading);

  useEffect(() => {
    if (apiResidents) {
      setResidents('')
      // eslint-disable-next-line react/prop-types
      apiResidents.map((item) =>
        axios(item).then(({ data }) => setResidents((info) => [...info, data]))
      );
    }
    console.log(residents);
  }, [apiResidents]);


  return (
    <CustomScrollbars style={{ height: 370, top: 10 }}>
    {isLoading && <Spinner />}
      <div className={css.wrapper}>
        <ul className={css.listResident}>
          {residents.length > 0 
          ? residents.map(resident => 
              <>
                <li>
                  <img src={imgPerson} alt="resident" width="150" height="150" />
                  <p className={css.residentName}>{resident.name}</p>
                  <p>Eye color: {resident.eye_color}</p>
                  <p>Skin color: {resident.skin_color}</p>
                  <p>Birth year: {resident.birth_year}</p>
                  <p>Height: {resident.height}</p>
                  <p>Mass: {resident.mass}</p>
                </li>
              </>
            )
           : 
            <div className={css.warning}>
              <p>&#128711; No residents on this planet &#128711;</p>
            </div>
          }
        </ul>
      </div>
    </CustomScrollbars>
  );
};
