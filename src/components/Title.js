import React from "react"
import { useState, useEffect } from 'react'

const Title = ({ defaultAmount = 0, getTitleAmountEvent }) => {
    const [amount, setAmount] = useState(defaultAmount);
    useEffect(() => {
        getTitleAmountEvent(setAmount)
    }, [])
    useEffect(() => {
        setAmount(amount);
    }, [amount]);
    return <h1 >My To Dos({amount})</h1>
}

export default Title;