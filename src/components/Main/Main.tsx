import * as React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 350px;
  padding: 20px 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(33, 100%, 98%);
`;

export class Main extends React.Component<{}, {}> {
  render() {
    return <StyledDiv></StyledDiv>;
  }
}
