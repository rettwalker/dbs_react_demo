import React from 'react';

let Navbar = (props) => <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" ><h3 className={props.textColor}>{props.name}</h3></nav>
export default Navbar 