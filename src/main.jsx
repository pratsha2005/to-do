import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store, persistor } from './stateManagement/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Todo from './components/Todo.jsx'
import Dialog from './components/Dialog.jsx'
import Display from './components/Display.jsx'
import { PersistGate } from 'redux-persist/integration/react'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Display/>}/>
      <Route path='add-todo' element = {<Dialog/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <RouterProvider router={router}/>
  </Provider>
)
