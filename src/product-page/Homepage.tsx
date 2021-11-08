
import React from "react"
import Credits from "./Credits"
import Features from "./Features"
import Splash from "./Splash"
import Divider from "./Divider"
import Downloads from "./Downloads"
import Footer from "./Footer"

function Homepage(){
    return(
        <>
            <Splash />
            <Features />
            <Divider />
            <Downloads />
            <Credits />
            <Footer />
        </>
    );
}

export default Homepage;