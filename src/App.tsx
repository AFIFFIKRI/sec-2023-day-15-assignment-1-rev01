import Home from "./pages/Home";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Job from "./pages/Job";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/sec-2023-day-15-assignment-1-rev01/",
      element: <Home />,
    },
    {
      path: "/sec-2023-day-15-assignment-1-rev01/job/:id",
      element: <Job />,
    },
  ]);

  return <RouterProvider router={router} />;

}

export default App;
