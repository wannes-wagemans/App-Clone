import React from 'react';
import styled from 'styled-components';

export const Line = ({ text, margin }) => {
  const LineContainer = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    width: 100%;
    margin: ${margin && '10px 0'};

    > hr {
      border: solid rgb(240, 240, 240);
      border-width: 0 0 thin;
      width: 100%;
    }

    > div {
      border: 1px solid rgb(240, 240, 240);
      padding: 0.5em 4em;
      border-radius: 5px;

      > p {
        font-size: 14px;
        font-weight: 500;
      }
    }
  `;

  return (
    <LineContainer>
      {text ? (
        <>
          <hr />
          <div>
            <p>{text}</p>
          </div>
          <hr />
        </>
      ) : (
        <hr />
      )}
    </LineContainer>
  );
};
