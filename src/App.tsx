import React from "react"
import Credits from "./product-page/Credits"
import NavBar from "./common/Navbar"
import Features from "./product-page/Features"
import Splash from "./product-page/Splash"
import Divider from "./product-page/Divider"
import Downloads from "./product-page/Downloads"

function App() {
    return (
        <div>
        <NavBar />
        <Splash />
        <Features />
        <Divider />
        <Downloads />
        <Credits />
        <h2>Welcome to React Hell</h2>
        <h3>Date : {new Date().toDateString()}</h3>
    </div>
    )
}

export default App