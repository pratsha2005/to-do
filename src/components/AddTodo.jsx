// src/components/AddTodo.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddTodo() {
  const navigate = useNavigate()
  const handler = (e) => {
    e.preventDefault()
    navigate("/add-todo")
  }
  return (
    <div>
      <button 
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 bg-[#023E8A] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:bg-blue-700 z-50"
        onClick={handler}
      >
        <h2 className="text-sm sm:text-base">Add Todo</h2>
      </button>
    </div>
  )
}

export default AddTodo