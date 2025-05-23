import React from 'react'
import { LuCircleX } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../stateManagement/todoSlice';
function Todo({
  title, task, id, completed
}) {
  const dispatch = useDispatch()
  const deleteHandler = (e) => {
    e.preventDefault()
    dispatch(deleteTodo(id))
  }
  const toggleHandler = (e) => {
    e.preventDefault()
    dispatch(toggleTodo(id))
  }
  return (
    <div key={id} className="w-30vw h-40 bg-[#CAF0F8] shadow-md rounded-2xl p-4 border border-gray-200 m-10">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-1 text-sm">{task}</p>
        </div>
        <div className="flex flex-col ">
          <button onClick={deleteHandler} className="p-2 rounded-full hover:bg-gray-100 mb-1" aria-label="Delete">
            <pre className="flex items-center space-x-4">DeleteTask <LuCircleX /></pre>
          </button>
          <button onClick={deleteHandler} className="p-2 rounded-full hover:bg-gray-100 mb-1" aria-label="Update">
            <pre className="flex items-center space-x-4">UpdateTask <LuCircleX /></pre>
          </button>
          <button onClick={toggleHandler} className="p-2 rounded-full hover:bg-gray-100 mb-1" aria-label="ToggleComplete">
            <pre className="flex items-center space-x-4">TaskCompleted <LuCircleX /></pre>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo