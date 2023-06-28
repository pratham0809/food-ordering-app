import React from "react"
import ReactDOM from "react-dom"


const Heading = ()=>{
    return (
        <>
            <h1>Hello World</h1>
            <h2>Why React</h2>
        </>
    )
} 








const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Heading/>)