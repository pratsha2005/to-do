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
    dispatch(addTodo(input));
    setInput({
      id: Date.now(),
      title: "",
      task: "",
      completed: false
    });
    navigate('/')
  }
  return (
    <div class="fixed inset-0 flex items-center justify-center z-50">

    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 class="text-2xl font-semibold mb-4">Add Todo</h2>
        
        <form>
        <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="email">Title</label>
            <input onChange={(e) => (setInput(prev => ({...prev, title: e.target.value})))} id="email" type="text" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter title of the task"/>
        </div>
        
        <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="password">Description</label>
            <input onChange={(e) => (setInput(prev => ({...prev, task: e.target.value})))} id="password" type="text" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your task"/>
        </div>
        
        <div class="flex justify-end space-x-2 mt-6">
            <button onClick={addTodoHandler} type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Task</button>
        </div>
        </form>
    </div>
    </div>

  )
}

export default Dialog