import React from 'react'

function AddTodo() {
  return (
    <div>
        <button 
        class="fixed bottom-10 right-10 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
        onClick={() => {
            // TODO
        }}
        >
            <h2>Add Todo</h2>
        </button>
    </div>
  )
}

export default AddTodo