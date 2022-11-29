import styled from 'styled-components';

export const StatistcsSection = styled.section`
  margin: 30px auto;
  width: 400px;
  height: 172px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 86px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #afb1b8;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
  &:not(:last-child) {
    border-right: 1px solid #afb1b8;
  }

  &:first-child {
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-bottom-right-radius: 5px;
  }

  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  margin-top: 8px;
`;
