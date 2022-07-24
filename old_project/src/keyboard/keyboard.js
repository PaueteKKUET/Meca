import React from "react";
import './Keyboard.css';

import {row1, row2, row3, row4, row5} from "./es_ES-keys";

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyValue: props.keyValue,
            shiftValue: props.shiftValue,
            altGrValue: props.altGrValue,

            keySize: props.keySize ?? '0',
        }
    }

    hasShift() {
        return this.state.shiftValue !== undefined;
    }

    hasAltGr() {
        return this.state.altGrValue !== undefined;
    }

    render() {
        if (this.hasShift() && this.hasAltGr()) {
            return (
                <div className={'keyWrapper hasShift hasAlt keySize' + this.state.keySize}>
                    <p className='key shiftValue'>
                        {this.state.shiftValue}
                    </p>
                    <p className='key keyValue'>
                        {this.state.keyValue}
                    </p>
                    <p className='key altGrValue'>
                        {this.state.altGrValue}
                    </p>
                </div>
            )
        } else if (this.hasShift()) {

            return (
                <div className={'keyWrapper hasShift keySize' + this.state.keySize}>
                    <p className='key shiftValue'>
                        {this.state.shiftValue}
                    </p>
                    <p className='key keyValue'>
                        {this.state.keyValue}
                    </p>
                </div>
            )
        } else {
            return (
                <div className={'keyWrapper keySize' + this.state.keySize}>
                    <p className='key keyValue'>
                        {this.state.keyValue}
                    </p>
                </div>
            )
        }
    }
}



export const Keyboard = () => {


    let row1Keys = [];
    row1.forEach(row => {
        row1Keys.push(
            <Key
                keyValue={row[1]}
                shiftValue={row[2]}
                altGrValue={row[3]}

                keySize={row[0]}
            />
        );
    });

    let row2Keys = [];
    row2.forEach(row => {
        row2Keys.push(
            <Key
                keyValue={row[1]}
                shiftValue={row[2]}
                altGrValue={row[3]}

                keySize={row[0]}
            />
        );
    });

    let row3Keys = [];
    row3.forEach(row => {
        row3Keys.push(
            <Key
                keyValue={row[1]}
                shiftValue={row[2]}
                altGrValue={row[3]}

                keySize={row[0]}
            />
        );
    });

    let row4Keys = [];
    row4.forEach(row => {
        row4Keys.push(
            <Key
                keyValue={row[1]}
                shiftValue={row[2]}
                altGrValue={row[3]}

                keySize={row[0]}
            />
        );
    });

    let row5Keys = [];
    row5.forEach(row => {
        row5Keys.push(
            <Key
                keyValue={row[1]}
                shiftValue={row[2]}
                altGrValue={row[3]}

                keySize={row[0]}
            />
        );
    });

    return (
        <div className='keyboard'>
            <div className='row' id='row1'>
                {row1Keys}
            </div>
            <div className='row' id='row2'>
                {row2Keys}
            </div>
            <div className='row' id='row3'>
                {row3Keys}
            </div>
            <div className='row' id='row4'>
                {row4Keys}
            </div>
            <div className='row' id='row5'>
                {row5Keys}
            </div>
        </div>

    );
}