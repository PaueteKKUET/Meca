import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';

import {Keyboard} from "./keyboardv2/Keyboard";

const root = createRoot(document.getElementById('root'));

class Application extends React.Component {
    render() {
        return (
            <div id="contentContainer">
                <div className="sectionWrapper">
                    <Keyboard />
                </div>
                <div className="sectionWrapper">

                </div>
            </div>
        )
    }
}

root.render(<Application />);