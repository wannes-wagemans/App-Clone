import React from 'react';
import styled from 'styled-components';

export const Input = ({ type, label }) => {
  const InputStyled = styled.input`
    height: 55px;
    background-color: rgb(250, 250, 250);
    border-radius: 5px;
    border: 1px solid;
    border-color: rgb(200, 200, 200);
    text-align: left;
    padding: 10px;
  `;

  return <InputStyled type={type} placeholder={label} />;
};
