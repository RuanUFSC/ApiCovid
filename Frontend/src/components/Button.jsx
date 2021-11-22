import React from "react";
import './Button.css'

const Button = ({ children, onClick, id = null }) => {
    return (
        <button type='button' className='button-component' onClick={onClick} id={id}>
            {children}
        </button>
    );
}

export default Button;