import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const tasks = [
  {
    id: 1,
    text: "Learn Jasvascript",
    isDone: false,
  },
  {
    id: 2,
    text: "Learn React",
    isDone: false,
  },
  {
    id: 3,
    text: "Install Visaual Studio",
    isDone: false,
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={tasks} />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
