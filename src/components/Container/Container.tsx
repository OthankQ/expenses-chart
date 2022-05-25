import React from 'react';
import styled from 'styled-components';

import { MyBalance } from '../MyBalance/MyBalance';
import { Main } from '../Main/Main';

import Data from '../../data/data.json';

export const StyledContainer = styled.div`
  width: 33vw;
  min-width: 300px;
  height: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 100px auto;
`;

export class Container extends React.Component<{}, {}> {
  componentDidMount() {
    console.log(Data);
  }

  render() {
    return (
      <StyledContainer>
        <MyBalance balance={921.48} />
        <Main />
      </StyledContainer>
    );
  }
}
