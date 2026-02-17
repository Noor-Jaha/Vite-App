<<<<<<< HEAD
  

  const App = () => {
    return (
      <div className="App">
        <h1>Welcome to the E-Commerce App</h1>
      </div>
    )
  }


  export default App;
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Country from "./pages/Country"
import AppLayout from "./components/Layout/AppLayout"
import ErrorPage from "./pages/ErrorPage"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'country',
        element: <Country />,
      },
    ],

  }
],
  {
    basename: "/Vite-App",
  }
)


const App = () => {
  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App
>>>>>>> 4412fc5328ac86e993606191c0c0c03d070e824c
