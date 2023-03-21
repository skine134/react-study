import React from "react"
import { useState, useEffect } from 'react'
import AddButton from "../components/AddButton";
import Title from "../components/Title";
import Search from "../components/Search";
import ToDoList from "../components/ToDoList";
function TodoManager() {
  let currentText = ""
  const textChangeEvent = (text) => {
    currentText = text
    disableEvent(text.length>0)
  };
  const buttonClickCallback = () => {
    todoArrayEvent((currentArray)=>{
      const newArray = [currentText,...currentArray].reverse()
      setAmountEvent(newArray.length)
      return newArray
    })
    setTextEvent("")
    
  };
  
  let setAmountEvent = null
  const getTitleAmountEvent = (setAmount) => {
    setAmountEvent = setAmount
  };

  let disableEvent = null
  const getAddButtonDisableEvent = (setDisable) => {
    disableEvent = setDisable
  };

  let setTextEvent = null
  const getTextEvent = (setTodoTextEvent) => {
    setTextEvent = setTodoTextEvent
  };

  let todoArrayEvent = null
  const getToDoArrayEvent = (arrayEvent)=>{
    todoArrayEvent = arrayEvent
  };

  return (
    <div className="TodoManager">
      <Title getTitleAmountEvent={getTitleAmountEvent} />
      <Search textChangeEvent={textChangeEvent} getTextChangeEvent={getTextEvent}/>
      <AddButton clickCallback={buttonClickCallback} getAddButtonDisableEvent={getAddButtonDisableEvent} />
      <ToDoList getToDoArrayEvent={getToDoArrayEvent} />
    </div>
  );
}

export default TodoManager;