import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { NotFound } from './components/NotFound/NotFound';
import { LayOut } from './components/LayOut/LayOut';


const route = createBrowserRouter([
  {
    element: <LayOut/>, children:[
      {index: true, element: <Home />},
      {path: "about", element: <About />},
      {path: "portfolio", element: <Portfolio />},
      {path: "contact", element: <Contact />},
      {path: "*", element: <NotFound />},
    ]
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <RouterProvider router={route}></RouterProvider>

    </>
  )
}

export default App
