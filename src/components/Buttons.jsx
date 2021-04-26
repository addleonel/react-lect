import React from 'react';


const Buttons = props => {
    const { buttonText1, buttonText2, buttonText3 } = props;
    return (
        <div>
            <button type="button">{buttonText1}</button>
            <button type="button">{buttonText2}</button>
            <button type="button">{buttonText3}</button>
        </div>
    )
}


export default Buttons;