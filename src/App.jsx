import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'

import AppLayout from "./Component/Layout/AppLayout"
import Home from './Pages/Home'
import About from './Pages/About'
import Country from './Pages/Country'
import Contact from './Pages/Contact'
import Error from "./Pages/Error"
import CountryDetails from "./Component/Layout/CountryDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  )
}

export default App
