import React, { Component } from 'react';
import './style.css';

export const About = (props) => {
  const { childToParent, data, data1 } = props;

  return (
    <div>
      <button primary onClick={props.childToParent}>
        Click Child {props.data1}{' '}
      </button>
      {props.data1}{' '}
    </div>
  );
};
export default About;
