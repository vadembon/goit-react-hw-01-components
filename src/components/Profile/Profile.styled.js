import styled from 'styled-components';

export const ProfileStyled = styled.div`
  margin: 50px auto 0 auto;
  width: 400px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Description = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  background-color: aqua;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 15px;
`;

export const Location = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 15px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  height: 86px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #afb1b8;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33%;
  &:not(:last-child) {
    border-right: 1px solid #afb1b8;
  }
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: 16px;
  color: gray;
`;

export const Quantity = styled.span`
  margin-top: 8px;
`;
