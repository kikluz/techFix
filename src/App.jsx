import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Home,
  Services,
  BookRepair,
  RepairStatus,
  About,
  Contact,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "book-repair",
        element: <BookRepair />,
      },
      {
        path: "repair-status",
        element: <RepairStatus />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
