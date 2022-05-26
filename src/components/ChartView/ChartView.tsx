import React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
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
    return <StyledDiv></StyledDiv>;
  }
}
