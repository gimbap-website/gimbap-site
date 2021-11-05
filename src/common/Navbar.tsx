import React, {useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Button, Drawer, Link } from '@mui/material';
import Stack from '@mui/material/Stack';


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
    );
  };

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
            onClick: handleDrawerOpen,
          }}
        >
        <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: hamburgerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Stack spacing={1} justifyContent="center" alignItems="center">
            <Link href="#" underline="none"><Button>Demo</Button></Link>
            <Link href="#" underline="none"><Button>Document</Button></Link>
          </Stack>
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