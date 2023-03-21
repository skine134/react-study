import React from "react"
import { useState, useEffect } from 'react'

const ToDoList = ({ getToDoArrayEvent }) => {
    const [todoArray, setTodoArray] = useState([]);
    useEffect(()=>{
        getToDoArrayEvent(setTodoArray);
    },[]);
    return <ul>{todoArray.map((item,index)=>(<li key={index}>{item}</li>))}</ul>
}

export default ToDoList;