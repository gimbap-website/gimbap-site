import React, {useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Button, Drawer } from '@mui/material';

export default function Navbar() {

  const [mobileView, setMobileView] = useState(false);
  const [hamburgerOpen, setHamburger] = useState(false);

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

  const displayDesktop = () => {
    return (
      <div>
        <Button style={{color: '#655D5D'}} variant="text">Demo</Button>
        <Button style={{color: '#655D5D'}} variant="text">Documentation</Button>
      </div>
    )
  }

  const displayMobile = () => {
    //we create functions handle click actions...
    //const openHamburger = ()=> setHamburger(true);
    //const closeHamburger = ()=> setHamburger(false);
    // const toggleHamburger = ()=> setHamburger(!hamburger);

    const handleDrawerOpen = () => setHamburger(true);
    const handleDrawerClose = () => setHamburger(false);

    return (
      <div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            // onClick: toggleHamburger
            onClick: ()=>console.log('ok')
          }}
        >
        <MenuIcon onClick={()=>console.log('ok')}/>
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: hamburgerOpen,
            onClose: ()=>handleDrawerClose,
          }}
        >
          <div><p>hi khan</p></div>
        </Drawer>
      </div>
    );
  };

  return (
    <div className="dark" id="navbar">
      <div className="logo">gimbap</div>
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  )
}