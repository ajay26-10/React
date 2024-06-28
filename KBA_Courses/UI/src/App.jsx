import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import React from 'react'
import HomePage from "./pages/HomePage"
import Courses from "./pages/Courses"
import NotFound from "./pages/NotFound"
import Layout from "./pagelayout/Layout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element = {<HomePage/>}/>
      <Route path="/courses" element = {<Courses/>}/>
      <Route path="/*" element = {<NotFound/>}/>
      {/* <Route path="/" element = {<Contact Us/>}/>
      <Route path="/" element = {<Add Course/>}/> */}

</Route>
      </>
    )

  )

  return (
    <>
    <RouterProvider router = {router}/>
    </>
    
  )
}

export default App
