import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import User from "./components/User";
import Main from "./layout/Main";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <User></User> },
        { path: "/addUser", element: <AddUser></AddUser> },
        {
          path: "/userEdit/:id",
          element: <UpdateUser />,
          loader: ({ params }) =>
            fetch(`https://user-mamagement-system-server.vercel.app/users/${params.id}`),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
