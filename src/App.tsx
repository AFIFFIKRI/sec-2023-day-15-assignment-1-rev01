import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Job from "./pages/Job";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/job/:id",
      element: <Job />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
