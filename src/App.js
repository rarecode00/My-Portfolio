import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Interest from './components/Interest'
import Skills from './components/Skills'

const App = () => {
  const Routes = createBrowserRouter([
     {
       path: '/',
       element: <About/>
     },
     {
       path: '/education',
       element: <Education/>
     },
     {
       path: '/experience', 
       element: <Experience/>
     },
     {
       path: '/interest',
       element: <Interest/>
     },
     {
       path: '/skills',
       element: <Skills/>
     }
  ])
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App