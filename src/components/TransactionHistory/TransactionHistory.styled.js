import styled from 'styled-components';

export const Transaction = styled.table`
  margin: 30px auto;
  width: 400px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Head = styled.tr`
  height: 30px;
  background-color: teal;
  color: lightgray;
`;

export const Line = styled.tr`
  height: 30px;
  background-color: #afb1b8;
  &:nth-child(2n) {
    background-color: lightgray;
  }
`;

export const Type = styled.td`
  text-align: center;
  text-transform: capitalize;
`;
