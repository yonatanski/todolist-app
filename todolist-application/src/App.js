import React from "react"
import "./App.css"
import AddTaskInput from "./Components/AddTaskInput"

import Header from "./Components/Header"
import Task from "./Components/Task"

class App extends React.Component {
  state = {
    tasks: this.props.tasks,
  }
  onAddTask = (text) => {
    let newTask = {
      text: text,
      osDone: false,
      id: Date.now(),
    }
    this.setState((state) => {
      return { tasks: [...state.tasks, newTask] }
    })
  }
  onRemoveTask = (id) => {
    this.setState((state) => {
      let updatedTasks = state.tasks.filter((task) => task.id !== id)
      return { tasks: updatedTasks }
    })
  }
  oneIsDoneUpdate = (id, isDone) => {
    this.setState((state) => {
      let updatedTasks = state.tasks.map((task) => {
        if (task.id == id) {
          return { text: task.text, id: task.id, isDone }
        } else {
          return task
        }
      })
    })
  }

  render() {
    let sortedTasks = this.state.tasks
    sortedTasks.sort((a, b) => (a.isDone !== b.isDone && a.isDone === false ? -1 : 1))
    return (
      <div className="app">
        <Header />
        <AddTaskInput onAddTask={this.onAddTask} />
        <div className="task-container">
          {sortedTasks.map((task) => {
            return <Task key={task.id} task={task} onRemoveTask={this.onRemoveTask} oneIsDoneUpdate={this.oneIsDoneUpdate} />
          })}
        </div>
      </div>
    )
  }
}

export default App
