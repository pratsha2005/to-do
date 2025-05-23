import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import Todo from './Todo';
function Display() {
    const todos = useSelector(state => state.todos)
    console.log(todos)
  return (
    <>
    <div className="mt-[25vh] w-full h-[55vh] grid grid-cols-3 gap-4 p-4">
        {todos.map((todo) => (
          <Todo id={todo.id} title={todo.title} task={todo.task} completed={todo.completed}/>
        ))}
    </div>
    </>
  )
}

export default Display