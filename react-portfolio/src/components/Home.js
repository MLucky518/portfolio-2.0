import React from 'react'
import About from "../components/About";
import MyInfo from "../components/MyInfo";
import AboutTransition from './AboutTransition';
import { aboutInfo } from "./util"

function Home() {
    return (
        <div className = "top-content">
            <MyInfo/>
            <AboutTransition/>
        </div>
    )
}

export default Home
