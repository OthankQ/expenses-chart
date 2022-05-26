import React from 'react';
import styled from 'styled-components';

import { MyBalance } from '../MyBalance/MyBalance';
import { Main } from '../Main/Main';

import Data from '../../data/data.json';

export const StyledContainer = styled.div`
  width: 420px;
  min-width: 400px;
  height: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 100px auto;
  @media (max-width: 480px) {
    width: 90vw;
  }
  hr {
    border-top: 1px solid grey;
  }
`;

export class Container extends React.Component<{}, {}> {
  componentDidMount() {}

  render() {
    return (
      <StyledContainer>
        <MyBalance balance={921.48} />
        <Main data={Data} />
      </StyledContainer>
    );
  }
}
