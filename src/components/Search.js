import React from "react"
import { useState, useEffect } from 'react'

const Search = ({ textChangeEvent = (text) => { } ,getTextChangeEvent}) => {
    const [todoText, setTodoText] = useState("")
    useEffect(()=>{
        getTextChangeEvent(setTodoText)
    },[])
    const onChange=(event)=>{
        setTodoText(event.target.value)
        textChangeEvent(event.target.value)
    }
    return <input value={todoText} type="text" placeholder="Write youre to do..." onChange={onChange}></input>
}

export default Search;