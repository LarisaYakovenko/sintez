import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  /* min-width: 1440px; */
  /* margin: 0 auto; */
`;
export const Container = styled.div`
  max-width: 480px;

  margin: 0 auto;
  padding: 10px 20px;
  /* display: flex; */
  /* justify-content: end; */
  /* align-items: center; */
  background-color: #1b1b1d;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 0 20px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
    justify-content: space-between;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
    padding: 0;
  }
`;

export const Logo = styled.div`
  width: 300px;
  display: flex;
  /* justify-content: start; */
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyleNavLink = styled(NavLink)`
  display: flex;
  color: #111;

  gap: 12px;
  /* font-size: 8px; */
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;

  &.active {
    color: #81c1ea;
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    display: flex;
    justify-content: end;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    gap: 24px;
  }
`;

export const Item = styled.li`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;
