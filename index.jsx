import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home, {loader as homePageLoader} from "./pages/Home"
import About  from "./pages/About"
import Listings from './pages/Listings';
import NotFound from "./pages/NotFound"
import Admin from './pages/admin';
import Layout from "./components/Layout"



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} loader={homePageLoader} />
    <Route path="about" element={<About/>}  />
    <Route path="listings" element={<Listings/>}>
      <Route path="sell" element={<h1>Sell</h1>}/>
      <Route path="charter" element={<h1>charter</h1>}/>
    </Route>
    <Route path="admin" element={<Admin/>}/>
    <Route path="*" element={<NotFound/>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);