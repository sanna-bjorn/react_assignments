import React from 'react';
import { Nav, NavLogo, NavLink, Bars, NavMenu } from './index';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle={{ color: 'black' }}>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle={{ color: 'black' }}>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle={{ color: 'black' }}>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default NavBar;
