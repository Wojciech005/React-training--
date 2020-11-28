import React from 'react'
import Task from './Task'

const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={task.id} text={task.text} delete={props.delete}/> )


    return(
        <div>

            <p>{tasks}</p>
            
            
        </div>
    )
}

export default TaskList