import React from 'react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(33, 100%, 98%);
  gap: 5px;
  padding-bottom: 10px;
  span {
    font-size: 0.8rem;
    color: hsl(28, 10%, 53%);
    background-color: hsl(33, 100%, 98%);
  }
  .today {
    background-color: hsl(186, 34%, 60%);
  }
`;

export const StyledBar = styled.div`
  height: 70px;
  width: 35px;
  background-color: hsl(10, 79%, 65%);
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledTooltip = styled.div`
  width: 100%;
  height: 22px;
  background-color: hsl(25, 47%, 15%);
  padding: 2px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  span {
    color: hsl(33, 100%, 98%);
    background-color: hsl(25, 47%, 15%);
  }
`;

type BarProps = {
  data: { day: string; amount: number };
};

type BarState = {
  displayValue: string;
};

export class Bar extends React.Component<BarProps, BarState> {
  constructor(props: BarProps) {
    super(props);
    this.state = {
      displayValue: '0',
    };
  }

  render() {
    return (
      <StyledContainer>
        <StyledTooltip style={{ opacity: this.state.displayValue }}>
          <span>${this.props.data.amount}</span>
        </StyledTooltip>
        <StyledBar
          className={this.props.data.day === 'wed' ? 'today' : ''}
          style={{ height: (this.props.data.amount / 51) * 100 }}
          onMouseEnter={(e) => {
            this.setState({ displayValue: '100' });
          }}
          onMouseLeave={(e) => {
            this.setState({ displayValue: '0' });
          }}
        />
        <span>{this.props.data.day}</span>
      </StyledContainer>
    );
  }
}
