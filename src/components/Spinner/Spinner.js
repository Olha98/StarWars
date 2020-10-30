import React, { Component } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

 export default class Spinner extends Component {

    render() {
     return(
      <Wrapper>
      <Loader
         type="Puff"
         color="#fff"
         height={100}
         width={100}
         timeout={3000}
 
      />
      </Wrapper>
     );
    }
 }

 const Wrapper = styled.div`
   margin: 0;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(0, -50%)
 `