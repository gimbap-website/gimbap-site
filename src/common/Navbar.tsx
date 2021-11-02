import React from 'react';
import Button from '@mui/material/Button';


export default function Navbar() {
  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = 84;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  return (
    <div className="dark" id="navbar">
      <div className="logo">gimbap</div>
      <div className="nav-links">
        <Button style={{color: '#655D5D'}} variant="text">Demo</Button>
        <Button style={{color: '#655D5D'}} variant="text">Documentation</Button>
      </div>
    </div>
  )
}