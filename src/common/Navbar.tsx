import React, {useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Button } from '@mui/material';




export default function Navbar() {

  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const displayMobile = () => {
    //we create functions handle click actions...

    return (
      <div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
          }}
        >
        <MenuIcon />
        </IconButton>
      </div>
    )
  }

  const displayDesktop = () => {
    return (
      <div>
        <Button style={{color: '#655D5D'}} variant="text">Demo</Button>
        <Button style={{color: '#655D5D'}} variant="text">Documentation</Button>
      </div>
    )
  }

  return (
    <div className="dark" id="navbar">
      <div className="logo">gimbap</div>
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  )
}