import React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(33, 100%, 98%);
  .left {
    background-color: hsl(33, 100%, 98%);
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
      background-color: hsl(33, 100%, 98%);
      color: hsl(28, 10%, 53%);
      font-size: 0.8rem;
    }
    h2 {
      background-color: hsl(33, 100%, 98%);
      font-size: 1.8rem;
      color: hsl(25, 47%, 15%);
    }
  }
  .right {
    background-color: hsl(33, 100%, 98%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
      background-color: hsl(33, 100%, 98%);
      color: hsl(28, 10%, 53%);
      font-size: 0.8rem;
    }
    span {
      background-color: hsl(33, 100%, 98%);
      font-size: 0.8rem;
    }
    h2 {
      background-color: hsl(33, 100%, 98%);
      font-size: 1.4rem;
    }
  }
`;

type MonthSummaryProps = {
  data: { day: string; amount: number }[];
};

export class MonthSummary extends React.Component<MonthSummaryProps, {}> {
  componentDidMount() {}

  render() {
    return (
      <StyledDiv>
        <div className="left">
          <p>Total this month</p>
          <h2>${478.33}</h2>
        </div>
        <div className="right">
          <span>+2.4%</span>
          <p>from last month</p>
        </div>
      </StyledDiv>
    );
  }
}
