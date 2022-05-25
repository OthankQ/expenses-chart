import * as React from 'react';
import styled from 'styled-components';

import { MyBalance } from '../MyBalance/MyBalance';

export const StyledContainer = styled.div`
  width: 300px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
`;

export class Container extends React.Component<{}, {}> {
  render() {
    return (
      <StyledContainer>
        <MyBalance balance={921.48} />
      </StyledContainer>
    );
  }
}
