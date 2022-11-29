import styled from 'styled-components';

export const Status = styled.span`
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${prop => {
    return prop.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  margin-left: 20px;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: 500;
  margin-left: 20px;
`;
