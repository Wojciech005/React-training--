import React from 'react'

const Task = (props) => {



    // const {text} = props.task


    return(
    <div className="task" >
    <h1>{props.text} <button className="delete" onClick={() => props.delete()}>delete</button>  </h1>
    </div>
    )
    
}

export default Task;

