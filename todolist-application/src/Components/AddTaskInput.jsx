import React, { Component } from "react"

class AddTaskInput extends Component {
  state = {
    text: "",
  }

  onTextChange(event) {
    let text = event.target.value
    this.setState({ text: text })
  }
  handleAdd = () => {
    this.props.onAddTask(this.state.text)
    this.setState({ text: "" })
  }
  render() {
    return (
      <div className="task-input-contanier">
        <input
          type="text"
          onChange={(e) => {
            this.onTextChange(e)
          }}
          value={this.state.text}
          onKeyDown={(e) => {
            e.keyCode === 13 && this.handleAdd()
          }}
        />
        <button onClick={this.handleAdd}>ADD TASK</button>
      </div>
    )
  }
}

export default AddTaskInput
