import * as React from 'react';
import styled from 'styled-components';
import logo from '../../imgs/logo.svg';

export const StyledDiv = styled.div`
  height: auto;
  padding: 20px 30px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(10, 79%, 65%);
  color: hsl(27, 66%, 92%);
  .left {
    background-color: hsl(10, 79%, 65%);
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
      background-color: hsl(10, 79%, 65%);
      font-size: 0.8rem;
    }
    h2 {
      background-color: hsl(10, 79%, 65%);
      font-size: 1.4rem;
    }
  }
  .right {
    background-color: hsl(10, 79%, 65%);
    img {
      background-color: hsl(10, 79%, 65%);
      width: 50px;
    }
  }
`;
export type MyBalanceProps = {
  balance: number;
};

export class MyBalance extends React.Component<MyBalanceProps, {}> {
  render() {
    return (
      <StyledDiv>
        <div className="left">
          <p>My balance</p>
          <h2>${this.props.balance}</h2>
        </div>
        <div className="right">
          <img src={logo} alt="logo" />
        </div>
      </StyledDiv>
    );
  }
}
