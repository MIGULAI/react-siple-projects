import React from "react";

import classes from "./Button.module.css"

const Button = ({ children = "",  isAbsolute = true, ...props}) => {
    const { buttonWrapper, buttonContainer, absolute } = classes

    const buttonPosition = [buttonWrapper]

    if(isAbsolute) buttonPosition.push(absolute)

    return (
        <div className={buttonPosition.join(' ')}>
            <div className={buttonContainer} {...props}>
                <ion-icon name="add-outline"></ion-icon>
                <span>{children}</span>
            </div>
        </div>
    );
}

Button.defaultProps = {
    children: "",
    isAbsolute: true
}

export default Button