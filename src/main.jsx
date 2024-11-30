import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPages from './pages/MainPages.jsx';
import Home from './pages/Home.jsx';
import AddCoffee from './pages/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages></MainPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
