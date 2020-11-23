import React from 'react';

export const Button = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={props.class}
        >
            {props.children}
        </button>
    );
};

export default Button;