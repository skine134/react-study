import React, { useEffect } from "react"
import { useState } from "react"

const AddButton = ({ clickCallback, getAddButtonDisableEvent }) => {
    const [eventDisable, setEventDisable] = useState(false);
    useEffect(() => {
        getAddButtonDisableEvent(setEventDisable)
    }, []);
    return <button onClick={eventDisable ? clickCallback : null}>Add To Do</button>
}

export default AddButton;