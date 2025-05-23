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
        className="fixed bottom-10 right-10 bg-[#023E8A] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
        onClick={handler}
        >
            <h2>Add Todo</h2>
        </button>
    </div>
  )
}

export default AddTodo