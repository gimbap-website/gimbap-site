import React from "react"
import Credits from "./product-page/Credits"
import NavBar from "./common/Navbar"
import Features from "./product-page/Features"
import Splash from "./product-page/Splash"
import Divider from "./product-page/Divider"
import Downloads from "./product-page/Downloads"
import Footer from "./product-page/Footer"
import Typography from '@mui/material/Typography';

function App() {
    return (
            <div id="test">
                <NavBar />
                <Splash />
                <Features />
                <Divider />
                <Downloads />
                <Credits />
                <Footer />
            </div>
    )
}

export default App