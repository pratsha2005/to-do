import AddTodo from "./components/AddTodo"
import Dialog from "./components/Dialog"
import PageTitle from "./components/PageTitle"
import Todo from "./components/Todo"

function App() {
  
  return (
    <>
      <PageTitle/>
      <Todo/>
      {/* <Dialog/> */}
      <AddTodo/>
    </>
  )
}

export default App
