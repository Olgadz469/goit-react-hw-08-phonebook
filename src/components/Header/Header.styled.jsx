import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  padding: 15px;
  min-height: 100px;
  background-color: #f2f4f7;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavigLink = styled(NavLink)`
  color: #101828;

  &#favs {
    position: relative;
  }

  &#favs div {
    font-size: 16px;
    position: absolute;
    top: 0;
    right: -25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 5px;
    background-color: #e44848;
    color: #fff;
  }
`;
