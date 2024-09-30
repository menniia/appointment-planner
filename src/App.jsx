import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./components/root/Root"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>

    </Route>
  ))



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
