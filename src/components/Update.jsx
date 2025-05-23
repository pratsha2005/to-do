import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {updateTodo} from '../stateManagement/todoSlice.js'
function Update() {
    const {todoId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState({
        id: todoId,
        title: '',
        task: '',
        completed: false
    })
    console.log(input.id)
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateTodo(input))
        setInput({
            id: null,
            title: '',
            task: '',
            completed: false
        })
        navigate('/')
    }
  return (

    <div className="fixed inset-0 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Update Todo</h2>
        
        <form>
        
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="password">Description</label>
            <input onChange={(e) => (setInput(prev => ({...prev, task: e.target.value})))} id="password" type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your task"/>
        </div>
        
        <div className="flex justify-end space-x-2 mt-6">
            <button onClick={handleUpdate} type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Task</button>
        </div>
        </form>
    </div>
    </div>
    
  )
}

export default Update