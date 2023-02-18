import React, { useState } from "react";
import Button from "../button/Button";

import classes from "./Modal.module.css"

const Modal = ({ visible, setVisible, addTask }) => {
    const {modal, active, modalContent, error, input} = classes

    const [task, setTask] = useState('')
    const [err, setErr] = useState('')

    const handleAddTask = () =>{
        if(task.length){
            addTask(task)
            setTask('')
        }else{
            setErr('Task should contain as min 1 symbol')
        }
    }

    const rootClasses = `${modal} ${visible ? active : ''}`;

    return (
        <div className={rootClasses} onClick={() => setVisible(false)}>
            <div className={modalContent} onClick={(e) => e.stopPropagation()}>
                {
                    err && <div className={error} onClick={() =>setErr('')} >{err}</div>
                    
                }
                <input className={input} type="text"
                    placeholder="Task"
                    value={task}
                    onChange={e => setTask(e.target.value)
                    } />
                <Button onClick={handleAddTask} isAbsolute={false}>Add Task</Button>
            </div>
        </div>
    )
}


export default Modal;