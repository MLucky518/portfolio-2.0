import React, { useState } from "react";
import { Button, Divider, Image, Transition } from "semantic-ui-react";
import About from "./About";
import { aboutInfo } from "./util";

export default function AboutTransition() {
    const [state, setState] = useState(false);
    const toggleVisibility = () => {
        setState(!state);
    };

    return (
        <div className="about-contents">
            <Button
                content={state ? "X" : "About Me"}
                onClick={toggleVisibility}
                className={"about-button"}
            />
            <Divider hidden />
            <Transition
                visible={state}
                animation="scale"
                duration={500}
                unmountOnHide={true}
            >
                <About info={aboutInfo} header={"Hello World,"} />
            </Transition>
        </div>
    );
}
