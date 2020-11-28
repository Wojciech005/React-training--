import React, { Component } from 'react'

 class AddTask extends Component {

    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value
        this.setState({
            text: text,
            value: ''
        })
    }   

  

    handleClick = (props) => {
        const {text} = this.state

        // const tasks = props.tasks.
        if(text.length > 2) {
        const add = this.props.add(text)
        console.log(add + 'test zmiennej add')
        if(add === true || text.length > 2) {
            
            this.setState({
                text: ''
            })
        }
    }
    }

    render() {
        return (
            <div className="input" >
               
                <input type="text" onChange = {this.handleChange} value={this.state.text}/>
                <button className="main" onClick = {this.handleClick}>Add task</button>
        
            </div>
        )
    }
}


export default AddTask;