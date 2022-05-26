import React from 'react';
import styled from 'styled-components';

import { Bar } from '../Bar/Bar';

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  background-color: hsl(33, 100%, 98%);
`;

type ChartViewProps = {
  data: { day: string; amount: number }[];
};

export class ChartView extends React.Component<ChartViewProps, {}> {
  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    return (
      <StyledDiv>
        <Bar data={this.props.data[0]} />
        <Bar data={this.props.data[1]} />
        <Bar data={this.props.data[2]} />
        <Bar data={this.props.data[3]} />
        <Bar data={this.props.data[4]} />
        <Bar data={this.props.data[5]} />
        <Bar data={this.props.data[6]} />
      </StyledDiv>
    );
  }
}
