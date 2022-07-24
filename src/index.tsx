import React from 'react';

import "./index.css";

import {createRoot} from "react-dom/client";
import {Keyboard} from "./keyboard/Keyboard";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not present");
const root = createRoot(rootElement);

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