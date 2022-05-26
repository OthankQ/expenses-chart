import React, { ReactElement } from 'react';
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
  render() {
    return (
      <StyledDiv>
        {this.props.data.map((data): ReactElement => {
          return <Bar data={data} key={data.day} />;
        })}
      </StyledDiv>
    );
  }
}
