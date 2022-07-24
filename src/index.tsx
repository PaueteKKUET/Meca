import React from 'react';
import {createRoot} from "react-dom/client";

import {Keyboard} from "./keyboard/Keyboard";

// @ts-ignore
const root = createRoot(document.getElementById('root'));

class Application extends React.Component {
    render() {
        return (
            <div id="contentContainer">
                <div className="sectionWrapper">
                    <Keyboard key={"keyboard"} />
                </div>
                <div className="sectionWrapper">

                </div>
            </div>
        )
    }
}

console.log("uwu")
root.render(<Application />);