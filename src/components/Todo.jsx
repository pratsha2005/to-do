import React from 'react'
import { LuCircle, LuCircleX } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../stateManagement/todoSlice';
import { useNavigate } from 'react-router-dom';

function Todo({ title, task, id, completed }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const deleteHandler = (e) => {
    e.preventDefault()
    dispatch(deleteTodo(id))
  }
  
  const toggleHandler = (e) => {
    e.preventDefault()
    dispatch(toggleTodo(id))
  }
  
  const updateHandler = (e) => {
    e.preventDefault()
    navigate(`/update-todo/${id}`)
  }
  
  return (
    <div className="bg-[#CAF0F8] shadow-md rounded-2xl p-3 sm:p-4 border border-gray-200 h-fit">
      <div className="flex flex-col space-y-3">
        {/* Content Section */}
        <div className="flex-1">
          <h3 className={`${completed ? "line-through text-gray-500" : "text-gray-800"} text-lg sm:text-xl font-semibold break-words`}>
            {title}
          </h3>
          <p className={`${completed ? "line-through text-gray-400" : "text-gray-600"} mt-1 text-sm break-words`}>
            {task}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-end">
          <button 
            onClick={toggleHandler} 
            className={`p-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              completed 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
            aria-label={completed ? "Mark incomplete" : "Mark complete"}
          >
            <span className="flex items-center gap-1">
              <MdFileDownloadDone size={14} />
              <span className="hidden sm:inline">
                {completed ? 'Undo' : 'Done'}
              </span>
            </span>
          </button>
          
          <button 
            onClick={updateHandler} 
            className="p-2 bg-yellow-100 text-yellow-700 hover:bg-yellow-200 rounded-lg text-xs sm:text-sm font-medium transition-colors"
            aria-label="Update task"
          >
            <span className="flex items-center gap-1">
              <FaRegEdit size={14} />
              <span className="hidden sm:inline">Edit</span>
            </span>
          </button>
          
          <button 
            onClick={deleteHandler} 
            className="p-2 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg text-xs sm:text-sm font-medium transition-colors"
            aria-label="Delete task"
          >
            <span className="flex items-center gap-1">
              <LuCircleX size={14} />
              <span className="hidden sm:inline">Delete</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo