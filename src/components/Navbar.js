import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        Profile
      </div>
      <div className='nav-items'>
        <Link to='/'>About</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/education'>Education</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/interest'>Interest</Link>
      </div>
    </>
  );
};

export default Navbar;
