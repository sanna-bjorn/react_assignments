import React from 'react';
import { Nav, NavLogo, NavLink, Bars, NavMenu } from './index';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>Cool Company</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle={{ color: 'black' }}>
            Home
          </NavLink>
          <NavLink to='/shop' activeStyle={{ color: 'black' }}>
            Shop
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
