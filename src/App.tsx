import React from "react"
import Homepage from './product-page/Homepage'
import NavBar from './common/Navbar'
import {BrowserRouter as Router, Route, Link as RouterLink, Routes} from 'react-router-dom';
import Documentation from "./documentation/Documentation";
import Demo from "./demo/Demo";

export default function App() {
    return (
            <div id="test">
             <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/index.html' element={<Homepage/>}/>
                    <Route path="/documentation" element={<Documentation/>}/>
                    <Route path="/demo" element={<Demo/>}/>
                </Routes>
            </Router>
            </div>
    )
}

