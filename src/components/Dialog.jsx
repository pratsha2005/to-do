import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../stateManagement/todoSlice';
import { useNavigate } from 'react-router-dom';

function Dialog() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [input, setInput] = useState({
    id: null,
    title: "",
    task: "",
    completed: false
  })
  
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.title.trim() && input.task.trim()) {
      dispatch(addTodo(input));
      setInput({
        id: Date.now(),
        title: "",
        task: "",
        completed: false
      });
      navigate('/')
    }
  }
  
  const cancelHandler = () => {
    navigate('/')
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Add Todo</h2>
        
        <form onSubmit={addTodoHandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
            <input 
              onChange={(e) => setInput(prev => ({...prev, title: e.target.value}))} 
              id="title" 
              type="text" 
              value={input.title}
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" 
              placeholder="Enter title of the task"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
            <textarea 
              onChange={(e) => setInput(prev => ({...prev, task: e.target.value}))} 
              id="description" 
              value={input.task}
              rows="3"
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none" 
              placeholder="Enter your task description"
              required
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
            <button 
              type="button"
              onClick={cancelHandler}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm sm:text-base"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm sm:text-base"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dialog