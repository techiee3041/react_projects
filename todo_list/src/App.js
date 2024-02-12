import { useState } from "react"
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([])
  const [neTask, setNewTask] = useState("")

  const handleNewTask = (event) => {
    setNewTask(event.target.value)
  }

  const addTodo = () => {
    const task = {
      id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
      taskName: neTask
    }
    const newTodoList = [...todoList, task]
    setTodoList(newTodoList)
  }
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== id
    }))
  }
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" name="" id="" onChange={handleNewTask} />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map(task => {
          return <div>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>x</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
