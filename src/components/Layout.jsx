import React from 'react'
import PageTitle from './PageTitle'
import AddTodo from './AddTodo'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <PageTitle/>
        <Outlet/>
        <AddTodo/>
    </>
  )
}

export default Layout