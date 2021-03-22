import React, { useState } from "react"

function UseStateEx1() {
    const [ value ] = useState("Yes")
    console.log(value)
    
    const person = {
        name: "Shilpa",
        designation: "analyst"
    }
    
    const { name, designation } = person
    
    return (
        <div>
            <h1>Is state important to know? {value}</h1>
            <h1>{name}-{designation}</h1>
        </div>
    )
}
export default UseStateEx1