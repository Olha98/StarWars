import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styled from './Spinner.module.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className={styled.loader}>
        <Loader type="Puff" color="#fff" height={100} width={100} timeout={3000} />
      </div>
    );
  }
}
