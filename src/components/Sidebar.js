import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/cames">
        Moje dojścia
      </a>
      <a className="menu-item" href="/stats">
        Statystyki
      </a>
      <a className="menu-item" href="/info">
        Informacje
      </a>
      <a className="menu-item" href="/creators">
        O twórcach
      </a>
    </Menu>
  );
} 