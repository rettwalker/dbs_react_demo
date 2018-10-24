import React from 'react';

let Navbar = prop => <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" ><h3 className={prop.textColor}>{prop.name}</h3></nav>
export default Navbar 