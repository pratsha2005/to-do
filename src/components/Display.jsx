import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import Todo from './Todo';

function Display() {
  const todos = useSelector(state => state.todos)
  return (
    <>
      <div className="pt-36 sm:pt-44 pb-20 px-2 sm:px-4 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {todos.map((todo) => (
            <Todo 
              key={todo.id} 
              id={todo.id} 
              title={todo.title} 
              task={todo.task} 
              completed={todo.completed}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Display