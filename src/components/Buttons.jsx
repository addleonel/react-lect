import React from 'react';
import '../assets/styles/Buttons.css';


const Buttons = props => {
    const { buttonText1, buttonText2, buttonText3 } = props;
    return (
        <div className="click-button__container">
            <button className="click-button__item" type="button">{buttonText1}</button>
            <button className="click-button__item" type="button">{buttonText2}</button>
            <button className="click-button__item" type="button">{buttonText3}</button>
        </div>
    )
}


export default Buttons;