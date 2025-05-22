import React from 'react'

function Todo(
    // title, task, id, completed, onDelete, onEdit, onComplete
) {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-2xl p-4 border border-gray-200 m-10">
  <div className="flex justify-between items-start">
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Card Title</h3>
      <p className="text-gray-600 mt-1 text-sm">This is a short description of the card content. You can put anything here.</p>
    </div>
    <div className="flex space-x-2">
      <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600" aria-label="Edit">
        <i data-feather="edit" className="w-4 h-4"></i>
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100 text-red-500" aria-label="Delete">
        <i data-feather="trash-2" className="w-4 h-4"></i>
      </button>
    </div>
  </div>
</div>
  )
}

export default Todo