import React from "react";

import classes from "./Element.module.css"

const Element = ({ setDelete, setCheckedList, index = 0, isCheckedList = [false], children = "" }) => {

    const { item, input, button, label, line } = classes

    const deleteItem = () => setDelete(index)

    const changeStatus = () => setCheckedList(isCheckedList => {
        let newCheckedList = [...isCheckedList]
        newCheckedList[index] = !isCheckedList[index]
        return newCheckedList
    })


    return (
        <div className={item}>
            <input
                className={input}
                onChange={changeStatus}
                type="checkbox"
                checked={isCheckedList[index]}
                id={`chechbox-${index}`} />
            <label className={isCheckedList[index] ? line : label} htmlFor={`chechbox-${index}`}>{children}</label>
            <span onClick={deleteItem} className={button}><ion-icon name="trash-outline"></ion-icon></span>
        </div>
    )
}

Element.defaultProps = {
    index: 0,
    children: "",
    isCheckedList: [false]
}

export default Element