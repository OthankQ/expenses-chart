import * as React from 'react';
import styled from 'styled-components';

import { ChartView } from '../ChartView/ChartView';
import { MonthSummary } from '../MonthSummary/MonthSummary';

export const StyledDiv = styled.div`
  height: 350px;
  padding: 20px 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(33, 100%, 98%);
  .text-container-main {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background-color: hsl(33, 100%, 98%);
  }
  h1 {
    background-color: hsl(33, 100%, 98%);
    font-size: 1.6rem;
    color: hsl(25, 47%, 15%);
  }
  hr {
    border-top: 3px solid hsl(28, 10%, 99%);
    width: 100%;
    margin-bottom: 30px;
  }
`;

type MainProps = {
  data: { day: string; amount: number }[];
};

export class Main extends React.Component<MainProps, {}> {
  render() {
    const { data } = this.props;
    return (
      <StyledDiv>
        <div className="text-container-main">
          <h1>Spending - Last 7 days</h1>
        </div>
        <ChartView data={data} />
        <hr />
        <MonthSummary data={data} />
      </StyledDiv>
    );
  }
}
