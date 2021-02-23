import React from 'react'
import About from "../components/About.jsx";
import MyInfo from "../components/MyInfo";
import AboutTransition from './AboutTransition';
import { aboutInfo } from "./util"

function Home() {
    return (
        <div className = "home">
            <MyInfo/>
            <AboutTransition/>
        </div>
    )
}

export default Home
