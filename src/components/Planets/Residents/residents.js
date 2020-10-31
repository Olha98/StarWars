import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import axios from 'axios';

import imgPerson from '../../../assets/images/planets/other/alien_PNG35.png';
import CustomScrollbars from '../../Scroll/Scroll';
import Spinner from '../../Spinner/Spinner';
import styled from './Residents.module.css';

export const Residents = ({ apiResidents }) => {
  const [residents, setResidents] = useState([]);
  const isLoading = useSelector(state => state.loading);

  useEffect(() => {
    if (apiResidents) {
      setResidents('');
      apiResidents.map(item => axios(item).then(({ data }) => setResidents(info => [...info, data])));
    }
  }, [apiResidents]);

  return (
    <CustomScrollbars style={{ height: 370, top: 10 }}>
      {isLoading && <Spinner />}
      <div className={styled.wrapper}>
        <ul className={styled.listResident}>
          {residents.length > 0 ? 
            residents.map(resident => 
              <>
                <li key={uuidv4()}>
                  <img src={imgPerson} alt="resident" width="150" height="150" />
                  <p className={styled.residentName}>{resident.name}</p>
                  <p>Eye color: {resident.eye_color}</p>
                  <p>Skin color: {resident.skin_color}</p>
                  <p>Birth year: {resident.birth_year}</p>
                  <p>Height: {resident.height}</p>
                  <p>Mass: {resident.mass}</p>
                </li>
              </>
            )
           : 
            <div className={styled.warning}>
              <p>&#128711; No residents on this planet &#128711;</p>
            </div>
          }
        </ul>
      </div>
    </CustomScrollbars>
  );
};

Residents.propTypes = {
  apiResidents: PropTypes.array.isRequired
};
