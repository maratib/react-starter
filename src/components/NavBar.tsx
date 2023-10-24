import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name?: string;
};

const NavBar = ({ name }: Props) => {
  return (
    <nav>
      <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/books">Books</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;