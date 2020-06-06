
import React from "react";
import styles from './Input.css';

const  input = (props) => {

    let  inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className="InputElement"
                                  {...props.elementConfig}
                                  value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea className="InputElement"
                                     {...props.elementConfig}
                                     value={props.value} />;
            break;
        case ('select'):
            inputElement =
                (<select className="InputElement"
                                     {...props.elementConfig}
                                   value={props.value} >
                    {props.elementConfig.option.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>);
            break;
        default:
                inputElement = <input className="InputElement"
                                      {...props.elementConfig}
                                      value={props.value} />;

    }
    return (
        <div className="Input">
            <label className="label">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;