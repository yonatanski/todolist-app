import React from "react"

function Task(props) {
  let { isDone, text, id } = props.task
  let extraClass = isDone ? " Done" : ""

  return (
    <div className={"task" + extraClass}>
      <input
        type="checkbox"
        checked={isDone}
        pnChange={(e) => {
          props.oneIsDoneUpdate(id, e.target.checked)
        }}
      />
      <span className="task-text">{text}</span>
      <button className="remove-btn" onClick={() => props.onRemoveTask(id)}>
        Remove
      </button>
    </div>
  )
}

export default Task
