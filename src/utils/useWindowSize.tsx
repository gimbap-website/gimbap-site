import React, { useState, useEffect } from 'react';

export default function useWindowSize(){
    const isSRR = typeof window !== "undefined";
    const [windowSize,setWindowSize] = useState({width: isSRR ? 1200: window.innerWidth, height: isSRR ? 800 : window.innerHeight });

    useEffect(()=>{
        window.addEventListener("resize", () => setWindowSize({width: window.innerWidth, height: window.innerHeight}));

        return () => {
            window.removeEventListener("resize", () => setWindowSize({width: window.innerWidth, height: window.innerHeight}));
        }
        
    },[]);

    return windowSize;
}