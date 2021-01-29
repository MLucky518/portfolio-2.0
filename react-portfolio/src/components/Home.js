import React from 'react'
import About from "../components/About";
import MyInfo from "../components/MyInfo";
import { aboutInfo } from "./util"

function Home() {
    return (
        <div className = "top-content">
            <MyInfo/>
            <About info={aboutInfo} header={"Hello World,"}/>
        </div>
    )
}

export default Home
