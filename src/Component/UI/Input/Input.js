
import React from "react";
import styles from './Input.css';

const  input = (props) => {

    let  inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className="InputElement" {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className="InputElement" {...props} />;
            break;
        default:
                inputElement = <input className="InputElement" {...props} />;

    }
    return (
        <div className="Input">
            <label className="label">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;