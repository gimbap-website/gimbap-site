import React from 'react';
import Button from '@mui/material/Button';


export default function Navbar() {

  return (
    <div className="dark" id="navbar">
      <div className="logo">gimbap</div>
      <div>
        <Button style={{color: '#655D5D'}} variant="text">Demo</Button>
        <Button style={{color: '#655D5D'}} variant="text">Documentation</Button>
      </div>
    </div>
  )
}