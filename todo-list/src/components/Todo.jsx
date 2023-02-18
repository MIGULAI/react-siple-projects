import React, { useEffect, useState } from "react";
import Button from "./button/Button";

import Element from "./element/Element";
import Modal from "./modal/Modal";
import classes from "./Todo.module.css"


const Todo = () => {

    const { list__wrapper, item } = classes

    const [list, setList] = useState([])
    const [checkedList, setCheckedList] = useState([])
    const [modal, setModal] = useState(false)

    const deleteItem = (i) => {
        setList(list => {
            const newList = [...list]
            newList.splice(i, 1)
            return newList
        })
        setCheckedList(checkedList => {
            const newCheckedList = [...checkedList]
            newCheckedList.splice(i, 1)
            return newCheckedList
        })
    }

    const addTask = (task) => {
        setList([...list, task])
        setCheckedList([...checkedList, false])
        setModal(false)
    }

    useEffect(() => {
        document.title = "Todo List";
    }, [])

    return (
        <div className={list__wrapper}>
            <Modal visible={modal} setVisible={setModal} addTask={addTask} />
            {
                !list.length
                    ? <p className={item} >Deals not found</p>
                    : <>
                        {
                            list.map((e, i) =>
                                <Element
                                    key={i}
                                    setDelete={deleteItem}
                                    index={i}
                                    setCheckedList={setCheckedList}
                                    isCheckedList={checkedList}
                                >{e}</Element>
                            )
                        }
                    </>
            }

            <Button onClick={() => setModal(true)} >New Task</Button>
        </div>
    );
}

export default Todo;