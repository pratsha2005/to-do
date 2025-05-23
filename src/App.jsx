import AddTodo from "./components/AddTodo"
import Dialog from "./components/Dialog"
import PageTitle from "./components/PageTitle"
import Todo from "./components/Todo"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, updateTodo, toggleTodo } from "./stateManagement/todoSlice.js"

function App() {
  const todos = useSelector(state => state.todos)
  useEffect(() => {
    window.location.reload();
  }, [todos])
  return (
    <>
      <PageTitle/>


      {/* TODOS */}
      <div className="w-full h-[55vh] grid grid-cols-3 grid-rows-3 gap-4 p-4 bg-gray-100">
        {todos.map((todo) => (
          <Todo id={todo.id} title={todo.title} task={todo.task} completed={todo.completed}/>
        ))}
      </div>


      <AddTodo/>
    </>
  )
}

export default App
