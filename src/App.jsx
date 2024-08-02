import Transaction from "./pages/Transaction/Transaction"
import Dashboard from "./pages/Dashboard/Dashboard"
import Support from "./pages/Support/Support"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/support",
      element: <Support />,
    },
  ]);
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
